import * as Koa from "koa";
import * as Router from "koa-router";
import { ServiceContainer } from "../../container";
import PvsController from "./controller";

export function init(server: Koa, container: ServiceContainer) {
  const controller = new PvsController(container.pvs);
  const router = new Router();

  router.get("/pvs", controller.getJson.bind(controller));

  server.use(router.routes());
}
