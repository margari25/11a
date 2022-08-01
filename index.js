import express from 'express';
import handlebars from 'express-handlebars';

const app = express();
const port = 8081;
app.use(express.static('public'));

app.set('view engine', 'hbs');
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.get('/test', (req, res) => res.render('test'));
app.get('/test2', (req, res) => res.render('test2'));

app.get('/', (req, res) => res.render('index'));

const arr = ['Foo', 'Bar', 'Baz'];

app.get('/db', (req, res) => render('db', {data:arr}));

app.listen(port, () => console.log(`Starting sever on port ${port}`));