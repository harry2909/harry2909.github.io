function openImageModal(src: string, alt: string) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage') as HTMLImageElement | null;
  if (modal && modalImage && src) {
    // Clear previous image first
    modalImage.src = '';
    modalImage.alt = '';

    // Set new image
    modalImage.src = src;
    modalImage.alt = alt || 'Image';
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Focus management for accessibility
    const closeBtn = modal.querySelector(
      'button[aria-label="Close image modal"]'
    ) as HTMLButtonElement | null;
    closeBtn?.focus();
  }
}

function closeImageModal() {
  const modal = document.getElementById('imageModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    // Return focus to the button that opened the modal
    const activeButton = document.activeElement as HTMLElement;
    if (activeButton && activeButton.classList.contains('work-image-btn')) {
      activeButton.focus();
    }
  }
}

// Expose closeImageModal globally for onclick handlers
(window as any).closeImageModal = closeImageModal;

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('imageModal');
  const closeBtn = modal?.querySelector('button[aria-label="Close image modal"]');

  // Use event delegation to handle clicks on all image buttons
  // This works even if buttons are added dynamically
  document.addEventListener('click', function (e) {
    const target = e.target as HTMLElement;
    const button = target.closest('.work-image-btn') as HTMLButtonElement | null;

    if (button) {
      e.preventDefault();
      e.stopPropagation();

      // Get data attributes from the button element
      const src = button.getAttribute('data-image-src');
      const alt = button.getAttribute('data-image-alt');

      if (src) {
        openImageModal(src, alt || 'Image');
      }
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeImageModal);
  }

  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeImageModal();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeImageModal();
    }
  });
});
