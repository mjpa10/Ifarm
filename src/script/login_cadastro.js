let usuarios = []

if (localStorage.getItem('cadastros')) {
    usuarios = JSON.parse(localStorage.getItem('cadastros'))
}

function cadastrar() {
    let guarda_nome = document.getElementById('fname').value
    let guarda_senha = document.getElementById('password').value
    let guarda_sobrenome = document.getElementById('lname').value
    let guarda_cpf = document.getElementById('cpf').value;
    let guarda_celular = document.getElementById('number').value;
    let guarda_email = document.getElementById('email').value;
    let guarda_rua = document.getElementById('street').value;
    let guarda_num = document.getElementById('num').value;
    let guarda_ref = document.getElementById('ref').value;
    let guarda_confirma =document.getElementById('confirmarsenha').value;  
    let data = new Date();
    let usuario = { 
        nome:` ${guarda_nome.toLowerCase().trim()} ${guarda_sobrenome.toLowerCase().trim()} `,
        senha: guarda_senha,
        cpf: guarda_cpf,
        celular:guarda_celular,
        email: guarda_email,
        rua:` ${guarda_rua.toLowerCase().trim()}, Numero ${guarda_num.toLowerCase().trim()} `,
        referencia: guarda_ref,
        dataCriacao: `${data.getUTCDate()}/${data.getMonth()+1}/${data.getFullYear()}`
    }

    if (guarda_nome.length > 2 &&
        guarda_senha.length > 2 &&
        guarda_nome.trim().length != 0 &&
        guarda_senha.trim().length != 0 &&
        guarda_num.length != 0 &&
        guarda_sobrenome.length != 0 &&
        guarda_email.length !=0 &&
        guarda_rua.length !=0 &&
        guarda_cpf.length ==11 &&
        guarda_celular.length >7 &&
        guarda_confirma.length == guarda_senha.length
        ) 
         {
        if (procura_usuarioRegistro(usuario.cpf)==-1) {
            usuarios.push(usuario)
            localStorage.setItem('cadastros', JSON.stringify(usuarios))
            alert('Usuário Cadastrado!')
             location.assign('Index.html')
            
        }else{
            alert("Cpf do usuário em uso!!")
        }
    }

    if (guarda_nome.length <= 2 ||
        guarda_nome.trim().length == 0) {
        document.getElementById('alertaNome').innerHTML = `Mínimo de três caracteres`
        setTimeout(() => {
            document.getElementById('alertaNome').innerHTML = ``
        }, 3000)
    }
     if (guarda_num.trim().length == 0) {
        document.getElementById('alertaN').innerHTML = `espaço em branco`
        setTimeout(() => {
            document.getElementById('alertaN').innerHTML = ``
        }, 3000)
    }
    if (guarda_sobrenome.trim().length == 0) {
        document.getElementById('alertasobrenome').innerHTML = `espaço em branco`
        setTimeout(() => {
            document.getElementById('alertasobrenome').innerHTML = ``
        }, 3000)
    }

if (guarda_rua.trim().length == 0) {
        document.getElementById('alertastreet').innerHTML = `espaço em branco`
        setTimeout(() => {
            document.getElementById('alertastreet').innerHTML = ` `
        }, 3000)
    }

     if (guarda_email.trim().length == 0) {
        document.getElementById('alertaemail').innerHTML = `espaço em branco`
        setTimeout(() => {
            document.getElementById('alertaemail').innerHTML = ``
        }, 3000)
    }

    if (guarda_senha.length < 3 ||
        guarda_senha.trim().length == 0) {
        document.getElementById('alertaSenha').innerHTML = `Mínimo de três caracteres`
        setTimeout(() => {
            document.getElementById('alertaSenha').innerHTML = ``
        }, 3000)
    }
    if (guarda_cpf.length != 11 ) {
        document.getElementById('alertaCpf').innerHTML = `cpf tem onze Números`
        setTimeout(() => {
            document.getElementById('alertaCpf').innerHTML = ``
        }, 3000)
    }
    if (guarda_celular.length < 9 ||
        guarda_celular.trim().length == 0) {
        document.getElementById('alertaCell').innerHTML = `Mínimo de 9 Números`
        setTimeout(() => {
            document.getElementById('alertaCell').innerHTML = ``
        }, 3000)
    }
    if ( guarda_confirma.length != guarda_senha.length ) {
        document.getElementById('alertaconfirm').innerHTML = `senhas não coincidem`
        setTimeout(() => {
            document.getElementById('alertaconfirm').innerHTML = ``
        }, 3000)
    }
}
 if (localStorage.getItem('cadastros')) {
    usuarios = JSON.parse(localStorage.getItem('cadastros'))
}

 function login(){
    let guarda_email = document.getElementById('emailog').value
    let guarda_senha = document.getElementById('senhalog').value
   

    if(procura_usuarioLogin(guarda_email, guarda_senha) != -1){
        alert("Usuário validado! Bem-vindo!")
        location.assign('Index.html')
        
    }else{
        alert("Usuário não validado!")
    }
}

let btn_email = document.getElementById('emailog')
let btn_password= document.getElementById('senhalog')
let btn_num = document.getElementById('num')
let btn_ref = document.getElementById('ref')

btn_num.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        cadastrar();
    }
})
btn_ref.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        cadastrar();
    }
})
btn_email.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        login();
    }
})
btn_password.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        login();
    }
})

function procura_usuarioRegistro(guarda_cpf) {
    let index = usuarios.findIndex((element) => {
        return element.cpf == guarda_cpf
    })
    return index
}

function procura_usuarioLogin(guarda_email, guarda_senha) {
    let index = usuarios.findIndex((element) => {
        return element.email == guarda_email && element.senha == guarda_senha
    })
    return index
}
