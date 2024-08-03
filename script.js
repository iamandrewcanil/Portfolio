document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs.send('service_980yqqu', 'template_9xlmko5', templateParams)
        .then(function(response) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            alert('Failed to send your message. Please try again later.');
            console.log('FAILED...', error);
        });
});
