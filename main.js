const app = new Vue({
    el: "#app",
    data: {
        emails: []
    },
    methods: {
        getRandomEmail: function () {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((risposta) => {
                    // handle success
                    console.log(risposta.data.response);
                    this.emails.push(risposta.data.response);
                    
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
    },
    mounted: function() {
       this.getRandomEmail();
    }
});

// Descrizione:
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.