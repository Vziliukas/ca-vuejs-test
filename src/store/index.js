import axios from 'axios'

const baseUrl = 'http://localhost:5000/api/parts'

const types = {
  SET_PARTS: 'SET_PARTS',
  SET_PART: 'SET_PART',
  UPDATE_PART: 'UPDATE_PART',
  ADD_PART: 'ADD_PART',
  DELETE_PART: 'DELETE_PART',
  SET_SORTBY: 'SET_SORTBY',
  SET_FILTER: 'SET_FILTER',
  CLEAR_FILTER: 'CLEAR_FILTER'
}

export default {
  state: {
    parts: [],
    part: {},
    sortBy: false,
    filters: []
  },
  mutations: {
    [types.SET_PARTS] (state, parts) {
      state.parts = parts
    },
    [types.SET_PART] (state, part) {
      state.part = part
    },
    [types.UPDATE_PART] (state, part) {
      state.parts = state.parts.map(item => item._id === part._id ? part : item)
    },
    [types.ADD_PART] (state, part) {
      state.parts = [...state.parts, part]
    },
    [types.DELETE_PART] (state, part) {
      state.parts = state.parts.filter(item => item._id !== part._id)
    },
    [types.SET_SORTBY] (state, key) {
      state.sortBy = key
    },
    [types.SET_FILTER] (state, filter) {
      state.filters = [...state.filters, filter]
    },
    [types.CLEAR_FILTER] (state) {
      state.filters = []
    }
  },
  actions: {
    async getParts ({ commit }) {
      const { data } = await axios.get(baseUrl)

      commit(types.SET_PARTS, data.data)
    },
    async getSinglePart ({ commit, getters }, id) {
      let part = getters.singlePart(id)

      if (!part) {
        const response = await axios.get(`${baseUrl}/${id}`)
        part = response.data.data
      }

      commit(types.SET_PART, part)
    },
    editPart ({ commit, getters }, part) {
      return new Promise(async resolve => {
        const response = await axios.patch(`${baseUrl}/${part._id}`, part)

        commit(types.UPDATE_PART, part)
        resolve(response)
      })
    },
    addPart ({ commit, getters }, part) {
      return new Promise(async resolve => {
        const response = await axios.post(baseUrl, part)

        commit(types.ADD_PART, part)
        resolve(response)
      })
    },
    deletePart ({ commit, getters }, id) {
      return new Promise(async resolve => {
        const response = await axios.delete(`${baseUrl}/${id}`)
        const parts = getters.parts.filter(part => part._id !== id)

        commit(types.SET_PARTS, parts)
        resolve(response)
      })
    },
    sortBy ({ commit }, key) {
      commit(types.SET_SORTBY, key)
    },
    resetSort ({ commit }) {
      commit(types.SET_SORTBY, false)
    },
    setFilter ({ commit }, filter) {
      commit(types.SET_FILTER, filter)
    },
    clearFilters ({ commit }) {
      commit(types.CLEAR_FILTER)
    }
  },
  getters: {
    part: state => state.part,
    singlePart: state => (id) => state.parts.find(part => part._id === id),
    parts: state => {
      let parts = [...state.parts]
      const { sortBy } = state

      if (sortBy) {
        parts = parts.sort((part1, part2) => {
          if (sortBy === 'price' || sortBy === 'year') {
            return part1[sortBy] - part2[sortBy]
          } else {
            return (part1[sortBy] > part2[sortBy]) ? 1 : -1
          }
        })
      }

      return parts
    }
  }
}
