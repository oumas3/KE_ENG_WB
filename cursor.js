
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.custom-cursor');

  if (!cursor) return;  // safety check if cursor element missing

  // Track mouse movement
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  // Optional: scale cursor on hover over links/buttons
  const hoverTargets = document.querySelectorAll('a, button');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
  });
});
