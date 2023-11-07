$(document).ready(function() {
    $('a.login-window').click(function() {

        //lấy giá trị thuộc tính href - chính là phần tử "#login-box"
        var loginBox = $(this).attr('href');

        //cho hiện hộp đăng nhập trong 300ms
        $(loginBox).fadeIn("slow");

        // thêm phần tử id="over" vào cuối thẻ body
        $('body').append('<div id="over"></div>');
        $('#over').fadeIn(300);
        
        return false;
    });

    // khi click đóng hộp thoại
    $(document).on('click', "a.close, #over", function() { 
        $('#over, .login').fadeOut(300 , function() {
            $('#over').remove();  
        }); 
        return false;
    });
	
});
$(document).ready(function() {
   
    var accounts = {
        "A41530": "A123456",
        "admin123": "passadmin"
    };

    
    function checkUsername(username) {
        return /^[A-Za-z0-9]{6}$/.test(username);
    }
    function checkPassword(password) {
        return /^[A-Za-z0-9]{7}$/.test(password);   
    }

  
    $(".submit-button").on("click", function() {
        var username = $("#username").val();
        var password = $("#password").val();

        if (accounts[username] === password && checkUsername(username) && checkPassword(password)) {
            window.location.href = "admin.html"; 
        } else {
            alert("Đăng nhập thất bại. Vui lòng kiểm tra thông tin tài khoản của bạn.");
        }
    });
});
        
 $(".submit-button").on("click", function() {
        var username = $("#username").val();
        var password = $("#password").val();

        if (accounts[username] === password && checkUsername(username) && checkPassword(password)) {
            window.location.href = "admin.html"; 
        } else {
            alert("Đăng nhập thất bại. Vui lòng kiểm tra thông tin tài khoản của bạn.");
        }
    });
