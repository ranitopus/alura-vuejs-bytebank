<template>
  <div class="container">
    <h1>Novo Usuário</h1>

    <form @submit.prevent="enviarFormulario()">
      <div class="form-group">
        <label for="nome">Nome</label>
        <input
          type="text"
          name="nome"
          class="form-control"
          v-model="usuario.nome"
        />
      </div>

      <div class="form-group">
        <label for="email">E-mail</label>
        <input
          type="text"
          name="email"
          class="form-control"
          v-model="usuario.email"
        />
      </div>

      <div class="form-group">
        <label for="senha">Senha</label>
        <input
          type="password"
          name="senha"
          class="form-control"
          v-model="usuario.senha"
        />
      </div>

      <button type="submit" class="btn btn-primary btn-block">Salvar</button>
    </form>
  </div>
</template>

<script>
  export default {
    data: () => ({
      usuario: {
        nome:  '',
        email: '',
        senha: ''
      }
    }),
    methods: {
      enviarFormulario() {
        console.log(this.usuario)
        this.$http.post(
          '/auth/register',
          this.usuario
        ).then(
          response => {
            console.log(response.data)
            this.$router.push({name: 'login'})
          }
        ).catch(
          error => console.log(error)
        )
      }
    }
  }
</script>

<style scoped>
</style>
