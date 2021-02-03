import Vue from 'vue'
import Vuex from 'vuex'
import users from './users'
import searchCity from './searchCity';
import forecast from './forecast';
import favorite from './favoriteCountries';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        error: null
    },
    mutations: {
        setError (state, error) {
            state.error = error
        },
        clearError (state) {
            state.error = null
        }
    },
    getters: {
        error: s => s.error
    },
    modules: {
        users,
		searchCity,
		forecast,
		favorite,
    }
})