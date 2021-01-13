export default {
    namespaced:true,
    state: {
        isShowFooter: true,
        _token:''
    },
    mutations: {
        setFooter(state, arg) {
            state.isShowFooter = arg
        },
        setJwt(state, arg) {
            state._token = arg
            localStorage.setItem('_token',arg)
        }
    },
    actions: {
        
    },
    getters: {
        
    }
}