document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const btn = document.getElementById("openBtn");

  btn.onclick = () => {
    envelope.classList.add("open");
    btn.disabled = true;
    btn.innerText = "💖";
  };
});
