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

        "h5 switch" : "请填写以下报名表以参加比赛:",
    }
}


let switcher = document.querySelectorAll(".switch")
console.log(switcher[8].className)
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





