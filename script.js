let medidor = document.querySelector('#medidor')
let botao = document.querySelector('#button')
let valor = document.querySelector('#valor')
let senha = document.querySelector('#senha')
let conteudoSenha = document.querySelector('#conteudo-senha')

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
let novaSenha = ''

valor.innerHTML = medidor.value ;

medidor.oninput = function(){
    valor.innerHTML = this.value;
}

botao.addEventListener('click', ()=>{
    mostrarSenha();
})

 function mostrarSenha(){
    let pass = ""

    for(let i = 0, n = charset.length; i < medidor.value ; i++){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }


    conteudoSenha.classList.remove('hide');
    senha.innerHTML = pass
    novaSenha = pass
}

function copiarSenha(){
    navigator.clipboard.writeText(novaSenha)
}
