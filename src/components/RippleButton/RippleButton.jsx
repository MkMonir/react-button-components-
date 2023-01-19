import './rippleButton.css';

const RippleButton = () => {
  // Ripple Effect JavaScript Code
  let buttons = document.querySelectorAll('.button');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
      e.preventDefault(); // preventing form submitting

      let overlay = document.createElement('span'); //creating a tag(span)
      overlay.classList.add('overlay'); //adding a class inside the span
      e.target.appendChild(overlay); //adding overlay tag inside the anchor tag at in HTML

      let xValue = e.clientX - e.target.offsetLeft; //by this we get perfect value where we will click
      let yValue = e.clientY - e.target.offsetTop; //by this we get perfect value where we will click

      overlay.style.left = xValue + 'px'; //changing the position of the overlay according to our clicks on the button
      overlay.style.top = yValue + 'px'; //changing the position of the overlay according to our clicks on the button
    });
  }

  return (
    <div>
      <div class="buttons">
        <button class="button">Button</button>
        <button class="button two">Button</button>
      </div>
    </div>
  );
};
export default RippleButton;
