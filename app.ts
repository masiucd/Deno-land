import { Application, bold, cyan, Router } from "./packages/index.ts"
import { movieRouter } from "./server/routes/movies.ts"

const app = new Application()

const router = new Router()

movieRouter(router)

app.use(router.routes())

app.addEventListener("listen", ({ hostname, port }) => {
  console.log(bold("Start listening on 🎸") + cyan(`${hostname}:${port}`))
})
await app.listen({ hostname: "127.0.0.1", port: 8000 })
