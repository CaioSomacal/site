document.addEventListener('DOMContentLoaded', function() {
    // Filtro do portfólio
    const filterButtons = document.querySelectorAll('.btn-filter');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove a classe ativa de todos os botões
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Adiciona a classe ativa apenas no botão clicado
        this.classList.add('active');
  
        const filterValue = this.getAttribute('data-filter');
  
        portfolioItems.forEach(item => {
          if (filterValue === 'all' || item.classList.contains(filterValue)) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
            }, 50);
          } else {
            item.style.opacity = '0';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  
    // Lightbox
    const portfolioImages = document.querySelectorAll('.portfolio-img');
    const lightbox = document.getElementById('portfolio-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeLightbox = document.querySelector('.close-lightbox');
  
    portfolioImages.forEach(image => {
      image.addEventListener('click', function() {
        lightbox.style.display = 'block';
        lightboxImg.src = this.src;
        lightboxCaption.textContent = this.alt;
      });
    });
  
    closeLightbox.addEventListener('click', function() {
      lightbox.style.display = 'none';
    });
  
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });
  
    // Atualiza o ano no footer
    document.getElementById('year').textContent = new Date().getFullYear();
  });