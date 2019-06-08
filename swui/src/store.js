import Vue from 'vue'
import Vuex from 'vuex'

import { http } from './services/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    species: []
  },
  mutations: {
    setSpecie(state, species) {
      state.species = species
    }
  },
  actions: {
    listSpecies({commit}) {
      http
        .get('species/')
        .then(response => {
          const speciesList = response.data.results
          commit('setSpecie', speciesList)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})
