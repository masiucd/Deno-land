import { RouterType } from "../utils/types.ts"
import { authHandler } from "../middleware/auth-handler.ts"
import { getUser, getUsers } from "../controllers/users.ts"

export const userRouter = (router: RouterType) => {
  router.get("/users", getUsers)
  router.get("/users/:name", authHandler, getUser)
}
