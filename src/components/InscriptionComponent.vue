<template>

        <div id="containerForm">
        <div id="formulaireLuimeme">
            <fieldset id="fieldsetIdentite">
                <legend>Votre identité</legend>
                <div class="question">
                    <label for="nom" id="labelNom">Votre nom :</label>
                    <input type="text" id="nom" name="nom" required pattern="^[A-Za-zà-ï_-]+$">
                </div>
                <div class="question">
                    <label for="prenom" id="labelPrenom">Votre prénom :</label>
                    <input type="text" id="prenom" name="prenom" required  pattern="^[A-Za-zà-ï_-]+$">
                </div>
                <div class="question">
                    <label for="dateNaissance" id="labelDateNaissance">Date de naissance :</label>
                    <input type="date" id="dateNaissance" name="dateNaissance" required>
                </div>
            </fieldset>
            <fieldset id="fieldUser">
                <legend>
                    Utilisateur
                </legend>
                <div class="question">
                    <label for="email" id="labelMail">Votre e-mail :</label>
                    <input type="email" id="email" name="email" required  pattern="^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]{2,}$">
                </div>
                <div class="question">
                    <label for="password" id="labelPassword">Votre mot de passe :</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <div class="question">
                    <label for="passwordConfirm" id="labelPasswordConfirm">Confirmer votre mot de passe :</label>
                    <input type="password" id="passwordConfirm" name="passwordConfirm" required>
                </div>

            </fieldset>
            <fieldset id="fieldAdresse">
                 <legend>Votre adresse</legend>
                <div class="question" id="inputAdresse">
                    <label for="adresse" id="labelAdresse">Votre adresse :</label>
                    <input type="text" id="adresse" name="adresse" required >
                </div>
                <div class="question">
                    <label for="ville" id="labelVille">Ville :</label>
                    <input type="text" id="ville" name="ville" class="formAutocomplete" required>
                </div>
                <div class="question">
                    <label for="codePostal" id="labelCodePostal">Code postal :</label>
                    <input type="text" id="codePostal" name="codePostal" class="formAutocomplete" required pattern="^[0-9]{5}$">
                </div>
            
                
            </fieldset>
            <button id="inscriptionBtn" @click="alerteToggle()">INSCRIPTION</button>
            
        </div>
<div v-show="alerte" id="messageAlerte">
    <p class="redNotice">La persistance des données n'est pas activée. <br>L'incription n'est donc pas activée.</p>
    <div class="sortirX" @click="alerteToggle()">X</div>
</div>

        </div>


</template>
<script>

export default {
    name: "InscriptionComponent",
    
    data() {
        return {
            userName:"",        
            userFirstName:"",
            userPassword:"",
            alerte:false
        }
    },
    methods:{
        alerteToggle(){
            this.alerte = !this.alerte
        }
    }
}

</script>
<style scoped>
#containerForm{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
}

#formulaireLuimeme{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

}
fieldset{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}
input{
    margin-bottom: 10px;
    font-size: 1.2em;
}
input:focus{
    background-color: rgba(66, 111, 66, 0.534);
    color: white;
}
.invalidInput{
    background-color: brown;
}
.invalidLabel{
    color: red;
}

#validationBdd{
    
    position: absolute;
    top: 0;
    background-color: rgba(255, 255, 255, 0.90);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2em;
}
#validationBdd select{
    max-width: 300px;
    width:80%;
    height: 2em;
    margin-top: 10px;
    margin-bottom: 20px;
}
#validationBdd button{
    background-color: white;
    color: var( --vert2);
    box-shadow: 2px 2px 2px var(--vert2);
    border-radius: 5px;
    max-width: 300px;
    width:80%;
    height: 2.5em;
    margin-top: 10px;
    margin-bottom: 20px;
}
.question{
    display: flex;
    flex-direction: column;
    width: 100%;
}

#messageAlerte{
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.614);
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
.redNotice{
    text-align: center;
    color: red;
    font-size: 2em;
}
.sortirX{
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.567);
    color: white;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}


@media screen and (min-width:800px){
    #formulaireLuimeme{
        width: 90%;
        display: flex;

    }


    #fieldAdresse{
        grid-column: 1;
    }
    #fildAutres{
        grid-column: 2;
    }
    form>h1{
        grid-column: 1 / span 2;

    }

    #inscriptionBtn{
        grid-column: 1 / span 2;
        width: 100%;
    }
    .question{
        width: 100%;

    }

    form>h1{
        text-align: center;

    }

}

</style>