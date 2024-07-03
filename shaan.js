document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your submission!');
    document.getElementById('contact-form').reset();
});
