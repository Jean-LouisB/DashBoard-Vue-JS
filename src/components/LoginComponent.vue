<template>
    <section>
        
        <div id="formulaire" v-show="!demandeInscription">
            <h1>Connectez-vous</h1>
            <p class="redNotice" v-if="errorMessage">{{ errorMessage }}</p>
            <input type="text" id="identifiant" name="identifiant" placeholder="Votre identifiant (email)"
                v-model="email">
            <input type="password" id="password" name="password" placeholder="Votre mot de passe" v-model="password">
            <button @click="login()">VALIDER</button>
        </div>
        
    </section>

</template>
<script>
import axios from 'axios';
import { SERVER_URL } from '../config.js';

export default {
    name: "LoginComponent",
    data() {
        return {
            email:"",
            password:"",
            errorMessage:null
        }
    },
    methods:{
        demandeInscriptionToggle(){
            this.demandeInscription = !this.demandeInscription
        },
        async login(){
            this.errorMessage = null;
            const testUserAuth = {
                email:this.email,
                password: this.password
            }
            try {
                const response = await axios.post(`${SERVER_URL}login`, testUserAuth);
                const userConnected = response
                this.$emit('connected',userConnected)
            } catch (error) {
                       this.errorMessage = "Erreur d'identifiants, recommencez"
            }
        }
        }
}

</script>
<style scoped>

h1 {
    margin-top: 90px;
}

section {
    display: flex;
    flex-direction: column;
    align-items: center;

}
#formulaire{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;

}
input{
    width: 100%;
    font-size: 1.2em;
    margin-bottom: 15px;
    padding: 5px;
}
button{
    width: 100%;
    font-size: 1.2em;
    margin-bottom: 15px;
    padding: 5px;
}
.redNotice{
    color:red
}
#btnP{
    padding: 10px;
    border: 1px solid black;
}
</style>