/**
 * Popup Controller
 * - 팝업 열기/닫기
 * - "오늘 하루 보지 않기" 쿠키 처리
 */
(function () {
  const overlay = document.getElementById('popup');
  const closeBtn = document.getElementById('popupCloseBtn');
  const noShowCheck = document.getElementById('popupNoShow');

  const COOKIE_KEY = 'EL_popup_hide';

  function isHiddenToday() {
    const val = localStorage.getItem(COOKIE_KEY);
    if (!val) return false;
    const saved = new Date(val);
    const now = new Date();
    return (
      saved.getFullYear() === now.getFullYear() &&
      saved.getMonth() === now.getMonth() &&
      saved.getDate() === now.getDate()
    );
  }

  function closePopup() {
    if (noShowCheck && noShowCheck.checked) {
      localStorage.setItem(COOKIE_KEY, new Date().toISOString());
    }
    overlay.classList.add('hidden');
  }

  // Init
  if (isHiddenToday()) {
    overlay.classList.add('hidden');
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closePopup);
  }

  // Close on overlay click
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closePopup();
  });

  // ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closePopup();
  });
})();
