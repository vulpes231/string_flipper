import reverseString from "./reverse.js";

document.addEventListener("DOMContentLoaded", function () {
  const wordEl = document.querySelector(".rev");
  const submitEl = document.querySelector(".submit");
  const resultEl = document.querySelector(".result");

  submitEl.addEventListener("click", function (e) {
    e.preventDefault();
    const word = wordEl.value.toLowerCase();
    if (!word) {
      console.log(word);
      wordEl.style.border = "2px solid red";
      resultEl.style.color = "red";
      resultEl.textContent = "Enter a word to reverse!";

      setTimeout(() => {
        wordEl.style.border = "";
        // resultEl.style.display = "";
      }, 2000);
    } else {
      try {
        const res = reverseString(word);
        wordEl.value = "";
        resultEl.style.color = "green";
        resultEl.textContent = `Reversed form: ${res}`;
      } catch (error) {
        console.error(error);
      }
    }
  });
});
