// Usa numeroTel normalmente/**********************************/
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
    const numeroTel = "351910790871";

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `Olá, sou o ${nome},\n -${mensagem}.`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${numeroTel}?text=${msgFormatada}`;

    window.open(url, "_blank");
}

/**********************************/
/* Botão de Voltar ao Topo
/**********************************/
const botao = document.querySelector(".botao-topo");

window.addEventListener("scroll", function (event) {
    if (window.scrollY == 0) {
        botao.classList.remove("visible");
    } else {
        botao.classList.add("visible");
    }
});

function menuShow() {
    let menuMobile = document.querySelector(".mobile-menu");
    let icon = document.querySelector(".icon i");
    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    } else {
        menuMobile.classList.add("open");
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }
}
