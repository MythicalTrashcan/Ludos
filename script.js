const button = document.createElement('button')

button.innerText = 'Button Test'
button.id = 'mainButton'

button.addEventListener('click', () => {
alert('Button worked lol')
})
document.body.appendChild(button)