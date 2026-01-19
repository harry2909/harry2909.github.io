let mobileMenuOpen = false;

function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  const menu = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');
  const toggle = document.getElementById('mobileMenuToggle');
  const body = document.body;

  if (mobileMenuOpen) {
    menu?.classList.remove('-translate-y-full');
    backdrop?.classList.remove('opacity-0', 'pointer-events-none');
    backdrop?.classList.add('opacity-100', 'pointer-events-auto');
    menuIcon?.classList.add('hidden');
    closeIcon?.classList.remove('hidden');
    body.style.overflow = 'hidden';
    toggle?.setAttribute('aria-expanded', 'true');
    menu?.setAttribute('aria-hidden', 'false');
  } else {
    menu?.classList.add('-translate-y-full');
    backdrop?.classList.remove('opacity-100', 'pointer-events-auto');
    backdrop?.classList.add('opacity-0', 'pointer-events-none');
    menuIcon?.classList.remove('hidden');
    closeIcon?.classList.add('hidden');
    body.style.overflow = '';
    toggle?.setAttribute('aria-expanded', 'false');
    menu?.setAttribute('aria-hidden', 'true');
  }
}

function closeMobileMenu() {
  if (mobileMenuOpen) {
    toggleMobileMenu();
  }
}

// Smooth scroll for all anchor links
function handleSmoothScroll(e: Event) {
  const target = e.currentTarget as HTMLAnchorElement;
  const href = target.getAttribute('href');
  if (href && href.startsWith('#')) {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Expose closeMobileMenu globally for onclick handlers
(window as any).closeMobileMenu = closeMobileMenu;

document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('mobileMenuToggle');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  const menu = document.getElementById('mobileMenu');

  // Get all anchor links that point to hash fragments
  const allAnchorLinks = document.querySelectorAll('a[href^="#"]');

  toggle?.setAttribute('aria-expanded', 'false');
  menu?.setAttribute('aria-hidden', 'true');

  toggle?.addEventListener('click', toggleMobileMenu);
  backdrop?.addEventListener('click', closeMobileMenu);

  // Handle smooth scrolling for all anchor links
  allAnchorLinks.forEach((link) => {
    link.addEventListener('click', handleSmoothScroll);
  });

  // Close on escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenuOpen) {
      closeMobileMenu();
      toggle?.focus();
    }
  });
});
