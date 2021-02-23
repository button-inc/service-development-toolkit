const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const { getHandler, postMiddleware } = require('./src/pangolin');

// Parse body into json
app.use(express.json());

// Using sessions in this example.
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // Setting false for example only (to support testing with http on localhost). Use secure in production
    cookie: { secure: false },
  })
);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/:page', function (req, res) {
  const { formIndex, formData, validPage } = getHandler(req);
  return res.json({ formIndex, formData, validPage });
});

app.post('/api/:page', postMiddleware);

app.listen(process.env.PORT || 8080, () => console.log('server running on 8080'));
