import { Router } from "../../packages/index.ts"
import { getMovies } from "../utils/test-data.ts"

export const movieRouter = (
  // deno-lint-ignore no-explicit-any
  router: Router<Record<string | number, string | undefined>, Record<string, any>>
) => {
  router
    .get("/movies", ctx => {
      ctx.response.body = {
        data: getMovies(),
      }
    })
    .get("/foo", ctx => {
      ctx.response.body = {
        data: {
          foo: "Hello",
        },
      }
    })
    .get("/movies/:id", ctx => {
      ctx.response.body = {
        params: `params you passed is #ID-${ctx.params.id}`,
      }
      console.log(ctx.params.id)
    })
    .post("/test", async ctx => {
      const res = ctx.request.body()
      console.log(res)
      if (res.type === "json") {
        const value = await res.value
        console.log(value)
      }
    })
}
