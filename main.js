const { createApp } = Vue;

createApp({
    data() {
        return {
            toDo: [
                "Fare i progetti pomeridiani",
                "Continuare il videocorso di CS50",
                "Giocare",
                "Imparare"
            ],
            task : 0

        }
    },

    methods: {
        done(indice) {
            this.toDo.splice(indice);
        }
    }
}).mount('.container-lista')