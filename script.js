// Function to play sound when the page loads
window.addEventListener('load', function () {
    let sound = document.getElementById('pageSound');
    sound.play();
  });
  
  // Profile view counter (simulated)
  let viewCount = 1; // Default count
  const viewCounterElement = document.querySelector('.view-counter');
  
  setInterval(function () {
    viewCount++;
    viewCounterElement.textContent = `👁 ${viewCount}`;
  }, 1000); // Update every 10 seconds as an example
  