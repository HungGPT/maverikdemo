var login2 = document.getElementById('login2');
var formlogin = document.getElementById('form-login');
var login4 = document.getElementById('login4');
var login5 = document.getElementById('login5');
var formregister = document.getElementById('form-register');
var login1 = document.getElementById('login1');
var formsearch = document.getElementById('form-search');
var login3 = document.getElementById('login3');
var formcart = document.getElementById('form-cart');
var navinput = document.getElementById('nav__mobile-input');
var thanhtoan = document.getElementById('thanhtoan');

thanhtoan.addEventListener('click', function(){
    formlogin.style.display = 'block';
    formcart.style.display = 'none';
    alert("Bạn phải đăng nhập");
});

login2.addEventListener('click', function(){
    if(formregister.style.display == 'block')
    {
        formlogin.style.display = 'none';
        formregister.style.display = 'none';
        formsearch.style.display = 'none';
        formcart.style.display = 'none';
    }
    else
    {
        if(formlogin.style.display == 'none'){
            formlogin.style.display = 'block';
            formregister.style.display = 'none';
            formsearch.style.display = 'none';
            formcart.style.display = 'none';
        }
        else
        {
            formlogin.style.display = 'none';
        }
    }
});

login1.addEventListener('click', function(){
    if(formsearch.style.display == 'none'){
        formlogin.style.display = 'none';
        formregister.style.display = 'none';
        formsearch.style.display = 'block';
        formcart.style.display = 'none';
    }
    else
    {
        formsearch.style.display = 'none';
    }
});

login3.addEventListener('click', function(){
    if(formcart.style.display == 'none'){
        formlogin.style.display = 'none';
        formregister.style.display = 'none';
        formsearch.style.display = 'none';
        formcart.style.display = 'block';
    }
    else
    {
        formcart.style.display = 'none';
    }
});

login4.addEventListener('click', function(){
    if(formregister.style.display == 'none'){
        formlogin.style.display = 'none';
        formregister.style.display = 'block';
        formsearch.style.display = 'none';
        formcart.style.display = 'none';
    }
    else
    {
        formregister.style.display = 'none';
    }
});

login5.addEventListener('click', function(){
    if(formlogin.style.display == 'none'){
        formlogin.style.display = 'block';
        formregister.style.display = 'none';
        formsearch.style.display = 'none';
        formcart.style.display = 'none';
    }
    else
    {
        formlogin.style.display = 'none';
    }
});

navinput.addEventListener('change', function(){
    formlogin.style.display = 'none';
    formregister.style.display = 'none';
    formsearch.style.display = 'none';
    formcart.style.display = 'none';
});


function searchProducts() {
    // Lấy giá trị từ ô tìm kiếm
    var input = document.getElementById("searchInput");
    var filter = input.value.toUpperCase();
    
    // Lấy danh sách các sản phẩm
    var products = document.querySelectorAll(".container__content-right-2-child");
    
    // Lặp qua từng sản phẩm
    for (var i = 0; i < products.length; i++) {
      var name = products[i].querySelector(".product-link").innerText;
        
      // Nếu tên sản phẩm chứa từ khóa tìm kiếm thì hiển thị sản phẩm đó
      if (name.toUpperCase().indexOf(filter) > -1) {
        products[i].style.display = "block";
      } else {
        // Nếu không, ẩn sản phẩm đó đi
        products[i].style.display = "none";
      }
    }
  }



  var checkbox = document.getElementById('checkbox');
  var hide = document.getElementById('hide');
  var hide1 = document.getElementById('hide1');
  var hide2 = document.getElementById('hide2');
  var checkbox1 = document.getElementById('checkbox1');
  checkbox.addEventListener('change', function() {
      if (this.checked) {
          hide.style.display = 'none';
          hide1.style.display = 'none';
          hide2.style.display = 'none';
          
      } else {
          hide.style.display = 'block';
          hide1.style.display = 'block';
          hide2.style.display = 'block';
          
      }
  });
  
  checkbox1.addEventListener('change', function() {
      if (this.checked) {
          hide.style.display = 'none';
          hide1.style.display = 'none';
          hide2.style.display = 'none';
          
      } else {
          hide.style.display = 'block';
          hide1.style.display = 'block';
          hide2.style.display = 'block';
          
      }
  });		
	

  var myDiv = document.getElementByClassName('container__content-right-2-child-1');
		var img2 = new Image();
		// img2.src = "assets/img/portrait_85_6163d8c04e404094a6961a3cfdd901ba_grande.jpeg";

		img2.onload = function() {
			myDiv.onmouseover = function() {
				myDiv.getElementsByTagName('img')[1].style.opacity = '1';
			}

			myDiv.onmouseout = function() {
				myDiv.getElementsByTagName('img')[1].style.opacity = '0';
			}
		}


