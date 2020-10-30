const slides = document.querySelectorAll('.slide');
const carousel = document.getElementById('carousel');
const left = document.getElementById('left');
const right = document.getElementById('right');

const SLIDES_COUNT = slides.length;

let current_slide = 0;


left.addEventListener("click", () => {
         // subtract 1 from current_slide on each left click
         current_slide--;
         // if current_slide is less than 0, set current_slide to 3
        if(current_slide < 0) {
            current_slide = SLIDES_COUNT - 1;
        }
            // updating the correct image on each click
        updateCarousel();
});

right.addEventListener("click", () => {
      // add 1 to current_slide on each right click
      current_slide++;
      // if current_slide is bigger than total slides (4), reset count to 0
      if(current_slide > SLIDES_COUNT - 1) {
          current_slide = 0;
      }
      // updating the correct image on each click
      updateCarousel();
});

function  updateCarousel() {
    carousel.style.transform = `translateX(${
        -current_slide * slides[0].offsetWidth
    }px)`;

    document.body.style.background = `#${slides[current_slide].getAttribute(
        "data-bg"
    )}`;

    if ( current_slide === 2 || current_slide === 1) {
        document.getElementById('logo-col').style.color = "black";
        document.getElementById('phone').style.color = "black";
        document.getElementById('hamburger').style.color = "black";
        document.getElementById('left').style.color = "black";
        document.getElementById('right').style.color = "black";
      }
     else  {
        document.getElementById('logo-col').style.color = "white";
        document.getElementById('phone').style.color = "white";
        document.getElementById('hamburger').style.color = "white";
        document.getElementById('left').style.color = "white";
        document.getElementById('right').style.color = "white";
      }
}
