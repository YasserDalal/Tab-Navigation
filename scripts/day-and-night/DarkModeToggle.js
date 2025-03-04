function buttonToggler(){
  const toggleButton = document.querySelector('button.toggleButton');
  const content = document.querySelector('section.main-content');

  const eventHandler = (event) => {
    event.preventDefault(); // Para maiwasan ang default na behavior ng touch

    if (toggleButton.innerHTML === 'LIGHT') {
      toggleButton.innerHTML = 'DARK';
      toggleButton.classList.remove('lightModeToggle');
      toggleButton.classList.add('darkModeToggle');
      content.classList.add('lightMode');
      content.classList.remove('darkMode');
    } else {
      toggleButton.innerHTML = 'LIGHT';
      toggleButton.classList.remove('darkModeToggle');
      toggleButton.classList.add('lightModeToggle');
      content.classList.remove('lightMode');
      content.classList.add('darkMode');
    }

    // Force reflow para siguruhing mag-apply agad ang CSS
    toggleButton.offsetHeight;
  };

  // Gamitin ang parehong event listener para sa click at touch
  toggleButton.addEventListener('click', eventHandler);
  toggleButton.addEventListener('touchstart', eventHandler, { passive: false });
}

buttonToggler();
