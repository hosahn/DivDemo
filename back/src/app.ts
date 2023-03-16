import {submitRouter } from './routers/submitRouter';
import express, { Express, Request, Response } from 'express';
import helmet from "helmet";

const app : Express = express();
app.use(helmet);

export default app;