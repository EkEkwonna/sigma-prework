let Input = prompt(
  "Please provide an array of integers separated by ',' and inbetween square brackets [ ]"
);
let InputNoBrackets = Input.slice(1, -1);
let returnArray = InputNoBrackets.split(",").map((string) => {
  return parseInt(string);
});
let answer = returnArray.sort((a, b) => a - b);
console.log([answer[0], answer[answer.length - 1]]);
