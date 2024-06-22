// Get the swiper wrapper elements
const mainSwiperWrapper = document.querySelector('.mySwiper2 .swiper-wrapper');
const thumbSwiperWrapper = document.querySelector('.thumbs-swiper .swiper-wrapper');

// Clear existing thumbnails
thumbSwiperWrapper.innerHTML = '';

// Loop through each main slide and create corresponding thumbnail
mainSwiperWrapper.querySelectorAll('.swiper-slide').forEach(slide => {
    const imgElement = slide.querySelector('img');
    const zoomContainer = slide.querySelector('.swiper-zoom-container');

    // Only create thumbnail if both imgElement and zoomContainer are present
    if (imgElement && zoomContainer) {
        const thumbSlide = document.createElement('div');
        thumbSlide.classList.add('swiper-slide');
        thumbSlide.innerHTML = `<img src="${imgElement.src}" alt="${imgElement.alt}">`;
        thumbSwiperWrapper.appendChild(thumbSlide);
    } else {
        slide.remove();
    }
});
// Initialize the secondary swiper after setting up thumbnails
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

// Add an event listener to the "more-info" button for click events
document.getElementById("more-info").addEventListener("click", function () {
  // Get the active slide index from the swiper instance (0-based)
  var activeSlideIndex = swiper2.realIndex; 

  // Get the image element corresponding to the active slide index
  var targetImage = document.querySelector('.mySwiper2 .swiper-slide-active img');

  // Ensure the target image exists before proceeding
  if (targetImage) {
    // Retrieve additional car information from the active slide's zoom container
    var carClass = targetImage.closest('.swiper-zoom-container').getAttribute('data-class');
    var engineCC = targetImage.closest('.swiper-zoom-container').getAttribute('data-engine');
    var drivetrain = targetImage.closest('.swiper-zoom-container').getAttribute('data-drivetrain');
    var description = targetImage.closest('.swiper-zoom-container').getAttribute('data-description');
    var imageUrl = targetImage.src; // Get the image URL

    // Get references to the HTML elements for displaying additional information
    var additionalInfoContent = document.getElementById('additional-info-content');
    var additionalInfoImage = document.getElementById('additional-info-image');

    // Scroll to the additional information section smoothly after a slight delay
    setTimeout(() => {
      document.querySelector('.additional-info').scrollIntoView({ behavior: 'smooth' });
    }, 100);

    // Update the content of the additional information section
    additionalInfoContent.innerHTML = `
        <h2>Additional Information</h2>
        <p><strong>Klasse:</strong> <span>${carClass || 'N/A'}</span></p>
        <p><strong>Motor Inhoud:</strong> <span>${engineCC || 'N/A'}</span></p>
        <p><strong>Aandrijving:</strong> <span>${drivetrain || 'N/A'}</span></p>
    `;

    // Update the image source in the additional information section
    additionalInfoImage.src = imageUrl;
    
    // Update the description text in the additional information section
    document.getElementById('additional-info-description').textContent = description || '';
  }
});


//Experiments 

// // Function to update the car information display based on the active slide
// function updateCarInfoDisplay() {
//   // Select the active slide's zoom container
//   var activeSlide = document.querySelector('.mySwiper2 .swiper-slide-active .swiper-zoom-container');
  
//   // Check if there is an active slide
//   if (activeSlide) {
//     // Get the car information attributes from the active slide
//     var carClass = activeSlide.getAttribute('data-class');
//     var engineCC = activeSlide.getAttribute('data-engine');
//     var drivetrain = activeSlide.getAttribute('data-drivetrain');
//     var description = activeSlide.getAttribute('data-description');

//     // Update the display elements with the car information or 'N/A' if not available
//     document.getElementById('car-class').textContent = carClass || 'N/A';
//     document.getElementById('engine-cc').textContent = engineCC || 'N/A';
//     document.getElementById('drivetrain').textContent = drivetrain || 'N/A';
//     document.getElementById('additional-info-description').textContent = description || '';
//   }
// }

// // Add an event listener to update the car information display when the slide transition ends
// swiper2.on('slideChangeTransitionEnd', function () {
//   updateCarInfoDisplay();
// });

// // Initial call to update the car information display on page load
// updateCarInfoDisplay();



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

// var infoSwiper = new Swiper(".mySwiper3", {
//   direction: 'horizontal',
//   loop: true,
//   slidesPerView: 1,
//   simulateTouch: false,
//   speed: 1200,
//   navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//   },
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


