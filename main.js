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
            task : 0,
            text : ""

        }
    },

    methods: {
        done(indice) {
            this.toDo.splice(indice);
        },
        print(){
            console.log(this.text)
        }
    }
}).mount('.container-lista')