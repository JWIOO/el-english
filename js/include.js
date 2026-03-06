/**
 * 공통 컴포넌트(헤더, 푸터) 로더
 * data-include 속성으로 외부 HTML 파일을 불러온다.
 */
document.addEventListener('DOMContentLoaded', function () {
  var els = document.querySelectorAll('[data-include]');
  var loaded = 0;

  els.forEach(function (el) {
    var file = el.getAttribute('data-include');
    fetch(file)
      .then(function (res) { return res.text(); })
      .then(function (html) {
        el.outerHTML = html;
        loaded++;
        if (loaded === els.length) {
          // 모든 컴포넌트 로드 완료 후 헤더 스크립트 재실행
          if (typeof initHeader === 'function') initHeader();
        }
      });
  });
});
