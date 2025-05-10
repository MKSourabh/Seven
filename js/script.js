function showLearnMore(event) {
  event.preventDefault();
  const content = document.getElementById('learn-more-content');
  content.style.display = 'block'; // Make the content visible

  // Add animation classes to the sections
  const descriptionSection = document.querySelector('.description');
  const featuresSection = document.querySelector('.features');
  const storySection = document.querySelector('.story');

  // Trigger animations with delays
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

document.getElementById('waitlist-form').addEventListener('submit', function (event) {
  // Allow the form to submit normally to FormSubmit.co
  // No custom JavaScript is needed for FormSubmit
});