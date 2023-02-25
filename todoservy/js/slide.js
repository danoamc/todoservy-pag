(function () {
  const slide = [...document.querySelectorAll(".slider_body")];
  const arrowNext = document.querySelector("#after");
  const arrowBefore = document.querySelector("#antes");
  let value;

  arrowNext.addEventListener("click", () => changePosition(1));
  arrowBefore.addEventListener("click", () => changePosition(-1));

  function changePosition(change) {
    const currentElement = Number(
      document.querySelector(".slider_body-show").dataset.id
    );

    value = currentElement;
    value += change;

    if (value === 0 || value == slide.length + 1) {
      value = value === 0 ? slide.length : 1;
    }

    slide[currentElement - 1].classList.toggle("slider_body-show");
    slide[value - 1].classList.toggle("slider_body-show");
  }
})();
