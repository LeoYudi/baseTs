import { NextFunction } from 'express';

export const Routes = [
  {
    method: 'get',
    route: '/',
    controller: class {
      async teste(req: Request, res: Response, next: NextFunction) {
        return { status: 200, data: { msg: 'rota get :)' } };
      }
    },
    action: 'teste'
  }
];