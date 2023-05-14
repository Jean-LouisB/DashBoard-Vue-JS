<template>
  <nav>

    <routerLink :to="{ name: 'LoginComponent' }" v-show="!user">LOGIN</routerLink>
    <routerLink :to="{ name: 'Accueil' }" v-show="user">HOME</routerLink>
    <routerLink :to="{ name: 'CalculIMC'}" v-show="user">IMC</routerLink>
    <routerLink :to="{ name: 'ConvertisseurDevise'}" v-show="user">CHANGE</routerLink>
    <routerLink :to="{ name: 'BlogListPost'}" v-show="user">BLOG</routerLink>
    <a v-show="user" @click="logout()">LOG OUT</a>
    <!-- <routerLink :to="{}">INSCRIPTION</routerLink> -->
  </nav>
  <router-view v-if="user" class="routerLink"/>
  <LoginComponent v-else :errorMessage="errorMessage" @tryConnect="loginMethod($event)"></LoginComponent>
</template>

<script>
import { RouterLink } from "vue-router";
import LoginComponent from "./components/LoginComponent.vue";
import { login } from "./services/authentification";

export default {
  name: 'App',
  components: {
    RouterLink,
    LoginComponent
},
  data(){
    return{
      user: null,
      errorMessage:""

    }
  },
  methods:{
    controleEvent(event){
      console.log(event.param1);
      console.log(event.param2);
    },
    loginMethod(event) {
      this.user = login(event.param1,event.param2);
      this.errorMessage = this.user ? "" : "Authentification échouée."
    },
    logout(){
      this.user = null
    }
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
  font-size: 1.3em;
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
