import { Router } from "https://deno.land/x/oak/mod.ts"
import { movieRouter } from "./movies.ts"

const initRoutes = () => {
  const router = new Router()
  movieRouter(router)
  return { router }
}

export { initRoutes }
