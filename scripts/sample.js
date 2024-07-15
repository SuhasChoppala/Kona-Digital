const navLinks = document.querySelector('.nav-links');
function onToggleMenu(e) {
  e.name = e.name === 'menu' ? 'close' : 'menu';
  navLinks.classList.toggle('top-[9%]');
}

function toggleProductsDropdown() {
  const dropdownMenu = document.getElementById('products-dropdown-menu');
  dropdownMenu.classList.toggle('hidden');
}

function toggleSolutionsDropdown() {
  const dropdownMenu = document.getElementById('solutions-dropdown-menu');
  dropdownMenu.classList.toggle('hidden');
}

function toggleServicesDropdown() {
  const dropdownMenu = document.getElementById('services-dropdown-menu');
  dropdownMenu.classList.toggle('hidden');
}

// Ensure that clicking anywhere outside the dropdowns closes them
document.addEventListener('click', function (event) {
  const productsDropdownMenu = document.getElementById(
    'products-dropdown-menu'
  );
  const solutionsDropdownMenu = document.getElementById(
    'solutions-dropdown-menu'
  );
  const servicesDropdownMenu = document.getElementById(
    'services-dropdown-menu'
  );
  const productsDropdownButton = document.getElementById(
    'products-dropdown-button'
  );
  const solutionsDropdownButton = document.getElementById(
    'solutions-dropdown-button'
  );
  const servicesDropdownButton = document.getElementById(
    'services-dropdown-button'
  );

  if (!productsDropdownButton.contains(event.target)) {
    productsDropdownMenu.classList.add('hidden');
  }

  if (!solutionsDropdownButton.contains(event.target)) {
    solutionsDropdownMenu.classList.add('hidden');
  }

  if (!servicesDropdownButton.contains(event.target)) {
    servicesDropdownMenu.classList.add('hidden');
  }
});
