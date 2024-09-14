const card = document.querySelector(".card");
const button = document.querySelector(".card button");

button.addEventListener("click", () => {
  card.classList.toggle("flipped");
});
