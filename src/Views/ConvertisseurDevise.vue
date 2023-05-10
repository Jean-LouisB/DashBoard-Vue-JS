<template>
    <div id="mainContainer">
        <H1>Convertissez vos devises</H1>
        <section>
            <div class="container">
                <label for="inputUSD">Montant en USD :</label>
                <input type="number" v-model="usdToChange" @input="convertCurrency($event)" id="inputUSD">
            </div>
            <div class="container">
                <label for="inputEuro">Montant en Euro :</label>
                <input type="number" v-model="euroToChange" @input="convertCurrency($event)" id="inputEuro">
            </div>
            <div class="container">
                <label for="inputYuan">Montant en Yuan :</label>
                <input type="number" v-model="yuanToChange" @input="convertCurrency($event)" id="inputYuan">
            </div>
            <div class="container">
                <button v-if="showRates === false" @click="showRatesToggle()">Voir les taux utilisés</button>
                <button v-else @click="showRatesToggle()">Masquer les taux utilisés</button>
            </div>
        </section>
        <section v-show="showRates">
            <p v-for="(rate, index) in this.rates" :key="index"> {{ rate.from }} => {{ rate.to }} : {{ rate.rate }}</p>
            <p>Taux en date du 10 mai 2023.</p>
            <p>Ces taux sont intégrés en dur dans un fichier json.</p>
        </section>
    </div>
</template>

<script>


export default {
    name: "ConvertisseurDevise",
    data() {
        return {
            rates: require('../assets/dataDevise.json'),
            usdToChange: 0,
            euroToChange: 0,
            yuanToChange: 0,
            showRates: false,
        }
    },
    methods: {
        showRatesToggle() {
            this.showRates = !this.showRates;
        },
        convertCurrency(event) {
            const from = event.target.id;
            console.log(from);

            if (from === "inputUSD") {
                let rateFrom = this.rates.filter((taux) => taux.from === "usd")
                for (let i = 0; i <= rateFrom.length - 1; i++) {
                    if (rateFrom[i].to == "euro") {
                        this.euroToChange = (this.usdToChange * rateFrom[i].rate).toFixed(2);
                    } else if (rateFrom[i].to == "yuan") {
                        this.yuanToChange = (this.usdToChange * rateFrom[i].rate).toFixed(2);
                    } else {
                        console.log("Something wrong happed");
                    }
                }
            } else if (from === "inputEuro") {
                let rateFrom = this.rates.filter((taux) => taux.from === "euro")
                for (let i = 0; i <= rateFrom.length - 1; i++) {
                    if (rateFrom[i].to == "usd") {
                        this.usdToChange = (this.euroToChange * rateFrom[i].rate).toFixed(2);
                    } else if (rateFrom[i].to == "yuan") {
                        this.yuanToChange = (this.euroToChange * rateFrom[i].rate).toFixed(2);
                    } else {
                        console.log("Something wrong happed");
                    }
                }
            } else if (from === "inputYuan") {
                let rateFrom = this.rates.filter((taux) => taux.from === "yuan")
                for (let i = 0; i <= rateFrom.length - 1; i++) {
                    if (rateFrom[i].to == "euro") {
                        this.euroToChange = (this.yuanToChange * rateFrom[i].rate).toFixed(2);
                    } else if (rateFrom[i].to == "usd") {
                        this.usdToChange = (this.yuanToChange * rateFrom[i].rate).toFixed(2);
                    } else {
                        console.log("Something wrong happed");
                    }
                }
            }

        },
    }
}
</script>

<style scoped>
h1 {
    color: blue;
}

.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10px 0;
}

#mainContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

section {
    width: 50%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
}

input,
label {

    font-size: 1.5em;
    text-align: center;
}

button {
    width: 100%;
    font-size: 1.5em;
    padding: 10px 0;
}
</style>