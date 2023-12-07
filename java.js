
document.addEventListener("DOMContentLoaded", function() {
  var currentIndex = 0;
  var slides = [
    { image: 'image0.jpg', text: 'Text 1' },
    { image: 'image1.jpg', text: 'Text 2' },
    { image: 'image2.jpg', text: 'Text 3' }
    // Add more slides as needed
  ];

  function changeSlide() {
    // Hide the current slide
    document.getElementById('slide-' + currentIndex).style.opacity = 0;
    document.getElementById('text-' + currentIndex).style.opacity = 0;

    // Move to the next slide
    currentIndex = (currentIndex + 1) % slides.length;

    // Show the new slide
    document.getElementById('slide-' + currentIndex).style.opacity = 1;
    document.getElementById('text-' + currentIndex).style.opacity = 1;
  }

  // Preload images for smoother transitions
  slides.forEach(function(slide, index) {
    var img = new Image();
    img.src = slide.image;
    img.onload = function() {
      // Display the first slide once it's loaded
      if (index === 0) {
        document.getElementById('slide-' + currentIndex).style.opacity = 1;
        document.getElementById('text-' + currentIndex).style.opacity =1;
      }
    };
  });

  // Change slide every 5000 milliseconds (5 seconds)
  setInterval(changeSlide, 5000);
});

