<template>
  <div id="app">
    <ul>
      <li v-for="specie in species" :key="specie.created">
        <p>
          {{ specie.name }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>

import Species from './services/species'

// import {mapState} from 'vuex'

export default {
  data() {
    return {
      species: []
    }
  },
  mounted() {
    Species.listSpecies().then(response => {
      // console.log(response.data.results)
      this.species = response.data.results
    })
    // this.$store.dispatch('listSpecies')
  },
  // computed: {
  //   ...mapState([
  //     'species'
  //   ])
  // }
}
</script>

<style lang="scss">

</style>
