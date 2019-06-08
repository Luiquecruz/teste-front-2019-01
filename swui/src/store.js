import Vue from 'vue'
import Vuex from 'vuex'

import { http } from './services/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    species: [],
    planets: [],
    people: []
  },
  mutations: {
    setSpecie (state, species) {
      state.species = species
    },
    setPlanet (state, planets) {
      state.planets = planets
    },
    setPeople (state, people) {
      state.people = people
    }
  },
  actions: {
    listSpecies ({ commit }) {
      http
        .get('species/')
        .then(response => {
          const speciesList = response.data.results
          commit('setSpecie', speciesList)
        })
        .catch(error => {
          console.log(error)
        })
    },
    listPlanets ({ commit }) {
      http
        .get('planets/')
        .then(response => {
          const planetsList = response.data.results
          commit('setSpecie', planetsList)
        })
        .catch(error => {
          console.log(error)
        })
    },
    listPeople ({ commit }) {
      http
        .get('people/')
        .then(response => {
          const peopleList = response.data.results
          commit('setPeople', peopleList)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})
