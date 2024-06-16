document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '') {
            alert('Please enter your name.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (message === '') {
            alert('Please enter your message.');
            return;
        }

        // If all validation passes, show the modal
        $('#submitModal').modal('show');
        form.reset(); // Optionally clear the form fields after submission
    });

    // Function to validate email format
    function isValidEmail(email) {
        // Using a simple regex for demonstration, you might want to use a more robust check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Slider functionality
    let slideIndex = 0;

    function changeSlide(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        const slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
        if (n >= slides.length) { slideIndex = 0 }
        if (n < 0) { slideIndex = slides.length - 1 }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
    }

    // Initial slide display
    showSlides(slideIndex);
});