import { Task } from './tasks.enitiy';
import { AppDataSource } from '../../index';

export class TasksController {
  constructor(
    private taskRepository = AppDataSource.getRepository(
      Task,
    ),
  ) {}
  public async getAll(): Promise<Task[]> {
    let allTasks: Task[];
    try {
      allTasks = await this.taskRepository.find({
        order: {
          date: 'ASC',
        },
      });
    } catch (error) {
        console.log(error)
    }
  }
}
