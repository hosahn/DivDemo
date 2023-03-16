
import pdfRouter from './routers/pdfRouter.js';
import submitRouter from './routers/submitRouter.js';
import express, { Express, Request, Response } from 'express';
import helmet from "helmet";

const app : Express = express();
app.use(helmet);
app.use("/pdf", pdfRouter);
app.use("/submit", submitRouter);

export default app;