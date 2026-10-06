(function () {
  function init() {
    var toggle = document.getElementById('mobile-menu-toggle');
    var sidebar = document.querySelector('.td-sidebar');
    var header = document.querySelector('.layout-header');
    if (!toggle || !sidebar) return;

    function setOpen(open) {
      toggle.classList.toggle('active', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      sidebar.classList.toggle('mobile-menu-open', open);
      if (open && header) {
        var top = Math.round(header.getBoundingClientRect().bottom);
        sidebar.style.top = top + 'px';
        sidebar.style.height = 'calc(100vh - ' + top + 'px)';
      }
    }

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!sidebar.classList.contains('mobile-menu-open'));
    });

    sidebar.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
