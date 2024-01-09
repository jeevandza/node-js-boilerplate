import { Router, Request, Response } from 'express';

const roleRoute = () => {
  const router = Router();
  
  router.post('/roles', (req: Request, res: Response) => {
    // TODO logic for creating role
  });

  router.get('/roles', (req, res) => {
    // TODO logic for retrieving roles
  });
  
  router.get('/role/:id', (req, res) => {
    // TODO logic for retrieving role
  });

  router.put('/role/:id', (req, res) => {
    // TODO logic for updating role
  });
  
  router.delete('/role/:id', (req, res) => {
    // TODO logic for deleting role
  });
  
  return router;
};


export{
    roleRoute
}