const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");


form.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
  const usernameValue = username.value;
  const emailValue = email.value;
  const telefoneValue = telefone.value;

if(usernameValue === ""){
    setErrorFor(username, "Campo obrigátorio.");
  } else {
    setSucessFor(username);
  }

  if(emailValue === ""){
    setErrorFor(email, "Campo obrigátorio.");
} else if (!checkEmail(emailValue)) {
  setErrorFor(email,"Por favor insira um email válido.");
} else {
  setSucessFor(email);
  }


  if(telefoneValue === ""){
    setErrorFor(telefone, "Campo obrigátorio.");
} else if (!checkPhone(telefoneValue)) {
  setErrorFor(telefone,"Por favor insira um telefone válido.");
} else {
  setSucessFor(telefone);
  }
}

function setErrorFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //Adicionar a mensagem de setErrorFor
    small.innerText = message;
  //Adiciona classe de erro
    formControl.className = "form-control error";
}
function setSucessFor(input){
  const formControl = input.parentElement

  // Adicionar a classe  de sucesso
  formControl.className = "form-control sucess";
}
function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
function checkPhone (telefone) {
  var number = new NumExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$'); 
  return number.test(telefone);
}
checkPhone (telefone);
