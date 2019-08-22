import createHomepage from './homepage.js';
import createContactPage from './contact.js';
import createMenuPage from './menu.js';

const createNav = () => {
    document.querySelector('html').setAttribute('style',
        'height: 100%;' +
        'width: 100%;' +
        'padding: 0px;' +
        'margin: 0px;' +
        'display: flex;' +
        'justify-content: flex-start;' + 
        'align-items: flex-start;')
    document.querySelector('body').setAttribute('style',
        'background-color: black;' +
        'background-image: url("../images/background.jpg");' +
        'background-position: center;' +
        'background-size: cover;' +
        'background-attachment:fixed;' +
        'background-repeat: no-repeat;' +
        'width: 100%;' +
        'padding: 0px;' +
        'margin: 0px;' +
        'display: flex;' +
        'justify-content: center;' + 
        'align-items: flex-end;' +
        'cursor: default;')

    let headline = document.createElement('div')
    headline.setAttribute('id','headline')
    headline.innerText = "Italiano Restaurante"
    headline.setAttribute('style',
        'font-family: "Rock Salt", cursive;' +
        'font-size: 45px;' +
        'color: white;' +
        'text-shadow: 0px 0px 3px black;' +
        'width: 800px;' +
        'height: 100px;' +
        'display: flex;' +
        'justify-content: center;' + 
        'align-items: center;')

    let nav = document.createElement('div')
    nav.setAttribute('id','nav')
    nav.setAttribute('style',
        'width: 90%;' +
        'height: 35px;' +
        'background: rgba(255,255,255,0.85);' +
        'border-radius: 4px;' +
        'display: flex;' +
        'justify-content: space-evenly;' + 
        'align-items: center;' +
        'margin-bottom: 20px;')

    let homepage = document.createElement('div')
    homepage.addEventListener('click', createHomepage)
    homepage.setAttribute('id','homepageTab')
    homepage.setAttribute('class','navItem')
    homepage.innerText = 'Home'
    nav.appendChild(homepage)

    let menu = document.createElement('div')
    menu.addEventListener('click', createMenuPage)
    menu.setAttribute('id','menuTab')
    menu.setAttribute('class','navItem')
    menu.innerText = 'Menu'
    nav.appendChild(menu)
    
    let contact = document.createElement('div')
    contact.addEventListener('click', createContactPage)
    contact.setAttribute('id','contactTab')
    contact.setAttribute('class','navItem')
    contact.innerText = 'Contact'
    nav.appendChild(contact)

    let content = document.querySelector('div#content')
    content.appendChild(headline)
    content.appendChild(nav)
    
    content.setAttribute('style',
        'width: 800px;' +
        'height: 100%;' +
        'display: flex;' +
        'justify-content: center;' + 
        'align-items: center;' +
        'flex-flow: column;')
    let navItems = document.querySelectorAll('#nav div')
    for(var i=0; i<navItems.length; i++){
        navItems[i].setAttribute('style',
            'font-family: "Roboto", sans-serif;' +
            'font-size: 20px;' +
            'color: black;' +
            'width: 150px;' +
            'height: 100%;' +
            'display: flex;' +
            'justify-content: center;' +
            'align-items: center;' +
            'cursor: default')
    }
}

export default createNav