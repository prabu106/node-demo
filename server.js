import express from 'express';
const app = express();

app.get('/', (_, res) => {
    res.send('home page !!!');
});

app.get('/user', (_, res) => {
    res.send('user page !!!');
});

app.listen(3000, () => {
    console.log('3000 port is running!!!');
});