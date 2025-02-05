document.addEventListener('DOMContentLoaded', function() {
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');
    const subpages = document.querySelectorAll('.subpage');
    let currentPageIndex = 0;

    function updatePageVisibility() {
        subpages.forEach((page, index) => {
            if (index === currentPageIndex) {
                page.style.display = 'block';
            } else {
                page.style.display = 'none';
            }
        });

    }

    function navigateLeft() {
        if (currentPageIndex > 0) {
            currentPageIndex--;
        } else {
            currentPageIndex = subpages.length - 1;
        }
        updatePageVisibility();
    }

    function navigateRight() {
        if (currentPageIndex < subpages.length - 1) {
            currentPageIndex++;
        } else {
            currentPageIndex = 0;
        }
        updatePageVisibility();
    }

    // Add event listeners to the buttons
    leftButton.addEventListener('click', navigateLeft);
    rightButton.addEventListener('click', navigateRight);

    // Initialize the page visibility
    updatePageVisibility();
});