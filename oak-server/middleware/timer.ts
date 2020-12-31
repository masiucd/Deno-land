import { Context } from "https://deno.land/x/oak@v6.4.1/context.ts"

// deno-lint-ignore no-explicit-any
export default async (ctx: Context<Record<string, any>>, next: () => Promise<void>) => {
  const startTime = Date.now()
  await next()
  const endTime = Date.now()
  const diff = endTime - startTime
  ctx.response.headers.set("X-Response-Time", `${diff}ms`)
}
