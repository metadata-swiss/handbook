document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const sidebar = document.querySelector('.td-sidebar');

  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      sidebar.classList.toggle('mobile-menu-open');
    });

    // Close menu when clicking on a link
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        sidebar.classList.remove('mobile-menu-open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInside = sidebar.contains(event.target) || menuToggle.contains(event.target);
      if (!isClickInside && menuToggle.classList.contains('active')) {
        menuToggle.classList.remove('active');
        sidebar.classList.remove('mobile-menu-open');
      }
    });
  }
});
