

const mutations = {
    getUserInfo(state){
        state.userInfo = window.sessionStorage.getItem('userInfo')
    },
    SET_USERINFO(state,v){
        state.userInfo = v;
    },
}


export default mutations