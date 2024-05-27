// Smooth scrolling function
function smoothScroll(targetSelector) {
    document.querySelectorAll(targetSelector).forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Smooth scrolling for navigation links
smoothScroll('nav a');

document.addEventListener('DOMContentLoaded', function () {
    // ... (Previous JavaScript code)

    // Function to open the image viewer
    window.viewImage = function (img) {
        const expandedImage = document.getElementById('expanded-image');
        expandedImage.src = img.src;
        const imageViewer = document.getElementById('image-viewer');
        imageViewer.style.display = 'flex';
    };

    // Function to close the image viewer
    window.closeImage = function () {
        const imageViewer = document.getElementById('image-viewer');
        imageViewer.style.display = 'none';
    };
});
// script.js

// script.js

let modal = document.getElementById('imageModal');
let zoomedImage = document.getElementById('zoomedImage');

function openModal(img) {
  modal.style.display = 'block';
  zoomedImage.src = img.src;
}

function closeModal() {
  modal.style.display = 'none';
}

// Adjust the scrollImages function
function scrollImages() {
  let container = document.getElementById('imageScrollContainer');
  let imageCards = document.querySelectorAll('.image-card');
  let totalWidth = 0;

  imageCards.forEach(card => {
    totalWidth += card.offsetWidth + 10; // 10px margin between images
  });

  container.style.animation = `scrollImages ${totalWidth / 100}px linear infinite`;
}

// Call the scrollImages function after the page loads
document.addEventListener('DOMContentLoaded', scrollImages);

document.addEventListener('DOMContentLoaded', function () {
  // Text to be typed out
  const text = "Welcome to My Portfolio";
  const typingTextElement = document.getElementById('typing-text');

  // Type out the text
  let index = 0;
  function type() {
      if (index < text.length) {
          typingTextElement.textContent += text.charAt(index);
          index++;
          setTimeout(type, 80); // Adjust typing speed here (in milliseconds)
      }
  }

  type();
});


/*about page
*/
document.addEventListener('DOMContentLoaded', function () {
  // Function to check if an element is in the viewport
  function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  // Function to add the 'visible' class to elements in the viewport
  function addVisibleClass() {
      const elements = document.querySelectorAll('.slide-up');
      elements.forEach(element => {
          if (isInViewport(element)) {
              element.classList.add('visible');
          }
      });
  }

  // Add event listener for scroll and load events
  window.addEventListener('scroll', addVisibleClass);
  window.addEventListener('load', addVisibleClass);
  window.addEventListener('resize', addVisibleClass);

  // Trigger the function once to check the initial viewport state
  addVisibleClass();
});


/*responsive webpage*/
