import { Request, Response } from 'express';
import { Role, RoleInput } from '@Models/index.ts';

const createRole = async (req: Request, res: Response) => {
  const { description, name } = req.body;

  if (!name || !description) {
    return res.status(422).json({
      message: 'The fields name and description are required',
    });
  }

  const roleInput: RoleInput = {
    name,
    description,
  };

  const roleCreated = Role.create(roleInput);
  
  return res.status(201).json({ data: roleCreated });
};

export { createRole };