// Update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// 1. Dynamic Age Groups (Array + Template Literals)
const ageGroups = ["U9", "U10", "U12", "U14", "U16", "U19"];
const ageGroupList = document.getElementById('ageGroupList');
ageGroups.forEach(group => {
  const li = document.createElement('li');
  li.textContent = group;
  ageGroupList.appendChild(li);
});

// 2. Tryout Form - Confirmation + localStorage
const tryoutForm = document.getElementById('tryoutForm');
const formMessage = document.getElementById('formMessage');

tryoutForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const ageGroup = document.getElementById('ageGroupSelect').value;

  if (name && email && ageGroup) {
    const entry = { name, email, ageGroup };
    
    let saved = JSON.parse(localStorage.getItem('tryoutRequests')) || [];
    saved.push(entry);
    localStorage.setItem('tryoutRequests', JSON.stringify(saved));

    formMessage.textContent = `Thanks, ${name}! We received your tryout request for ${ageGroup}.`;
    tryoutForm.reset();
  } else {
    formMessage.textContent = "Please fill in all fields.";
  }
});

// 3. Testimonials Rotator (Object Array + Template Literals)
const testimonials = [
  { name: "Sarah M.", text: "Next Level FC helped my son gain confidence and skills!" },
  { name: "Coach Brent", text: "Love seeing these kids develop into top-tier players." },
  { name: "Jamal R.", text: "The staff is professional and the training is elite." }
];

const testimonialBox = document.getElementById('testimonialBox');
let currentIndex = 0;

function showTestimonial() {
  const t = testimonials[currentIndex];
  testimonialBox.innerHTML = `<p>"${t.text}"</p><h4>- ${t.name}</h4>`;
  currentIndex = (currentIndex + 1) % testimonials.length;
}

showTestimonial();
setInterval(showTestimonial, 5000);
