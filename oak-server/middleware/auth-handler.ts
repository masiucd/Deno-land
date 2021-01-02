import { FnPromise, MiddleWareCtx } from "../utils/types.ts"
import { v4 } from "https://deno.land/std@0.83.0/uuid/mod.ts"
import { Status } from "https://deno.land/std@0.82.0/http/http_status.ts"

export const authHandler = async (ctx: MiddleWareCtx, next: FnPromise) => {
  const headers: Headers = ctx.request.headers
  const authorization = headers.get("Authorization")

  if (!authorization && !authorization?.startsWith("Bearer")) {
    ctx.throw(Status.Unauthorized, "Unauthorized")
  }

  const token = ctx.request.headers.get("Authorization")?.split(" ").pop()
  console.log(token)

  if (!token) {
    return ctx.throw(Status.Unauthorized, "Unauthorized")
  }

  if (v4.validate(token)) {
    await next()
    ctx.request.headers.set("user", token)
    return
  }

  ctx.response.body = { status: Status.Unauthorized, msg: "Unauthorized" }
  ctx.response.status = Status.Unauthorized
}
