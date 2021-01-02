import { RouterContext } from "https://deno.land/x/oak@v6.4.1/router.ts"
import { Router } from "https://deno.land/x/oak/mod.ts"
import { Context } from "https://deno.land/x/oak@v6.4.1/context.ts"

export type RouterCtx = RouterContext<
  Record<string | number, string | undefined>,
  // deno-lint-ignore no-explicit-any
  Record<string, any>
>

// deno-lint-ignore no-explicit-any
export type RouterType = Router<Record<string | number, string | undefined>, Record<string, any>>

// deno-lint-ignore no-explicit-any
export type MiddleWareCtx = Context<Record<string, any>>

export type FnPromise = () => Promise<void>

export type RouteFn = (ctx: RouterCtx) => Promise<void>

export interface Movie {
  id: number
  title: string
  rating: number
}

export type MovieBody = Pick<Movie, "rating" | "title">
