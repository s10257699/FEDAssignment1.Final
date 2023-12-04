document.addEventListener('DOMContentLoaded', function () {
    // Additional JavaScript for Header Scaling and Animation on Scroll
    var header = document.getElementById('heading');
    var waveToEarth = header.querySelector('h1');
    var navigationLinks = header.querySelector('p.round3');
    var smallHeightThreshold = 70; // This variable sets the threshold value for when the elements should stop scaling and stay small

    
    window.addEventListener('scroll', function () {  //Adds an event listener to the window, listening for scroll events
        var scrollY = window.scrollY;  //This variable stores the vertical scroll position of the window
        var scale = 1 - Math.min(scrollY / smallHeightThreshold, 1);  /*This calculates the scaling factor based on the scroll position. 
        The elements will scale down as the user scrolls*/

        // Apply the scaling to the header height
        header.style.height = 190 * scale + 'px';

        //  This adds or removes the 'small-height' class from the header based on whether the scroll position is beyond the threshold.
        if (scrollY >= smallHeightThreshold) {
            header.classList.add('small-height');
        } else {
            header.classList.remove('small-height');
        }

        // Calculate the vertical offset for p.round3
        var offset = Math.min(50, scrollY / 2);

        // Apply the vertical offset to move p.round3 up
        navigationLinks.style.transform = 'translateY(-' + offset + 'px)';

        // Set a fixed left offset to move "Wave to Earth" all the way to the left
        var leftOffset;

        if (scale < 0.8) {
            leftOffset = 1300;
        } else {
            leftOffset = 0;
        }
        
        // Apply the left offset to move "Wave to Earth" to the left
        waveToEarth.style.marginLeft = '-' + leftOffset + 'px';

        // Move h1 and p.round3 higher after scrolling down
        var moveUp;

        if (scale < 0.8) {
            moveUp = 5;
        } else {
            moveUp = 0;
        }

        waveToEarth.style.marginTop = '-' + moveUp + 'px'; //Determines the vertical movement for the "Wave to Earth" and navigation links after scrolling down.
        navigationLinks.style.marginTop = '-' + (moveUp + offset) + 'px'; 

        // Move "Wave to Earth" down a bit after scrolling
        var moveDown;

        if (scale < 0.8) {
            moveDown = -72;
        } else {
            moveDown = 0;
        } // Determines the vertical movement for "Wave to Earth" after scrolling.
        
        waveToEarth.style.marginTop = moveDown + 'px';

        // Display "wave to" and "earth" on separate lines when the header is smaller
        if (scale < 0.8) {
            waveToEarth.innerHTML = 'Wave to<br>Earth';
        } else {
            waveToEarth.innerHTML = 'Wave to Earth';
        }
    });
})

//Pop up
document.addEventListener('DOMContentLoaded', function () {
    // Add a submit event listener to the form
    var form = document.getElementById('newsletter-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Show the popup
        showPopup();

        // Reset the form if needed
        form.reset();
    });

    // Function to show the popup
    function showPopup() {
        var popup = document.getElementById('popup');
        popup.style.display = 'block';

        // Setting a timeout to hide the popup after a certain duration
        setTimeout(function () {
            popup.style.display = 'none';
        }, 1000); // 1000 milliseconds (1 seconds) 
    }
});