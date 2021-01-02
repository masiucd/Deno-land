import { Application } from "https://deno.land/x/oak/mod.ts"
import { initRoutes } from "./routes/routes.ts"
import { bold, cyan } from "https://deno.land/std@0.82.0/fmt/colors.ts"
import logger from "./middleware/logger.ts"
import timer from "./middleware/timer.ts"
import errorHandler from "./middleware/error-handler.ts"
;(async () => {
  const app = new Application()

  const { router } = initRoutes()

  app.use(errorHandler)
  app.use(logger)
  app.use(timer)
  app.use(router.routes())

  app.addEventListener("listen", ({ hostname, port }) => {
    console.log(bold("Start listening on 🎸") + cyan(`${hostname}:${port}`))
  })
  await app.listen({ hostname: "127.0.0.1", port: 8000 })
})()
