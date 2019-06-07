import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    species: []
  },
  mutations: {
    SET_SPECIE (state, speciesList) {
      state.speciesList = speciesList
    }
  },
  actions: {
    listSpecies({commit}) {
      axios
          .get('https://swapi.co/api/species/')
          .then(response => {
            this.speciesList = response.data.results
            commit('SET_SPECIE', speciesList)
          })
          .catch(error => {
            console.log(error)
          })
    }
  }
})
