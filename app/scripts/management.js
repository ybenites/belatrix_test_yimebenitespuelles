import Vuex from 'vuex'

export default class Management {
  constructor(Vue, options) {
    Vue.use(Vuex)

    this.store = new Vuex.Store({
      state: {
        loading: false,
        fullHeight: window.innerHeight,
        fullWidth: window.innerWidth,
        identifier: null,
        datafixer: null
      },
      getters: {},
      mutations: {
        loading(state, value) {
          state.loading = value
        },
        fullHeight(state, height) {
          state.fullHeight = height
        },
        fullWidth(state, width) {
          state.fullWidth = width
        },
        identifier(state, identifier) {
          state.identifier = identifier
        },
        datafixer(state, datafixer) {
          state.datafixer = datafixer;
        }
      },
      strict: options.debug
    })
  }
}