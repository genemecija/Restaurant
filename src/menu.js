const createMenuPage = () => {
    let content = document.querySelector('div#content')
    if (content.childNodes.length > 2) {
        content.removeChild(content.lastChild)
    }

    let menu = document.createElement('div')
    menu.setAttribute('id','menuDiv')
    menu.setAttribute('class','pageContent')
    menu.setAttribute('style',
        'width: 100%;' +
        'height: 100%;' +
        'display: flex;' +
        'justify-content: center;' + 
        'align-items: center;' +
        'flex-flow: column;')
    content.appendChild(menu)

    const pasta = {img:'../images/menu_pasta.jpg', name:'Pasta', description:'Our pasta is the best canned-pasta money can buy!', price: '28'}
    const pizza = {img:'../images/menu_pizza.jpg', name:'Pizza', description:'Our pizza is cooked in a fire-brick oven.', price: '36'}
    const platter = {img:'../images/menu_platter.jpg', name:'Platter', description:'The meat and cheese platter is a platter of meat and cheese!', price: '65'}
    const menuArr = [pasta, pizza, platter]

    for (let i = 0; i<menuArr.length; i++) {
        let menuItem = document.createElement('div')
        menuItem.setAttribute('style',
            'width: 600px;' +
            'background-color: white;' +
            'box-shadow: 0px 3px 10px black;' +
            'padding: 0px;' +
            'border-radius: 5px;' +
            'margin-bottom: 30px;')


        let itemImgDiv = document.createElement('div')
        itemImgDiv.setAttribute('style',
        'width: 100%;' +
        'display: flex;' +
        'justify-content: center;' +
        'align-items: center;')
        let img = document.createElement('img')
        img.src = menuArr[i].img
        img.setAttribute('id', 'pizza')
        img.style.borderTopLeftRadius = '5px'
        img.style.borderTopRightRadius = '5px'
        img.alt = menuArr[i].name
        img.width = '100%';
        itemImgDiv.appendChild(img)
        menuItem.appendChild(itemImgDiv)

        let itemTitle = document.createElement('div')
        itemTitle.setAttribute('style',
            'width: 100%;' +
            'display: flex;' +
            'justify-content: space-between;' +
            'align-items: center;' +
            'color: black;' +
            'font-size: 20px;' +
            'font-style: italic;')
        itemTitle.innerHTML = `<div style="padding:15px">${menuArr[i].name}</div><div style="padding:15px">${menuArr[i].price}</div>`
        menuItem.appendChild(itemTitle)

        let itemDesc = document.createElement('div')
        itemDesc.setAttribute('style',
            'width: 100%;' +
            'display: flex;' +
            'justify-content: space-between;' +
            'align-items: center;' +
            'color: black;' +
            'font-size: 15px;' +
            'padding: 15px;' +
            'padding-top: 0px;')
        itemDesc.innerText = `${menuArr[i].description}`
        menuItem.appendChild(itemDesc)

        menu.appendChild(menuItem)
    }

}

export default createMenuPage