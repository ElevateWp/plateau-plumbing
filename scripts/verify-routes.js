const http = require('http');

const routes = [
  '/', '/about/', '/services/', '/reviews/', '/team/', '/team/todd/',
  '/contact/', '/quote/', '/plumbing-advice/',
  '/emergency-plumbing/', '/leak-detection-and-repairs/',
  '/hot-water-system-repairs-and-replacement/', '/water-filtration-systems/',
  '/outdoor-showers-and-taps/', '/property-maintenance-and-fitouts/',
  '/renovation-plumbing/',
  '/plumbing-advice/what-to-do-for-a-burst-pipe/',
  '/plumbing-advice/hot-water-system-leak-or-failure/',
  '/plumbing-advice/planning-a-home-water-filtration-system/',
  '/favicon.png', '/favicon.ico', '/robots.txt', '/sitemap.xml',
];

async function checkRoute(path) {
  return new Promise((resolve) => {
    http.get('http://127.0.0.1:3001' + path, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ path, status: res.statusCode, hasH1: data.includes('<h1'), contentLength: data.length }));
    }).on('error', (error) => resolve({ path, error: error.message }));
  });
}

(async () => {
  const results = [];
  for (const route of routes) results.push(await checkRoute(route));
  console.table(results);
  const ok = results.every((result) => result.status === 200);
  console.log('All routes returned HTTP 200: ' + ok);
  if (!ok) process.exitCode = 1;
})();
