document.addEventListener('DOMContentLoaded', function() {
    const hiddenElements = document.querySelectorAll('.initial-hidden');
    hiddenElements.forEach(function(element) {
        setTimeout(function() {
            element.classList.add('fade-in');
        }, 100); 
    });

});
