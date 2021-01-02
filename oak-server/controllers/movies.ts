import { addToMovies, initMovies, moviesXs } from "../../test-data/data.ts"
import { FnPromise, Movie, RouterCtx } from "../utils/types.ts"
import { Status } from "https://deno.land/x/oak/mod.ts"
import { asyncHandler } from "../middleware/error-handler.ts"

export const getMovies = asyncHandler(async (ctx: RouterCtx, next: FnPromise) => {
  ctx.response.body = {
    data: await initMovies(),
  }
})

export const getMovieById = asyncHandler(async (ctx: RouterCtx, next: FnPromise) => {
  const movie = (await initMovies()).movies.find(movie => movie.id === Number(ctx.params.id))
  if (!movie) {
    ctx.throw(Status.BadRequest, "Bad Request")
  }
  ctx.response.body = {
    movie,
  }
})

export const start = (ctx: RouterCtx) => {
  ctx.response.body = {
    data: "Welcome",
  }
}

export const createMovie = asyncHandler(async (ctx: RouterCtx, next: FnPromise) => {
  if (!ctx.request.body) {
    ctx.throw(Status.BadRequest, "Bad Request")
  }
  const body = ctx.request.body()
  const { value } = await body

  const newMovie: Movie = {
    id: moviesXs.length + 1,
    ...(await value),
  }

  await addToMovies(moviesXs, newMovie)

  ctx.response.status = Status.OK
  ctx.response.body = [moviesXs, newMovie]
  ctx.response.type = "json"
  return
})
