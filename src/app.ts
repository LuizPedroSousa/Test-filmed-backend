import "express-async-errors";
import express, { Express, NextFunction, Request, Response } from "express";
import { config, DotenvConfigOutput } from "dotenv";
import { createServer, Server as HTTPServer } from "http";
import cors from "cors";
import { router } from "./routes";
import createMongodbConnection from "./database/connection";
import { checkErrors } from "./middlewares/errors";

class App {
  public express: Express;
  public dotenv: DotenvConfigOutput;
  public server: HTTPServer;
  public mongodbConnection: Promise<void>;

  constructor() {
    this.instances();
    this.middlewares();
  }

  instances() {
    this.express = express();
    this.server = createServer(this.express);
    this.dotenv = config();
    this.mongodbConnection = createMongodbConnection.connect();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(router);
    this.express.use(checkErrors);
  }
}

const app = new App();

export default app;
