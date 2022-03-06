import express from 'express';
// import exphbs from 'express-handlebars';
import { engine } from 'express-handlebars';
import indexRouter from './routes/index.routes';
import path from 'path';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', engine({
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  defaultLayout: 'main',
  extname: '.hbs',
}));


app.set('view engine', '.hbs');

// Routes
app.use(indexRouter);


// static  files
app.use(express.static(path.join(__dirname, 'public')))

export default app;