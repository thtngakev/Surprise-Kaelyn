function yesClick() {
  document.getElementById("yaySound").play();
  document.getElementById("main").classList.add("hidden");
  document.getElementById("messageScreen").classList.remove("hidden");
  for (let i = 0; i < 30; i++) {
    createHeart();
  }
}

function noClick() {
  document.body.style.backgroundColor = "red";
  document.getElementById("buzzSound").play();
  setTimeout(() => {
    document.getElementById("main").classList.add("hidden");
    document.getElementById("tryAgainScreen").classList.remove("hidden");
    document.body.style.backgroundColor = ""; // reset background
  }, 1500);
}

function resetPage() {
  location.reload();
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 2000);
}
