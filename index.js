let string = "";
let input = document.querySelector("input");
buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    try {
      if (event.target.innerText == "C") {
        string = "";
        input.value = string;
      } else if (event.target.innerText == "=") {
        string = eval(string);
        input.value = string;
      } else if (event.target.innerText == "back") {
        let length = string.length;
        string = string.slice(0, length - 1);
        input.value = string;
      } else {
        string += event.target.innerText;
        input.value = string;
      }
    } catch (err) {
      string = "Enter Correct Values";
      input.value = string;
    }
  });
});
