const iphonesColors = {
    White: "./mackIMG/silver.png",
    // SpaceGrey: "../mackIMG/spacegray.png",
    SpaceGrey: './mackIMG/spacegray'
}


let btn = document.querySelectorAll('button[data-popo]')
let macBook = document.querySelector(".img")
let items = document.querySelectorAll('button[data-popo]')
let txt = document.querySelector('.blue')
let narx = document.querySelectorAll('div[data-p]')

let modal = document.querySelector('.mol')
let openn = document.querySelector('#openn')
let x = document.querySelectorAll('.x')



openn.onclick = () => {
    modal.style.right = '.1%'
}
x.onclick = () => {
   modal.style.display = 'none'
}
;




btn.forEach(btn => {
    btn.onclick = () => {

        let key = btn.innerHTML
        macBook.style.backgroundImage = `url(${iphonesColors[key]})`
        items.forEach(el => el.classList.remove('active'))
        btn.classList.add('active')
        txt.innerHTML = [key]


// forEach(pri => pri. )



    }
})


let prices = document.querySelectorAll('.item')
prices.forEach(btnn => {
    btnn.onclick = () => {
        prices.forEach(el => el.classList.remove('active'))
        btnn.classList.add('active')
    }
})

