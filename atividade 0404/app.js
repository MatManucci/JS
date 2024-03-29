const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', ()=> {
    popup.style.display = 'block'
})

popup.addEventListener('click', event => {
    const classNameOFClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-link', 'popup-wrapper']
    const shouldClosePopup = classNames.some(className =>
        className === classNameOFClickedElement)
    
    if(shouldClosePopup){
        popup.style.display = 'none'
    }
    
})
