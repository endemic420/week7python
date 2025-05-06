// Reference elements
const animateBtn = document.getElementById('animateBtn');
const preferenceText = document.getElementById('preferenceText');
const inputColor = document.getElementById('inputColor');

// Load saved color preference on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('favoriteColor');
  if (savedColor) {
    inputColor.value = savedColor;
    updatePreferenceText(savedColor);
    setButtonColor(savedColor);
  }
});

// Update the displayed preference text and button color
function updatePreferenceText(color) {
  preferenceText.textContent = `Your preferred color is: ${color}`;
  setButtonColor(color);
}

function setButtonColor(color) {
  animateBtn.style.backgroundColor = color;
}

// Animate button and save preference to localStorage
animateBtn.addEventListener('click', () => {
  const selectedColor = inputColor.value || '#396afc';
  updatePreferenceText(selectedColor);
  localStorage.setItem('favoriteColor', selectedColor);

  // Trigger bounce animation
  animateBtn.classList.remove('bounce'); // reset animation if already running
  void animateBtn.offsetWidth; // force reflow
  animateBtn.classList.add('bounce');
});