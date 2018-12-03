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
        euExchange: 0,
        usdExchange: ""
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
        euExchange(state, euExchange) {
          state.euExchange = euExchange;
        },
        usdExchange(state, usdExchange) {
          state.usdExchange = usdExchange;
        }

      },
      strict: options.debug
    })
  }
}