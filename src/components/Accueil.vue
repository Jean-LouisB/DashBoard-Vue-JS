<template>
    <article>
            <div id="titre">
                <h1>{{organisation}} <span>{{ structure }}</span></h1>
            </div>

            <ul>
                <li>Adresse : {{ adresse }}</li>
                <li>Téléphone : {{ telephone }}</li>
            </ul>
            <h3>Mission :</h3>
            <p>{{ mission }}</p>
        </article>
</template>

<script>
export default {
    name:"AccueilView",
    data(){
        return{
            organisation:  "CEGEFOS",
            structure : "SARL",
            adresse : "28 Rue Xavier Bichat, 72000 Le Mans, France",
            telephone : "+33 2 43 52 36 45",
            mission : "La société est spécialisée dans les formations numériques en ligne. Elle assure un contenu pédagogique et varié ainsi qu’une assistance aux apprenants."
        }
    }
    
}

</script>

<style>
h1{
    color: blue;
}

</style>