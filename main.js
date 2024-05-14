const { createApp } = Vue;

createApp({
    data() {
        return {
            toDo : [
                "Fare i progetti pomeridiani",
                "Continuare il videocorso di CS50",
                "Giocare",
                "Imparare"
            ]

        }
    }
}).mount('.container-lista')