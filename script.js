// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});



// if(form){
//     form.addEventListener('submit', function(e){
//         e.preventDefault();
//         const name = document.getElementById('name').value.trim();

//         responseMsg.textContent = 'Thanks ${name}!! for your feedback I`ll get back to you soon.';



//         responseMsg.style.animation = 'none';
//         responseMsg.offsetHeight;

//         responseMsg.style.animation = 'flyDown 3s ease-out forwards';

//         form.reset();

//         setTimeout(() => {
//             responseMsg.textContent = '';
//             responseMsg.style.animation = 'none';
//         }, 3000);

//     });

// }

// Form submit handler
const form = document.getElementById('contactForm');
const responseMsg = document.getElementById('responseMsg');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    responseMsg.textContent = `Thanks ${name}! I’ll get back to you soon.`;
    form.reset();
  });
}
