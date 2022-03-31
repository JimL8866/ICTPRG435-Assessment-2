let endValue = document.querySelector(".end-value")
let radius = document.querySelector(".radius")
let widthHeight = document.querySelector(".width-height")

//display ending value for x and y for user
const lineId = document.querySelector("#line")
lineId.addEventListener("click",() =>{
    if (lineId.checked) {
        endValue.style.display = "block"
        radius.style.display ="none"
        widthHeight.style.display="none"
    }
})

//dispaly radius value for user 
const circleId = document.querySelector("#circle")
circleId.addEventListener("click",() =>{
    if(circleId.checked) {
        radius.style.display = "block"
        endValue.style.display ="none"
        widthHeight.style.display="none"
    }
})


//dispaly width and height value for user 
const rectId = document.querySelector("#rect")
rectId.addEventListener("click",() =>{
    if(rectId.checked) {
        widthHeight.style.display = "block"
        endValue.style.display ="none"
        radius.style.display="none"
    }
})



//dispaly radius value in slider
const radiusId = document.querySelector("#radius-value")
const displayRadius = document.querySelector("#display-radius-value")
displayRadius.innerHTML = radiusId.value
radiusId.addEventListener("input",function(){
    displayRadius.innerHTML=this.value
})


//dispaly width and height value in slider
const widthId = document.querySelector("#width-value")
const displayWidthId = document.querySelector("#display-width-value")
displayWidthId.innerHTML = widthId.value
widthId.addEventListener("input",function(){
    displayWidthId.innerHTML=this.value
})

const heightId = document.querySelector("#height-value")
const displayHeightId = document.querySelector("#display-height-value")
displayHeightId.innerHTML = heightId.value
widthId.addEventListener("input",function(){
    displayHeightId.innerHTML=this.value
})

