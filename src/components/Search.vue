<template>
  <h1 id="maintitle">Search for your favourite movies and nominate them for a Shoppies award!</h1>
  <div class="search">
    <input
      type="text"
      placeholder="Search title.."
      v-model="title"
      @keypress.enter="searchMovie()"
    />
  </div>
  <div class="movieitem" v-for="movie in movies" :key="movie.imdbID" >
    <hr class="seperator" size="1px">
    <div class="container">
      <img class="poster" v-bind:src="movie.Poster" />
      <div class="title">{{ movie.Title }} ({{ movie.Year }})</div>
      <router-link to="/" class="info">more info...</router-link>
      <button class="vote">Nominate</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import MovieDataService from "@/services/MovieDataService";

export default class Search extends Vue {
  private movies: any[] = [];
  private title = "";

  defaultMovies(): void {
    this.movies = [];
    this.movies = MovieDataService.getDefaultMovies();
  }

  searchMovie(): void {
    this.movies = [];
    MovieDataService.get(this.title)
      .then((response) => {
        const items = response.data["Search"];
        items.map((item: any) => {
          this.movies.push(item);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  mounted() {
    this.defaultMovies();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.movieitem {
  text-align: left;
}

.container {
  overflow-y: hidden;
}

.poster {
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 30px;
  float: left;
  height: 200px;
}

.title {
  color: white;
  font-weight: bold;
  position: relative;
  top: 10px;
  left: 20px;
  font-size: 30px;
}

.year {
  color: white;
  position: relative;
  top: 10px;
  left: 20px;
  font-size: 15px;
}

.info {
  color: white;
  position: relative;
  top: 20px;
  left: 30px;
  font-size: 18px;
  text-decoration: underline;
}

.vote {
  float: right;
  color: white;
  font-weight: bold;
  position: relative;
  right: 30px;
  top: -20px;
  margin-bottom: 100px;
  font-size: 30px;
  background-color: #4CAF50; /* Green */
  border: none;
  border-radius: 15px;
  padding: 15px 32px;
  &:focus {
    transform: scale(1.05);
  }
}

.seperator {
  margin-left: 20px;
  margin-right: 20px;
}

#maintitle {
  margin-top: 110px;
  font-size: 42px;
  padding-left: 550px;
  padding-right: 550px;
}

.search {
  position: relative;
  display: inline-block;
  margin-top: 50px;
  margin-bottom: 100px;
  text-align: center !important;
  input {
    padding: 10px 15px;
    height: 30px;
    font-size: 20px;
    width: 450px;
    color: #0f151b;
    border: 1px solid rgba(226, 37, 37, 0.12);
    border-radius: 10px;
    transition: 0.15s all ease-in-out;
    background: white;
    &:hover {
      outline: none;
      transform: scale(1.05);
      & + label {
        font-size: 10px;
        transform: translateY(-24px) translateX(-12px);
      }
    }
    &::-webkit-input-placeholder {
      font-size: 20px;
      color: #0f151b;
      font-weight: 100;
    }
  }
}
</style>
