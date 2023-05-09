<template>
  <nav>
    <routerLink :to="{ name: 'Accueil' }">HOME</routerLink>
    <routerLink :to="{ name: 'CalculIMC'}">IMC</routerLink>
    <routerLink :to="{ name: 'ConvertisseurDevise'}">CHANGE</routerLink>
    <!-- <routerLink :to="{}">INSCRIPTION</routerLink> -->
  </nav>
  <router-view />
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: 'App',
  components: {
    RouterLink,
  }
}
</script>

<style scoped>
nav{
  width: 100%;
  height: 70px;
  background-color: brown;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
a{
  text-decoration: none;
  font-size: 1.5em;
  color: white;
}
</style>
