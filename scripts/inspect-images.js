const https = require('https');

function fetch(targetUrl) {
  return new Promise((resolve) => {
    https.get(targetUrl, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
  });
}

async function inspectImages() {
  const html = await fetch('https://www.placeonix.com/');
  const imgTags = [...html.matchAll(/<img\s+([^>]+)>/gi)];
  
  console.log(`Found ${imgTags.length} images on homepage.`);
  imgTags.forEach((tag, idx) => {
    const raw = tag[1];
    const srcMatch = raw.match(/src=["']([^"']+)["']/i);
    const altMatch = raw.match(/alt=["']([^"']*)["']/i);
    const widthMatch = raw.match(/width=["']([^"']+)["']/i);
    const heightMatch = raw.match(/height=["']([^"']+)["']/i);
    const loadingMatch = raw.match(/loading=["']([^"']+)["']/i);

    console.log(`[${idx + 1}] src: ${srcMatch ? srcMatch[1] : 'N/A'}`);
    console.log(`    alt: "${altMatch ? altMatch[1] : 'MISSING'}"`);
    console.log(`    dimensions: ${widthMatch ? widthMatch[1] : 'auto'}x${heightMatch ? heightMatch[1] : 'auto'} | loading: ${loadingMatch ? loadingMatch[1] : 'auto'}`);
  });
}

inspectImages();
