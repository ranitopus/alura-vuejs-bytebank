<template>
  <div class="container">
    <h1>Login</h1>

    <form @submit.prevent="efetuarLogin()">
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="text" name="email" class="form-control" v-model="usuario.email" />
      </div>

      <div class="form-group">
        <label for="senha">Senha</label>
        <input type="password" name="senha" class="form-control" v-model="usuario.senha" />
      </div>

      <p class="alert alert-danger" v-if="mensagemErro" @click="mensagemErro = ''">{{ mensagemErro }}</p>

      <button type="submit" class="btn btn-primary btn-block">Entrar</button>
      <router-link :to="{ name: 'novo.usuario'}">
        Não possui um cadastro? Cadastre-se aqui!
      </router-link>
    </form>
  </div>
</template>

<script>
  export default {
    data: () => ({
      usuario: {
        email: '',
        senha: ''
      },
      mensagemErro: ''
    }),
    methods: {
      efetuarLogin() {
        console.log(this.usuario)
        this.$store.dispatch(
          'efetuarLogin',
          this.usuario
        ).then(
          result => {
            console.log(result)
            this.mensagemErro = ''
            this.$router.push({name: 'gerentes'})
          }
        ).catch(
          error => {
            console.log(error)
            if (error.request.status === 401) this.mensagemErro = 'Login ou senha inválido(s).'
          }
        )
      }
    }
  }
</script>

<style scoped>
</style>
