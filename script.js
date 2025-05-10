// Smooth scrolling for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Click event for the "Donate Food" button
const donateBtn = document.querySelector('.btn');
donateBtn.addEventListener('click', function() {
  alert('Thank you for your interest in donating food!');
});
