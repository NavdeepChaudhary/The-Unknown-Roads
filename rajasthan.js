document.addEventListener("DOMContentLoaded", function() {
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const mapContainer = document.getElementById('map-container');

  galleryItems.forEach(item => {
    item.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent the click event from propagating to the document
      const mapSrc = this.getAttribute('data-src');
      openMap(mapSrc);
    });
  });

  function openMap(src) {
    mapContainer.innerHTML = `<iframe src="${src}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

    // Listen for clicks on the document to close the map when clicking elsewhere
    document.addEventListener('click', closeMapOnClick);
  }

  function closeMapOnClick(event) {
    // Check if the clicked element is outside of the map container
    if (!mapContainer.contains(event.target)) {
      mapContainer.innerHTML = ''; // Remove the iframe
      document.removeEventListener('click', closeMapOnClick); // Remove the event listener
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const palaces = document.querySelectorAll('.palace');

  palaces.forEach(palace => {
    palace.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const palaceDetails = document.getElementById('palace-details');

      // You can customize the palace details as per your requirements
      palaceDetails.innerHTML = `
        <h3>${this.textContent}</h3>
        <img src="images/${targetId}.jpg" alt="${this.textContent}">
        <a href="https://${targetId}.com" target="_blank">More info</a>
      `;

      palaceDetails.style.display = 'block';
    });
  });
});
const palaceCards = document.querySelectorAll(".palace");


