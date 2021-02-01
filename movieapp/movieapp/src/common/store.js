import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        nomCount: 0,
        moveies: [],
    },
    mutations: {
        setNomCount(state, payload) {
            state.nomCount = payload;
        }
    }
})