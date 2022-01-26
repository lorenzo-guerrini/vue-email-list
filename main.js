// Descrizione:
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista. - FATTO
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati. - FATTO

const app = new Vue({
    el: "#app",
    data: {
        emails: []
    },
    methods: {
        //Esegue il push su emails di una email generata random
        pushRandomEmail: function () {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((risposta) => {
                    // handle success
                    this.emails.push(risposta.data.response)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        },

        //Esegue 10 volte il metodo pushRandomEmail
        pushTenRandomEmails: function () {
            for (let i = 0; i < 10; i++) {
                this.pushRandomEmail();
            }
        }
    },
    mounted: function () {
        this.pushTenRandomEmails();
    }
});