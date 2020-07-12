const app = require('express')();

const indexRouter = require('./app/routes/index');

app.use('/', indexRouter);
app.listen(8080);

module.exports = app;
