const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 19000; // 4 + 7 + 8 seconds
const breatheTime = 4000; // 4 seconds
const holdTime = 7000; // 7 seconds
const exhaleTime = 8000; // 8 seconds

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

const emailElement = document.getElementById('email');
emailElement.addEventListener('click', () => {
    const confirmCopy = confirm('Send me an email');
    if (confirmCopy) {
        navigator.clipboard.writeText(emailElement.innerText)
            .then(() => {
                alert('Email address copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy email: ', err);
            });
    }
});
