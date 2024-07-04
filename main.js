const numberBoard = document.getElementsByClassName("inside")[0];
const button = document.querySelectorAll(".btn");
const plus = document.getElementsByClassName("plus")[0];

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

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", (event) => {
    // console.log("eventt", event.target.textContent);
    numberBoard.textContent += event.target.textContent;
    // console.log(numberBoard.textContent);
    let convertToNumber = Number(numberBoard.textContent);
    console.log("convert", convertToNumber);
    // add(prevValue, current, operator)
  });
}

plus.addEventListener("click", () => {});
