input = document.querySelector("input");
buttonnine = document.querySelector("#nine");
buttoneight = document.querySelector("#eight");
buttonseven = document.querySelector("#seven");
buttonsix = document.querySelector("#six");
buttonfive = document.querySelector("#five");
buttonfour = document.querySelector("#four");
buttonthree = document.querySelector("#three");
buttontwo = document.querySelector("#two");
buttonone = document.querySelector("#one");
buttonzero = document.querySelector("#zero");
buttonC = document.querySelector("#C");
buttonequals = document.querySelector("#equal");
buttonplus = document.querySelector("#plus");
buttonminus = document.querySelector("#minus");
buttonmul = document.querySelector("#mul");
buttonrem = document.querySelector("#rem");
buttondiv = document.querySelector("#div");
buttonac = document.querySelector("#ac");
let final = "";
buttonnine.addEventListener("click", () => {
  addStrings(9);
});
buttoneight.addEventListener("click", () => {
  addStrings(8);
});
buttonseven.addEventListener("click", () => {
  addStrings(7);
});
buttonsix.addEventListener("click", () => {
  addStrings(6);
});
buttonfive.addEventListener("click", () => {
  addStrings(5);
});
buttonfour.addEventListener("click", () => {
  addStrings(4);
});
buttonthree.addEventListener("click", () => {
  addStrings(3);
});
buttontwo.addEventListener("click", () => {
  addStrings(2);
});
buttonone.addEventListener("click", () => {
  addStrings(1);
});
buttonzero.addEventListener("click", () => {
  addStrings(0);
});
buttonplus.addEventListener("click", () => {
  addStrings("+");
});
buttonminus.addEventListener("click", () => {
  addStrings("-");
});
buttondiv.addEventListener("click", () => {
  addStrings("/");
});
buttonmul.addEventListener("click", () => {
  addStrings("*");
});
buttonrem.addEventListener("click", () => {
  addStrings("%");
});

buttonac.addEventListener("click", removeString);
buttonC.addEventListener("click", () => {
  final = "";
  input.value = final;
});
buttonequals.addEventListener("click", calculate);
function addStrings(number) {
  final += number;
  input.value = final;
}
function removeString() {
  let length = final.length;
  input.value = final.slice(0, length - 1);
  final = final.slice(0, length - 1);
}
function converterandadder(index, char) {
  let a = parseInt(final.slice(0, index));
  let b = parseInt(final.slice(index + 1));
  if (char == "+") {
    value = a + b;
  } else if (char == "-") {
    value = a - b;
  } else if (char == "*") {
    value = a * b;
  } else if (char == "/") {
    value = a / b;
  } else if (char == "%") {
    value = a % b;
  }

  final = value.toString();
  input.value = final;
}
function calculate() {
  for (let i = 0; i < final.length; i++) {
    if (final[i] == "+") {
      let char = final[i];
      converterandadder(i, char);
    } else if (final[i] == "-") {
      let char = final[i];
      converterandadder(i, char);
    } else if (final[i] == "*") {
      let char = final[i];
      converterandadder(i, char);
    } else if (final[i] == "/") {
      let char = final[i];
      converterandadder(i, char);
    } else if (final[i] == "%") {
      let char = final[i];
      converterandadder(i, char);
    }
  }
}
