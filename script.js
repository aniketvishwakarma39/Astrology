document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    const welcomeMessage = `Welcome, ${name}! Enter your detailes to know about you and your relationship`;
    document.getElementById('welcomeMessage').textContent = welcomeMessage;
});