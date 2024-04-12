const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const helpBtn = document.getElementById("help-btn");
const helpText = document.getElementById("help-text");
const help = document.getElementById("help");
let onOrOff =  false;

const btnOn = () => {
  helpBtn.style.color = "rgba(0, 0, 0, 0.5)";
  helpBtn.style.backgroundColor = "beige";
  help.style.backgroundColor = "#450238";
  helpText.style.display = "block";
  onOrOff = true;
}

const btnOff = () => {
  helpBtn.style.color = "beige";
  helpBtn.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  help.style.backgroundColor = "transparent";
  helpText.style.display = "none";
  onOrOff = false;
}

const btnSwitcher = () => {
  if (onOrOff === false) {
    btnOn();
  } else {
    btnOff();
  }
}

const isPalindrome = (word) => {
  if (word == "") {
    alert("Please input a value");
    return 0;
  }

  let alphaChecker = /[a-zA-Z0-9]/gm;
  let wordLower = word.toLowerCase().match(alphaChecker);
  let inputArray = [...wordLower];
  let checkArray = [];

  for (let i = inputArray.length - 1; i >= 0; i--) {
    checkArray.push(inputArray[i]);
  }

  const inputWord = wordLower.join("");
  const checkWord = checkArray.join("");
  
  if (inputWord === checkWord) {
    result.innerText = `${word} is a palindrome`;
    result.style.color = "green";
  } else {
    result.innerText = `${word} is not a palindrome`;
    result.style.color = "red";
  }
}

const checkBtnSubmit = () => {
  isPalindrome(textInput.value);
  textInput.value = "";
}

checkBtn.addEventListener("click", () => {
  checkBtnSubmit();
  });

document.body.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkBtnSubmit();
  }
})

helpBtn.addEventListener("click", () => {
    btnSwitcher();
  })
