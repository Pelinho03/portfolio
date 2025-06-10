/**********************************/
/* Switch Dark e Ligth Theme
/**********************************/
const _elements = {
    loading: document.querySelector(".loading"),
    switch: document.querySelector(".switch_track"),
};

_elements.switch.addEventListener("click", () => {
    const isLight = _elements.switch.classList.toggle("switch_track--light");
    if (isLight) document.documentElement.setAttribute("data-theme", "light");
    else document.documentElement.setAttribute("data-theme", "dark");
});

// Atualiza o ano atual no elemento com a classe "date"
const currentYear = new Date().getFullYear();
const dateElement = document.querySelector(".date");
if (dateElement) {
    dateElement.textContent = currentYear + ". ";
}

/**********************************/
/* Animação de Scroll
/**********************************/
window.myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.addEventListener(
                "transitionend",
                () => {
                    entry.target.style.pointerEvents = "auto";
                },
                { once: true }
            );
        } else {
            entry.target.classList.remove("show");
            entry.target.style.pointerEvents = "none";
        }
    });
});

const elements = document.querySelectorAll(".hidden");

elements.forEach((element) => myObserver.observe(element));

/**********************************/
/* Contacto via WhatsApp
/**********************************/
function enviarMensagem(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const numeroTel = "351910790871";

    const texto = `Olá, sou o ${nome}, ${mensagem}.`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${numeroTel}?text=${msgFormatada}`;

    window.open(url, "_blank");
}
