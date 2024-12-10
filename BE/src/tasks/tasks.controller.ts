import { Request, Response } from 'express';
import { instanceToPlain } from 'class-transformer';
import { AppDataSource } from '../../index';
import { Task } from './tasks.entity';

// Standalone getAll function
export async function getAllTasks(
  req: Request,
  res: Response,
): Promise<Response> {
  let allTasks: Task[];

  try {
    allTasks = await AppDataSource.getRepository(Task).find({
      order: {
        date: 'ASC',
      },
    });

    // Convert the tasks instance to an array of objects
    allTasks = instanceToPlain(allTasks) as Task[];

    return res.status(200).json(allTasks);
  } catch (errors) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

