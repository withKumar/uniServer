const Express = require('express');
const logger = require('morgan');
const routes = require('./routes/indexroute');
const cors = require('cors');
const path = require('path');
const app = Express();

const data = require('./data');

//app.use('views', __dirname + '/views'); // general config
//app.use('view engine', 'html');
app.use(cors());
app.use(Express.json());
app.use(logger('dev'));
app.use(Express.static(__dirname + 'views/'));


app.use('/', routes);

app.listen(3000, () => {
    console.log('App Running on PORT 3000');
})