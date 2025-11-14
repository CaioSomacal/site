// Função para inicializar todos os scripts
document.addEventListener('DOMContentLoaded', function() {

  /* ----------------------------- HEADER SCROLL ----------------------------- */
  const headerScroll = function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  /* ------------------------------- FOOTER YEAR ------------------------------ */
  const updateYear = function() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  };

  /* ------------------------------ SMOOTH SCROLL ------------------------------ */
  const smoothScroll = function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });

          if (history.pushState) {
            history.pushState(null, null, targetId);
          } else {
            location.hash = targetId;
          }
        }
      });
    });
  };

  /* ----------------------------- CONTACT FORM ----------------------------- */
  const contactForm = function() {
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        const message = form.querySelector('textarea[name="message"]');

        if (!name.value || !email.value || !message.value) {
          alert('Por favor, preencha todos os campos obrigatórios.');
          return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
          alert('Por favor, insira um e-mail válido.');
          return;
        }

        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        form.reset();
      });
    }
  };

  /* --------------------------- WHATSAPP BUTTON --------------------------- */
  const whatsappButton = function() {
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (whatsappFloat) {
      whatsappFloat.addEventListener('click', function() {
        console.log('WhatsApp button clicked');
      });
    }
  };

 

  /* ------------------------------ INIT ALL ------------------------------ */
  const init = function() {
    headerScroll();
    updateYear();
    smoothScroll();
    contactForm();
    whatsappButton();


    window.addEventListener('scroll', headerScroll);
  };

  init();
});
