	const sim = 'sim';
	const nao = 'nao';
	function autenticar(valor){
    if (valor == sim) {
        window.location.href = "index.html"
    }else{
        alert("Site permitido apenas para maiores de 18 anos");
    }
}