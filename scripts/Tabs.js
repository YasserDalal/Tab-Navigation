import {FirstTabContent, SecondTabContent, ThirdTabContent, FourthTabContent} from './renders/render.js';

function Navigations(){

  const buttons = document.querySelectorAll('.nav-bar li');

  // first li button is active. This is the default when we reload the page
  buttons[0].classList.add('active')

  // Loop for each li buttons in .nav-bar
  buttons.forEach(button => {

    // each li buttons has a 'mousedown' event
    button.addEventListener('mousedown', (e) => {

      // when we click a li button, every li button will remove the active state including the one we click
      buttons.forEach(btn => btn.classList.remove('active'));

      // and add the active state to the button that we click
      button.classList.add('active');

      if(e.target.classList.contains('tab-1')){
        FirstTabContent()
      } else if(e.target.classList.contains('tab-2')){
        SecondTabContent()
      } else if(e.target.classList.contains('tab-3')) {
        ThirdTabContent()
      } else {
        FourthTabContent()
      }
    })
  });
}

Navigations()


