import { Failure, FileList } from "@vertexvis/api-client-node";
import { makeCall } from "../vertex-api";

export class FilesMonitor {
  public async getJson(): Promise<Failure | FileList> {
    return makeCall((client) => client.files.getFiles({ pageSize: 5 }));
  }
}
