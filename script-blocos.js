document.addEventListener("DOMContentLoaded", () => {
    const elementsData = [
        {
            title: "FlixFlow",
            link: "https://github.com/Pelinho03/FlixFlow.git",
            description: `<strong>FlixFlow</strong> é uma aplicação de streaming em
                            <strong>Flutter</strong> que permite
                            <em>pesquisar filmes e séries</em>, adicionar favoritos e explorar categorias de conteúdos.
                            Com integração <strong>Firebase</strong>, o projeto oferece uma
                            experiência
                            <em>simples e intuitiva</em> para centralizar e personalizar o entretenimento.`,
            image: "./img/proj_1.png",
        },
        {
            title: "TradeShark",
            link: "https://github.com/Pelinho03/TradeShark-website.git",
            description: `<strong>TradeShark.pt</strong> é uma plataforma de <em>e-commerce</em>
                            para materiais de construção,
                            desenvolvida com <strong>HTML, CSS, JavaScript</strong> e <strong>PHP</strong>.
                            Oferece funcionalidades como <em>carrinho de compras</em>, <strong>gestão de
                                utilizadores</strong> e
                            modos de visualização, ideal para soluções de <strong>comércio online</strong> de
                            construção.`,
            image: "./img/proj_2.png",
        },
        {
            title: "GitHub",
            link: "https://github.com/Pelinho03",
            description: `Acompanha os meus projetos e colaborações em desenvolvimento de software no
                        <strong>GitHub</strong>. Desde pequenas experiências até aplicações mais
                        robustas,
                        partilho código aberto focado em <em>soluções criativas e funcionais</em>.
                        `,
            image: "./img/proj_4.png",
        },
    ];

    const projectsGrid = document.querySelector(".projetos-caixa");

    elementsData.forEach((element) => {
        const projectsCard = document.createElement("div");
        projectsCard.classList.add("projetos-card", "hidden");
        // projectsCard.classList.add("projetos-card");

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
