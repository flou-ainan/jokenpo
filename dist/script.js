
function iniciar(){
  console.log("teste")
  let comecar = document.getElementsByClassName("comecar")[0]
  comecar.style.display = "none"

  let opcoes = document.getElementsByClassName("jogando")
  for(const element of opcoes){
      element.style.display = "flex"
  }
}

function escolher(opcao){
  alert(opcao)
  const naoOpcoes = document.getElementsByClassName("opcao")
  for(const element of naoOpcoes){
    if (element.id != opcao){
      element.style.display = "none"
    };
  }
}
