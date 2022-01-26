const app = new Vue({
    el: "#app",
    data: {
        emails: []
    },
    methods: {
        pushRandomEmail: function () {
            let email = "";
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((risposta) => {
                    // handle success
                    this.emails.push(risposta.data.response)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });

                console.log(email);
                return email;
        },
        pushTenRandomEmails: function() {
            for (let i = 0; i < 10; i++) {
                this.pushRandomEmail();
            }
        }
    },
    mounted: function() {
       this.pushTenRandomEmails();
    }
});

// Descrizione:
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.