new Vue({
    el:'#desafio',
    data: {
        nome: 'Angelo',
        idade: 19,
        imagem: './vue.jpeg'
    },
    methods: {
        multiplicaIdade() {
            return this.idade * 3
        },
        umOuZero() {
            return Math.random()
        },
        alterarNome(event) {
            this.nome = event.target.value
        }
    }
})