const http = require('http');
const { URL } = require('url');

const sampleUrl = 'https://www.instagram.com/profile/id';
const parsedUrl = new URL(sampleUrl);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.write('<html><body>');
  res.write('<h1>Parsed URL Details</h1>');
  res.write('<ul>');
  res.write(`<li><strong>Protocol:</strong> ${parsedUrl.protocol}</li>`);
  res.write(`<li><strong>Host:</strong> ${parsedUrl.host}</li>`);
  res.write(`<li><strong>Hostname:</strong> ${parsedUrl.hostname}</li>`);
  res.write(`<li><strong>Port:</strong> ${parsedUrl.port || 'None'}</li>`);
  res.write(`<li><strong>Pathname:</strong> ${parsedUrl.pathname}</li>`);
  res.write(`<li><strong>Search:</strong> ${parsedUrl.search || 'None'}</li>`);
  res.write(`<li><strong>Hash:</strong> ${parsedUrl.hash || 'None'}</li>`);
  res.write('</ul>');

  res.write('<h2>Search Parameters</h2>');
  if ([...parsedUrl.searchParams].length > 0) {
    res.write('<ul>');
    parsedUrl.searchParams.forEach((value, key) => {
      res.write(`<li>${key} = ${value}</li>`);
    });
    res.write('</ul>');
  } else {
    res.write('<p>No search parameters</p>');
  }

  res.write('</body></html>');
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
