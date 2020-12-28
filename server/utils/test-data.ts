export const getMovies = () => {
  return {
    data: [
      { id: 1, name: "Star Wars", cool: true },
      { id: 2, name: "Harry Potter", cool: true },
      { id: 3, name: "Lord og the rings", cool: true },
      { id: 4, name: "Nothing hill", cool: false },
    ],
  }
}

export const getMovieById = (id: number) => {
  const movie = getMovies().data.find(movie => movie.id === id)
  if (!movie) {
    return { status: false, message: "No movie found", data: {} }
  }
  return { status: true, message: `Movie: ${id}`, data: movie }
}
