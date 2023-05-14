<template>
  <nav>
    <routerLink :to="{ name: 'Accueil' }">HOME</routerLink>
    <routerLink :to="{ name: 'CalculIMC'}">IMC</routerLink>
    <routerLink :to="{ name: 'ConvertisseurDevise'}">CHANGE</routerLink>
    <routerLink :to="{ name: 'BlogListPost'}">BLOG</routerLink>
    <!-- <routerLink :to="{}">INSCRIPTION</routerLink> -->
  </nav>
  <router-view class="routerLink"/>
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
  position: fixed;
  top:0;
  left:0;
  
}
a{
  text-decoration: none;
  font-size: 1.5em;
  color: white;
}
</style>
<style>
*{
  box-sizing: border-box;
}
.routerLink{
  margin-top: 90px;
}
</style>
