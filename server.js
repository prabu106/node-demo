import express from 'express';
const app = express();

app.get('/', (_, res) => {
    res.send('home page !!!');
});

app.get('/user', (_, res) => {
    res.send('user page !!!');
});

app.get('/404', function(req, res, next) {
    // trigger a 404 since no other middleware
    // will match /404 after this one, and we're not
    // responding here
    next();
});

app.get('/500', function(req, res, next){
    // trigger a generic (500) error
    next(new Error('keyboard cat!'));
});

app.use(function(req, res, next) {
    res.status(404);
  
    res.format({
      html: function () {
        res.send('404')
      },
      json: function () {
        res.json({ error: 'Not found' })
      },
      default: function () {
        res.type('txt').send('Not found')
      }
    })
});

app.use(function(err, req, res, next){
    // we may use properties of the error object
    // here and next(err) appropriately, or if
    // we possibly recovered from the error, simply next().
    res.status(err.status || 500);
    res.send('500');
});


app.listen(3000, () => {
    console.log('3000 port is running!!!');
});