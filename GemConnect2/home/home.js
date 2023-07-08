function toggleMenu() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

window.addEventListener('DOMContentLoaded', () => {
  const miningSlideshow = document.getElementById('mining-slideshow');

  // Array of dynamic image URLs (replace with your own image URLs)
  const miningImages = [
    '../images/mining1.jpeg',
    '../images/mining2.jpeg',
    '../images/mining3.jpeg',
  ];

  let currentIndex = 0;

  function showNextImage() {
    const container = document.createElement('div');
    container.classList.add('slideshow-container');

    const image = document.createElement('img');
    image.src = miningImages[currentIndex];
    image.classList.add('images');
    container.appendChild(image);

    miningSlideshow.innerHTML = '';
    miningSlideshow.appendChild(container);

    currentIndex = (currentIndex + 1) % miningImages.length;
    setTimeout(showNextImage, 3000);
  }

  showNextImage();
});
