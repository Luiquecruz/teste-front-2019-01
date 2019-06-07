import { http } from './config'

export default {
  listSpecies: () => {
    return http.get('species')
  }
}
