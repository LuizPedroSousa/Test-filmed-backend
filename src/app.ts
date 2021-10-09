import "express-async-errors";
import express, { Express, NextFunction, Request, Response } from "express";
import { config, DotenvConfigOutput } from "dotenv";
import { createServer, Server as HTTPServer } from "http";
import cors from "cors";
import { routes } from "./routes";
import createMongodbConnection from "./database/connection";
import { checkErrors } from "./middlewares/errors";
import logger from "./utils/logger";
import { Routes } from "./interfaces/Routes";

class App {
  public express: Express;
  public dotenv: DotenvConfigOutput;
  public port: string | number;
  public address: string;
  public server: HTTPServer;
  public mongodbConnection: Promise<void>;
  public routes: Routes[];

  constructor() {
    this.address = process.env.ADDRESS || "http://localhost";
    this.port = process.env.PORT || 3000;
    this.express = express();
    this.server = createServer(this.express);
    this.dotenv = config();
    this.mongodbConnection = createMongodbConnection.connect();
    this.routes = routes;
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  public listen() {
    this.express.listen(this.port, () => {
      logger.success(`-🚀 Server Started in ${this.address}:${this.port}`);
    });
  }

  private initializeRoutes() {
    this.routes.forEach((route) => {
      this.express.use("/", route.router);
    });
  }

  private initializeMiddlewares() {
    this.express.use(cors());
    this.express.use(express.json());
  }

  private initializeErrorHandling() {
    this.express.use(checkErrors);
  }
}

const app = new App();

export default app;
