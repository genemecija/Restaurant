const createContactPage = () => {
    let content = document.querySelector('div#content')
    if (content.childNodes.length > 2) {
        content.removeChild(content.lastChild)
    }

    let contact = document.createElement('div')
    contact.setAttribute('id','contactDiv')
    contact.setAttribute('class','pageContent')
    contact.setAttribute('style',
        'width: 80%;' +
        'height: 100%;' +
        'display: flex;' +
        'justify-content: flex-end;' + 
        'align-items: flex-end;' +
        'flex-flow: column;' +
        'margin-top: 20px;' +
        'background-image: url("../images/map.jpg");' +
        'border-radius: 5px;' +
        'font-family: "Roboto", sans-serif;')
    content.appendChild(contact)

    let info = document.createElement('div')
    info.innerText =
    'Phone:\n\
    (800) 555-0000\n\
    \n\
    Address:\n\
    123 Main Street\n\
    Townopolis, New California 10000\n\
    \n\
    \n\
    Stay Tuned! New locations coming soon!'
    info.setAttribute('style',
        'width: 70%;' +
        'height: 400px;' +
        'background-color: rgba(255,255,255,0.8);' +
        'padding: 20px;' +
        'border-top-right-radius: 5px;' +
        'border-bottom-right-radius: 5px;')
    contact.appendChild(info)

}

export default createContactPage