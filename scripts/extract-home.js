const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('public/index.html', 'utf8');
const $ = cheerio.load(html);
function text(el) { return $(el).text().trim().replace(/\s+/g, ' '); }

// Hero
const hero = {
  eyebrowTag: text('.clean-eyebrow'),
  h1: $('.clean-hero h1').first().html()?.trim() || '',
  subhead: text('.clean-subhead'),
  body: text('.clean-hero > .clean-left > p:not(.clean-subhead)'),
  stats: $('.clean-stat').map((_, el) => ({
    icon: text($(el).find('.clean-stat-icon')),
    value: text($(el).find('strong')),
    label: text($(el).find('span')),
  })).get(),
  assist: {
    title: text('.clean-assist strong'),
    body: text('.clean-assist span'),
    ctaText: text('.clean-assist a'),
    ctaHref: $('.clean-assist a').attr('href') || '',
  },
};

// Feature cards (Why Us)
const features = $('.feat-item').map((_, el) => ({
  icon: text($(el).find('.feat-ico')),
  title: text($(el).find('h3')),
  body: text($(el).find('p')),
})).get();

// Vis cards (Why Choose Placeonix / journey cards)
const visCards = $('.vis-card').map((_, el) => ({
  pill: text($(el).find('.vis-pill')),
  title: text($(el).find('h3')),
  body: text($(el).find('p')),
})).get();

// Process steps
const processSteps = $('.proc-step').map((_, el) => ({
  n: text($(el).find('.proc-n')),
  title: text($(el).find('h4')),
  body: text($(el).find('p')),
})).get();

// Internship
const internship = {
  eyebrow: text('#internship .sec-eyebrow'),
  heading: text('#internship h2'),
  desc: text('#internship .sec-desc'),
  checklist: $('#internship .check-list li').map((_, el) => text(el)).get(),
  rows: $('.int-row').map((_, el) => ({
    icon: text($(el).find('.i-ico')),
    name: text($(el).find('.i-name')),
    sub: text($(el).find('.i-sub')),
    status: text($(el).find('.i-badge')),
    badgeClass: $(el).find('.i-badge').attr('class') || '',
  })).get(),
};

// Testimonials
const testimonials = $('.testi-card').map((_, el) => ({
  quote: text($(el).find('blockquote')),
  initials: text($(el).find('.t-av')),
  avatarClass: $(el).find('.t-av').attr('class') || '',
  name: text($(el).find('.t-name')),
  role: text($(el).find('.t-role')),
})).get();

// Trust stats
const trustStats = $('.trust-stat').map((_, el) => ({
  num: text($(el).find('.trust-stat-num')),
  label: text($(el).find('.trust-stat-lbl')),
})).get();

// FAQ
const faq = $('#faq .faq-item').map((_, el) => ({
  q: text($(el).find('summary')),
  a: text($(el).find('p')),
})).get();

// Contact
const contact = {
  heading: text('#contact h2'),
  desc: text('#contact .sec-desc'),
  address: $('#contact .c-item a[href*="google.com/maps"]').text().trim(),
  addressHref: $('#contact .c-item a[href*="google.com/maps"]').attr('href') || '',
  hours: text('#contact .c-item:last-child span'),
};

const out = { hero, features, visCards, processSteps, internship, testimonials, trustStats, faq, contact };
fs.mkdirSync('web-next/src/data', { recursive: true });
fs.writeFileSync('web-next/src/data/home.json', JSON.stringify(out, null, 2));
console.log('wrote web-next/src/data/home.json');
console.log(JSON.stringify({
  features: features.length, visCards: visCards.length, processSteps: processSteps.length,
  internshipRows: internship.rows.length, testimonials: testimonials.length,
  trustStats: trustStats.length, faq: faq.length,
}, null, 2));
