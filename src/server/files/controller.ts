import { isFailure, prettyJson } from "@vertexvis/api-client-node";
import { Context } from "koa";
import { FilesMonitor } from "../../lib/files";

export default class FilesController {
  private files: FilesMonitor;

  constructor(files: FilesMonitor) {
    this.files = files;
  }

  public async getJson(ctx: Context): Promise<void> {
    const res = await this.files.getJson();

    ctx.body = prettyJson(res);
    ctx.status = isFailure(res) ? 500 : 200;
  }
}
