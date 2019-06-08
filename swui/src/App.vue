<template>
  <div id="app">

    <h3>
      Listing species
    </h3>

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

import { mapState, mapActions } from 'vuex'

export default {
  mounted() {
    this.listSpecies()
  },
  computed: {
    ...mapState([
      'species'
    ])
  },
  methods: {
    ...mapActions([
      'listSpecies'
    ])
  }
}
</script>

<style lang="scss">

</style>
