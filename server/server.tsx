import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from '../app/layout';
const app = express();

app.get('/*', (req, res) => {
  fileRo
  const reactApp = renderToString(<Layout>First Layout test</Layout>);
return res.send(reactApp);
});
app.listen(3000, () => {
  console.log('server is running');
});
