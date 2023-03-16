import pdfRouter from './routers/pdfRouter.js';
import submitRouter from './routers/submitRouter.js';
import express from 'express';
import helmet from "helmet";
const app = express();
app.use(helmet);
app.use("/pdf", pdfRouter);
app.use("/submit", submitRouter);
export default app;
