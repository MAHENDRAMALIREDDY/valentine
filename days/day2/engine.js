const line = document.getElementById("line");
const button = document.getElementById("stayBtn");

setTimeout(() => {
  line.innerText = "If you’re here… stay for a moment.";
}, 4000);

setTimeout(() => {
  line.innerText = "Still here?";
  button.classList.remove("hidden");
}, 9000);

button.onclick = () => {
  window.location.href = "quiz.html";
};

