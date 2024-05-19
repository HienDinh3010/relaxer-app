const container = document.getElementById('container');
const text = document.getElementById('text');
const email = document.getElementById('email');

const totalTime = 32000; // Adjusted total time to match the new pattern
const breatheTime = 8000;
const holdTime = 8000;
const exhaleTime = 16000;

breathAnimation();

function breathAnimation() {
  text.innerText = 'INHALE';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'HOLD';

    setTimeout(() => {
      text.innerText = 'EXHALE';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);

email.addEventListener('click', () => {
  const emailText = email.innerText;
  if (confirm('Do you want to copy my email address?')) {
    navigator.clipboard.writeText(emailText).then(() => {
      alert('Email address copied to clipboard');
    }).catch(err => {
      alert('Failed to copy email address');
    });
  }
});
