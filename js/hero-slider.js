/**
 * Hero Slider Controller
 * - 자동 슬라이드 (5초 간격)
 * - 도트 네비게이션
 * - 터치/스와이프 지원
 */
(function () {
  const slider = document.getElementById('heroSlider');
  const dotsContainer = document.getElementById('heroDots');

  if (!slider || !dotsContainer) return;

  const dots = dotsContainer.querySelectorAll('.hero-dot');
  const totalSlides = dots.length;
  let currentSlide = 0;
  let autoplayTimer = null;
  let touchStartX = 0;

  function goToSlide(index) {
    currentSlide = ((index % totalSlides) + totalSlides) % totalSlides;
    slider.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
    dots.forEach(function (dot, i) {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  // Dot click
  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      goToSlide(parseInt(dot.dataset.slide, 10));
      startAutoplay(); // reset timer
    });
  });

  // Touch / Swipe support
  slider.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
    stopAutoplay();
  }, { passive: true });

  slider.addEventListener('touchend', function (e) {
    var diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    startAutoplay();
  }, { passive: true });

  // Pause on hover
  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);

  // Init
  startAutoplay();
})();
