<template>
  <div>
    <section>
      <p>Results for {{ searchString }}</p>
      <ul v-if="searchResults.length > 0">
        <li v-for="movie in searchResults" :key="movie.id">{{ movie.Title }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default{
  name: 'search-results',
  props: {
    search: String,
    result: Array
  },
  data(){
    return{
      searchString: '',
      searchResults: [],
    }
  },
  methods:{
  },
  watch: {
    search() {
      this.searchString = this.search;
      console.log(this.searchString)
    },
    result() {
      this.searchResults = this.result;
      console.log(this.searchResults)
    }
  }
}
</script>

<style scoped>
</style>
