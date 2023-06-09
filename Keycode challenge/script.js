

const keyOutput = document.getElementById("keyOutput")
const keyOutputCode = document.getElementById("keyOutputCode")

const keyOutputCharCode = document.getElementById("keyOutputCharCode")
    



document.addEventListener("keypress", (event) => {
    keyOutput.textContent = "event.key: " + event.key;
});



document.addEventListener("keypress", (event) => {
    keyOutputCode.textContent = "event.code: " + event.code;
});


document.addEventListener("keypress", (event) => {
    keyOutputCharCode.textContent = "event.which: " + event.charCode;
});












    document.addEventListener("click", (event) => {
        console.log(event);
        })
    