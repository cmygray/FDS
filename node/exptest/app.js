const express = require('express');
const bp = require('body-parser');
const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.get('/test', (req, res) => res.send({ msg: 'hi' }));
app.get('/books/:id', (req, res) => {
    const payload = req.params.id;
    res.status(200).send(payload)
})
app.get('/', (req, res) => res.status(400).send({ msg: 'something wrong...'}));
app.post('/login', (req, res) => {
    const payload = req.body;
    console.log(payload);
    res.status(200).send(payload);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));