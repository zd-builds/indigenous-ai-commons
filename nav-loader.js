(function () {
  var placeholder = document.getElementById('nav-placeholder');
  if (!placeholder) return;

  fetch('/nav.html')
    .then(function (r) { return r.text(); })
    .then(function (html) {
      placeholder.innerHTML = html;
      initNav();
    })
    .catch(function () {
      // fail silently -- page is still usable without nav
    });

  function initNav() {
    var toggle = placeholder.querySelector('.nav-toggle');
    var links = placeholder.querySelector('.nav-links');
    var dropdownTrigger = placeholder.querySelector('.nav-dropdown-trigger');
    var dropdown = placeholder.querySelector('.nav-dropdown');

    if (toggle && links) {
      toggle.addEventListener('click', function () {
        var open = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open);
      });
    }

    if (dropdownTrigger && dropdown) {
      dropdownTrigger.addEventListener('click', function () {
        var open = dropdown.classList.toggle('open');
        dropdownTrigger.setAttribute('aria-expanded', open);
      });
    }

    // close dropdown when focus leaves it
    if (dropdown) {
      dropdown.addEventListener('focusout', function (e) {
        if (!dropdown.contains(e.relatedTarget)) {
          dropdown.classList.remove('open');
          if (dropdownTrigger) dropdownTrigger.setAttribute('aria-expanded', false);
        }
      });
    }

    // close mobile nav and dropdown on outside click
    document.addEventListener('click', function (e) {
      if (placeholder && !placeholder.contains(e.target)) {
        if (links) links.classList.remove('open');
        if (dropdown) dropdown.classList.remove('open');
      }
    });
  }
})();
