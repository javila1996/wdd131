// Auto-update year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Tryout form confirmation behavior
const tryoutForm = document.getElementById('tryoutForm');
const formMessage = document.getElementById('formMessage');

tryoutForm.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent page reload

  const name = document.getElementById('name').value;
  formMessage.textContent = `Thanks, ${name}! We’ve received your tryout request.`;
  formMessage.style.color = 'green';

  tryoutForm.reset();
});