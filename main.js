const { createApp } = Vue;

createApp({
    data() {
        return {
            // toDo: [
            //     "Fare i progetti pomeridiani",
            //     "Continuare il videocorso di CS50",
            //     "Giocare",
            //     "Imparare"
            // ],
            // task: 0,
            // text: ""

            // bonus
            toDo: [
                {
                    titolo: "Fare i progetti pomeridiani",
                    done: true
                },
                {
                    titolo: "Continuare il videocorso di CS50", 
                    done: true
                },

                {
                    titolo: "Giocare", 
                    done: false
                },
                {
                    titolo: "Imparare", 
                    done: true
                },
            ],
            task: 0,
            text: ""

        }
    },

    methods: {
        done(indice) {
            this.toDo.splice(indice, 1);
        },
        print() {
            console.log(this.text)
            if (this.text.length > 3) {
                this.toDo.push(this.text)
                this.text = "";
            }
        },
        // Bonus 1
        bonusDone(indice){
                return (this.toDo[indice].done == true) ? 'taskDone' : 'taskNotDone'; //Che succede qui se uso l'if? da Chiedere
        },
        bonusDoneReverse(indice){
            if (this.toDo[indice].done == true) {
                this.toDo[indice].done = false
            }
            else{
                this.toDo[indice].done = true
            }
        }
    }
}).mount('.container-lista')