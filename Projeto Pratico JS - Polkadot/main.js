let contador = 0;
let temporizadorAtivo = false;
let historico = [];

function resetarContador() {
	if (contador == 1) {
		alert(`O histórico de transações expirou! ${contador} simulação foi limpa.`);
	} else {
		alert(`O histórico de transações expirou! ${contador} simulações foram limpas.`);
	}
	contador = 0;
	temporizadorAtivo = false;
	document.getElementById("contador-transacoes").innerText = contador;
	document.getElementById("historico").innerText = "";
}

document.getElementById("calcular").addEventListener("click", function () {
	
	let valorTransacao = parseFloat(document.getElementById("valor-transacao").value);
	let complexidade = document.getElementById("complexidade").value;
	let moeda = document.getElementById("moeda").value;
	let precoGas, taxaConversao;

	
	switch (complexidade) {
		case "baixa":
			precoGas = 0.01;
			break;
		case "media":
			precoGas = 0.05;
			break;
		case "alta":
			precoGas = 0.1;
			break;
		}

	
	switch (moeda) {
		case "brl":
			taxaConversao = 8.25;
			simbolo = "R$";
			break;
		case "usd":
			taxaConversao = 1.50;
			simbolo = "$";
			break;
		case "eur":
			taxaConversao = 1.36;
			simbolo = "€";
			break;
		
	}

	// Calcula o custo total do gas
	let custoGas = valorTransacao * precoGas;
	let custoConvertido = custoGas * taxaConversao;

	// Validação do valor da transação
	if (valorTransacao <= 0 || isNaN(valorTransacao)) {
		document.getElementById("resultado").innerHTML =
			'<p style="color:#f00;">Por favor insira um número válido, ou acima de 0.</p>';
		return;
	}
	
	document.getElementById("resultado").innerHTML = `
	<p>Complexidade: <span class="${complexidade.slice(0)}">${complexidade.charAt(0).toUpperCase() + complexidade.slice(1)}</span></p>
	<p>Valor da Transação: ${valorTransacao} <b>DOT</b></p>
	<p><strong>Custo Estimado do Gas: ${custoGas.toFixed(2)} <b>DOT</b></strong></p>
	<p><strong>Custo Estimado na Moeda (${moeda.toUpperCase()}): ${simbolo}${custoConvertido.toFixed(2)}</strong></p>
	`;

	contador++;
	document.getElementById("contador-transacoes").innerHTML = contador;

	if (!temporizadorAtivo) {
		setTimeout(resetarContador, 60000);
		temporizadorAtivo = true;
	}

	
	historico.push({
		valorTransacao: valorTransacao,
		complexidade: complexidade,
		complexidadeNome: complexidade.charAt(0).toUpperCase() + complexidade.slice(1),
		custoGas: custoGas.toFixed(2),
		custoConvertido: custoConvertido.toFixed(2),
		moeda: moeda.toUpperCase()
	});

	atualizarHistorico();
});

function atualizarHistorico() {
	const listaHistorico = document.getElementById("historico");
	listaHistorico.innerHTML = "";

	historico.forEach(transacao => {
		const item = document.createElement("li");
		item.innerHTML = `
		Valor: ${transacao.valorTransacao} DOT,
		<b class="${transacao.complexidade}">${transacao.complexidadeNome}</b>,
		Custo: ${transacao.custoGas} <b>DOT</b> (${transacao.custoConvertido} ${transacao.moeda})`;
		listaHistorico.prepend(item);
	});
}