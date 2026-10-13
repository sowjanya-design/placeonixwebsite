const https = require('https');

function fetch(targetUrl) {
  return new Promise((resolve) => {
    https.get(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 10000
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, body: data }));
    }).on('error', err => resolve({ error: err.message }));
  });
}

async function checkAllLinks() {
  const homeRes = await fetch('https://www.placeonix.com/');
  const hrefs = [...homeRes.body.matchAll(/href=["']([^"']+)["']/gi)].map(m => m[1]);
  
  const internalHrefs = new Set();
  for (const h of hrefs) {
    if (h.startsWith('/') && !h.startsWith('/_next') && !h.endsWith('.png') && !h.endsWith('.svg') && !h.endsWith('.ico') && !h.endsWith('.webmanifest')) {
      internalHrefs.add('https://www.placeonix.com' + h.split('#')[0]);
    } else if (h.startsWith('https://www.placeonix.com') && !h.includes('/_next/')) {
      internalHrefs.add(h.split('#')[0]);
    }
  }

  console.log(`Checking ${internalHrefs.size} internal links found on homepage:`);
  for (const link of internalHrefs) {
    const res = await fetch(link);
    console.log(`${link} -> Status: ${res.statusCode}`);
  }
}

checkAllLinks();
