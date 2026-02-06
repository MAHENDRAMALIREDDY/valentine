const loveProfile = {
  herName: "Kuttyluuu",
  yourName: "Malumali",
  nickname: "Kutty Papa",
  insideJoke: "Makeout on 14th Aug 2025",
  firstMemory: "Are you from south?",
  futureLine: "This story continues offline 😉"
};
let secretClicks = 0;

document.addEventListener("click", () => {
  secretClicks++;
  if (secretClicks === 7) {
    alert(
      `If you found this, ${loveProfile.herName}…\n\nIt means you pay attention to little things.\nThat’s one of my favorite things about you 💘`
    );
  }
});
