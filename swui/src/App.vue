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
            <strong class="d-block">
              Specie Name
            </strong>

            {{ specie.name }}
          </p>

          <p>
            <strong class="d-block">
              Language
            </strong>

            {{ specie.language }}
          </p>

          <p>
            <strong class="d-block">
              Homeworld
            </strong>
          </p>

          <ul class="white--bg">
            <li v-for="planet in planets" :key="planet.created">
              {{ planet.name }}
            </li>
          </ul>

          <p>
            <strong>
              People
            </strong>
          </p>

          <ul class="white--bg">
            <li v-for="person in people" :key="person.created">
              {{ person.name }}
            </li>
          </ul>

          <br>
          <hr>
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
    this.listPlanets()
    this.listPeople()
  },
  components: {
    Header,
    Greeting
  },
  computed: {
    ...mapState([
      'species',
      'planets',
      'people'
    ])
  },
  methods: {
    ...mapActions([
      'listSpecies',
      'listPlanets',
      'listPeople',
    ])
  }
}
</script>

<style lang="scss">
  @import "./assets/sass/global";
</style>
