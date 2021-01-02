import { Status } from "https://deno.land/std@0.82.0/http/http_status.ts"
import { initUsers } from "../../test-data/data.ts"
import { asyncHandler } from "../middleware/error-handler.ts"
import { FnPromise, RouterCtx } from "../utils/types.ts"

export const getUsers = asyncHandler(async (ctx: RouterCtx, next: FnPromise) => {
  ctx.response.body = {
    users: await initUsers(),
  }
})
export const getUser = asyncHandler(async (ctx: RouterCtx, next: FnPromise) => {
  const { name } = ctx.params
  const user = await (await initUsers()).find(u => u.name.toLowerCase() === name)
  if (!user) {
    ctx.response.status = Status.BadRequest
    ctx.response.body = { status: Status.BadRequest, msg: `No user found with name ${name} ` }
    ctx.throw(Status.BadRequest, "Bat request!, no user found")
  }
  ctx.response.body = {
    user,
  }
})
