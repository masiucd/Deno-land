import { Context } from "https://deno.land/x/oak@v6.4.1/context.ts"
import { green } from "https://deno.land/std@0.82.0/fmt/colors.ts"

// deno-lint-ignore no-explicit-any
export default async (ctx: Context<Record<string, any>>, next: () => Promise<void>) => {
  await next()
  const responseTime = ctx.response.headers.get("X-Response-Time")
  console.log(green(`${ctx.request.method}: ${ctx.request.url} response-time ${responseTime}`))
}
