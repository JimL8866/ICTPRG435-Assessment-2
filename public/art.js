//display ending value for x and y for user
let endValue = document.querySelector(".end-value")
let fillcolor = document.querySelector(".fill-color")
const lineId = document.querySelector("#line")
lineId.addEventListener("click",() =>{
    if (lineId.checked) {
        endValue.style.visibility = "visible";
        radius.style.visibility = "hidden";
        widthHeight.visibility = "hidden";
        fillcolor.style.visibility="hidden";
        myCanvas.style.cursor="default";
        mouseLine.style.visibility = "hidden"; 
    }
})

//dispaly radius value for user
let radius = document.querySelector(".radius")
const circleId = document.querySelector("#circle")
circleId.addEventListener("click",() =>{
    if(circleId.checked) {
        radius.style.visibility = "visible";
        endValue.style.visibility = "hidden";
        widthHeight.style.visibility = "hidden";
        fillcolor.style.visibility="visible";
        myCanvas.style.cursor="default";
        mouseLine.style.visibility = "hidden";
    }
})


//dispaly width and height value for user
let widthHeight = document.querySelector(".width-height")
const rectId = document.querySelector("#rect")
rectId.addEventListener("click",() =>{
    if(rectId.checked) {
        widthHeight.style.visibility = "visible";
        endValue.style.visibility = "hidden";
        radius.style.visibility = "hidden";
        fillcolor.style.visibility="visible";
        myCanvas.style.cursor="default";
        mouseLine.style.visibility = "hidden"; 
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


//display mouseline value in slider
let mouseline = document.querySelector("#mouse-linewidth")
const displayMouthline = document.querySelector("#display-mouseline-value")
displayMouthline.innerHTML = mouseline.value
mouseline.addEventListener("input",function(){
    displayMouthline.innerHTML=this.value
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
const draw = document.querySelector("#draw-btn");

draw.addEventListener("click", ()=>{
    draw.style.cursor.pointer;
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
draw.addEventListener("click",()=>{
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
draw.addEventListener("click",()=>{
    if(rectId.checked){
        ctx.beginPath();
        ctx.rect(startX.value, startY.value,width.value,height.value)
        ctx.strokeStyle =bcolor.value;
        ctx.stroke();
        ctx.fillStyle = fcolor.value;
        ctx.fill();
    }
})

//clear button
const clearBtn = document.querySelector("#clear-btn")
clearBtn.addEventListener("click", ()=>{
    let confirmClear = confirm("Are you sure to clear? This action can't be undone.");
    if (confirmClear){
    ctx.clearRect(0, 0, canvas.width, canvas.height)};
})

//save image buttons
const saveImage = document.querySelector("#image-btn")

saveImage.addEventListener("click", download)

function download(){
    image = canvas.toDataURL("image/jpg").replace("image/jpg", "image/octet-stream");
    var link = document.createElement("a");
    link.download = "my-art.jpg";
    link.href = image;
    link.click();
}

//password validation
let conPwd = document.querySelector("#confirmed-pwd");
let pwd = document.querySelector("#pwd")
conPwd.addEventListener('change', validatePassword);

function validatePassword(){
if(pwd.value != conPwd.value) {
    conPwd.setCustomValidity("Passwords Don't Match");
    conPwd.reportValidity();
}
else {
    conPwd.setCustomValidity('');
    conPwd.reportValidity();
}
}


const date = new Date()
let year = date.getFullYear()

//submit form
const submit= document.getElementById("reg-form");
submit.addEventListener("submit",()=>alert(`Your form has been submitted successfully on\n${date}`))

//copyright
document.getElementById("copyright").innerHTML=`&copy; ${year} JL`


//language switch
let language ={
    en: {
        "title switch": "Abstract Art Competition", 

        "instructions switch": `Welcome to the abstract art competition! On this webpage, there are two sections. 
        The first is the drawing section. In there you are free to draw a picture on canvas by using a range of 
        drawing tools such as lines, circles, rectangles, color, and so on. After completion, it is recommended 
        that you save your artwork to a jpeg file so you can upload it later.  The second section is the registration 
        form, where you have to enter your username, password, email, and mobile number. And don't forget to upload 
        your picture! After submitting your form, you will receive an alert message saying submission successfully.  
        You will be notified of the result in two weeks.`,

        "h4 switch" : "Drawing control",

        "draw switch" : "Draw",

        "clear switch" : "Clear",

        "download switch" : "Save Drawing",

        "h5 switch" : "Please complete the following registration form for entering competition:",

        "random switch":"Random",
        
        "line switch": "Line",

        "circle switch": "Circle",

        "rect switch": "Rectangle",

        "mouse switch":"Draw with Mouse"
    },

    cn:{
        "title switch": "抽象艺术竞赛",

        "instructions switch": `欢迎参加抽象艺术比赛！这个网页分为两部分。首先是绘图部分。在那里，您可以使用一系列绘图工具，如线条、
        圆形、矩形、颜色等。完成后，建议将您的作品保存为 jpeg 文件，以便以后上传。第二部分是注册表，您必须在其中输入您的用户名、密码、
        电子邮件和手机号码。对了别忘记上传您的图片！提交表单后，您将收到一条提示信息，提示您提交成功。竞赛结果两周后会通知您。`,

        "h4 switch" : "绘图工具",

        "draw switch" : "绘图",

        "clear switch" : "清空",

        "download switch" : "保存图片",

        "random switch":"随机", 

        "h5 switch" : "请填写以下报名表以参加比赛:",

        "line switch": "线条",

        "circle switch": "圆形",

        "rect switch": "矩形",

        "mouse switch":"鼠标"
    }
}


let switcher = document.querySelectorAll(".switch")
// console.log(switcher[8].className)
let chooseLan = document.getElementById("language")
chooseLan.addEventListener("change", changeLanguage)
let h1ID = document.querySelector(".title")
let h1Color=h1ID.style.color


function changeLanguage(){

    if (chooseLan.value =="cn") {
        h1ID.style.color = "Orange";
        for (i=0; i <switcher.length; i++) {
            switcher[i].innerHTML = language.cn[switcher[i].className]

        }
    }
    else {
        for (i=0; i <switcher.length; i++) {
            switcher[i].innerHTML = language.en[switcher[i].className]
        }
        h1ID.style.color = h1Color;
    }
}

//random button click
let ran = document.querySelector("#random-btn")
ran.addEventListener("click",randomFunc)

function randomFunc(){
    let ranStartX = Math.floor(Math.random()*401)
    startX.value =ranStartX
    displayStartX.innerHTML = ranStartX
    let ranStartY= Math.floor(Math.random()*401)
    startY.value =ranStartY
    displayStartY.innerHTML = ranStartY

    let ranEndX = Math.floor(Math.random()*401)
    endX.value =ranEndX
    displayEndX.innerHTML = ranStartX
    let ranEndY= Math.floor(Math.random()*401)
    endY.value =ranEndY
    displayEndY.innerHTML = ranEndY

    let ranRadius = Math.floor(Math.random()*101)
    radiusValue.value =ranRadius
    displayRadius.innerHTML = ranRadius

    let ranWidth = Math.floor(Math.random()*201)
    width.value =ranWidth 
    displayWidth.innerHTML = ranWidth 
    let ranHeight = Math.floor(Math.random()*201)
    height.value =ranHeight
    displayHeight.innerHTML = ranStartY

    ranbcolor = Math.floor(Math.random()*16777215).toString(16);
    bcolor.value = `#${ranbcolor}`

    ranfcolor = Math.floor(Math.random()*16777215).toString(16);
    fcolor.value = `#${ranfcolor}`
}



//dispaly mouse-line value for user
let mouseLine = document.querySelector(".mouse-line")
const mouseID = document.querySelector("#mouse");
mouseID.addEventListener("click",()=>{
    if (mouseID.checked){
    radius.style.visibility = "hidden";
    widthHeight.style.visibility = "hidden";
    fillcolor.style.visibility="hidden";
    endValue.style.visibility = "hidden";
    mouseLine.style.visibility = "visible";  
    document.addEventListener('mousedown', startPainting);
    document.addEventListener('mouseup', stopPainting);
    document.addEventListener("mousemove", sketch)
    }
})


// Stores the initial position of the cursor

let coord = {x:0 , y:0}; 
   
// // set a flag
let paint = false;
// Updates the coordianates of the cursor when an event e is triggered 
function getPosition(event){

  let cRect=canvas.getBoundingClientRect();
  coord.x = Math.round(event.clientX-cRect.left)
  coord.y = Math.round(event.clientY-cRect.top)
}
// The following functions toggle the flag to start and stop drawing
function startPainting(event){
    if (mouseID.checked){
    myCanvas.style.cursor = "url('/paint.cur'),auto"
    paint = true;
    getPosition(event);
    }
}

function stopPainting(){
  paint = false;
}
    
function sketch(event){
  if (!paint) return;
  ctx.beginPath();
    
  ctx.lineWidth = mouseline.value;
   
  // set to a round shape.
  ctx.lineCap = "round";
    
  ctx.strokeStyle = bcolor.value;
      
  // The cursor to start drawing
  ctx.moveTo(coord.x, coord.y);
   
  // The position of the cursor gets updated when move the mouse around.
  getPosition(event);
   
  ctx.lineTo(coord.x , coord.y);
    
  // Draws the line.
  ctx.stroke();
}