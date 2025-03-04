// This is the content for each tabs

// every content of the function is modifiable 

export function FirstTabContent(){
  const content = document.querySelector('.content');
  let html;

  content.innerHTML = `<p>First Tab content</p>`

  html += content

  return html;
}

export function SecondTabContent(){
  const content = document.querySelector('.content');

  let html;

  content.innerHTML = `<p>Second Tab content</p>`

  html += content

  return html;
}

export function ThirdTabContent(){
  const content = document.querySelector('.content');

  let html;

  content.innerHTML = `<p>Third Tab content</p>`

  html += content

  return html;
}

export function FourthTabContent(){
  const content = document.querySelector('.content');

  let html;

  content.innerHTML = `<p>Fourth Tab content</p>`

  html += content

  return html;
}
