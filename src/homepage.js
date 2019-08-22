const createHomepage = () => {
    let content = document.querySelector('div#content')
    if (content.childNodes.length > 2) {
        content.removeChild(content.lastChild)
    }

    let homepage = document.createElement('div')
    homepage.setAttribute('id', 'homepage')
    homepage.setAttribute('class','pageContent')
    homepage.setAttribute('style',
        'width: 100%;' +
        'height: 100%;' +
        'display: flex;' +
        'justify-content: center;' + 
        'align-items: center;' +
        'flex-flow: column;')


    let imgDiv = document.createElement('div')
    imgDiv.setAttribute('id', 'imgDiv')
    imgDiv.setAttribute('style',
        'box-shadow: 0px 3px 10px black;' +
        'display: flex;' +
        'justify-content: center;' +
        'align-items: center;')
    let restaurantImg = document.createElement('img')
    restaurantImg.src = "../images/pizzas.jpg"
    restaurantImg.setAttribute('id', 'pizza')
    restaurantImg.alt = 'Pizza'
    imgDiv.appendChild(restaurantImg)

    let reviews = document.createElement('div')
    reviews.setAttribute('id','reviews')
    reviews.setAttribute('style',
        'width: 80%;' +
        'display: flex;' +
        'flex-flow: column;' +
        'justify-content: center;' + 
        'align-items: center;' +
        'margin-top: 30px;')

    const rev1 = {'author':'The Owner', 'review':"The owner is so handsome! And the food is great too!"}
    const rev2 = {'author':'Random Guy off the street', 'review':"Uhh, I've never eaten there before"}
    const rev3 = {'author':'Also the Owner', 'review':"Possibly the greatest Italian restaurant that has ever been or ever will be."}
    const revArr = [rev1, rev2, rev3]
    let reviewsTitle = document.createElement('div')
    reviewsTitle.setAttribute('id','reviewsTitle')
    reviewsTitle.innerHTML = "Trusted Reviews"
    reviewsTitle.setAttribute('style',
        'width: 100%;' +
        'height: 35px;' +
        'border-radius: 4px;' +
        'background: rgba(255,255,255,0.9);' +
        'font-family: "Roboto", sans-serif;' +
        'font-size: 20px;' +
        'display: flex;' +
        'justify-content: center;' +
        'align-items: center;' +
        'margin-bottom: 10px;' +
        'padding: 5px;')
    reviews.appendChild(reviewsTitle)
    for (let i=0; i<revArr.length; i++) {
        let r = document.createElement('div')
        r.setAttribute('class','review')
        r.setAttribute('style',
            'font-family: "Roboto", sans-serif;' +
            'font-size: 18px;' +
            'height: auto;' +
            'width: 100%;' +
            'border-radius: 4px;' +
            'color: white;' +
            'background: rgba(0,0,0,0.5);' +
            'display: flex;' +
            'justify-content: center;' +
            'flex-flow: column;' +
            'align-items: center;' +
            'padding: 10px;' +
            'margin-bottom: 10px;')
        r.innerHTML = `<div><i>"${revArr[i].review}"</i></div><div style="width:100%;display:flex;justify-content:flex-end;padding-top:5px;"> - ${revArr[i].author}</div>`
        reviews.appendChild(r)
    }

    content.appendChild(homepage)
    
    homepage.appendChild(imgDiv)
    homepage.appendChild(reviews)

    let img = document.querySelector('#pizza')
    img.style.width = "700px"
    img.style.height = "auto;"
}


export default createHomepage