export const initMovies = async () => ({
  movies: await [
    { id: 1, title: "Star wars", rating: 5 },
    { id: 2, title: "Harry potter", rating: 5 },
    { id: 3, title: "Love story", rating: 1 },
  ],
})
