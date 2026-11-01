//your JS code here. If required.
const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    // TYPING FORWARD - this is what that test checks
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = '';
      setTimeout(() => {
        if (idx < codes.length - 1) {
          codes[idx + 1].focus();
        }
      }, 10);
    } 
    // BACKSPACE - both Content Removal + Focus Shift
    else if (e.key === 'Backspace') {
      setTimeout(() => {
        if (idx > 0) {
          codes[idx - 1].focus();
          // This line fixes the 2 backspace tests
          if (codes[idx].value === '') {
            codes[idx - 1].value = '';
          }
        }
      }, 10);
    }
  });
});