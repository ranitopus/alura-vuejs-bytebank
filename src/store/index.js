import Vue  from 'vue'
import Vuex from 'vuex'

import http from '@/http'

Vue.use(Vuex)

const state = {
  token:    localStorage.getItem('@ByteBank/access_token') || null,
  usuario:  localStorage.getItem('@ByteBank/user') ?
            JSON.parse(localStorage.getItem('@ByteBank/user')) :
            {}
}

const mutations = {
  DEFINIR_USUARIO_LOGADO(state, { access_token, user }) {
    state.token   = access_token
    state.usuario = user
    localStorage.setItem('@ByteBank/access_token', access_token)
    localStorage.setItem('@ByteBank/user',         JSON.stringify(user))
  },
  LIMPAR_USUARIO_LOGADO(state) {
    state.token   = null
    state.usuario = {}
    localStorage.removeItem('@ByteBank/access_token')
    localStorage.removeItem('@ByteBank/user')
  }
}

const actions = {
  efetuarLogin({ commit }, usuario) {
    return new Promise((resolve, reject) => {
      http.post(
        '/auth/login',
        usuario
      ).then(
        response => {
          commit('DEFINIR_USUARIO_LOGADO', response.data)
          resolve(response.data)
        }
      ).catch(
        error => reject(error)
      )
    })
  }
}

const getters = {
  usuarioEstaLogado: state => Boolean(state.token)
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
