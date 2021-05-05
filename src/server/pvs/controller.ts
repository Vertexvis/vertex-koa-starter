import { VertexClient, prettyJson } from "@vertexvis/api-client-node";
import { Agent } from "https";
import { Context } from "koa";
import { PvsMonitor } from "../../lib/pvs";

export default class PvsController {
  private pvs: PvsMonitor;

  constructor(pvs: PvsMonitor) {
    this.pvs = pvs;
  }

  public async getJson(ctx: Context) {
    const status = await this.pvs.getJson();

    const client = await VertexClient.build({
      axiosOptions: { httpsAgent: new Agent({ keepAlive: true }) },
      basePath: "https://platform.platdev.vertexvis.io",
    });

    const res = await client.files.getFiles({ pageSize: 1 });

    ctx.body = `FILES:\n${prettyJson(res.data)}\n\nITEMS:\n${prettyJson(
      status
    )}`;
    ctx.status = 200;
  }
}
