/**
 * Back to Top Button Controller
 * - 스크롤 위치에 따라 표시/숨김
 * - 클릭 시 최상단으로 스크롤
 */
(function () {
  var btn = document.getElementById('toTop');
  if (!btn) return;

  function toggleVisibility() {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', toggleVisibility, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
