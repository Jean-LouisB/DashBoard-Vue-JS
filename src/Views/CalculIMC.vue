<template>
    <div id="container">
        <H1>Calculez votre I.M.C.</H1>
        <p v-if="message">{{ message }}</p>
        <section id="formulaire">

            <div class="question">
                <label for="nom" id="labelNom">Entrez votre nom : </label>
                <input type="text" id="nom" v-model="nom">
            </div>
            <div class="question">
                <label for="taille" id="labelTaille">Votre taille en cm :</label>
                <input type="number" id="taille" v-model="taille">
            </div>
            <div class="question">
                <label for="poids" id="labelPoid">Votre poids en kg :</label>
                <input type="number" id="poids" v-model="poids">
            </div>

            <button id="calculBtn" @click="calculImc()">CALCUL</button>
        </section>

        <section id="verdict" v-show="imc>0">
            <p class="verdictP">{{ nom }}</p>
            <p class="verdictP">Votre IMC est de <span class="redText">{{ monImc }}</span></p>
            <p class="verdictP">Vous avez une corpulence<br><span class="redText">{{ verdict }}</span></p>
            <img :src="image" alt="Avatar">
        </section>
        <section>
            <HistoIMCComponent :userIsConnected="userConnected"></HistoIMCComponent>
        </section>
    </div>
</template>

<script>
import axios from 'axios';
import { SERVER_URL } from '../config.js';
import HistoIMCComponent from '@/components/HistoIMCComponent.vue';
export default {
    name: "CalculIMC",
    components:{
        HistoIMCComponent
    },
    data() {
        return {
            nom: "",
            taille: 0,
            poids: 0,
            imc: 0,
            verdict: "",
            image: "",
            message:""
        }
    },
    props:['userConnected'],
    methods: {
        calculImc() {
            let taille = this.taille / 100;
            this.imc = this.poids / (taille * taille);
            this.verdictRendu();
            this.recImcData()
        },
        verdictRendu() {
            const maigre = {
                verdict: "maigre",
                image: require("../assets/img/maigre.jpg")
            };
            const normal = {
                verdict: "normale",
                image: require("../assets/img/normal.jpg")
            };
            const surpoids = {
                verdict: "en surpoids",
                image: require("../assets/img/surpoids.jpg")
            };
            const obese = {
                verdict: "obèse",
                image: require("../assets/img/obese.jpg")
            };
            if (this.imc < 18.5) {
                this.verdict = maigre.verdict;
                this.image = maigre.image;
            } else if (this.imc >= 18.5 && this.imc < 25) {
                this.verdict = normal.verdict;
                this.image = normal.image;
            } else if (this.imc >= 25 && this.imc < 35) {
                this.verdict = surpoids.verdict;
                this.image = surpoids.image;
            } else if (this.imc >= 35){
                this.verdict = obese.verdict;
                this.image = obese.image;
            }
        },
        async recImcData(){
            const imcData = {
                data:{
                taille: this.taille,
                poids: this.poids,
                imc: this.imc.toFixed(2),
                date: new Date(),
                idUser: this.userConnected.newIdAuth,
                nomImc: this.nom
                }
            }
            try {
                const response = await axios.post(`${SERVER_URL}newImc`,imcData);
                const message = response.data;
                this.message = message;
            } catch (error) {
                console.log(error);
            }
        }
    },
    created(){
        this.nom = this.userConnected.firstname+" "+this.userConnected.name
    },
    computed:{
        monImc(){
            return this.imc.toFixed(1)
        }
    }
    
}
</script>

<style scoped>
#container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
h1 {
    color: blue;
}
section{
    width:50%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
}
.question{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
input, label{
    margin:5px 0;
    height: 30px;
    font-size: 1.5em;
    text-align: center;
    padding: 3px;
}
button{
    margin: 5px 0;
    height: 50px;
    font-size: 1.5em;
}
#verdict{
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#verdict>img{
    max-width: 200px ;
}
.verdictP{
    font-size: 1.2em;
    font-weight: bold;
    font-size: 1.5em;
    text-align: center;

}
.redText{
    color:red;
}
</style>