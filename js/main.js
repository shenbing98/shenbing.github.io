

let myImage = document.querySelector("img");
myImage.onclick = function(){
    let imgSrc = myImage.getAttribute("src");
    if (imgSrc ==="image/meixi.jpg"){
        myImage.setAttribute("src","image/CR7.jpeg");
    }
    else{
        myImage.setAttribute("src","image/meixi.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
}
function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
  }
}
myButton.onclick = function () {
    setUserName();
  };