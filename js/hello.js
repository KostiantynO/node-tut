const http = require('http');
const hostname = 'localhost';
const port = 3000;
const url = `http://${hostname}:${port}/`;

const textHeader = 'text-plain';
const textMessage = `Hello World! I'm a response message from ${url}`;

// const createServerCallback = (req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', `${textHeader}`); // plaintext response
//   res.end(textMessage); // plaintext response
// };

const jsonHeader = 'application/json';
const jsonResponse = `{ "message" : "${textMessage}" }`;

// const createServerCallback = (req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', `${jsonHeader}`); // json response
//   res.end(jsonResponse); // json response
// };

const htmlHeader = 'text/html';
const homeHref = '/';
const aboutHref = '/pages/about';
const contactsHref = '/pages/contacts';

const htmlResponse = `
<h1>Hello World!</h1>

<h2>This is a HTML response</h2>

<ol class="nav" style="display: flex;">
  <li class="nav__item" style="margin-right: 21px;">
    <a class="nav__link" href="${homeHref}">Home</a>
  </li>

  <li class="nav__item" style="margin-right: 21px;">
    <a class="nav__link" href="${aboutHref}">About</a>
  </li>

  <li class="nav__item">
    <a class="nav__link" href="${contactsHref}">Contacts</a>
  </li>
</ol>
`;

const homePageMarkup = `This is Home page` + htmlResponse;
const aboutPageMarkup = `This is About page` + htmlResponse;
const contactsPageMarkup = `This is Contacts page` + htmlResponse;

// multi-pages response
const createServerCallback = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', `${htmlHeader}`);

  req.url === homeHref && (res.writeHead(200), res.end(homePageMarkup));
  req.url === aboutHref && (res.writeHead(200), res.end(aboutPageMarkup));
  req.url === contactsHref && (res.writeHead(200), res.end(contactsPageMarkup));
};

const serverListenCallback = () => console.log(`Server running at ${url}`);

const server = http.createServer(createServerCallback);
server.listen(port, hostname, serverListenCallback);
