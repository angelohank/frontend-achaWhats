import { usuarios } from "./usuarios";

const campoUser = document.getElementById('user');
const campoSenha = document.getElementById('senha'); 

function login() {
    
    var user = campoUser.value.toLowerCase();
    var senha = campoSenha.value.toLowerCase();

    if ((user == 'angelo.hank') && (senha == '123'))  {
        console.log(user);
        console.log(senha);

        window.location = "./principal.html";
    }

    /*if (validaUsuario(user, senha)) {
        window.location = "principal.html"
    }
    else {
        alert('dados invalidos');
    }*/
}

function validaUsuario(user, senha) {
    var b_return

    b_return = false;

    for(var cont = 0; cont < usuarios.length; cont++) {
        if (this.user = usuarios[cont].nome) {
            if (this.senha = usuarios[cont].senha) {
                b_return = true;
            }
        }
    }    

    return b_return
}