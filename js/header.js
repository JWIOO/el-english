/**
 * Header Controller
 * - 스크롤 시 .scrolled 클래스 토글
 * - 모바일 메뉴 토글
 */
function initHeader() {
  var header = document.getElementById('header');
  var mobileToggle = document.getElementById('mobileToggle');
  var mobileNav = document.getElementById('mobileNav');

  if (!header) return;

  // Scroll shadow
  function onScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
      var icon = mobileToggle.querySelector('i');
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
}

// 직접 로드된 경우 (include.js 없이) 바로 실행
document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('header')) {
    initHeader();
  }
});
