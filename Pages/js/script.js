var swiper = new Swiper(".mySwiper", {
  spaceBetween: 25,
  slidesPerView: 4,
  autoHeight: true,
});

var swiper2 = new Swiper(".mySwiper2", {
  direction: 'horizontal',
  zoom: true,
  loop: true,
  slidesPerView: 1,
  simulateTouch: false,
  speed: 1200,
  effect: 'creative',
  creativeEffect: {
      prev: {
          shadow: false,
          origin: "right",
          translate: ['-85%', 0, -1],
          scale: 0.9,
      },
      next: {
          shadow: false,
          origin: "left",
          translate: ['100%', 0, 0],
          scale: 1.1,
      },
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  thumbs: {
      swiper: swiper,
  },
});

var infoSwiper = new Swiper(".mySwiper3", {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  speed: 1200,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});



function updateCarInfoDisplay() {
  var activeSlide = document.querySelector('.mySwiper2 .swiper-slide-active .swiper-zoom-container');
  if (activeSlide) {
      var carClass = activeSlide.getAttribute('data-class');
      var engineCC = activeSlide.getAttribute('data-engine');
      var drivetrain = activeSlide.getAttribute('data-drivetrain');

      document.getElementById('car-class').textContent = carClass || 'N/A';
      document.getElementById('engine-cc').textContent = engineCC || 'N/A';
      document.getElementById('drivetrain').textContent = drivetrain || 'N/A';
  }
}

// Event listener for Swiper's slide change
swiper2.on('slideChangeTransitionEnd', function() {
  updateCarInfoDisplay();
});

// Initialize the car information display on load
updateCarInfoDisplay();
document.getElementById("more-info").addEventListener("click", function() {
  console.log("Button clicked!"); // Check if the event listener is triggered

  var activeSlideIndex = swiper2.realIndex + 1; // Get the active slide index (1-based)
  console.log("Active slide index:", activeSlideIndex); // Log the active slide index

  var targetInfoscreen = document.querySelector(' .swiper-zoom-container[data-slide="' + activeSlideIndex + '"]');
  console.log("Target info screen:", targetInfoscreen); // Log the target info screen element

  if (targetInfoscreen) {
      console.log('Target found, scrolling into view');
      targetInfoscreen.scrollIntoView({ behavior: 'smooth' });
  } else {
      console.log('Target not found');
  }
});

// const slideBackgroundColors = ['#4B3CE5', '#000080', '#015513']; // Add more colors if you have more slides

// // Event listener for slide change
// swiper2.on('slideChange', function () {
//     // Get the active slide index
//     const activeIndex = swiper2.realIndex;

//     // Fade out the body's background color
//     document.body.style.transition = 'background-color 0.8s ease';

//     // After a slight delay, change the background color and fade it in
//     setTimeout(() => {
//         document.body.style.backgroundColor = slideBackgroundColors[activeIndex];
//     }, 50); // Adjust the duration of the delay (in milliseconds) as needed
// });



  // Cards
    // effect: 'cards',   
    // cardsEffect:{
    //   perSlideOffset: 130,
    //   slideShadows: false
    // },


    // CoverFlow
    // effect: 'coverflow',
    // coverflowEffect: {
    //   rotate: 25,
    //   stretch: 0,
    //   depth: 10,
    //   scale: 1.5,
    //   modifier: 1,
    //   slideShadows: false,
    // },


