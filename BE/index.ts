import express, {
  Express,
  Request,
  Response,
} from 'express';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import cors from 'cors'
import bodyParser from 'body-parser';

const app: Express = express();
dotenv.config();

//parse request body
app.use(bodyParser.json());

//Use cors install types as well
app.use(cors());

//create database connection
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  synchronize: true,
  //   be very careful with this synchronize property.

  // What this property tells typo is that it should go ahead and create tables in our database and delete

  // the tables that we remove from our code as well with typo.

  // We create database tables using entities within our code, and we don't actually have to go to our database

  // in order to create those tables.

  // Typo manages this for us.

  // So during development using synchronize is okay because it helps us in development.

  // And typo creates those tables for us behind the scenes.

  // But during production typo uses something known as migrations in order to do that and manage table creation

  // in a versioned format for us.
});

const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

AppDataSource.initialize()
  .then(() => {
    app.listen(port);
    console.log('Data sourace has been initialized');
  })
  .catch(() => {
    console.error(
      'Error during Data Source initialization',
    );
  });
