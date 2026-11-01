//your JS code here. If required.
const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    // TYPING FORWARD - only focus next
    if (e.key >= 0 && e.key <= 9) {
      if (idx < codes.length - 1) {
        codes[idx + 1].focus();
      }
    }
    // BACKSPACE - only focus previous
    if (e.key === 'Backspace') {
      if (idx > 0) {
        codes[idx - 1].focus();
      }
    }
  });
});