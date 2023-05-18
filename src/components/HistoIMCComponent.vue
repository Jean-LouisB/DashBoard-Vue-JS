<template>
    <button @click="getHistoImc">Voir l'historique</button>
        <div v-for="(item, index) in historique" :key="index">
            <p>Date : {{ item.imcDetail.date }}</p>
            <p>Taille : {{ item.imcDetail.taille }} cm</p>
            <p>Poids : {{ item.imcDetail.poids }} kg</p>
            <p>IMC : {{ item.imcDetail.imc }}</p>
        </div>
</template>

<script>
import axios from 'axios';
import { SERVER_URL } from '../config.js';

export default {
    props:['userIsConnected'],
    data(){
        return {
            historique:null
        }
    },
    methods:{
        async getHistoImc(){
            const idUserConnected = {
                params:{
                    id:this.userIsConnected.newIdAuth
                }
            };
            const response = await axios.get(`${SERVER_URL}imc/histo`, idUserConnected);
            const histoImc = response.data;
            this.historique = histoImc;
        }
    }
}
</script>
<style scoped>
div{
    border-bottom: 1px solid brown;
}
</style>