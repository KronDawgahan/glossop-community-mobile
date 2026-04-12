/* =============================================
   GLOSSOP COMMUNITY MOBILE — script.js
   1. Hero image slideshow (5s fade)
   2. Form validation & Formspree submission
   ============================================= */

/* ── 1. HERO SLIDESHOW ── */
(function () {
  const slides = document.querySelectorAll('.hero-slide');
  if (!slides.length) return;

  let current = 0;

  function advance() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }

  // Rotate every 5 seconds
  setInterval(advance, 5000);
})();


/* ── 2. REGISTRATION FORM ── */
(function () {
  'use strict';

  const form       = document.getElementById('registration-form');
  if (!form) return;

  const emailInput   = document.getElementById('email');
  const emailError   = document.getElementById('email-error');
  const submitBtn    = document.getElementById('submit-btn');
  const btnText      = submitBtn.querySelector('.btn-text');
  const btnLoading   = submitBtn.querySelector('.btn-loading');
  const successPanel = document.getElementById('form-success');
  const errorBanner  = document.getElementById('form-error');

  function isValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val.trim());
  }
  function showEmailError(msg) {
    emailInput.classList.add('invalid');
    emailError.textContent = msg;
  }
  function clearEmailError() {
    emailInput.classList.remove('invalid');
    emailError.textContent = '';
  }

  emailInput.addEventListener('blur', function () {
    const val = emailInput.value.trim();
    if (!val) showEmailError('Please enter your email address.');
    else if (!isValidEmail(val)) showEmailError("That doesn't look like a valid email. Please check and try again.");
    else clearEmailError();
  });

  emailInput.addEventListener('input', function () {
    if (emailInput.classList.contains('invalid') && isValidEmail(emailInput.value.trim())) {
      clearEmailError();
    }
  });

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    if (!email) { showEmailError('Please enter your email address.'); emailInput.focus(); return; }
    if (!isValidEmail(email)) { showEmailError("That doesn't look like a valid email. Please check and try again."); emailInput.focus(); return; }

    clearEmailError();
    errorBanner.hidden = true;
    submitBtn.disabled = true;
    btnText.hidden     = true;
    btnLoading.hidden  = false;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        form.hidden         = true;
        successPanel.hidden = false;
        successPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        const json = await response.json().catch(() => ({}));
        throw new Error(json.error || 'Submission failed');
      }
    } catch (err) {
      console.error('Form error:', err);
      errorBanner.hidden = false;
      errorBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
      submitBtn.disabled = false;
      btnText.hidden     = false;
      btnLoading.hidden  = true;
    }
  });
})();
