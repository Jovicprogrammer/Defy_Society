// Função para abrir e fechar Linha Básica
function linhaBasica() {
    const linhaBasicaPopup = document.getElementById('linha-basica-popup');
    const tumultoNoturnoPopup = document.getElementById('tumulto-notuno-popup');
    const linhaColecionadorPopup = document.getElementById('colecionador-popup');


    // Fecha o outro pop-up
    tumultoNoturnoPopup.classList.remove('show');
    linhaColecionadorPopup.classList.remove('show');

    // Alterna a visibilidade do pop-up atual
    linhaBasicaPopup.classList.toggle('show');
}

// Função para abrir e fechar Tumulto Noturno
function tumultoNoturno() {
    const tumultoNoturnoPopup = document.getElementById('tumulto-notuno-popup');
    const linhaBasicaPopup = document.getElementById('linha-basica-popup');
    const linhaColecionadorPopup = document.getElementById('colecionador-popup');

    // Fecha o outro pop-up
    linhaBasicaPopup.classList.remove('show');
    linhaColecionadorPopup.classList.remove('show');

    // Alterna a visibilidade do pop-up atual
    tumultoNoturnoPopup.classList.toggle('show');
}

function linhaColecionadores() {
    const linhaColecionadorPopup = document.getElementById('colecionador-popup');
    const linhaBasicaPopup = document.getElementById('linha-basica-popup');
    const tumultoNoturnoPopup = document.getElementById('tumulto-notuno-popup');
    

    // Fecha o outro pop-up
    tumultoNoturnoPopup.classList.remove('show');
    linhaBasicaPopup.classList.remove('show');

    // Alterna a visibilidade do pop-up atual
    linhaColecionadorPopup.classList.toggle('show');
}


// Fecha pop-ups ao clicar fora deles
window.addEventListener('click', function (event) {
    const linhaColecionadorPopup = document.getElementById('colecionador-popup');
    const linhaBasicaPopup = document.getElementById('linha-basica-popup');
    const tumultoNoturnoPopup = document.getElementById('tumulto-notuno-popup');


    // Verifica se o clique foi fora dos pop-ups e dos botões
    
    if (!event.target.closest('#linha-basica-button') && !event.target.closest('#linha-basica-popup')) {
        linhaBasicaPopup.classList.remove('show');
    }
    if (!event.target.closest('#tumulto-noturno-button') && !event.target.closest('#tumulto-notuno-popup')) {
        tumultoNoturnoPopup.classList.remove('show');
    }
    if (!event.target.closest('#colecionador-button') && !event.target.closest('#colecionador-popup')) {
        linhaColecionadorPopup.classList.remove('show');
}
   }
);
