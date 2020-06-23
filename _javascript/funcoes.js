function mudaIcone (tipoIcone) {
		document.getElementById("icone").src = tipoIcone;
	}
	
function calcTotal() {
			var qtd = parseInt(document.getElementById('cQntd').value);
			total = qtd * 1500;
			document.getElementById('cPreco').value = total;
		}