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

const _elements = {
    loading: document.querySelector(".loading"),
    switch: document.querySelector(".switch_track"),
};

_elements.switch.addEventListener("click", () => {
    const isLight = _elements.switch.classList.toggle("switch_track--light");
    if (isLight) document.documentElement.setAttribute("data-theme", "light");
    else document.documentElement.setAttribute("data-theme", "dark");
});
