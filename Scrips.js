var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

const ModoOscuro = (num) => {
  let divs;
  divs = document.querySelectorAll("div");
  if (num % 2) {
    document.querySelector("body").classList.replace("luz", "oscuro");

    for (let x = 0; x < divs.length; x++) {
      divs[x].classList.replace("bg-light", "bg-dark");
    }

    document
      .getElementById("b-darkMode")
      .setAttribute("onClick", "javascript: ModoOscuro(2);");
    document.querySelector("i").classList.replace("bxs-moon", "bxs-sun");
    return;
  }

  document.querySelector("body").classList.replace("oscuro", "luz");

  for (let x = 0; x < divs.length; x++) {
    divs[x].classList.replace("bg-dark", "bg-light");
  }
  document
    .getElementById("b-darkMode")
    .setAttribute("onClick", "javascript: ModoOscuro(1);");
  document.querySelector("i").classList.replace("bxs-sun", "bxs-moon");
};
