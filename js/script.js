
// JavaScript can be added here if needed later
console.log('Header loaded successfully');
  const toggleBtn = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
  let current = 0;
  const testimonials = document.querySelectorAll(".testimonial");
  const dots = document.querySelectorAll(".dot");
  
  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
    current = index;
  }
  
  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => showTestimonial(idx));
  });
  
  setInterval(() => {
    let next = (current + 1) % testimonials.length;
    showTestimonial(next);
  }, 5000);
  