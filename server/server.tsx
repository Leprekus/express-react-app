import express from 'express';
import fileRouter from './fileRouter';
import path from 'path';
const app = express();

app.get('/*', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  return await fileRouter(req, res, next)

});
app.listen(3000, () => {
  console.log('server is running');
});
