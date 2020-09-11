/* const name = 'Matheus'

//funções
const sayHi = () => 'oi'

const greet = sayHi()

console.log(greet)

//métodos

const nameInUpperCase = name.toUpperCase()

console.log(nameInUpperCase) */


//forEach e callbacks

const ul = document.querySelector('[data-js="ul"]')

const socialNetworks = ['youtube', 'twitter', 'instagran', 'facebook']
/* 
const logArrayInfo = (socialNetwork, index, array) => {
  console.log(`${index } ${socialNetwork} ${array}`)
}

socialNetworks.forEach(logArrayInfo) */

let HTMLTemplate = ''

socialNetworks.forEach(socialNetwork => {
  HTMLTemplate += `<li style="color: deeppink;">${socialNetwork}</li>`
})

ul.innerHTML = HTMLTemplate