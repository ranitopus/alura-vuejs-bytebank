<template>
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <router-link class="nav-link" :to="{name: 'home'}">
        Home
      </router-link>
    </li>

    <li class="nav-item">
      <router-link class="nav-link" :to="{name: 'gerentes'}">
        Gerentes
      </router-link>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="#" @click.prevent="efetuarLogout()">
        Sair
      </a>
    </li>
  </ul>
</template>

<script>
  import { logoutMixin } from '@/mixins'

  export default {
    mixins: [
      logoutMixin
    ]
  }
</script>

<style scoped>
</style>
