function preloadStickers(questions) {
  questions.forEach(q => {
    const img = new Image();
    img.src = q.gif;
  });
}

const quiz = [
  {
    question: "Where did we first talk? 👀",
    gif: "../../assets/stickers/beautiful.jpg",
    options: ["Nescafe", "Office", "Caddy", "ISC"],
    answer: "ISC"
  },
  {
    question: "Our first proper date was at… ☕",
    gif: "../../assets/stickers/thinking.jpg",
    options: ["Restaurant", "Mall", "Movie", "Walk"],
    answer: "Mall"
  },
  {
    question: "Our first makeout was at… 😳",
    gif: "../../assets/stickers/heart.jpg",
    options: ["Car", "ClassRoom", "Blocks", "Park"],
    answer: "Blocks"
  },
  {
    question: "Who fell first? 😌",
    gif: "../../assets/stickers/hear.jpg",
    options: ["Me", "You", "Both at same time", "Still falling"],
    answer: "Me"
  },
  {
    question: "Our most frequent argument is usually about… 😤",
    gif: "../../assets/stickers/emotional.jpg",
    options: ["Food", "Timing", "Sleep", "Me being angry🥺"],
    answer: "Me being angry🥺"
  },
  {
    question: "What’s our comfort thing to do together? 💕",
    gif: "../../assets/stickers/oho.jpg",
    options: ["Talking endlessly", "Watching movies", "Silence together", "Eating me out"],
    answer: "Eating me out"
  },
  {
    question: "Who says sorry first usually? 🙃",
    gif: "../../assets/stickers/middle.jpg",
    options: ["Me", "You", "Whoever gets scared first", "Depends"],
    answer: "You"
  },
  {
    question: "What makes us ‘us’? 🥺",
    gif: "../../assets/stickers/us.jpg",
    options: ["Laughs", "Fights", "Understanding", "Everything together"],
    answer: "Everything together"
  },
  {
    question: "Do we choose each other every day? ❤️",
    gif: "../../assets/stickers/love.jpg",
    options: ["Yes", "Always", "Without a doubt", "All of these"],
    answer: "All of these"
  }
];

preloadStickers(quiz);

let index = 0;

const gif = document.getElementById("gif");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedback = document.getElementById("feedback");

function loadQuestion() {
  const q = quiz[index];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";
  feedback.innerText = "";

  gif.style.opacity = "0";
  gif.src = q.gif;
  gif.onload = () => gif.style.opacity = "1";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(choice) {
  const correct = quiz[index].answer;

  if (choice === correct) {
    feedback.innerText = "Okay wow… you really remember us 🥺❤️";
    feedback.className = "feedback correct";

    setTimeout(() => {
      index++;
      if (index < quiz.length) {
        loadQuestion();
      } else {
        window.location.href = "letter.html";
      }
    }, 1000);

  } else {
    feedback.innerText = "Nope 😂 try again";
    feedback.className = "feedback wrong";
    shake();
  }
}

function shake() {
  document.querySelector(".quiz-container").classList.add("shake");
  setTimeout(() => document.querySelector(".quiz-container").classList.remove("shake"), 400);
}

loadQuestion();
