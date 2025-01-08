//lançamentos das relações dos IDs
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

//lançamento dos caracteres para sere usados no algoritimo
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#";
let novaSenha = "";

//parte para automatizar a visualização do valor dos caracteres
sizePassword.innerHTML = sliderElement.ariaValue;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

//programa do logaritimo que vai gerar a senha
function generatePassword(){
    
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}
//função de clipboard(copiar ao clicar)
function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}
