document.addEventListener('DOMContentLoaded', function () {
  function showLearnMore(event) {
    event.preventDefault();
    const content = document.getElementById('learn-more-content');
    content.style.display = 'block';

    const descriptionSection = document.querySelector('.description');
    const featuresSection = document.querySelector('.features');
    const storySection = document.querySelector('.story');

    descriptionSection.style.animationDelay = '0s';
    descriptionSection.style.opacity = '1';

    featuresSection.style.animationDelay = '2s';
    featuresSection.style.opacity = '1';

    storySection.style.animationDelay = '4s';
    storySection.style.opacity = '1';
  }

  function showEmailForm(event) {
    event.preventDefault();
    const emailForm = document.getElementById('email-form');
    emailForm.style.display = 'block';
  }

  document.querySelector('.learn-more').addEventListener('click', showLearnMore);
  document.querySelector('.reserve-yours').addEventListener('click', showEmailForm);

  const form = document.getElementById('waitlist-form');
  if (form) {
    form.addEventListener('submit', function () {
      // Allow native FormSubmit behavior
    });
  }
});
