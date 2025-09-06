// =========================
// Part 1: Event Handling
// =========================
const greetBtn = document.getElementById("greetBtn");
const message = document.getElementById("message");

greetBtn.addEventListener("click", function () {
  message.textContent = "Hello, Gerald! 🎉 You just clicked the button.";
});

// =========================
// Part 2: Interactive Elements
// =========================

// Light/Dark Mode Toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Counter
let counter = 0;
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");

increaseBtn.addEventListener("click", () => {
  counter++;
  countDisplay.textContent = counter;
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  countDisplay.textContent = counter;
});

// =========================
// Part 3: Form Validation
// =========================
const form = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let errors = [];

  // Validation logic
  if (name.length < 3) {
    errors.push("Name must be at least 3 characters.");
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    errors.push("Enter a valid email address.");
  }

  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  // Show result
  if (errors.length > 0) {
    formMessage.style.color = "red";
    formMessage.innerHTML = errors.join("<br>");
  } else {
    formMessage.style.color = "green";
    formMessage.textContent = "Form submitted successfully 🎉";
  }
});
