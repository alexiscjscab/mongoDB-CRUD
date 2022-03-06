import { Router } from 'express';
import {
  addTask,
  deleteById,
  renderTask,
  renderTaskEdit,
  toggleDone,
  updateTask,
} from '../controllers/task.controller';

const router = Router();

router.get('/', renderTask);

router.post('/task/add', addTask);

router.post('/edit/:id', updateTask);

router.get('/edit/:id', renderTaskEdit);

router.get('/delete/:id', deleteById);

router.get('/toggleDone/:id', toggleDone);

export default router;
