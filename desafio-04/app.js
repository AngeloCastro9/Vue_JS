new Vue({
	el: '#desafio',
	data: {
		primeiraParte: 'destaque',
		primeiroCSS: true,
		classe3: 'direita'
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.primeiraParte = this.primeiraParte == 'destaque' ? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {

		}
	}
})
