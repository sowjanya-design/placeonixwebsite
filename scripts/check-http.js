const http = require('http');
const https = require('https');

function checkHttpRedirect(hostname, path) {
  return new Promise((resolve) => {
    const req = http.request({
      hostname,
      port: 80,
      path,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    }, (res) => {
      resolve({
        statusCode: res.statusCode,
        headers: res.headers
      });
    });
    req.on('error', (e) => resolve({ error: e.message }));
    req.end();
  });
}

async function testRedirects() {
  console.log('Testing http://placeonix.com:');
  const r1 = await checkHttpRedirect('placeonix.com', '/');
  console.log(r1);

  console.log('Testing http://www.placeonix.com:');
  const r2 = await checkHttpRedirect('www.placeonix.com', '/');
  console.log(r2);
}

testRedirects();
