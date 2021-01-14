<template>
  <div>
    <section>
      <p>Results for {{ searchString }}</p>
      <ul v-if="searchResults.length > 0">
        <li v-for="result in searchResults" :key="result.index">{{ result.Title }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default{
  name: 'search-results',
  props: {
    search: {
      type: String
    },
    result: {

    }
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
    },
    result() {
      this.searchResults = this.result;
    }
  }
}
</script>

<style scoped>
</style>
