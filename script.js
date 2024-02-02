const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});


// Contact Form Validation 

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert("Thanks for submitting the form!");
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        let isValid = true;

        const fullNameInput = document.getElementById('full-name');
        isValid &= validateFullName(fullNameInput);

        const emailInput = document.getElementById('email');
        isValid &= validateEmail(emailInput);

        const messageInput = document.getElementById('message');
        isValid &= validateMessage(messageInput);

        return isValid;
    }

    function validateFullName(fullNameInput) {
        const value = fullNameInput.value.trim();
        const isValid = /^[A-Za-z\s]+$/.test(value);

        if (!isValid) {
            highlightErrorField(fullNameInput);
        } else {
            removeErrorHighlight(fullNameInput);
        }

        return isValid;
    }

    function validateEmail(emailInput) {
        const value = emailInput.value.trim();
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

        if (!isValid) {
            highlightErrorField(emailInput);
        } else {
            removeErrorHighlight(emailInput);
        }

        return isValid;
    }

    function validateMessage(messageInput) {
        const value = messageInput.value.trim();
        const isValid = value.length > 0;

        if (!isValid) {
            highlightErrorField(messageInput);
        } else {
            removeErrorHighlight(messageInput);
        }

        return isValid;
    }

    function highlightErrorField(element) {
        element.style.border = '2px solid #ff0000';
        element.focus();
    }

    function removeErrorHighlight(element) {
        element.style.border = '';
    }
});