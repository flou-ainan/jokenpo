
function iniciar(){
  console.log("teste")
  let comecar = document.getElementsByClassName("comecar")[0]
  comecar.style.display = "none"

  let opcoes = document.getElementsByClassName("jogando")
  for(const element of opcoes){
      element.style.display = "flex"
  }
}

function reiniciar(){
  let elementosJogo = document.getElementsByClassName("jogando")
  for(const element of elementosJogo){
      element.style.display = "none"
  }
  let opcoes = document.getElementsByClassName("opcao")
  for(const element of opcoes){
      element.style.display = "flex"
  }
  let comecar = document.getElementsByClassName("comecar")[0]
  comecar.style.display = "block"

  let resultado = document.getElementById("resultado")
  resultado.innerHTML = ""

  let opcaoPC = document.getElementById("opcaoPC")
  opcaoPC.style.display = "none"
  
  let reiniciar = document.getElementById("recomecar")
  reiniciar.style.display = "none"

  iniciar()
}

function escolher(opcao){
  const naoOpcoes = document.getElementsByClassName("opcao")
  for(const element of naoOpcoes){
    if (element.id != opcao){
      element.style.display = "none"
    }
  }
  iniciarAdversario(opcao)
}

function iniciarAdversario(opcao){
  let loader = document.getElementById("loader")
  let opcaoPC = document.getElementById("opcaoPC")
  loader.style = "display: inline-block;"
  setTimeout(() => {
    loader.style = "display: none;"
    opcaoPC.innerHTML = sorteiaOpcao()
    opcaoPC.style.display = "flex"
    setTimeout(() => {
      let resultado = document.getElementById("resultado")
      console.log(opcao + " " + opcaoPC.innerHTML)
      switch(opcaoPC.innerHTML){
        case "🪨":
          if (opcao === "pedra"){
            resultado.innerHTML = "Empate"
          }
          if (opcao === "papel"){
            resultado.innerHTML = "Você ganhou"
          }
          if (opcao === "tesoura"){
            resultado.innerHTML = "Você perdeu"
          }
        break
        case "📃":
          if (opcao === "pedra"){
            resultado.innerHTML = "Você perdeu"
            console.log("como?")
          }
          if (opcao === "papel"){
            resultado.innerHTML = "Empate"
          }
          if (opcao === "tesoura"){
            resultado.innerHTML = "Você ganhou"
          }
        break
        case "✂️":
          if (opcao === "pedra"){
            resultado.innerHTML = "Você ganhou"
            }
          if (opcao === "papel"){
            resultado.innerHTML = "Você perdeu"
          }
          if (opcao === "tesoura"){
            resultado.innerHTML = "Empate"  
          }
        break;
      }
      setTimeout(() => {
        let reiniciar = document.getElementById("recomecar")
        reiniciar.style.display = "flex"
      },340)
    },200)
  },1800)
}

// sorteia 🪨, 📃, ou ✂️
function sorteiaOpcao(){
  var opcaoPC = Math.floor(Math.random() * 3)
  if (opcaoPC == 0){
    opcaoPC = "🪨"
  } else if (opcaoPC == 1){
    opcaoPC = "📃"
  } else {
    opcaoPC = "✂️"
  }
  return opcaoPC
}