document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.social-icon');
    icons.forEach(icon => {
      icon.addEventListener('click', (e) => {
        e.preventDefault();
        const url = icon.getAttribute('data-link');
        window.open(url, '_blank');
      });
    });
  });
  