import { createMovie, getMovieById, getMovies, start } from "../controllers/movies.ts"
import { testLogger } from "../middleware/logger.ts"
import { RouterType } from "../utils/types.ts"

export const movieRouter = (router: RouterType) => {
  router.get("/", start)
  router.get("/movies", testLogger, getMovies)
  router.get("/movies/:id", getMovieById)
  router.post("/movies", createMovie)
}
