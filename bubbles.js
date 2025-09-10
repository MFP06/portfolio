const bubbles = document.querySelectorAll('.bubble');

bubbles.forEach((bubble, index) => {
  const duration = Math.random() * 5 + 5; // 5 à 10s
  bubble.style.setProperty('--duration', `${duration}s`);

  // Position horizontale aléatoire
  const left = Math.random() * 80 + 10; // 10% à 90%
  bubble.style.left = `${left}%`;
});
