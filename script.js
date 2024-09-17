const avanca = document.querySelectorAll('.btn-proximo');

//forEach = ParaCadaUm
avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
        
        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})