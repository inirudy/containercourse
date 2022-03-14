const showMain = require('./src/controllers/main')

const express = require('express');
const app = express();
const port = 3000;

const {engine} = require('express-handlebars');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views')

app.use(express.static('public'))
app.get('/', (req, res) => {showMain(req, res)})

app.listen(port, () => console.log(`App listening to port ${port}`));