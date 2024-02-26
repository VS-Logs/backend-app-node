document.getElementById("unsubscribe").addEventListener("click", function () {
    // Get the email from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    // console.log(email);

    // unsubscribe the email http://localhost:3000/api/unsubscribe POST method
    fetch('http://localhost:3000/api/unsubscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    })
        .then(response => response.text())
        .then(data => {
            console.log('Unsubscribe response:', data);
            document.getElementById('message').textContent = data;
        })
        .catch(error => {
            console.error('Error unsubscribing:', error);
            document.getElementById('message').textContent = 'An error occurred while unsubscribing.';
        });
});
