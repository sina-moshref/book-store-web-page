const searchbtn = document.querySelector('#search-btn');
const searchForm = document.querySelector('.search-form');
const loginContainer = document.querySelector('.login-form-container')
const loginForm = document.querySelector('.login-form-container form')
const loginBtn = document.querySelector('#login-btn')

loginBtn.onclick = () => {
    loginContainer.classList.toggle('active');
}

window.onclick = (e) => {
    if(!e.target.closest('.login-form-container form') && !e.target.closest('#login-btn')){
     loginContainer.classList.remove('active');
    }
}


window.onscroll = () => {
    
    searchForm.classList.remove('active')
    loginContainer.classList.remove('active');
    
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active')
    } else{
        document.querySelector('.header .header-2').classList.remove('active')
    }
}

window.onload = () => {
    
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active')
    } else{
        document.querySelector('.header .header-2').classList.remove('active')
    }
}


searchbtn.onclick = () =>{
    searchForm.classList.toggle('active')
}

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
    
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: false,
  autoplay: {
    delay: 9500,
    disableOnInteraction: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    }
  },
    
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: false,
  autoplay: {
    delay: 9500,
    disableOnInteraction: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    }
  },
    
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: false,
  autoplay: {
    delay: 9500,
    disableOnInteraction: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    }
  },
    
});