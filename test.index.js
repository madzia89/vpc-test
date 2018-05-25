
const myDiv = document.getElementsByClassName('div-to-center')

var myVar = setInterval(setH1, 1000);

function setH1() {
    const myh1 = document.createElement('h1')
    myh1.style.animationDuration = '3s'
    myh1.style.animationName = 'fadeIn'
    myh1.style.animationIterationCount = 'infinite'
    myh1.innerText = 'css is awesome'
    myDiv.appendChild(myh1)

}

