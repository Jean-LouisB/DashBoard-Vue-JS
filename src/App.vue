<template>
  <nav>

    <routerLink :to="{ name: 'LoginComponent' }" v-show="!userData" @click="signIntoggle">LOGIN</routerLink>
    <routerLink :to="{ name: 'Accueil' }" v-show="userData">HOME</routerLink>
    <routerLink :to="{ name: 'CalculIMC' }" v-show="userData">IMC</routerLink>
    <routerLink :to="{ name: 'ConvertisseurDevise' }" v-show="ususerDataer">CHANGE</routerLink>
    <routerLink :to="{ name: 'BlogListPost' }" v-show="userData">BLOG</routerLink>
    <!-- <routerLink :to="{ name: 'InscriptionComponent'}">Inscrivez-vous</routerLink> -->

    <!-- <routerLink :to="{ name: 'TestConnectServer'}">TEST</routerLink> -->
    <button v-show="userData" @click="logout()">LOG OUT</button>
  </nav>
  <p id="whoIsConnect" v-if="userData">{{ userData.firstname }} est connecté.</p>
  <router-view v-if="userData || signin" class="routerLink" :userConnected="userData" @signInok="signIntoggle"/>
  <LoginComponent v-show="!signin && !userData" @connected="loginMethod($event)"></LoginComponent>
  <div v-show="!userData" id="btnInscriptionContainer">
    <button id="btnInscription" v-if="!signin" @click="redirectInscription">Inscription</button>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import LoginComponent from "./components/LoginComponent.vue";
//import { usersData } from "./services/authentification";
import axios from 'axios';
import { SERVER_URL } from './config.js';


export default {
  name: 'App',
  components: {
    RouterLink,
    LoginComponent,

  },
  data() {
    return {
      user: null,
      signin: null,
      userData: null
    }
  },
  methods: {
    signIntoggle(){
      this.signin = null
    },
    loginMethod(user) {
      this.user = user.data;
      this.$router.replace('/');
      this.userIsConnect()

    },
    logout() {
      localStorage.removeItem('idConnected')
      this.userData = null;
      this.user = null;
      this.$router.replace('/')
    },
    redirectInscription() {
      this.signin = true;
      this.$router.replace('/InscriptionComponent');
    },
    async userIsConnect() {
      if (this.user) {
        const reqBody = {
          params: {
            numId: this.user
          }
        }
        const response = await axios.get(`${SERVER_URL}userProfile`, reqBody);
        const profile = response.data;
        this.userData = profile[0].userDetail
        localStorage.setItem('idConnected', profile[0].userDetail.newIdAuth)
      }
    }
  },
  async mounted() {
    if (localStorage.getItem('idConnected')) {
      const idconnected = localStorage.getItem('idConnected')
      const reqBody = {
        params: {
          numId: idconnected
        }
      }
      const response = await axios.get(`${SERVER_URL}userProfile`, reqBody);
      const profile = response.data;
      this.userData = profile[0].userDetail
      this.$router.replace('/');

    }
  }
}
</script>

<style scoped>
nav {
  width: 100%;
  height: 70px;
  background-color: brown;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

}

#whoIsConnect {
  margin-top: 90px;
  text-align: right;
}

a {
  text-decoration: none;
  font-size: 1.3em;
  color: white;
}

nav button {
  text-decoration: none;
  font-size: 1.3em;
  color: white;
  background-color: transparent;
  border: none;
}

#btnInscription {
  width: 50%;
  font-size: 1.2em;
  margin-bottom: 15px;
  padding: 5px;
}
#btnInscriptionContainer{
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>

<style>
* {
  box-sizing: border-box;
}

.routerLink {
  margin-top: 10px;
}
</style>
