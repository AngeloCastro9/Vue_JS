new Vue({
	el: '#desafio',
	data: {
		primeiraParte: 'destaque',
		primeiroCSS: true,
		classe3: 'direita',
		classe4: '',
		cor5: '',
		estilo5: {
			width: '100px',
			height: '100px'
		},
		width: '0',
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.primeiraParte = this.primeiraParte == 'destaque' ? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			}, 500)
		},
		setPrimeiroCSS:(event) {
			if(event.target.value == "true") {
				this.primeiroCSS = true
			} else if(event.target.value == "false") {
				this.primeiroCSS = false
			}
		}
	}
})
