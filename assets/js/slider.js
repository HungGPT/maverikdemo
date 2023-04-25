const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const sliderWrapper = document.querySelector('.slider-wrapper');

let slideIndex = 0;

function slideTo(index) {
  slideIndex = index;
  const transformValue = `translateX(-${slideIndex * 17}%)`;
  sliderWrapper.style.transform = transformValue;
}

prevBtn.addEventListener('click', () => {
  if (slideIndex === 0) {
    slideTo(2);
  } else {
    slideTo(slideIndex -1);
  }
});

nextBtn.addEventListener('click', () => {
  if (slideIndex === 2) {
    slideTo(0);
  } else {
    slideTo(slideIndex + 1);
  }
});