let noCount = 0;

function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = 
      ["#ff7aa2", "#ffd6e0", "#ffb6c1", "#ffc0cb"][Math.floor(Math.random() * 4)];

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}

function choose(place) {
  document.getElementById("result").classList.remove("hidden");

  const title = document.getElementById("title");
  const activities = document.getElementById("activities");
  const stay = document.getElementById("stay");
  const transport = document.getElementById("transport");
  const date = document.getElementById("date");

  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const img3 = document.getElementById("img3");

  activities.innerHTML = "";

  if (place === "melaka") {
    title.innerHTML = "Melaka… but make it us 😌💕";

    const acts = [
      "We’ll explore museums together… because I know you love stories 🏛️",
      "River cruise + slow walks at Jonker… just us 🚤",
      "Coconut shake stop because I can’t let you melt 🥥",
      "Sunset at Klebang… where I get to sit next to you 🌊"
    ];

    acts.forEach(a => {
      const li = document.createElement("li");
      li.innerText = a;
      activities.appendChild(li);
    });

    stay.innerText = "Swiss Garden — city view, central… and yes, bathtub 😏🛁";
    transport.innerText = "I’ll drive us there. You just sit back… you’re my princess 👑";
    date.innerText = "22 – 24 May (3D2N) 💕";

    img1.src = "images/melaka1.jpg";
    img2.src = "images/melaka2.jpg";
    img3.src = "images/melaka3.jpg";

  } else {
    title.innerHTML = "Genting… and I’m not letting you go alone 😏🎢";

    const acts = [
      "Theme park chaos… we ride EVERYTHING 😈🎢",
      "You scream, I hold you… deal? 🤭",
      "Hotpot in cold weather = perfect 🍲"
    ];

    acts.forEach(a => {
      const li = document.createElement("li");
      li.innerText = a;
      activities.appendChild(li);
    });

    stay.innerText = "Still deciding… but somewhere nice. You deserve it 😉";
    transport.innerText = "I’ll drive us up. You just enjoy… I got you 👑";
    date.innerText = "22 – 24 May (3D2N) 😌";

    img1.src = "images/genting1.jpg";
    img2.src = "images/genting2.jpg";
    img3.src = "images/genting3.jpg";
  }
}

function sayYes() {
  launchConfetti();

  document.getElementById("result").style.display = "none";
  document.getElementById("final").style.display = "block";
}

function sayNo() {
  noCount++;

  if (noCount === 1) {
    alert("Do you mean yes? 😏");
  } else if (noCount === 2) {
    alert("YESSS PLEASEEE YESSS 😭💕");
  } else {
    alert("You’re cute… but still yes 😌");
  }
}