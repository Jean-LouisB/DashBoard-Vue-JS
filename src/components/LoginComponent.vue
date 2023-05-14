<template>
    <section>
        <h1>Connectez-vous</h1>
        <div id="formulaire">
            <p class="redNotice" v-if="errorMessage">{{ errorMessage }}</p>
            <input type="text" id="identifiant" name="identifiant" placeholder="Votre identifiant"
                v-model="identifiantSaisi">
            <input type="password" id="password" name="password" placeholder="Votre mot de passe" v-model="passwordSaisi">
            <button @click="$emit('tryConnect', { param1: identifiantSaisi, param2: passwordSaisi })">VALIDER</button>
        </div>

    </section>
</template>
<script>

export default {
    name: "LoginComponent",
    props: ['errorMessage'],
    data() {
        return {
            identifiantSaisi: "",
            passwordSaisi: ""
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
</style>