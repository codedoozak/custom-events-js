import { done } from "./done.js";

const btnAdd = document.getElementById("btn-add");
const resultSpan = document.getElementById("result");

let number = 0;

let sound = new Audio(`data:audio/wav;base64,${done}`);

document.addEventListener("hop", () => {
  console.log("It happend! the event happened ");
  sound.play();
});

btnAdd.addEventListener("click", () => {
  console.log("clicked");
  number++;
  resultSpan.innerHTML = number;

  if (number % 5 === 0) {
    document.dispatchEvent(new CustomEvent("hop"));
  }
});

document.addEventListener("my-event", () => {
  // listening to the event
});

// dispatching the event
document.dispatchEvent(new CustomEvent("my-event"));
