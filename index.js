

var textInput = document.querySelector("textarea");

var buttonTranslator = document.querySelector("button");

var textOutput = document.querySelector(".output");

var serverUrl = "https://api.funtranslations.com/translate/yoda.json"


buttonTranslator.addEventListener("click", clickHandler);

function getTranslationUrl(input){
   return serverUrl + "?" + "text=" + input
}

function errorHandler(error){
    console.log("Error Occured", error.message)
    alert("Something went wrong! please try again after sometime")
}

function clickHandler(){
    var result = textInput.value

    fetch(getTranslationUrl(result))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated
        textOutput.innerHTML = '<h1>' + translatedText +'</h1>';
    })
    .catch(errorHandler)
}