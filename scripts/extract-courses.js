// Parses the existing static course pages into structured JSON so the Next.js
// app can render them from data instead of 22 hand-copied page files.
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const CATEGORIES = {
  sap: 'public/courses/sap',
  technology: 'public/courses/technology',
  combo: 'public/courses/combo',
};

function text($el) {
  return $el.text().trim().replace(/\s+/g, ' ');
}

function extractOne(category, filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  const $ = cheerio.load(html);
  const slug = path.basename(filePath, '.html');

  // JSON-LD blocks (Course / BreadcrumbList / FAQPage)
  const ldBlocks = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    try { ldBlocks.push(JSON.parse($(el).contents().text())); } catch {}
  });
  const graph = ldBlocks.flatMap(b => b['@graph'] || [b]);
  const courseLd = graph.find(g => g['@type'] === 'Course') || {};
  const faqLd = graph.find(g => g['@type'] === 'FAQPage');
  const faq = (faqLd?.mainEntity || []).map(q => ({
    q: q.name,
    a: q.acceptedAnswer?.text || '',
  }));

  const meta = {
    title: $('title').text().trim(),
    description: $('meta[name="description"]').attr('content') || '',
    keywords: $('meta[name="keywords"]').attr('content') || '',
    canonical: $('link[rel="canonical"]').attr('href') || '',
    ogTitle: $('meta[property="og:title"]').attr('content') || '',
    ogDescription: $('meta[property="og:description"]').attr('content') || '',
    twitterTitle: $('meta[name="twitter:title"]').attr('content') || '',
    twitterDescription: $('meta[name="twitter:description"]').attr('content') || '',
  };

  const hero = $('.course-hero').first();
  const eyebrow = text(hero.find('.eyebrow').first());
  const h1 = text(hero.find('h1').first());
  const lead = text(hero.find('p.lead').first());
  const badges = hero.find('.hero-badges .badge').map((_, el) => text($(el))).get();
  const heroFacts = hero.find('.hero-facts li').map((_, el) => {
    const label = text($(el).find('.fact-label')).replace(/^[^\w]*/, '');
    const value = text($(el).find('> span').last());
    return { label, value };
  }).get();
  const heroActions = hero.find('.hero-actions a').map((_, el) => ({
    text: text($(el)), href: $(el).attr('href'),
  })).get();

  const curriculumImg = $('img[src*="/assets/img/curriculum/"]').first();
  const curriculumImage = curriculumImg.attr('src') || '';
  const curriculumImageAlt = curriculumImg.attr('alt') || '';

  // Generic section reader: matches <section> by the eyebrow text inside it
  function sectionByEyebrow(labelText) {
    let found = null;
    $('section').each((_, el) => {
      const eb = text($(el).find('.eyebrow').first());
      if (eb.toLowerCase() === labelText.toLowerCase()) { found = $(el); return false; }
    });
    return found;
  }

  const introSec = sectionByEyebrow('Introduction');
  const intro = {
    heading: text(introSec?.find('h2').first() || $()),
    paragraphs: (introSec?.find('.prose > p, p').get() || []).map(el => text($(el))),
  };

  const demandSec = sectionByEyebrow('Industry Demand');
  const demand = {
    heading: text(demandSec?.find('h2').first() || $()),
    desc: text(demandSec?.find('.sec-desc').first() || $()),
    cards: (demandSec?.find('.card').get() || []).map(el => ({
      icon: text($(el).find('.ico')),
      title: text($(el).find('h3')),
      body: text($(el).find('p')),
    })),
  };

  const careersSec = $('#careers');
  const careers = careersSec.length ? {
    heading: text(careersSec.find('h2').first()),
    desc: text(careersSec.find('.sec-desc').first()),
    rows: careersSec.find('table tbody tr').map((_, tr) => {
      const tds = $(tr).find('td').map((__, td) => text($(td))).get();
      return { role: tds[0], experience: tds[1], salary: tds[2] };
    }).get(),
    footnote: text(careersSec.find('.inner > p.sec-desc').last()),
  } : null;

  const curriculumSec = $('#curriculum');
  const curriculum = {
    heading: text(curriculumSec.find('h2').first()),
    desc: text(curriculumSec.find('.sec-desc').first()),
    modules: curriculumSec.find('details.mod').map((_, el) => ({
      week: text($(el).find('.wk')),
      title: text($(el).find('summary')).replace(text($(el).find('.wk')), '').trim(),
      items: $(el).find('li').map((__, li) => text($(li))).get(),
      open: $(el).attr('open') !== undefined,
    })).get(),
  };

  const toolsSec = sectionByEyebrow('Tools Covered');
  const tools = {
    heading: text(toolsSec?.find('h2').first() || $()),
    tags: (toolsSec?.find('.tag').get() || []).map(el => text($(el))),
  };

  const projectsSec = sectionByEyebrow('Hands-on Projects');
  const projects = {
    heading: text(projectsSec?.find('h2').first() || $()),
    items: (projectsSec?.find('li').get() || []).map(el => $(el).html()?.trim() || ''),
  };

  const eligibilitySec = sectionByEyebrow('Eligibility');
  const eligibility = {
    heading: text(eligibilitySec?.find('h2').first() || $()),
    items: (eligibilitySec?.find('li').get() || []).map(el => $(el).html()?.trim() || ''),
  };

  // Certification + placement cards (the section right after projects/eligibility, has 2 .card)
  let certPlacement = [];
  $('section').each((_, el) => {
    const cards = $(el).find('.card');
    if (cards.length === 2 && !demandSec?.is(el)) {
      const c = cards.map((__, card) => ({
        icon: text($(card).find('.ico')),
        title: text($(card).find('h3')),
        body: text($(card).find('p')),
      })).get();
      if (c.some(x => /certif/i.test(x.title) || /placement/i.test(x.title))) certPlacement = c;
    }
  });

  const relatedSec = sectionByEyebrow('Explore More') || sectionByEyebrow('Explore More SAP');
  const related = (relatedSec?.find('.grid a.card').get() || []).map(el => ({
    href: $(el).attr('href'),
    title: text($(el).find('h3')),
    body: text($(el).find('p')),
  }));

  const enquireSec = $('#enquire');
  const enquire = {
    heading: text(enquireSec.find('h2').first()),
    whatsappHref: enquireSec.find('a[href^="https://wa.me/"]').attr('href') || '',
  };

  return {
    category, slug,
    url: `/courses/${category}/${slug}.html`,
    meta,
    breadcrumbCategoryName: graph.find(g => g['@type'] === 'BreadcrumbList')?.itemListElement?.[1]?.name || '',
    courseName: courseLd.name || h1,
    courseDescription: courseLd.description || '',
    workload: courseLd.hasCourseInstance?.courseWorkload || '',
    eyebrow, h1, lead, badges, heroFacts, heroActions,
    curriculumImage, curriculumImageAlt,
    intro, demand, careers, curriculum, tools, projects, eligibility,
    certPlacement, related, enquire, faq,
  };
}

const all = [];
for (const [category, dir] of Object.entries(CATEGORIES)) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'index.html');
  for (const f of files) {
    all.push(extractOne(category, path.join(dir, f)));
  }
}

const outDir = 'web-next/src/data';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'courses.json'), JSON.stringify(all, null, 2));
console.log(`Extracted ${all.length} courses -> web-next/src/data/courses.json`);
