import { isHttpError } from "https://deno.land/x/oak@v6.4.1/httpError.ts"
import { FnPromise, MiddleWareCtx, RouterCtx } from "../utils/types.ts"

export default async (ctx: MiddleWareCtx, next: FnPromise) => {
  try {
    await next()
  } catch (err) {
    if (isHttpError(err)) {
      ctx.response.status = err.status
      const { message, status, stack } = err
      if (ctx.request.accepts("json")) {
        ctx.response.body = { message, status, stack }
        ctx.response.type = "json"
      } else {
        ctx.response.body = `${status} ${message}\n\n${stack ?? ""}`
        ctx.response.type = "text/plain"
      }
    } else {
      console.log(err)
      throw err
    }
  }
}

export const asyncHandler = (fn: (ctx: RouterCtx, next: FnPromise) => Promise<void>) => (
  ctx: RouterCtx,
  next: FnPromise
) => {
  return Promise.resolve(fn(ctx, next)).catch(next)
}
