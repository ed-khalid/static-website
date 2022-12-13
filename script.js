

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
        ol.removeChildre(ol.firstChild)
    }

    while (names.length) {
        const randomIndex = Math.floor(Math.random() *(names.length-1)) 
        const li = document.createElement('li') 
        li.appendChild(document.createTextNode(names[randomIndex]))
        ol.appendChild(li)
        names.splice(randomIndex, 1)
    }

}