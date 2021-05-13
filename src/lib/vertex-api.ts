import { Failure, VertexClient } from "@vertexvis/api-client-node";
import { AxiosResponse } from "axios";
import * as dotenv from "dotenv";

export async function makeCall<T>(
  apiCall: (client: VertexClient) => Promise<AxiosResponse<T>>
): Promise<T | Failure> {
  try {
    const c = await getClient();
    return (await apiCall(c)).data;
  } catch (error) {
    return (
      error.vertexError?.res ?? {
        errors: [{ status: "500", title: "Unknown error from Vertex API." }],
      }
    );
  }
}

dotenv.config();
let Client: VertexClient | undefined;
async function getClient(): Promise<VertexClient> {
  if (Client != null) return Client;

  console.log("ID", process.env.VERTEX_CLIENT_ID);
  Client = await VertexClient.build({
    client: {
      id: process.env.VERTEX_CLIENT_ID ?? "",
      secret: process.env.VERTEX_CLIENT_SECRET ?? "",
    },
  });

  return Client;
}
