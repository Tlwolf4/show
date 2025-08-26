let idade = parseInt(prompt("Quantos anos você tem:"))
let ingreso = prompt("Voce tem ingreso? [S/N]").toLowerCase() // true

if (ingresso === "s") {
    ingrsso = true
  } if (idade >= 18 && ingresso == true) {
    alert("Você pode entrar!")
  } else {
    alert("Você não pode entrar...")

} else (ingresso === "n") {
    ingresso = false
} else {
    alert("você digitou algo errado. Fim do programa.")
}



