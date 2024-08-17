// JavaScript to handle quote modal display
document.querySelectorAll('.quote-container').forEach(function(element) {
    element.addEventListener('click', function() {
        const quote = this.getAttribute('data-quote');
        const author = this.getAttribute('data-author');
        const title = this.getAttribute('data-title');

        const modalContent = `
            <div class="quote-modal-content">
                <p>"${quote}"</p>
                <div class="quote-author">${author}</div>
                <div class="quote-title">${title}</div>
            </div>
        `;

        // Display modal with quote content (this is just a concept; you'll need a modal implementation)
        alert(modalContent); // Replace this with actual modal code
    });
});
