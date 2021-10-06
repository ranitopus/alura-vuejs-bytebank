export const logoutMixin = {
  methods: {
    efetuarLogout() {
      this.$store.commit('LIMPAR_USUARIO_LOGADO')
      this.$router.push({name: 'login'})
    }
  }
}
