document.querySelectorAll('[data-profile-image]').forEach((image) => {
  image.addEventListener('error', () => image.classList.add('is-missing'));
  if (image.complete && image.naturalWidth === 0) image.classList.add('is-missing');
});

document.querySelectorAll('.accordion-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.accordion-item');
    const willOpen = !item.classList.contains('is-open');

    document.querySelectorAll('.accordion-item').forEach((otherItem) => {
      const otherTrigger = otherItem.querySelector('.accordion-trigger');
      otherItem.classList.remove('is-open');
      otherTrigger.setAttribute('aria-expanded', 'false');
    });

    if (willOpen) {
      item.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});
