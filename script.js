const botao = document.querySelector("#exibirmensagem");
const mensagem = document.getElementById("mensagem");

// oculta a mensagem inicialmente via JS
mensagem.style.display = "none";

// Ao clicar, alterna entre mostrar e ocultar
botao.addEventListener("click", mostrarmensagem);

// Função exibe ou esconde a mensagem
function mostrarmensagem() {
    //verifica se a mensagem está oculta
    if (mensagem.style.display === "none") 
        {
        //exibe a mensagem se oculta
        mensagem.style.display = "block";
        } 
    //oculta quando estiver sendo exibida
    else {
        mensagem.style.display = "none";
    }
}
