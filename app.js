const inputArea = document.querySelector(".input");
const outputArea = document.querySelector(".output");
const button = document.querySelector(".translateButton");

const regExp = /[가-힣ㄱ-ㅎㅏ-ㅣ]/;

function makeHangulUgly(event) {
  event.preventDefault();
  const textInput = inputArea.value;
  printOutput(textInput);
}
function printOutput(text) {
  let textArr = text.split("");
  textArr = textArr.map(function (x) {
    if (regExp.test(x)) {
      return String.fromCharCode(parseInt(x.charCodeAt(x) + 1));
    } else return x;
  });
  textArr = textArr.join("");
  outputArea.innerText = textArr;
}

button.addEventListener("click", makeHangulUgly);
