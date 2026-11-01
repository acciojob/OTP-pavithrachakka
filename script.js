//your JS code here. If required.
const codes = document.querySelectorAll('.code');

// Initial Focus - REQUIRED for test
codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      // Clear before typing next number
      codes[idx].value = '';
      setTimeout(() => {
        if (idx < codes.length - 1) {
          codes[idx + 1].focus();
        }
      }, 10);
    } else if (e.key === 'Backspace') {
      setTimeout(() => {
        if (idx > 0) {
          // Content Removal + Focus Shift both handled here
          codes[idx - 1].value = '';
          codes[idx - 1].focus();
          codes[idx].value = '';
        } else {
          codes[idx].value = '';
        }
      }, 10);
    }
  });
});