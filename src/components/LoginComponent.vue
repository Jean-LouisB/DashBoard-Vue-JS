<template>
    <section>
        
        <div id="formulaire" v-show="!demandeInscription">
            <h1>Connectez-vous</h1>
            <p class="redNotice" v-if="errorMessage">{{ errorMessage }}</p>
            <input type="text" id="identifiant" name="identifiant" placeholder="Votre identifiant (email)"
                v-model="identifiantSaisi">
            <input type="password" id="password" name="password" placeholder="Votre mot de passe" v-model="passwordSaisi">
            <button @click="$emit('tryConnect', { param1: identifiantSaisi, param2: passwordSaisi })">VALIDER</button>
        </div>
        <p id="btnP" @click="demandeInscriptionToggle()">Inscrivez-vous</p>
        <InscriptionComponent v-show="demandeInscription"></InscriptionComponent>
        <p id="btnP" v-show="demandeInscription" @click="demandeInscriptionToggle()">retour</p>

    </section>
</template>
<script>
import InscriptionComponent from "./InscriptionComponent"
export default {
    components:{
          InscriptionComponent
    },
  
    name: "LoginComponent",
    props: ['errorMessage'],
    data() {
        return {
            identifiantSaisi: "",
            passwordSaisi: "",
            demandeInscription:false
        }
    },
    methods:{
        demandeInscriptionToggle(){
            this.demandeInscription = !this.demandeInscription
        }
    },
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