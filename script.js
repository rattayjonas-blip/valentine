const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const image = document.getElementById("mainImage");
const title = document.getElementById("title");

let yesSize = 1;

noBtn.addEventListener("click", () => {
  yesSize += 0.2;
  yesBtn.style.transform = `scale(${yesSize})`;
});

yesBtn.addEventListener("click", () => {
  title.textContent = "YAAAYYY 💕";
  image.src = "yay.jpg";
  noBtn.style.display = "none";
  yesBtn.style.display = "none";
  document.getElementById("hint").style.display = "none";
});
