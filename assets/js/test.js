 var combobox = document.getElementById('combobox');

 var container = document.querySelector('.container__content-right-2');
 var containers = document.querySelectorAll('.container__content-right-2-child');
 var mang = Array.from(containers);
 
 combobox.addEventListener('change', function(){
    if(combobox.value === '2'){
        for(var i=0;i<containers.length;i++)
        {
            container.removeChild(containers[i]);
        }
        
        for(var i=0;i<mang.length-1;i++)
        {
            for(var j=i+1;j<mang.length;j++){
                if(parseInt(mang[i].querySelector('.container__content-right-2-child-2-1').innerText.replace('₫', '').replace(',', ''))>parseInt(mang[j].querySelector('.container__content-right-2-child-2-1').innerText.replace('₫', '').replace(',', '')))
                {
                    var temp = mang[i];
                    mang[i] = mang[j];
                    mang[j] = temp;
                }
            }
        }

        
        for(var i=0;i<containers.length;i++)
        {
            container.appendChild(mang[i]);
        }

        
    }
    else
    {
        if(combobox.value === '3'){
            for(var i=0;i<containers.length;i++)
            {
                container.removeChild(containers[i]);
            }
            
            for(var i=0;i<mang.length-1;i++)
            {
                for(var j=i+1;j<mang.length;j++){
                    if(parseInt(mang[i].querySelector('.container__content-right-2-child-2-1').innerText.replace('₫', '').replace(',', ''))<parseInt(mang[j].querySelector('.container__content-right-2-child-2-1').innerText.replace('₫', '').replace(',', '')))
                    {
                        var temp = mang[i];
                        mang[i] = mang[j];
                        mang[j] = temp;
                    }
                }
            }

            
            for(var i=0;i<containers.length;i++)
            {
                container.appendChild(mang[i]);
            }
        }
        else{
            for(var i=0;i<containers.length;i++)
            {
                container.appendChild(containers[i]);
            }
        }
        
    }
    
 });

 function checkEmail() {
    var iagree = document.getElementById('iagree');
    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
        email.focus;
        return false;
    }
    else
    {
        if(iagree.checked)
        {
            alert('Tạo tài khoản thành công');
        }
        else{
            alert('Tạo tài khoản thất bại. Vui lòng đồng ý điều khoản dịch vụ');
        }

        
    }
}