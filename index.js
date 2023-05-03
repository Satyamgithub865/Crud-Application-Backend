import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import bodyParser from 'body-parser';
import Connection from './dataBase/db.js'
import Routes from './routes/route.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => { console.log(`server running successfully on port ${PORT}`) });

const URL = process.env.DB_URL;
Connection(URL);