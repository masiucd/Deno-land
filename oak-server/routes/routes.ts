import { Router } from "https://deno.land/x/oak/mod.ts"
import { movieRouter } from "./movies.ts"
import { userRouter } from "./users.ts"

const initRoutes = () => {
  const router = new Router()
  movieRouter(router)
  userRouter(router)
  return { router }
}

export { initRoutes }
