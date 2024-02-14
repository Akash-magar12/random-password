let input = document.querySelector("input");
let length = 12;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
// let symbol = "!#$%&'()*+,-./";
let allChars = upperCase + number + lowerCase;

function createPass() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  //   password += symbol[Math.floor(Math.random() * symbol.length)];
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  input.value = password;
}

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  createPass();
});

function copy() {
  input.select();
  //   document.execCommand("copy");
  navigator.clipboard.writeText(input.value);
}
