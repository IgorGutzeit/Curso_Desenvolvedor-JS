document.addEventListener("click", function() {
    const botaoIrPagina2 = document.getElementById("botao-ir-pagina2");
    const botaoIrIndex = document.getElementById("botao-ir-index");

    if (botaoIrPagina2) {
        botaoIrPagina2.addEventListener("click", function() {
            window.location.href = "pagina2.html"; // Navega para a página 2
        });
    }

    if (botaoIrIndex) {
        botaoIrIndex.addEventListener("click", function() {
            window.location.href = "pagina1.html"; // Navega de volta para a página inicial
        });
    }
});