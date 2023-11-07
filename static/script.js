const nameInput = document.querySelector("#user-name-input");
const passInput = document.querySelector("#password-input");
const subButton = document.querySelector("#submit-input");
subButton.disabled = true;
let nameResultOfCheck = {result: false};
let passResultOfCheck = {result: false};
function inputValidator(inputItem, valueLength, errorMessage, resultCheck){
    let value;
    inputItem.addEventListener("blur", () => {
        value = inputItem.value
        if (!value || value.length < valueLength) {
            inputItem.className = "input_error";
            if (!inputItem.parentElement.children.item(2)) {
                const p = document.createElement("p");
                p.id = "error_message";
                p.textContent = errorMessage;
                inputItem.parentElement.append(p);
            }
            resultCheck.result = false;
        }
        else {
            inputItem.className = "";
            if (inputItem.parentElement.children.item(2)) {
                inputItem.parentElement.children.item(2).remove();
            }
            resultCheck.result = true;
        }
    });
}
function sumOfCheck(nameResult, passResult){
    return (nameResult && passResult);
}
function buttonActivator(nameResultOfCheck, passResultOfCheck){
    function setupErrorState(){
        let summOfCheckBool = sumOfCheck(nameResultOfCheck.result, passResultOfCheck.result);
        if (summOfCheckBool) {
            subButton.disabled = false;
            subButton.className = "";
            passInput.className = "";
            nameInput.className = "";
            return false;
        } else {
            subButton.className = "input_error";
            subButton.disabled = true;
            return true;
        }
    }
    subButton.addEventListener("mouseover", ()=> {
        setupErrorState();})
    nameInput.addEventListener("blur", () => {
        setupErrorState();})
    passInput.addEventListener("blur", () => {
        setupErrorState();})
}
inputValidator(nameInput, 4,
    "Username length must be more then 4 character", nameResultOfCheck);
inputValidator(passInput, 6,
    "Password length must be more then 6 character", passResultOfCheck);
buttonActivator(nameResultOfCheck, passResultOfCheck);

const styleButton = document.getElementById("Day/Night");
let styleState = 2;
styleButton.addEventListener("click", () => {
    if (styleState === 1) {
        document.body.style.background = 'gray';
        styleButton.textContent = "Day";
        styleState = 2;
    }
    else {
        document.body.style.background = 'white';
        styleButton.textContent = "Night";
        styleState = 1;

    }
});