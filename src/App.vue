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
  <p id="connectHello" v-if="user">{{ user.userFirstName }} est connecté(e)</p>
  <router-view v-if="user" class="routerLink"/>
  <LoginComponent v-else :errorMessage="errorMessage" @tryConnect="loginMethod($event)"></LoginComponent>
</template>

<script>
import { RouterLink } from "vue-router";
import LoginComponent from "./components/LoginComponent.vue";
import { login, usersData } from "./services/authentification";

export default {
  name: 'App',
  components: {
    RouterLink,
    LoginComponent
},
  data(){
    return{
      user: null,
      errorMessage:"",
      users:[]
    }
  },
  methods:{
    loginMethod(event) {
      this.user = login(event.param1,event.param2);
      this.errorMessage = this.user ? "" : "Authentification échouée."
    },
    logout(){
      this.user = null
    }
  },
  created(){
    this.users = usersData
  },
  updated(){
    console.log(this.user);

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
  margin-top: 10px;
}
#connectHello{
  margin-top: 80px;
  text-align: right;
}
</style>
