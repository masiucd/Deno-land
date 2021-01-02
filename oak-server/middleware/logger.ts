import { green, red } from "https://deno.land/std@0.82.0/fmt/colors.ts"
import { FnPromise, MiddleWareCtx } from "../utils/types.ts"

export default async (ctx: MiddleWareCtx, next: FnPromise) => {
  await next()
  const responseTime = ctx.response.headers.get("X-Response-Time")
  console.log(green(`${ctx.request.method}: ${ctx.request.url} response-time ${responseTime}`))
}

export const testLogger = async (ctx: MiddleWareCtx, next: FnPromise) => {
  await next()
  console.log(red("I am a test Logger"))
}
