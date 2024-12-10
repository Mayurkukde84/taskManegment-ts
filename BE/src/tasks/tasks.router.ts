import { Router } from 'express';
import { getAllTasks } from './tasks.controller';

/*Fire the router function*/
export const tasksRouter: Router = Router();

// Create a default route.
tasksRouter.get('/tasks', getAllTasks);
