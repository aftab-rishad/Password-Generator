const passwordBox = document.querySelector("#password-box input");
const generatePassword = document.querySelector(".generate-button");
const copyPasswordBtn = document.querySelector("#password-box button");
const copyPasswordInfo = document.querySelector(".button-box p");

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbol = "~!@#$%^&*=;|/?";
let mixText = upperCase + lowerCase + numbers + symbol;

const createPassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  for (let x = 12; x > password.length; ) {
    password += mixText[Math.floor(Math.random() * mixText.length)];
  }
  passwordBox.value = password;
};

const copyPassword = () => {
  passwordBox.select();
  document.execCommand("copy");
  if (passwordBox.value) {
    copyPasswordInfo.style.opacity = "100";
  }

  setTimeout(() => {
    if (passwordBox.value) {
      copyPasswordInfo.style.opacity = "0";
    }
  }, 1200);
};

generatePassword.addEventListener("click", createPassword);
copyPasswordBtn.addEventListener("click", copyPassword);
