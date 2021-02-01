<template>
  <div>
    <label for="search">Search Movie Title</label>
    <input type="search" name="search" v-model="movieSearch" @keyup.enter="searchMovie">
    <button @click="searchMovie">Search</button>
  </div>
</template>

<script>
import { axios } from '@/app.js';

export default{
  name:'movie-search',
  props: [
    ''
  ],
  data(){
    return{
      movieSearch: 'happy',
      searchResults: [],
    }
  },
  methods:{
    searchMovie() {
      // Send GET request to OMDb API with the movieSearch string
      axios.get('?apikey=f80b2d42&s=' + this.movieSearch + '&type=movie&r=json').then((response) => {
        this.searchResults = response.data.Search;
        console.log(this.searchResults)
      });

      // Update App.vue to share Movie Search String to SearchResults component
      this.$emit("updateMovie", this.movieSearch);

      // Update App.vue to share Movie Results Array to SearchResults component
      this.$emit("updateResults", this.searchResults);

      // Clear input field
      this.movieSearch = '';
    },
  }
}
</script>

<style scoped>
</style>
