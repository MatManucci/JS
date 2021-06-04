/* let user ={
  carName: 'João',
  age: 31,
  email: 'matheus.manucci@gmail.com',
  blogPosts: ['bolo vegano', 'batata frita'],
  login: function (){
    console.log('Usuário logado')
  },
  logout: function() {
    console.log('Usuário deslogado')
  },
  logBlogPosts: function () {
    console.log(`${this.carName} escreveu os seguintes posts:`)

    this.blogPosts.forEach(post => {
      console.log(post)
    })
  }
}

user.logBlogPosts() */



/*
  01

  - Declare uma constante que recebe o seu nome;
  - Ela deve ter um escopo global.
*/
const mycarName = "Palio"

for (let i = 0; i < 5; i++) {
  console.log(`dentro do bloco de código: ${mycarName}`)
}

console.log(`fora do bloco de código: ${mycarName}`)

/*
  02

  - Funções também são blocos de código;
  - Crie uma função que ao ser invocada, exibe sua idade no console;
  - Dentro da função, declare uma let que armazena a sua idade;
  - Exiba sua idade no console, através da invocação da função;
  - Do lado de fora da função exiba no console o valor da let que foi declarada  
    dentro da função;
  - Um erro com a mensagem "Uncaught ReferenceError: SUA_VARIÁVEL is not  
    defined" será exibido no console;
  - Você sabe por que isso aconteceu?
*/
  function showIdade() {
   let age = 30
   console.log(age)
 }
 showIdade()
 console.log(age) 

 /*
 03
  - Crie um objeto "car" com as seguintes propriedades e métodos:
    - name, que recebe o nome do carro;
    - brand, que recebe a marca do carro;
    - colors, que recebe 3 cores para o carro;
    - isRunning, que recebe um boolean indicando se o carro está em movimento.  
      Inicialmente, deve receber um boolean indicando que o carro não está em  
      movimento;
    - run, que é um método que faz o carro andar e retorna a mensagem  
      "O NOME_DO_CARRO está em movimento";
    - stop, que é um método que faz o carro parar e retorna a mensagem  
      "O NOME_DO_CARRO está parado";
    - getColorsMessage, que é um método que retorna a mensagem  
      "O NOME_DO_CARRO está disponível nas cores COR_01, COR_02 e COR_03".
*/
let car = {
  carName: 'fusca',
  brand: 'volks',
  colors: ['verde', 'vermelho', 'roxo'],
  isRunning: false,
  run () {
    this.isRunning = true
    return `O ${this.carName} está em movimento`
  },
  stop() {
    this.isRunning = false
    return `O ${this.carName} está em parado`
  },
  getColorsMessage() {
    const lastItem = this.colors[this.colors.lenght -1]
    const colors = this.colors.join(', ').replace(lastItem, `e ${lastItem}`)  
    return `O ${this.carName} está disponível nas seguintes cores ${colors}}`
  }
}
/*
  04

  - Faça o carro andar e exiba no console se ele realmente está em movimento.
*/
 console.log(car.run())
 console.log(car.isRunning)
/*
  05

  - Faça o carro parar e exiba no console se ele realmente está parado.
*/
console.log(car.stop())
console.log(`Ocarro está em movimento : ${car.isRunning}`)
/*
  06

  - Exiba, no console, a mensagem com as cores do carro.
*/
console.log(car.getColorsMessage())
/*
  07

  - Exiba, no console, a mensagem "O carro é um MARCA_DO_CARRO NOME_DO_CARRO";
  - Utilize a notação de colchetes para acessar as propriedades do carro.
*/
console.log(`O carro é da marca ${car['brand']} ${car['carName']} `)