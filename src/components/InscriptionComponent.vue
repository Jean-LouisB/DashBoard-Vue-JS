<template>
    <div id="containerForm">
        <div id="formulaireLuimeme">
            <fieldset id="fieldsetIdentite">
                <legend>Votre identité</legend>
                <div class="question">
                    <label for="nom" id="labelNom">Votre nom :</label>
                    <input type="text" id="nom" name="nom" required pattern="^[A-Za-zà-ï_-]+$" v-model="userName">
                </div>
                <div class="question">
                    <label for="prenom" id="labelPrenom">Votre prénom :</label>
                    <input type="text" id="prenom" name="prenom" required pattern="^[A-Za-zà-ï_-]+$"
                        v-model="userFirstName">
                </div>
                <div class="question">
                    <label for="dateNaissance" id="labelDateNaissance">Date de naissance :</label>
                    <input type="date" id="dateNaissance" name="dateNaissance" required v-model="birthDate">
                </div>
            </fieldset>
            <fieldset id="fieldUser">
                <legend>
                    Utilisateur
                </legend>
                <div class="question">
                    <label for="email" id="labelMail">Votre e-mail :</label>
                    <input type="email" id="email" name="email" required
                        pattern="^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]{2,}$" v-model="email">
                </div>
                <div class="question">
                    <label for="password" id="labelPassword">Votre mot de passe :</label>
                    <input type="password" id="password" name="password" required v-model="userPassword">
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
                    <input type="text" id="adresse" name="adresse" required v-model="adress">
                </div>
                <div class="question">
                    <label for="ville" id="labelVille">Ville :</label>
                    <input type="text" id="ville" name="ville" class="formAutocomplete" required v-model="city">
                </div>
                <div class="question">
                    <label for="codePostal" id="labelCodePostal">Code postal :</label>
                    <input type="text" id="codePostal" name="codePostal" class="formAutocomplete" required
                        pattern="^[0-9]{5}$" v-model="cp">
                </div>


            </fieldset>
            <button id="inscriptionBtn" @click="addNewUser()">INSCRIPTION</button>
            <p v-if="newId">L'utilisateur {{ newId }} est bien créé</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { SERVER_URL } from '../config.js';
export default {
    name: "InscriptionComponent",

    data() {
        return {
            userName: "",
            userFirstName: "",
            userPassword: "",
            email: "",
            birthDate: "",
            adress: "",
            city: "",
            cp: "",
            newId:null,

        }
    },
    methods: {
        async addNewUser() {
            const idCreated = await this.newUserAuth()
                const newUser = { ...this.newUser, newIdAuth: idCreated };
                //console.log(newUser);
                try {
                    const response = await axios.post(`${SERVER_URL}newUser`, newUser);
                    const newUserId = response.data;
                    this.newId = newUserId;//sert juste de trace 
                } catch (error) {
                    console.error(error)
                }
                this.$router.replace('/Login')
            },
        async newUserAuth() {
            const newUserToAuth = {
                email: this.email,
                password: this.userPassword
            };
            try {
                const response = await axios.post(`${SERVER_URL}newUserAuth`, newUserToAuth);
                const newUserId = response.data;
                return newUserId;
            } catch (error) {
                console.log("Une erreur est survenue.");
            }
        },
    },

    computed: {
        newUser() {
            return {
                name: this.userName,
                firstname: this.userFirstName,
                birthDate: this.birthDate,
                email: this.email,
                adress: this.adress,
                city: this.city,
                cp: this.cp,
                createdAt: new Date()
            }
        },

    }
}

</script>
<style scoped>
#containerForm {
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
}

#formulaireLuimeme {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

}

fieldset {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}

input {
    margin-bottom: 10px;
    font-size: 1.2em;
}

input:focus {
    background-color: rgba(66, 111, 66, 0.534);
    color: white;
}

.invalidInput {
    background-color: brown;
}

.invalidLabel {
    color: red;
}

#validationBdd {

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

#validationBdd select {
    max-width: 300px;
    width: 80%;
    height: 2em;
    margin-top: 10px;
    margin-bottom: 20px;
}

#validationBdd button {
    background-color: white;
    color: var(--vert2);
    box-shadow: 2px 2px 2px var(--vert2);
    border-radius: 5px;
    max-width: 300px;
    width: 80%;
    height: 2.5em;
    margin-top: 10px;
    margin-bottom: 20px;
}

.question {
    display: flex;
    flex-direction: column;
    width: 100%;
}

#messageAlerte {
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

.redNotice {
    text-align: center;
    color: red;
    font-size: 2em;
}

.sortirX {
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.567);
    color: white;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}


@media screen and (min-width:800px) {
    #formulaireLuimeme {
        width: 90%;
        display: flex;

    }


    #fieldAdresse {
        grid-column: 1;
    }

    #fildAutres {
        grid-column: 2;
    }

    form>h1 {
        grid-column: 1 / span 2;

    }

    #inscriptionBtn {
        grid-column: 1 / span 2;
        width: 100%;
    }

    .question {
        width: 100%;

    }

    form>h1 {
        text-align: center;

    }

}
</style>