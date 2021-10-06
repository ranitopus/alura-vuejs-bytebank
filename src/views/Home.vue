<template>
  <div class="container">
    <div class="jumbotron mt-2">
      <h1 class="display-4">Bem-vindo!</h1>

      <p>Aplição disponível para listagem dos gerentes do nosso banco.</p>

      <button 
        class="btn btn-danger"
        v-if="usuarioEstaLogado"
        @click="efetuarLogout()"
      >
        Sair
      </button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import { logoutMixin } from '@/mixins'

  export default {
    name: 'home',
    mixins: [
      logoutMixin
    ],
    computed: {
      ...mapGetters(['usuarioEstaLogado'])
    }
  }
</script>
