import * as Koa from "koa";
import * as Router from "koa-router";
import { ServiceContainer } from "../../container";
import FilesController from "./controller";

export function init(server: Koa, container: ServiceContainer): void {
  const controller = new FilesController(container.files);
  const router = new Router();

  router.get("/files", controller.getJson.bind(controller));

  server.use(router.routes());
}
