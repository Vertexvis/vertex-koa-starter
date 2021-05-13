import { Logger } from "pino";
import { HealthMonitor } from "./lib/health";
import { FilesMonitor } from "./lib/files";

export interface ServiceContainer {
  files: FilesMonitor;
  health: HealthMonitor;
  logger: Logger;
}

export function createContainer(logger: Logger): ServiceContainer {
  return {
    files: new FilesMonitor(),
    health: new HealthMonitor(),
    logger,
  };
}
