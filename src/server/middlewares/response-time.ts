import { Context } from "koa";

export async function responseTime(
  ctx: Context,
  next: () => Promise<unknown>
): Promise<void> {
  const start = Date.now();

  await next();

  ctx.set("X-Response-Time", (Date.now() - start).toString());
}
