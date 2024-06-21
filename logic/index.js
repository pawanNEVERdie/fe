document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        const formDataJson = Object.fromEntries(formData.entries()); // Convert FormData to JSON object

        fetch('http://localhost:3000/contact-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataJson)
        })
        .then(res => res.json())
        .then(data => {
            document.getElementById('responseMessage').innerHTML = `<p>${data.message}</p>`;
            document.getElementById('contactForm').reset();
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('responseMessage').innerHTML = `<p>There was an error submitting your message. Please try again later.</p>`;
        });
    });
});
