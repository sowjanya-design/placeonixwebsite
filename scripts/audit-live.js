const https = require('https');
const http = require('http');
const url = require('url');

async function checkUrl(targetUrl, followRedirects = true) {
  return new Promise((resolve) => {
    const parsed = new URL(targetUrl);
    const client = parsed.protocol === 'https:' ? https : http;
    const start = Date.now();
    
    const req = client.get(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Googlebot/2.1'
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

    req.on('error', (err) => {
      resolve({ url: targetUrl, error: err.message, duration: Date.now() - start });
    });
    req.on('timeout', () => {
      req.destroy();
      resolve({ url: targetUrl, error: 'Timeout', duration: Date.now() - start });
    });
  });
}

async function run() {
  const tests = [
    'http://placeonix.com',
    'http://www.placeonix.com',
    'https://placeonix.com',
    'https://www.placeonix.com',
    'https://placeonix.com/robots.txt',
    'https://placeonix.com/sitemap.xml',
    'https://www.placeonix.com/sitemap.xml',
    'https://placeonix.com/courses',
    'https://placeonix.com/internships',
    'https://placeonix.com/api/applications'
  ];

  console.log('--- URL STATUS & REDIRECT AUDIT ---');
  for (const t of tests) {
    const res = await checkUrl(t);
    console.log(`URL: ${t}`);
    console.log(`Status: ${res.statusCode} | Time: ${res.duration}ms | Location: ${res.headers ? res.headers.location : 'None'}`);
    if (res.headers) {
      console.log(`Server: ${res.headers.server || 'N/A'} | Cache-Control: ${res.headers['cache-control'] || 'N/A'}`);
      console.log(`HSTS: ${res.headers['strict-transport-security'] || 'Missing'}`);
    }
    console.log('--------------------------------------------------');
  }

  // Deep inspection on https://placeonix.com homepage HTML
  console.log('--- HOMEPAGE CONTENT AUDIT ---');
  const home = await checkUrl('https://placeonix.com');
  if (home.body) {
    const html = home.body;
    
    // Title
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    console.log('Title:', titleMatch ? titleMatch[1] : 'MISSING');

    // Meta description
    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
    console.log('Meta Description:', descMatch ? descMatch[1] : 'MISSING');

    // Canonical
    const canonMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
    console.log('Canonical Link:', canonMatch ? canonMatch[1] : 'MISSING');

    // Meta Robots
    const robotsMatch = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["']/i);
    console.log('Meta Robots:', robotsMatch ? robotsMatch[1] : 'Not specified (Defaults to index, follow)');

    // OpenGraph
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
    console.log('Twitter Card:', twCard ? twCard[1] : 'MISSING');

    // JSON-LD
    const jsonLdMatches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
    console.log(`JSON-LD Scripts Found: ${jsonLdMatches.length}`);
    jsonLdMatches.forEach((m, idx) => {
      console.log(`JSON-LD [${idx}]:`, m[1].trim().substring(0, 200) + '...');
    });

    // Headings
    const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
    console.log(`H1 count: ${h1s.length}`, h1s);
    const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
    console.log(`H2 count: ${h2s.length}`);
    const h3s = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
    console.log(`H3 count: ${h3s.length}`);

    // Images
    const imgs = [...html.matchAll(/<img([^>]+)>/gi)];
    let missingAlt = 0;
    imgs.forEach(m => {
      if (!m[1].includes('alt=') || m[1].includes('alt=""') || m[1].includes("alt=''")) {
        missingAlt++;
      }
    });
    console.log(`Total <img> tags: ${imgs.length}, Missing/Empty alt: ${missingAlt}`);

    // Viewport
    const vp = html.match(/<meta[^>]*name=["']viewport["'][^>]*content=["']([^"']*)["']/i);
    console.log('Viewport:', vp ? vp[1] : 'MISSING');
  }
}

run();
