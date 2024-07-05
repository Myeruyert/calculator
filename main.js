const numberBoard = document.getElementsByClassName("inside")[0];
const button = document.querySelectorAll(".btn-num");
const plus = document.getElementsByClassName("plus")[0];
const opsBtns = document.getElementsByClassName("op");
const multiple = document.getElementsByClassName("multiple")[0];
const divide = document.getElementsByClassName("divide")[0];
const equal = document.getElementsByClassName("equal")[0];

// const show = [];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// oneEl.addEventListener("click", () => {
//   show.push(numbers[0]);
//   console.log("show", show);
//   let text = show.join("");
//   console.log("join", text);
//   let convertToNumber = Number(text);
//   console.log("convert", convertToNumber);
//   numberBoard.innerHTML = convertToNumber;
//   console.log("nb", typeof numberBoard);
// });

// twoEl.addEventListener("click", () => {
//   numberBoard.innerHTML = 2;
// });
let a = 0;
let operator = "";
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", (event) => {
    // console.log("eventt", event.target.textContent);
    numberBoard.textContent += event.target.textContent;
    // console.log(numberBoard.textContent);
  });
}

for (let i = 0; i < opsBtns.length; i++) {
  opsBtns[i].addEventListener("click", () => {
    a = Number(numberBoard.textContent);
    console.log("a", typeof a);
    numberBoard.textContent = "";
    operator = opsBtns[i].textContent;
    console.log("op", operator);
  });
}

equal.addEventListener("click", () => {
  let res = 0;
  if (operator === "+") {
    res = a + Number(numberBoard.textContent);
    console.log("res", res);
  }
  if (operator === "-") {
    res = a - Number(numberBoard.textContent);
    console.log("res", res);
  }
  if (operator === "*") {
    res = a * Number(numberBoard.textContent);
    console.log("res", res);
  }
  if (operator === "/") {
    res = a / Number(numberBoard.textContent);
    console.log("res", res);
  }
  numberBoard.textContent = res;
});
