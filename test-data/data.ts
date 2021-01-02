import { Movie, User } from "../oak-server/utils/types.ts"
import { v4 } from "https://deno.land/std@0.83.0/uuid/mod.ts"

export const moviesXs: Movie[] = [
  { id: 1, title: "Star wars", rating: 5 },
  { id: 2, title: "Harry potter", rating: 5 },
  { id: 3, title: "Love story", rating: 1 },
]

export const users: User[] = [
  { id: v4.generate(), name: "Frank", age: 22, email: "f@io.com" },
  { id: v4.generate(), name: "Bo", age: 43, email: "bo@io.com" },
  { id: v4.generate(), name: "Greg", age: 37, email: "greg@io.com" },
]

export const initMovies = async () => ({
  movies: await moviesXs,
})
export const initUsers = async () => await users

export const findUserByID = async (id: string) => {
  return await users.find(user => user.id === id)
}

export const addToMovies = async (movies: Movie[], movie: Movie) => await movies.push(movie)
