import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import itemsRouter from './routes/items';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api/items', itemsRouter);

export default app;
