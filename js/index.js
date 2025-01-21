// const avanti = document.querySelector(".avanti");
// const indietro = document.querySelector(".indietro")
// const cardWrapper = document.querySelector(".card-wrapper");
// const width = document.querySelector(".card").offsetWidth
// console.log(cardWrapper.scrollLeft)


// avanti.addEventListener("click", function(){
//     cardWrapper.scrollLeft += width
// })

// indietro.addEventListener("click", function(){
//     cardWrapper.scrollLeft -= width
// })
const avanti = document.querySelectorAll(".avanti");
const indietro = document.querySelectorAll(".indietro")
const cardWrapper = document.querySelectorAll(".card-wrapper");
const width = document.querySelectorAll(".card")
console.log(cardWrapper)
console.log(width)


// avanti.addEventListener("click", function(){
//     cardWrapper.scrollLeft += width
// })

// indietro.addEventListener("click", function(){
//     cardWrapper.scrollLeft -= width
// })

for(let i=0; i<avanti.length; i++){
    avanti[i].addEventListener("click", function(){
        cardWrapper[i].scrollLeft += 300
    })
}

for(let i=0; i<indietro.length; i++){
    indietro[i].addEventListener("click", function(){
        cardWrapper[i].scrollLeft -= 300
    })
}

