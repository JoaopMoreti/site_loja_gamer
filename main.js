const nameinput = document.querySelector('#nome')
const nickinput = document.querySelector('#nickname')
const emailinput = document.querySelector('#email')
const senhainput = document.querySelector('#senha')
const confirminput = document.querySelector('#confirmar_senha')
const idadeselect = document.querySelector('#idade')
const escolha1 = document.querySelector('opcao1')
const escolha2 = document.querySelector('opcao2')
const escolha3 = document.querySelector('opcao3')
const validform = document.querySelector('#validacao')

const errorMessage = document.querySelector('.msg')

validform.addEventListener('click', (e) => {
  e.preventDefault();

  const senhavalue = senhainput.value;
  const confirmvalue = confirminput.value;

  if(senhavalue != confirmvalue){
    errorMessage.textContent = "Ocorreu um erro em um dos campos! Confira-os e corrija o campo que estiver incoerente";
    errorMessage.classList = "error";

    setTimeout(() => {
      errorMessage.textContent = "Please fill out the fields";
      errorMessage.classList = "";
    }, 3000);
    return
  }
  
  nameinput.value = '';
  nickinput.value = '';
  emailinput.value = '';
  senhainput.value = '';
  confirminput.value = '';
  idadeselect.value = '';
  escolha1.value = '';
  escolha2.value = '';
  escolha3.value = '';
  



})
