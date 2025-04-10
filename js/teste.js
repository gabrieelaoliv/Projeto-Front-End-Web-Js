function reqX() {
    // Exemplo de requisição GET
    var ajax = new XMLHttpRequest();

    // Seta tipo de requisição e URL com os parâmetros
    ajax.open("GET", "https://raw.githubusercontent.com/madu-silva/PFJS-IFTM/refs/heads/main/atividade-em-sala1/dados.json", true);

    // Envia a requisição
    ajax.send();

    // Cria um evento para receber o retorno.
    ajax.onreadystatechange = function () {
        // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
        if (ajax.readyState == 4 && ajax.status == 200) {
            var data = ajax.responseText;
            // Retorno do Ajax
            console.log(data);
        }
    }
    // alert("teste");

}

export default reqX;