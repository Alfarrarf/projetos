const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body")
const imagemBotaoAlterarTema = document.querySelector(".imagem-botao")


botaoAlterarTema.addEventListener("click", () => {
    const darkModeAtivo = body.classList.contains("dark-mode")

    body.classList.toggle("dark-mode");

    if (darkModeAtivo) {
        imagemBotaoAlterarTema.setAttribute("src", "./src/imagens/icons/sun.png")
    }
    else {
        imagemBotaoAlterarTema.setAttribute("src", "./src/imagens/icons/moon.png");
    }
});
