import { Movie } from "../oak-server/utils/types.ts"

export const moviesXs: Movie[] = [
  { id: 1, title: "Star wars", rating: 5 },
  { id: 2, title: "Harry potter", rating: 5 },
  { id: 3, title: "Love story", rating: 1 },
]

export const initMovies = async () => ({
  movies: await moviesXs,
})

export const addToMovies = async (movies: Movie[], movie: Movie) => await movies.push(movie)
