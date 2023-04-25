
		 const minusButton = document.querySelector('.minus');
		 const plusButton = document.querySelector('.plus');
		 const countInput = document.querySelector('.count');
		
		 minusButton.addEventListener('click', () => {
		   if (countInput.value > 1) {
		 	countInput.value = parseInt(countInput.value) - 1;
		   }
		 });
		
		 plusButton.addEventListener('click', () => {
		   countInput.value = parseInt(countInput.value) + 1;
		 });

		 var image1 = document.getElementById('image1');
		 var imagebig = document.getElementById('imagebig');
		 
		 image1.addEventListener('click',function(){
			 imagebig.src = image1.src;

		 })

		 var image2 = document.getElementById('image2');
		 var imagebig = document.getElementById('imagebig');
		 
		 image2.addEventListener('click',function(){
			 imagebig.src = image2.src;

		 })

		 var image3 = document.getElementById('image3');
		 var imagebig = document.getElementById('imagebig');
		 
		 image3.addEventListener('click',function(){
			 imagebig.src = image3.src;

		 })

		 var image4 = document.getElementById('image4');
		 var imagebig = document.getElementById('imagebig');
		 
		 image4.addEventListener('click',function(){
			 imagebig.src = image4.src;

		 })

		 var image5 = document.getElementById('image5');
		 var imagebig = document.getElementById('imagebig');
		 
		 image5.addEventListener('click',function(){
			 imagebig.src = image5.src;

		 })





var addGioHang = document.getElementById('addgiohang');
var cartItemClose = document.getElementById('cart-item-close');
var cartItem = document.getElementById('cartitem');
var cartCenter = document.getElementById('cartcenter');
var formcart = document.getElementById('form-cart');
var inputItem1 = document.getElementById('input-item-1');
var inputItem2 = document.getElementById('input-item-2');
var small = document.getElementById('small');
var mo = document.getElementById('mo');
var large = document.getElementById('large');
var xlarge = document.getElementById('x-large');
var s = document.getElementById('s');
var tongtien = document.getElementById('tongtien');
var dongia = document.getElementById('dongia');
var muangay = document.getElementById('muangay');

muangay.addEventListener('click', function(){
	formlogin.style.display = 'block';
	alert("Bạn phải đăng nhập");
});

addGioHang.addEventListener('click', function(){
	cartItem.style.display = 'block';
	cartCenter.style.display = 'none';
	formcart.style.display = 'block';
	inputItem1.innerText = inputItem2.value;
	tongtien.innerText = (parseInt(inputItem1.innerText)*parseInt(dongia.innerText.replace(',','').replace('đ',''))) + 'đ';
});

cartItemClose.addEventListener('click', function(){
	cartItem.style.display = 'none';
	cartCenter.style.display = 'block';
	tongtien.innerText = '0đ';
});

small.addEventListener('change', function(){
	s.innerText = 'S';
});

mo.addEventListener('change', function(){
	s.innerText = 'M';
});

large.addEventListener('change', function(){
	s.innerText = 'L';
});

xlarge.addEventListener('change', function(){
	s.innerText = 'XL';
});

// maverik gallery
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