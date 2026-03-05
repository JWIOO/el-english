/**
 * Header Controller
 * - 스크롤 시 .scrolled 클래스 토글
 * - 모바일 메뉴 토글
 */
(function () {
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileNav = document.getElementById('mobileNav');

  // Scroll shadow
  function onScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu toggle
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (mobileNav.classList.contains('open')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    });

    // Close mobile nav when a link is clicked
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        mobileToggle.querySelector('i').className = 'fas fa-bars';
      });
    });
  }
})();
