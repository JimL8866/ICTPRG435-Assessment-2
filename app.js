//display ending value for x and y for user
let endValue = document.querySelector(".end-value")
let fillcolor = document.querySelector(".fill-color")
const lineId = document.querySelector("#line")
lineId.addEventListener("click",() =>{
    if (lineId.checked) {
        endValue.style.display = "block"
        radius.style.display ="none"
        widthHeight.style.display="none"
        fillcolor.style.display = "none"
        
    }
})

//dispaly radius value for user
let radius = document.querySelector(".radius")
const circleId = document.querySelector("#circle")
circleId.addEventListener("click",() =>{
    if(circleId.checked) {
        radius.style.display = "block"
        endValue.style.display ="none"
        widthHeight.style.display="none"
        fillcolor.style.display="inline-block"
    }
})


//dispaly width and height value for user
let widthHeight = document.querySelector(".width-height")
const rectId = document.querySelector("#rect")
rectId.addEventListener("click",() =>{
    if(rectId.checked) {
        widthHeight.style.display = "block"
        endValue.style.display ="none"
        radius.style.display="none"
        fillcolor.style.display="inline-block"
    }
})


//dislay starting X, Y position in slider
let startX = document.querySelector("#startX");
const displayStartX = document.querySelector("#display-startX-value")
displayStartX.innerHTML = startX.value
startX.addEventListener("input",function(){
    displayStartX.innerHTML=this.value
})
let startY = document.querySelector("#startY");
const displayStartY = document.querySelector("#display-startY-value")
displayStartY.innerHTML = startY.value
startY.addEventListener("input",function(){
    displayStartY.innerHTML=this.value
})

//dislay end X, Y position in slider
let endX = document.querySelector("#endX");
const displayEndX = document.querySelector("#display-endX-value")
displayEndX.innerHTML = endX.value
endX.addEventListener("input",function(){
    displayEndX.innerHTML=this.value
})

let endY = document.querySelector("#endY");
const displayEndY = document.querySelector("#display-endY-value")
displayEndY.innerHTML = endY.value
endY.addEventListener("input",function(){
    displayEndY.innerHTML=this.value
})


//display radius value in slider
let radiusValue= document.querySelector("#radius-value")
const displayRadius = document.querySelector("#display-radius-value")
displayRadius.innerHTML = radiusValue.value
radiusValue.addEventListener("input",function(){
    displayRadius.innerHTML=this.value
})


//display width and height value in slider
let width = document.querySelector("#width-value")
const displayWidth = document.querySelector("#display-width-value")
displayWidth.innerHTML = width.value
width.addEventListener("input",function(){
    displayWidth.innerHTML=this.value
})

const height = document.querySelector("#height-value")
const displayHeight = document.querySelector("#display-height-value")
displayHeight.innerHTML = height.value
height.addEventListener("input",function(){
    displayHeight.innerHTML=this.value
})

//get line width
let lineWidth = document.querySelector("#lineWidth")

//choose color 
let bcolor = document.querySelector("#bcolor")
let fcolor = document.querySelector("#fcolor")

//draw line

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const drawLine = document.querySelector("#draw-btn");

drawLine.addEventListener("click", ()=>{
    if (lineId.checked) {
    ctx.beginPath();
    ctx.moveTo(startX.value, startY.value)
    ctx.lineTo(endX.value, endY.value)
    ctx.lineWidth = lineWidth.value
    ctx.strokeStyle = bcolor.value
    ctx.stroke()
    ctx.fillStyle = fcolor.value
    ctx.fill()
    }
})

//draw circle
drawLine. addEventListener("click",()=>{
    if(circleId.checked){
        ctx.beginPath();
        ctx.arc(startX.value, startY.value, radiusValue.value,0,2 * Math.PI);
        ctx.strokeStyle =bcolor.value;
        ctx.stroke();
        ctx.fillStyle = fcolor.value;
        ctx.fill()
    }
})


//draw rectangle
drawLine. addEventListener("click",()=>{
    if(rectId.checked){
        ctx.beginPath();
        ctx.rect(startX.value, startY.value,width.value,height.value );
        ctx.strokeStyle =bcolor.value;
        ctx.stroke();
        ctx.fillStyle = fcolor.value;
        ctx.fill();
    }
})

//clear button
const clearBtn = document.querySelector("#clear-btn")
clearBtn.addEventListener("click", ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

//save image buttons
const saveImage = document.querySelector("#image-btn")

saveImage.addEventListener("click", download)

function download(){
    image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    var link = document.createElement('a');
    link.download = "my-image.png";
    link.href = image;
    link.click();
  }