import dotenv from 'dotenv';
import {resolve} from 'path';

dotenv.config();

import './database';
import express from 'express';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/UserRoutes';
import tokenRoutes from './routes/tokenRoutes';
import AlunoRoutes from './routes/alunoRoutes';
import photoRoutes from './routes/photoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({extends: true}));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', AlunoRoutes);
    this.app.use('/photos/', photoRoutes);
  }
}

export default new App().app;