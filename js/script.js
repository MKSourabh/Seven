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

document.getElementById('waitlist-form').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent the form from refreshing the page
  const emailInput = document.getElementById('email'); // Get the email input field
  const successMessage = document.getElementById('success-message'); // Get the success message element

  // Hide the success message initially
  successMessage.style.display = 'none';

  if (emailInput.value) {
    try {
      // Send the email to the backend
      const response = await fetch('https://seven-bgc6.onrender.com/submit-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput.value }),
      });

      if (response.ok) {
        // Show success message and clear the input field
        successMessage.style.display = 'block';
        emailInput.value = '';
      } else {
        alert('Failed to save email. Please try again.');
      }
    } catch (error) {
      alert('Error connecting to the server.');
    }
  } else {
    alert('Please enter a valid email address.');
  }
});