// swipper js code
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
 
 
 //swipper responsive
 breakpoints: {
  360: {
    slidesPerView: 1.6
  },

  361:{

slidesPerView: 3

  },


  1000:{

    slidesPerView: 4
    
      }


}
 
 
  });

  