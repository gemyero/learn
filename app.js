const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// views setting
app.set('view engine', 'hbs');

// static files
app.use('/assets', express.static(path.join(__dirname, 'public')));

// middlewares
app.use((req, resp, next) => {
  console.log('\n#####################################################');
  console.log(`Requested URL: ${req.url}`);
  console.log(`Request Time: ${new Date().toString()}`);
  console.log('#####################################################\n');
  next();
});

// routes 
app.get('/', (req, resp) => {
  resp.render('home.hbs', {
    title: 'Home',
    pageTitle: "Home Page",
    currnetYear: new Date().getFullYear(),
    name: "Mohamed Gamal Rady",
    age: 26
  });
});

app.get('/about', (req, resp) => {
  resp.render('about.hbs', {
    pageTitle: "About Mohamed Gamal",
    currnetYear: new Date().getFullYear()
  });
});

app.listen(port, () => console.log(`Server is listening on localhost:${port}`));