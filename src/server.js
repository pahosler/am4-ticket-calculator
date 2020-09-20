import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
const proxy = require('express-http-proxy');

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const apiProxy = proxy('http://172.29.134.98:9000');

polka().use(function (req, res, next) {
  res.status = (code) => (res.statusCode = code);
  res.set = res.setHeader.bind(res);
  next();
});

polka().use('/.netlify/functions', apiProxy);
polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware()
  )
  .listen(PORT, (err) => {
    if (err) console.log('error', err);
  });
