// Seleção de Elementos  
const generatePasswordButton = document.querySelector("#generate-password");  
const generatedPasswordElement = document.querySelector("#generated-password");  
const openCloseGeneratorButton = document.querySelector("#open-generate-password");  
const generatePasswordContainer = document.querySelector("#generate-options");  
const lengthInput = document.querySelector("#length");  
const lettersInput = document.querySelector("#letters");  
const numbersInput = document.querySelector("#numbers");  
const symbolsInput = document.querySelector("#symbols");  
const copyPasswordButton = document.querySelector("#copy-password");  

// Funções  
const getLetterLowerCase = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);  
const getLetterUpperCase = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);  
const getNumber = () => Math.floor(Math.random() * 10).toString();  
const getSymbol = () => {  
    const symbols = "(){}[]=<>/,.!@#$%&*+-";  
    return symbols[Math.floor(Math.random() * symbols.length)];  
};  

const generatePassword = () => {  
    let password = "";  
    const passwordLength = +lengthInput.value;  
    const generators = [];  

    if (lettersInput.checked) {  
        generators.push(getLetterLowerCase, getLetterUpperCase);  
    }  
    if (numbersInput.checked) {  
        generators.push(getNumber);  
    }  
    if (symbolsInput.checked) {  
        generators.push(getSymbol);  
    }  

    if (generators.length === 0) {  
        return;  
    }  

    for (let i = 0; i < passwordLength; i++) {  
        const randomValue = generators[Math.floor(Math.random() * generators.length)]();  
        password += randomValue;  
    }  

    generatedPasswordElement.style.display = "block";  
    generatedPasswordElement.querySelector("h4").innerText = password;  
};  

// Eventos  
generatePasswordButton.addEventListener("click", generatePassword);  
openCloseGeneratorButton.addEventListener("click", () => {  
    generatePasswordContainer.classList.toggle("hide");  
    generatePasswordContainer.style.display = generatePasswordContainer.style.display === "none" ? "block" : "none";  
});  

copyPasswordButton.addEventListener("click", () => {  
    const password = generatedPasswordElement.querySelector("h4").innerText;  
    navigator.clipboard.writeText(password).then(() => {  
        copyPasswordButton.innerText = "Senha copiada com sucesso!";  
        setTimeout(() => {  
            copyPasswordButton.innerText = "Copiar";  
        }, 1000);  
    });  
});  