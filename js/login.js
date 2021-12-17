import { Dictionary } from './Dictionary';

const campoUser = document.getElementById('user');
const campoSenha = document.getElementById('senha'); 
const botaoEntrar = document.getElementById('btnEntrar');

botaoEntrar.addEventListener("click", function login(event){
    event.preventDefault();
});

function login(event) {
    
    var user = campoUser.textContent.toUpperCase();
    var senha = campoSenha.textContent;

    /*criacao do dictionary nao terminada, para testar o funcionamento do botao Entrar,
    descomentar o codigo abaixo e utilizar o usuario estatico
    */
    /*if ((user == 'angelo.hank') && (senha == '123'))  {
        console.log(user);
        console.log(senha);

        window.location = "./principal.html";
    }*/

    if (validaUsuario(user, senha)) {
        window.location = "principal.html"
    }
    else {
        alert('dados invalidos');
    }
}

function validaUsuario(user, senha) {
    var dict = new Dictionary();
    dict.add('angelo', '123');
    var foundData = dict.findAt(user);
    
    if(foundData != undefined) {
        return (foundData === senha);
    }
}