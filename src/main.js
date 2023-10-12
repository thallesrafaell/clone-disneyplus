document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]')

    const heroSection = document.querySelector('.hero')
    const alturaHero = heroSection.clientHeight

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY
        if(posicaoAtual < alturaHero){
            ocultaElementosHeader()
        }else{
            exibeElementoHeader()
        }
    })
    

    //Secao de atracoes, programacao das abas
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

    //Secao de faq acordions
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreFechafaq)
    }
})


function exibeElementoHeader() {
    const header = document.querySelector('.header')
    header.classList.remove('header--is-hidden')
}

function ocultaElementosHeader() {
    const header = document.querySelector('.header')
    header.classList.add('header--is-hidden')
}

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