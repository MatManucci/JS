//const paragraph = document.querySelector('p')

//console.log(paragraph.innerText)

//paragraph.innerText += ' Texto inserido'

//const paragraphs = document.querySelectorAll('p')


/* paragraphs.forEach((paragraph, index) => {
  paragraph.innerText += ` Novo texto ${index} `
}) */

const div = document.querySelector('.content')

//console.log(div.innerHTML)

const people = ['Jonatan', 'Vinicius', 'Diego']

people.forEach(person => {
  div.innerHTML += `<p>${person}</p>`
})
