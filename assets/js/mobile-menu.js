(function() {
  function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const sidebar = document.querySelector('.td-sidebar');

    if (!menuToggle || !sidebar) {
      console.warn('Mobile menu elements not found');
      return;
    }

    // Toggle menu on button click
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      menuToggle.classList.toggle('active');
      sidebar.classList.toggle('mobile-menu-open');
    });

    // Close menu when clicking on a link inside sidebar
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        sidebar.classList.remove('mobile-menu-open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (menuToggle.classList.contains('active')) {
        const isClickInside = sidebar.contains(event.target) || menuToggle.contains(event.target);
        if (!isClickInside) {
          menuToggle.classList.remove('active');
          sidebar.classList.remove('mobile-menu-open');
        }
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  } else {
    initMobileMenu();
  }
})();
