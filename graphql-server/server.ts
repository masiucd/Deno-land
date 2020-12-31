import { Application, Router, RouterContext } from "https://deno.land/x/oak@v6.2.0/mod.ts"
import { applyGraphQL, gql, GQLError } from "https://deno.land/x/oak_graphql/mod.ts"
import { initMovies } from "../test-data/data.ts"

const app = new Application()

const types = gql`
  type Movie {
    id: ID
    title: String
    rating: Int
  }

  input MovieInput {
    title: String
    description: String
    rating: Int
  }

  type Query {
    movies: [Movie]
    getMovie(id: Int!): Movie
  }
`

const resolvers = {
  Query: {
    movies: async () => {
      return await (await initMovies()).movies
    },
    getMovie: async (parent: never, args: { id: string }) => {
      const movie = (await initMovies()).movies.find(movie => movie.id === Number(args.id))
      if (!movie) {
        throw new GQLError({ type: "no movie found with id " + args.id })
      }
      return movie
    },
  },
} as const

const GraphQLService = await applyGraphQL<Router>({
  Router,
  typeDefs: types,
  resolvers: resolvers,
})

app.use(GraphQLService.routes(), GraphQLService.allowedMethods())

console.log("Server start at http://localhost:8080/graphql")
await app.listen({ port: 8080 })
