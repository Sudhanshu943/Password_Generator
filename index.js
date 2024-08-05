const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let oneGeneratedEl = document.getElementById("oneGenerated-el");
let secondGeneratedEl = document.getElementById("secondGenerated-el");

function generatedPassword() {
  function passwordGenerator(length) {
    let password = "";
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  }
  let passwordLength = 12;
  let newPasswordOne = passwordGenerator(passwordLength);
  let newPasswordTwo = passwordGenerator(passwordLength);
  oneGeneratedEl.textContent = newPasswordOne;
  secondGeneratedEl.textContent = newPasswordTwo;
}

function copyPasswordOne() {
  let passwordOne = oneGeneratedEl.textContent;
  navigator.clipboard.writeText(passwordOne);
}
function copyPasswordSecond() {
  let passwordTwo = secondGeneratedEl.textContent;
  navigator.clipboard.writeText(passwordTwo);
}
