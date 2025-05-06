document.addEventListener('DOMContentLoaded', function () {
  // Select elements
  const levelSelect = document.getElementById('level');
  const priceSelect = document.getElementById('price');
  const locationSelect = document.getElementById('location');

  // Fill dropdowns
  fillSelect(levelSelect, ['All', 'Beginner', 'Advanced']);
  fillSelect(priceSelect, ['All', 'Low to High', 'High to Low']);
  fillSelect(locationSelect, ['All', 'Dahab', 'Sharm El Sheikh', 'Hurghada']);

  // Dropdown change logs
  levelSelect.addEventListener('change', () => {
    console.log('Selected level:', levelSelect.value);
  });

  priceSelect.addEventListener('change', () => {
    console.log('Selected price:', priceSelect.value);
  });

  locationSelect.addEventListener('change', () => {
    console.log('Selected location:', locationSelect.value);
  });

  // Heart toggle
  document.querySelectorAll('.card-heart').forEach(heart => {
    heart.addEventListener('click', function (e) {
      e.preventDefault();
      this.style.color = this.style.color === 'red' ? '#e53935' : 'red';
    });
  });

  // Accordions
  document.querySelectorAll('.accordion').forEach(acc => {
    acc.addEventListener('click', () => acc.classList.toggle('active'));
  });
});

function fillSelect(selectElement, options) {
  const defaultOption = document.createElement('option');
  defaultOption.textContent = 'Select ' + selectElement.id;
  defaultOption.disabled = true;
  defaultOption.selected = true;
  selectElement.appendChild(defaultOption);

  options.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option;
    opt.textContent = option;
    selectElement.appendChild(opt);
  });
}
