document.getElementById('menuHamburguesa').onclick = function(){
    const navUL = document.getElementById('nav__ul')
    if( navUL.className === 'nav__ul' ) {
        navUL.className = 'nav__ul--hamburguesa'
        document.getElementById('main__container').className = 'main__container--hamburguesa'
    } else {
        navUL.className = 'nav__ul'
        document.getElementById('main__container').className = 'main__container'
    }
}

document.getElementById('nav__item2').onclick = function(){
    const allProducts = document.getElementById('mainProducts')
    if(allProducts.className === "main__products"){
        allProducts.className = 'off__products'
    } else {
        allProducts.className = "main__products"
    }   
}

document.getElementById('nav__item3').onmouseover = function(){
    document.getElementById('sideBar').style.backgroundColor = 'green'
}
document.getElementById('nav__item3').onmouseleave = function(){
    document.getElementById('sideBar').style.backgroundColor = '#CA5310'
}

document.getElementById('nav__item4').onclick = function(){
    if(document.getElementById('sideBar').innerHTML === '') {
        document.getElementById('sideBar').innerHTML = 'Hola Mundo'
    } else {
        document.getElementById('sideBar').innerHTML = ''
    }
}