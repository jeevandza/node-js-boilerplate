import { Router, Request, Response } from 'express';

const userRoute = () => {
  const router = Router();
  
  router.post('/user', (req: Request, res: Response) => {
    // TODO logic for creating role
  });

  router.get('/users', (req, res) => {
    // TODO logic for retrieving roles
    console.log('called')
    res.send('Hello from /users endpoint');

  });
  
  router.get('/user/:id', (req, res) => {
    // TODO logic for retrieving role
  });

  router.put('/user/:id', (req, res) => {
    // TODO logic for updating role
  });
  
  router.delete('/user/:id', (req, res) => {
    // TODO logic for deleting role
  });
  
  return router;
};


export{
    userRoute
}