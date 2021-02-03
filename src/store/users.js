import UserService from '../api/UsersService'

export default {
    actions: {
        async fetchUsers ({ commit, dispatch }, id) {
            try {
                const response = await UserService.getAll(id)
                return response.data
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async fetchUserById ({ commit, dispatch }, id) {
            try {
                const response = await UserService.get(id)
                return response.data
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async createUser ({ commit, dispatch }, user) {
            try {
                const response = await UserService.create(user)
                return response.data
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async deleteUserById ({ commit, dispatch }, id) {
            try {
                const response = await UserService.delete(id)
                return response.data
            } catch (e) {
                commit('setError', e)
                throw e
            }
        }
    }
}