import { Router, Status } from "https://deno.land/x/oak/mod.ts"
import { initMovies } from "../test-data/data.ts"

export const movieRouter = (
  // deno-lint-ignore no-explicit-any
  router: Router<Record<string | number, string | undefined>, Record<string, any>>
) => {
  router.get("/movies", async ctx => {
    ctx.response.body = {
      data: await initMovies(),
    }
  })
  router.get("/movies/:id", async ctx => {
    const movie = (await initMovies()).movies.find(movie => movie.id === Number(ctx.params.id))
    if (!movie) {
      ctx.throw(Status.BadRequest, "Bad Request")
    }
    ctx.response.body = {
      movie,
    }
  })
}
