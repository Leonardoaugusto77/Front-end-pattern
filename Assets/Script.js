


const header = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    return window.alert("Olá, mundo!");
  });
};

window.addEventListener("load", header());
