import { Movie } from "@/types/Movie";
import axios from "axios";

class MovieDataService {
  private baseURL = "https://www.omdbapi.com/";
  private config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  private movies: Movie[] = [
    {
      Title: "Star Wars: Episode V - The Empire Strikes Back",
      Year: "1980",
      imdbID: "tt0080684",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      Title: "The Grand Budapest Hotel",
      Year: "2014",
      imdbID: "tt2278388",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg"
    },
    {
      Title: "Moon",
      Year: "2009",
      imdbID: "tt1182345",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTgzODgyNTQwOV5BMl5BanBnXkFtZTcwNzc0NTc0Mg@@._V1_SX300.jpg"
    },
    {
      Title: "My Octopus Teacher",
      Year: "2020",
      imdbID: "tt12888462",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BZWZlODNlYWUtZjY2Ni00YzdiLTkwNmEtZmY5MmY1MDI0YWQyXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_SX300.jpg"
    },
    {
      Title: "Good Will Hunting",
      Year: "1997",
      imdbID: "tt0119217",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
  ];

  get(title: string) {
    return axios.get(
      this.baseURL + "?s=" + title + "&type=movie &apikey=231e460e",
      this.config
    );
  }

  getDefaultMovies() {
    return this.movies;
  }
}

export default new MovieDataService();
