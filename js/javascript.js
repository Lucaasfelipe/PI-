	const sim = 'sim';
	const nao = 'nao';
	function autenticar(valor){
    if (valor == sim) {
        window.location.href = "index.html"
    }else{
        alert("Site permitido apenas para maiores de 18 anos");
    }
}					
				function envia(){

					Dados = " <p> Nome: </p>" + nome +
				"<p> Email: </p>" + 
				email + 
				"<p> MSG: </p>" + mensagem + 

				$("#conteudo").append(dados);
			}