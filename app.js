let btn = document.querySelector('.a')
let modalMain = document.querySelector('.modalMain')
let closee = document.querySelector('.x')
let st = document.querySelector('.st')
let acrdion = document.querySelector('.acrdion')

btn.onclick = () => {
    modalMain.style.display ='block'
}
closee.onclick = () => {
    modalMain.style.display ='none'
}

st.onclick = () => {
   acrdion.classList.add('long') 
   st.onclick = () => {
    acrdion.classList.add('short')
 }
 
}


 

