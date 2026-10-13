const https = require('https');

function fetch(targetUrl) {
  return new Promise((resolve) => {
    const start = Date.now();
    const req = https.get(targetUrl, {
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
          duration: Date.now() - start,
          body: data
        });
      });
    });
    req.on('error', err => resolve({ url: targetUrl, error: err.message }));
    req.on('timeout', () => { req.destroy(); resolve({ url: targetUrl, error: 'Timeout' }); });
  });
}

async function run() {
  const sitemapRes = await fetch('https://www.placeonix.com/sitemap.xml');
  const urls = [...sitemapRes.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  console.log(`Auditing ${urls.length} pages from sitemap...`);

  const results = [];
  for (const u of urls) {
    const res = await fetch(u);
    if (res.error) {
      results.push({ url: u, error: res.error });
      continue;
    }
    const html = res.body;
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
    const canonMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
    const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
    const jsonLd = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];

    results.push({
      url: u,
      status: res.statusCode,
      time: res.duration,
      title: titleMatch ? titleMatch[1] : null,
      titleLen: titleMatch ? titleMatch[1].length : 0,
      description: descMatch ? descMatch[1] : null,
      descLen: descMatch ? descMatch[1].length : 0,
      canonical: canonMatch ? canonMatch[1] : null,
      h1Count: h1s.length,
      h1Text: h1s[0] || null,
      jsonLdCount: jsonLd.length
    });
  }

  console.log(JSON.stringify(results, null, 2));
}

run();
