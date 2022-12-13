
const draft = () => {

    const names = [
        'Ahmed Khalid', 
        'Abdullah Musleh', 
        'Salam', 
        'Hussam', 
        'Noor', 
        'Hudhaifa', 
        'Ahmed Mazin' ,
        'Taha', 
        'Anees',
        'Zerocool'
    ]
    const ol = document.getElementById("list")  
    while (ol.firstChild) {
        ol.removeChild(ol.firstChild)
    }

    while (names.length) {
        const randomIndex = Math.floor(Math.random() *(names.length)) 
        const li = document.createElement('li') 
        li.appendChild(document.createTextNode(names[randomIndex]))
        ol.appendChild(li)
        names.splice(randomIndex, 1)
    }

}

window.addEventListener('load', () => {
    const button = document.getElementById('generate-button') 
    button.addEventListener('click', draft)
    draft()
})