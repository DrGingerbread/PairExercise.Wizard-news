const express = require('express');
const morgan = require('morgan');
const postBank = require('./postBank');
const postList = require('./Views/postList');
const singlePost = require('./Views/singlePost');

const app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

//app.get("/", (req, res) => res.send("Hello World!"));

app.get('/', (req, res) => {
	const posts = postBank.list();

	res.send(postList(posts));
});

app.get('/posts/:id', (req, res) => {
  const id = Number(req.params.id);
  const post = postBank.find(id);

  if (!post.id) {
    // If the post wasn't found, set the HTTP status to 404 and send Not Found HTML
    res.status(404);
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Wizard News</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <header><img src="/logo.png"/>Wizard News</header>
      <div class="not-found">
        <p>404: Page Not Found</p>
      </div>
    </body>
    </html>`;
    res.send(html);
  } else {
    // ... Otherwise, send the regular post detail HTML
    res.send(singlePost(post));
  }
});
app.get( '/users/:name', (req, res) => {
  console.log( req.params.name ); // --> 'nimit'
});

const { PORT = 1337 } = process.env;

app.listen(PORT, () => {
	console.log(`App listening in port ${PORT}`);
});