let switchMenu = document.querySelector('.switch-menu');
let dark = document.querySelector('section');
switchMenu.onclick = function() {
    switchMenu.classList.toggle('active');
    dark.classList.toggle('dark');
}

const button = document.querySelector('.button');
button.addEventListener('click',(event)=>{
    event.preventDefault();
    const nome = document.querySelector('.nome');
    const sobrenome = document.querySelector('.sobrenome');
    const email = document.querySelector('.email');
    const celular = document.querySelector('.celular');
    const mensagem = document.querySelector('.mensagem');
    
    if(nome.value == ""){
        nome.classList.add("error-Input");
    }else{
        nome.classList.remove("error-Input");
    }

    if(sobrenome.value == ""){
        sobrenome.classList.add("error-Input");
    }else{
        sobrenome.classList.remove("error-Input");
    }

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || (email.value.indexOf('.') - email.value.indexOf('@') == 1)){
        email.classList.add("error-Input");
    }else{
        email.classList.remove("error-Input");
    }

    if(celular.value.length != 11 && celular.value != Number){
        celular.classList.add("error-Input");
    }else{
        celular.classList.remove("error-Input");
    }

    if(mensagem.value == ""){
        mensagem.classList.add("error-Input");
    }else{
        mensagem.classList.remove("error-Input");
    }
})