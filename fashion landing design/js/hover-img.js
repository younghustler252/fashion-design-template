const cards = document.querySelectorAll('.style-card img');
      
cards.forEach(img => {
  const originalSrc = img.src;
  const hoverSrc = img.dataset.alt;

  img.addEventListener('mouseenter', () => {
    img.src = hoverSrc;
  });

  img.addEventListener('mouseleave', () => {
    img.src = originalSrc;
  });
});