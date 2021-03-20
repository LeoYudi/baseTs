import express, { NextFunction, Request, Response } from 'express';

import { Routes } from './routes';

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());

Routes.forEach(route => {
  (app as any)[route.method](route.route, (req: Request, res: Response, next: NextFunction) => {
    const result = (new (route.controller as any))[route.action](req, res, next);

    if (result instanceof Promise) {
      result.then(result => result !== null && result !== undefined ?
        res.status(200).json(result.data) :
        undefined);

    } else if (result !== null && result !== undefined) {
      res.status(result.status).json(result.data);
    }
  });
});

app.listen(port, () => {
  console.log('rodando teste na porta ' + port);
});