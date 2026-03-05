/**
 * Scroll Animations Controller
 * - IntersectionObserver로 .fade-up 등 애니메이션 트리거
 * - 레벨 차트 바 애니메이션
 */
(function () {
  var animatedElements = document.querySelectorAll(
    '.fade-up, .fade-left, .fade-right, .scale-in'
  );

  if (!animatedElements.length) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          // Level chart bars animation
          var leveltest = entry.target.closest('.leveltest');
          if (leveltest) {
            leveltest.querySelectorAll('.level-fill').forEach(function (bar) {
              bar.classList.add('animated');
            });
          }

          // 한번만 실행 (성능 최적화)
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach(function (el) {
    observer.observe(el);
  });

  // Also observe the leveltest section itself
  var ltSection = document.querySelector('.leveltest');
  if (ltSection) {
    var ltObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.level-fill').forEach(function (bar) {
              bar.classList.add('animated');
            });
            ltObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    ltObserver.observe(ltSection);
  }
})();
