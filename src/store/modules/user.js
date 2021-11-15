export default {
    state: ()=> ({
        name: 'Buster'
    }),
    getters: {},
    mutations: {
        SET_NAME(state, nme) {
            state.name = nme
        }
    },
    actions: {
        saveName( { commit }, data ){
            commit('SET_NAME', data)
        }
    },
}