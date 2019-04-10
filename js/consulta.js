
function login(){
	window.location = 'em-construcao.html';
}

function pesquisa(){

	var cidade = $('input[name="cidade"]').val();
	console.log(cidade);

	if (cidade == 'São Carlos' || cidade == 'são carlos') {
		window.location = 'consulta_SaoCarlos.html';
	} else {
		window.location = 'consulta_1.html';
	}
}


function mensagem(){
	$("#msg").css("display", "block");
}