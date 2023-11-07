$(function () {
    // Tạo một đối tượng chứa các tài khoản và mật khẩu
    var accounts = {
        "A41530": "A123456",   // Sinh viên
        "12345678": "X123456789",    // Giảng viên
        "A12345": "A123456"
    };
   


    /*kiem tra cho form dang nhap chinh*/
    function ktUser() {
        // Hàm kiểm tra tên đăng nhập
        var reg = /^[A-Za-z0-9]{6}$/;
        var input = $("#txtUser").val();

        if (input == "") {
            $("#tbUser").html("*Bắt buộc nhập tên đăng nhập");
            return false;
        }

        if (reg.test(input)) {
            $("#tbUser").html("");
            return true;
        }

        $("#tbUser").html("Tên đăng nhập gồm 6 ký tự chữ hoặc số");
        return false;
    }

    function ktPass() {
        // Hàm kiểm tra mật khẩu
        var reg = /^[A-Za-z0-9]{7}$/;
        if ($("#txtPass").val() == "") {
            $("#tbPass").html("*Bắt buộc nhập mật khẩu");
            return false;
        }
        if (reg.test($("#txtPass").val())) {
            $("#tbPass").html("");
            return true;
        }

        $("#tbPass").html("Mật khẩu gồm 6 ký tự chữ hoặc số");
        return false;
    }

    function login() {
        var username = $("#txtUser").val();
        var password = $("#txtPass").val();

        console.log(username);  // In ra giá trị tên người dùng
        console.log(password);  // In ra giá trị mật khẩu
        console.log(accounts[username]); 
        
        if (accounts[username] && accounts[username] === password) {
            if ($("#slt-login").val() === "sinh viên") {
                $("#txtUser").val("");
                $("#txtPass").val("");
                window.open("sinhvien.html", target = "_blank");
                return true;
            }
            else if ($("#slt-login").val() === "giảng viên") {
                $("#txtUser").val("");
                $("#txtPass").val("");
                $("#slt-login").val("sinh viên");
                window.open("giangvien.html", target = "_blank");
                return true;
            }
            else if ($("#slt-login").val() === "Quản trị viên") {
                $("#txtUser").val("");
                $("#txtPass").val("");
                window.open("admin-subject.html", target = "_blank");
                return true;
            }
            
        } 
       
        else {
            alert("Đăng nhập thất bại!!!");
            return false;
        }
    }

    $("#txtUser").on("blur", ktUser);
    $("#txtPass").on("blur", ktPass);
    $("#btnLogin").on("click", login);
})
