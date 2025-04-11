function enviarMensagem(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const numeroTel = "351910790871";

    const texto = `Olá, sou o ${nome}, ${mensagem}.`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${numeroTel}?text=${msgFormatada}`;

    window.open(url, "_blank");
}
