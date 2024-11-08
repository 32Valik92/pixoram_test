function openMenu() {
    document.getElementById('side-menu').style.width = '295px';
    document.querySelector('.menu-icon').style.display = 'none';
}

function closeMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.querySelector('.menu-icon').style.display = 'block';
}

function scrollToSection() {
    const section = document.getElementById("playing_at_the_pokies_club");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}


// Get the modal and close button elements
const modal = document.getElementById("modal");
const closeModalButton = document.querySelector(".close-modal");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Add event listener to close modal when the 'x' is clicked
closeModalButton.addEventListener("click", closeModal);

// Add event listeners to all buttons with specific classes
document.querySelectorAll(".subscribe-button, .send-button, .footer-submit-button").forEach(button => {
    button.addEventListener("click", function (event) {
        const form = button.closest("form");
        if (form && form.checkValidity()) {
            event.preventDefault();
            openModal();
        } else if (form) {
            form.reportValidity();
        }
    });
});

// Close modal if clicked outside the modal content
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});
