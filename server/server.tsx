import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from '../app/layout';
import fileRouter from './fileRouter';
const app = express();

app.get('/*', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  return await fileRouter(req, res, next)

});
app.listen(3000, () => {
  console.log('server is running');
});
