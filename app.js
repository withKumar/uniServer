const Express = require('express');
const logger = require('morgan');
const routes = require('./routes/indexroute');
const cors = require('cors');
const app = Express();

const data = require('./data');


app.use(cors());
app.use(Express.json());
app.use(logger('dev'));


app.use('/', routes);

app.listen(3000, () => {
    console.log('App Running on PORT 3000');
})