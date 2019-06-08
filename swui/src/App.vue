<template>
  <div id="app">

    <Header></Header>

    <Greeting></Greeting>

    <div class="container">
      <h3>
        Listing species
      </h3>

      <ul class="light--bg">
        <li class="dark" v-for="specie in species" :key="specie.created">
          <p>
            {{ specie.name }}
          </p>
        </li>
      </ul>
    </div> <!-- end container -->

  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Greeting from '@/components/Greeting.vue'

import { mapState, mapActions } from 'vuex'

export default {
  mounted () {
    this.listSpecies()
  },
  components: {
    Header,
    Greeting
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
  @import "./assets/sass/global";

</style>
