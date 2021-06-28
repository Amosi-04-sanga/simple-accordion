const accordions = document.querySelectorAll('.accordion__bar');
const accordionsArr = Array.from( accordions );

const accordion__item = document.querySelectorAll('.accordion__item');

accordionsArr.forEach( accordion => {



     accordion.addEventListener( 'click', () => {

         let parentEl = accordion.parentElement;

            parentEl.classList.toggle( 'active');

     });

});


// galley.
const slides = document.querySelectorAll('.galley__slide');

const slidesArr = Array.from( slides );

function autoSlide() {

     for( let count = 0; count < slidesArr.length; count++ ) {

          // remove all active class.
          for( let j = 0; j < slidesArr.length; j++ ) {
               slidesArr[j].classList.remove('active');
          }
      
          setTimeout( () => {
      
               slidesArr[count].classList.add('active');
      
          }, count * 3000 );
      
      }

}

// retrive the function on load.
autoSlide();

setInterval( autoSlide, 14000 );

