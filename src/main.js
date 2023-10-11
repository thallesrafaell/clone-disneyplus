document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]')
    
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAtiva = botao.target.dataset.tabButton;
            console.log(abaAtiva)
            const aba = document.querySelector(`[data-tab-id=${abaAtiva}]`)
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotoes();
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }

    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreFechafaq)
    }
})

function abreFechafaq(elemento){
    const classe = 'faq__questions__item--is-open'
    const pai = elemento.target.parentNode

    pai.classList.toggle(classe)
}

function removeBotoes() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0 ; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }

}

function escondeTodasAbas() {
    const conteudoAba = document.querySelectorAll('[data-tab-id]');

    for(let i = 0 ; i < conteudoAba.length; i++){
        conteudoAba[i].classList.remove('shows__list--is-active')
    }



} 