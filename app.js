var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");



console.log(outputDiv);

function clickHandler() {
    outputDiv.innerText = "ajajajjajajjaasjsajjsa" + txtInput.value;
}

btnTranslate.addEventListener("click", clickHandler);

