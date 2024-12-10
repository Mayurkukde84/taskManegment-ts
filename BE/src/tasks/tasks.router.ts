import express, { Request, Response } from 'express';
import { taskController } from './tasks.controller';
import { createValidator ,updateValidator} from './tasks.validator';

export const tasksRouter = express.Router();

tasksRouter.get(
  '/tasks',
  async (req: Request, res: Response) => {
    await taskController.getAll(req, res);
  },
);
tasksRouter.post(
  '/tasks',
  createValidator,
  async (req: Request, res: Response) => {
    await taskController.create(req, res);
  },
);

tasksRouter.put('/tasks',updateValidator, async (req: Request, res: Response) => {
  await taskController.update(req, res);
},)