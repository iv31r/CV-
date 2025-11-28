// بسيط: تحريك أشرطة المهارات وتعيين سنة في الفوتر
document.addEventListener('DOMContentLoaded', function(){
  // year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // animate skill bars when in view
  const bars = document.querySelectorAll('.skill-bar');
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const bar = entry.target;
        const percent = bar.getAttribute('data-percent') || '0';
        const fill = bar.querySelector('.skill-fill');
        if(fill) fill.style.width = percent + '%';
        obs.unobserve(bar);
      }
    });
  }, {threshold: 0.2});

  bars.forEach(b => io.observe(b));
});