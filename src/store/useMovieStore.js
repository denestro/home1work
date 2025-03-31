import { create } from "zustand";
import axios from "axios";

const useMovieStore = create((set) => ({
  movies: [],
  fetchMovies: async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
      set({ movies: response.data });
    } catch (error) {
      console.error("Ошибка загрузки фильмов", error);
    }
  },
}));

export default useMovieStore;
