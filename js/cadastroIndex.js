const botãoCadastrarIndex = document.querySelector("#botão__cadastrar__index");
const cpfIndex = document.querySelector("#input__index").value;


botãoCadastrarIndex.addEventListener('click', validação ());

function validação(){

    if (cpfIndex.length < 11) {

        console.log("error");
    }else{
        
    }
}