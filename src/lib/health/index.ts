export interface Status {
  startTime: string;
  isShuttingDown: boolean;
}

export class HealthMonitor {
  private startTime: number;
  private isShuttingDown: boolean;

  constructor() {
    this.isShuttingDown = false;
    this.startTime = Date.now();
  }

  public shuttingDown(): void {
    this.isShuttingDown = true;
  }

  public getStatus(): Status {
    return {
      startTime: new Date(this.startTime).toISOString(),
      isShuttingDown: this.isShuttingDown,
    };
  }
}
