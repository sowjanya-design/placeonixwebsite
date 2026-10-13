const https = require('https');

function fetch(targetUrl) {
  return new Promise((resolve) => {
    https.get(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ body: data, headers: res.headers }));
    });
  });
}

async function inspectCoursePage() {
  const url = 'https://www.placeonix.com/courses/sap/sap-fico';
  const res = await fetch(url);
  const html = res.body;

  console.log('=== INSPECTING COURSE PAGE: ' + url + ' ===');

  // JSON-LD scripts
  const scripts = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  console.log(`Found ${scripts.length} JSON-LD scripts:`);
  scripts.forEach((s, i) => {
    try {
      const obj = JSON.parse(s[1]);
      console.log(`Script ${i}:`, JSON.stringify(obj, null, 2));
    } catch(e) {
      console.log(`Script ${i} invalid JSON:`, s[1]);
    }
  });

  // Check script tags on page
  const jsFiles = [...html.matchAll(/src=["'](\/_next\/static\/[^"']+)["']/gi)].map(m => m[1]);
  console.log(`\nNext.js Scripts (${jsFiles.length}):`, jsFiles.slice(0, 5));

  // Check css files
  const cssFiles = [...html.matchAll(/href=["'](\/_next\/static\/css\/[^"']+)["']/gi)].map(m => m[1]);
  console.log(`\nNext.js CSS Files (${cssFiles.length}):`, cssFiles);

  // Check internal links
  const links = [...html.matchAll(/href=["'](\/[^"']*)["']/gi)].map(m => m[1]);
  console.log(`\nInternal Links Found: ${links.length}`);
  const uniqueLinks = [...new Set(links)];
  console.log(`Unique internal paths: ${uniqueLinks.length}`);
  console.log('Sample internal links:', uniqueLinks.slice(0, 15));
}

inspectCoursePage();
