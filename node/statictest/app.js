const express = require('express');
const bp = require('body-parser');
const hb = require('express-handlebars');

const app = express();

// handlebar setup
app.engine('handlebars', hb({ defaultLayout: false }));
app.set('view engine', 'handlebars');

// 3. static file middleware
app.use(express.static('statics'));

// 1. routing: localhost:3000/
app.get('/', (req, res) => res.send('hello world'));

// 2. routing: localhost:3000/json
app.get('/json', (req, res) => res.send({ msg: 'json test' }));

// 4. template engine: 요청 파라메터와 템플릿 엔진으로 html 생성
app.get('/temp/:name', (req, res) => {
  const { name } = req.params;
  res.render('temp.handlebars', { name });
});

// 0. port: 3000
app.listen(3000);
