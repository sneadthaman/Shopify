<template>
  <div id="app">
    <h1>The Shoppies</h1>
    <movie-search 
      @updateMovie="updateMovie"
      @updateResults="updateResults"></movie-search>
    <search-results 
      :search="searchString"
      :result="searchResults"></search-results>
    <nominated-movies></nominated-movies>
  </div>
</template>

<script>
import SearchResults from '@/components/SearchResults.vue'
import NominatedMovies from '@/components/NominatedMovies.vue'
import MovieSearch from './components/MovieSearch.vue'

export default {
  name: 'App',
  components: {
    'search-results': SearchResults,
    'nominated-movies': NominatedMovies,
    'movie-search': MovieSearch,
  },
  data() {
    return {
      searchString: '',
      searchResults: [],
    }
  },
  methods: {
    updateMovie(data) {
      this.searchString = data;
    },

    updateResults(data) {
      this.searchResults = data.Search;
    }
  }
}
</script>

<style>
@import './assets/css/style.css';
</style>
