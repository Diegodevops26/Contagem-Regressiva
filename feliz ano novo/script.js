const countdownElement = document.getElementById("countdown");
const fireworksContainer = document.getElementById("fireworks-container");

function updateCountdown() {
    const now = new Date();
    const newYear = new Date("January 1, 2025 00:00:00");
    const timeLeft = newYear - now;

    if (timeLeft <= 0) {
        clearInterval(interval);
        countdownElement.textContent = "Feliz Ano Novo 2025!";
        startFireworks();
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function startFireworks() {
    const colors = ["red", "blue", "yellow", "green", "purple", "pink"];

    function createFirework() {
        const firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.top = `${Math.random() * 100}%`;
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        fireworksContainer.appendChild(firework);

        setTimeout(() => firework.remove(), 1500);
    }

    setInterval(createFirework, 200);
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();