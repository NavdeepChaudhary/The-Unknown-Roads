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

