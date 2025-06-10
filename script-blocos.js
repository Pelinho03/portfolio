document.addEventListener("DOMContentLoaded", () => {
    fetch("projetos.json")
        .then((response) => response.json())
        .then((elementsData) => {
            const projectsGrid = document.querySelector(".projetos-caixa");

            elementsData.forEach((element) => {
                const projectsCard = document.createElement("div");
                projectsCard.classList.add("projetos-card", "hidden");
                projectsCard.innerHTML = `
                    <a class="projetos-link" href="${element.link}" target="_blank">
                        <img src="${element.image}" alt="${element.title}" class="projetos_imagem">
                        <div class="caixa-textos-projeto">
                            <h3 class="info-projetos">${element.title}</h3>
                            <p class="paragrafo-projetos">
                                ${element.description}
                            </p>
                        </div>
                    </a>
                `;

                projectsGrid.appendChild(projectsCard);

                if (window.myObserver) {
                    window.myObserver.observe(projectsCard);
                }
            });
        });
});
