const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our humble home page!');
    } else if (req.url === '/about') {
        res.end('About Page');
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>Missing Dawg ...</p>
            <a href="/">Back Home</a>
        `);
    }
});

server.listen(3001);
