const https = require('https');
const http = require('http');

async function fetchUrl(targetUrl) {
  return new Promise((resolve) => {
    const parsed = new URL(targetUrl);
    const client = parsed.protocol === 'https:' ? https : http;
    const start = Date.now();
    
    const req = client.get(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
      },
      timeout: 10000
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          url: targetUrl,
          statusCode: res.statusCode,
          headers: res.headers,
          duration: Date.now() - start,
          bodyLength: data.length,
          body: data
        });
      });
    });

    req.on('error', (err) => resolve({ url: targetUrl, error: err.message }));
    req.on('timeout', () => {
      req.destroy();
      resolve({ url: targetUrl, error: 'Timeout' });
    });
  });
}

async function run() {
  console.log('=== AUDITING HTTPS://WWW.PLACEONIX.COM ===');
  const page = await fetchUrl('https://www.placeonix.com');
  const html = page.body;

  console.log('Status:', page.statusCode);
  console.log('Response Time:', page.duration, 'ms');
  console.log('HTML Byte Length:', page.bodyLength);

  // Title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  console.log('Title:', titleMatch ? titleMatch[1] : 'MISSING');
  if (titleMatch) console.log('Title Length:', titleMatch[1].length, 'chars (Optimal: 50-60)');

  // Meta description
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
  console.log('Meta Description:', descMatch ? descMatch[1] : 'MISSING');
  if (descMatch) console.log('Description Length:', descMatch[1].length, 'chars (Optimal: 150-160)');

  // Canonical
  const canonMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  console.log('Canonical Link:', canonMatch ? canonMatch[1] : 'MISSING');

  // Meta Robots
  const robotsMatch = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["']/i);
  console.log('Meta Robots:', robotsMatch ? robotsMatch[1] : 'Not explicitly set (Defaults to index, follow)');

  // Open Graph
  const ogTitle = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/i);
  const ogDesc = html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["']/i);
  const ogImage = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i);
  const ogUrl = html.match(/<meta[^>]*property=["']og:url["'][^>]*content=["']([^"']*)["']/i);
  console.log('OG Title:', ogTitle ? ogTitle[1] : 'MISSING');
  console.log('OG Desc:', ogDesc ? ogDesc[1] : 'MISSING');
  console.log('OG Image:', ogImage ? ogImage[1] : 'MISSING');
  console.log('OG URL:', ogUrl ? ogUrl[1] : 'MISSING');

  // Twitter Card
  const twCard = html.match(/<meta[^>]*name=["']twitter:card["'][^>]*content=["']([^"']*)["']/i);
  const twTitle = html.match(/<meta[^>]*name=["']twitter:title["'][^>]*content=["']([^"']*)["']/i);
  const twImage = html.match(/<meta[^>]*name=["']twitter:image["'][^>]*content=["']([^"']*)["']/i);
  console.log('Twitter Card:', twCard ? twCard[1] : 'MISSING');
  console.log('Twitter Title:', twTitle ? twTitle[1] : 'MISSING');
  console.log('Twitter Image:', twImage ? twImage[1] : 'MISSING');

  // Viewport
  const vp = html.match(/<meta[^>]*name=["']viewport["'][^>]*content=["']([^"']*)["']/i);
  console.log('Viewport:', vp ? vp[1] : 'MISSING');

  // Headings
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log(`\nH1 Tags (${h1s.length}):`, h1s);
  const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log(`H2 Tags (${h2s.length}):`, h2s.slice(0, 5));
  const h3s = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log(`H3 Tags (${h3s.length}):`, h3s.slice(0, 5));

  // Images
  const imgMatches = [...html.matchAll(/<img([^>]+)>/gi)];
  let missingAlt = 0;
  let emptyAlt = 0;
  let withAlt = 0;
  imgMatches.forEach(m => {
    const tag = m[1];
    const altMatch = tag.match(/alt=["']([^"']*)["']/i);
    if (!altMatch) {
      missingAlt++;
    } else if (altMatch[1].trim() === '') {
      emptyAlt++;
    } else {
      withAlt++;
    }
  });
  console.log(`\nImages Total: ${imgMatches.length} | Alt filled: ${withAlt} | Alt empty: ${emptyAlt} | Alt missing: ${missingAlt}`);

  // JSON-LD Structured Data
  const jsonLdMatches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  console.log(`\nJSON-LD Blocks Found: ${jsonLdMatches.length}`);
  jsonLdMatches.forEach((m, idx) => {
    try {
      const parsed = JSON.parse(m[1]);
      console.log(`JSON-LD [${idx}] @type:`, parsed['@type'], 'Name:', parsed.name || 'N/A');
    } catch (e) {
      console.log(`JSON-LD [${idx}] Parse Error:`, e.message);
    }
  });

  // Robots.txt
  console.log('\n=== ROBOTS.TXT ===');
  const robots = await fetchUrl('https://www.placeonix.com/robots.txt');
  console.log(robots.body);

  // Sitemap.xml
  console.log('=== SITEMAP.XML ===');
  const sitemap = await fetchUrl('https://www.placeonix.com/sitemap.xml');
  console.log('Sitemap status:', sitemap.statusCode);
  const sitemapUrls = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  console.log(`URLs in sitemap: ${sitemapUrls.length}`);
  console.log('Sample URLs:', sitemapUrls.slice(0, 6));

  // Check subpages
  console.log('\n=== SUBPAGES STATUS ===');
  const samplePages = [
    'https://www.placeonix.com/courses',
    'https://www.placeonix.com/internships',
    'https://www.placeonix.com/courses/sap',
    'https://www.placeonix.com/courses/sap/sap-fico',
    'https://www.placeonix.com/privacy-policy',
    'https://www.placeonix.com/terms'
  ];
  for (const sp of samplePages) {
    const res = await fetchUrl(sp);
    const subTitle = res.body ? res.body.match(/<title[^>]*>([^<]+)<\/title>/i) : null;
    const subCanon = res.body ? res.body.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) : null;
    console.log(`${sp} -> Status: ${res.statusCode} | Title: ${subTitle ? subTitle[1] : 'MISSING'} | Canonical: ${subCanon ? subCanon[1] : 'MISSING'}`);
  }
}

run();
