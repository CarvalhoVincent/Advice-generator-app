const num = document.getElementById("obj-number");
const advice = document.getElementById("obj-advice");

var request = new XMLHttpRequest();

request.open('GET', "https://api.adviceslip.com/advice", true)
request.onload = function () {

var data = JSON.parse(this.response);

num.innerHTML = data.slip.id;
advice.innerHTML = data.slip.advice;
};
request.send()


function displayAdvice() {
request.open('GET', "https://api.adviceslip.com/advice", true)
request.onload = function () {

var data = JSON.parse(this.response);

num.innerHTML = data.slip.id;
advice.innerHTML = data.slip.advice;
};
request.send()
}