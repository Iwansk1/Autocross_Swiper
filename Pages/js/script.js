const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 800,
    effect: 'creative',
    creativeEffect:{
      prev: {
        shadow: false,
        origin: "center",
        translate: ['100%', 0, -1],
        scale: 0.9,
      },
      next: {
        shadow: false,
        origin: "right",
        translate: ['-100%', 0, 0],
        scale: 1.2,
      },
    },

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  },
);
const slideBackgroundColors = ['#4B3CE5', '#000080', '#015513']; // Add more colors if you have more slides

// Event listener for slide change
swiper.on('slideChange', function () {
    // Get the active slide index
    const activeIndex = swiper.realIndex;

    // Fade out the body's background color
    document.body.style.transition = 'background-color 0.8s ease';

    // After a slight delay, change the background color and fade it in
    setTimeout(() => {
        document.body.style.backgroundColor = slideBackgroundColors[activeIndex];
    }, 50); // Adjust the duration of the delay (in milliseconds) as needed
});



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

