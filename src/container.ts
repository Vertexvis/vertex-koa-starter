import { Logger } from "pino";
import { HealthMonitor } from "./lib/health";
import { PvsMonitor } from "./lib/pvs";

export interface ServiceContainer {
  health: HealthMonitor;
  logger: Logger;
  pvs: PvsMonitor;
}

export function createContainer(logger: Logger): ServiceContainer {
  return {
    health: new HealthMonitor(),
    logger,
    pvs: new PvsMonitor(),
  };
}
