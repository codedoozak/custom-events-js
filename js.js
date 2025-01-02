import { done } from "./done.js";

const btnIncrement = document.getElementById("btn-count");
const previewer = document.getElementById("preview");

let sound = new Audio(`data:audio/wav;base64,${done}`);

setTimeout(() => {
  //sound.play();
}, 2000);

const numberChange = new CustomEvent("number-changed", {});

btnIncrement.addEventListener("number-changed", () => {
  console.log("number - changed");
});

btnIncrement.onclick = () => {
  btnIncrement.dispatchEvent(new CustomEvent("number-changed", {}));
};
