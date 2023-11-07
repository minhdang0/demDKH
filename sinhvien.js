$(function (){
    function ktPassOld() {
        var reg =/(?=.*\d)(?=.*[a-zA-Z]).{6,}/
        if ($("#txtPassOld").val() == "") {
            $("#tbPassOld").html("*Bắt buộc nhập mật khẩu cũ");
            return false;
        }
        if (!reg.test($("#txtPassOld").val())) {
            $("#tbPassOld").html("Mật khẩu có ít nhất 6 kí tự bao gồm cả chữ và số");
            return false;
        }
        $("#tbPassOld").html("");
        return true;
    }
    function ktPassNew() {
        var reg = /(?=.*\d)(?=.*[a-zA-Z]).{6,}/
        if ($("#txtPassNew").val() == "") {
            $("#tbPassNew").html("*Bắt buộc nhập mật khẩu cũ");
            return false;
        }
        if (!reg.test($("#txtPassNew").val())) {
            $("#tbPassNew").html("Mật khẩu có ít nhất 6 kí tự bao gồm cả chữ và số");
            return false;
        }
        $("#tbPassNew").html("");
        return true;
    }
    function ktPassCof() {
        if ($("#txtPassCof").val() != $("#txtPassNew").val() || $("#txtPassCof").val()=="") {
            $("#tbPassCof").html("Mật khẩu không trùng khớp");
            return false;
        }
        $("#tbPassCof").html("");
        return true;
    }
    function cofirmPass() {
        if (ktPassOld() == false || ktPassNew() == false || ktPassCof == false) {
            alert("Đổi mật khẩu thất bại. Hãy kiểm tra lại!!!");
            return false;
        }
        alert("Mật khẩu đã được thay đổi: " + $("#txtPassCof").val());
        return true;
    }
    $("#txtPassOld").on("blur", ktPassOld);
    $("#txtPassNew").on("blur", ktPassNew);
    $("#txtPassCof").on("blur", ktPassCof);
    $("#change").on("submit", cofirmPass);

    //Modal
    $("#btnCanc").on("click", function thoat() {
        $("#myModal").modal("hide");
    })
    function ktHoTen() {
        var reg = /^[a-zA-ZaáạàảãăắặằẳẵâấậầẩẫeéẹèẻẽêếệềểễiíịìỉĩoóọòỏõôốộồổỗơớợờởỡuúụùủũưứựừửữyýỵỳỷỹđAÁẠÀẢÃĂẮẶẰẲẴÂẤẬẦẨẪEÉẸÈẺẼÊẾỆỀỂỄIÍỊÌỈĨOÓỌÒỎÕÔỐỘỒỔỖƠỚỢỜỞỠUÚỤÙỦŨƯỨỰỪỬỮYÝỴỲỶỸĐ\s\']+$/;
        if ($("#txtHoTen").val() == "") {
            $("#tbHoTen").html("*Bắt buộc nhập họ tên");
            return false;
        }
        if (!reg.test($("#txtHoTen").val())) {
            $("#tbHoTen").html("Họ tên chỉ chứa kí tự chữ và dấu nháy đơn (')");
            return false;
        }
        $("#tbHoTen").html("");
        return true;
    }
    function ktCha() {
        var reg = /^[a-zA-ZaáạàảãăắặằẳẵâấậầẩẫeéẹèẻẽêếệềểễiíịìỉĩoóọòỏõôốộồổỗơớợờởỡuúụùủũưứựừửữyýỵỳỷỹđAÁẠÀẢÃĂẮẶẰẲẴÂẤẬẦẨẪEÉẸÈẺẼÊẾỆỀỂỄIÍỊÌỈĨOÓỌÒỎÕÔỐỘỒỔỖƠỚỢỜỞỠUÚỤÙỦŨƯỨỰỪỬỮYÝỴỲỶỸĐ\s\']+$/;
        if ($("#txtCha").val() == "") {
            $("#tbCha").html("*Bắt buộc nhập họ tên cha");
            return false;
        }
        if (!reg.test($("#txtCha").val())) {
            $("#tbCha").html("Họ tên cha chỉ chứa kí tự chữ và dấu nháy đơn (')");
            return false;
        }
        $("#tbCha").html("");
        return true;
    }
    function ktMe() {
        var reg = /^[a-zA-ZaáạàảãăắặằẳẵâấậầẩẫeéẹèẻẽêếệềểễiíịìỉĩoóọòỏõôốộồổỗơớợờởỡuúụùủũưứựừửữyýỵỳỷỹđAÁẠÀẢÃĂẮẶẰẲẴÂẤẬẦẨẪEÉẸÈẺẼÊẾỆỀỂỄIÍỊÌỈĨOÓỌÒỎÕÔỐỘỒỔỖƠỚỢỜỞỠUÚỤÙỦŨƯỨỰỪỬỮYÝỴỲỶỸĐ\s\']+$/;
        if ($("#txtMe").val() == "") {
            $("#tbMe").html("*Bắt buộc nhập họ tên mẹ");
            return false;
        }
        if (!reg.test($("#txtMe").val())) {
            $("#tbMe").html("Họ tên mẹ chỉ chứa kí tự chữ và dấu nháy đơn (')");
            return false;
        }
        $("#tbMe").html("");
        return true;
    }
    function ktNgaySinh() {
        var today = new Date();
        var ns = new Date($("#txtNgaySinh").val());
        if ($("#txtNgaySinh").val() == ""   ) {
            $("#tbNgaySinh").html("*Bắt buộc nhập ngày sinh");
            return false;
        }
        if (eval(today.getFullYear()-ns.getFullYear())<=18) {
            $("#tbNgaySinh").html("Sinh viên phải ít nhất là 18 tuổi");
            return false;
        }
        $("#tbNgaySinh").html("");
        return true;
    }
	function ktNoiSinh() {
        var reg = /^[a-zA-ZaáạàảãăắặằẳẵâấậầẩẫeéẹèẻẽêếệềểễiíịìỉĩoóọòỏõôốộồổỗơớợờởỡuúụùủũưứựừửữyýỵỳỷỹđAÁẠÀẢÃĂẮẶẰẲẴÂẤẬẦẨẪEÉẸÈẺẼÊẾỆỀỂỄIÍỊÌỈĨOÓỌÒỎÕÔỐỘỒỔỖƠỚỢỜỞỠUÚỤÙỦŨƯỨỰỪỬỮYÝỴỲỶỸĐ\s]{2,}$/;
        if ($("#txtNoiSinh").val() == "") {
            $("#tbNoiSinh").html("*Bắt buộc nhập nơi sinh");
            return false;
        }
        if (!reg.test($("#txtNoiSinh").val())) {
            $("#tbNoiSinh").html("Nơi sinh chỉ chứa kí tự chữ và có ít nhất 2 kí tự");
            return false;
        }
        $("#tbNoiSinh").html("");
        return true;
    }
	function ktDiaChi() {
        var reg = /^(?=.*[a-zA-ZaáạàảãăắặằẳẵâấậầẩẫeéẹèẻẽêếệềểễiíịìỉĩoóọòỏõôốộồổỗơớợờởỡuúụùủũưứựừửữyýỵỳỷỹđAÁẠÀẢÃĂẮẶẰẲẴÂẤẬẦẨẪEÉẸÈẺẼÊẾỆỀỂỄIÍỊÌỈĨOÓỌÒỎÕÔỐỘỒỔỖƠỚỢỜỞỠUÚỤÙỦŨƯỨỰỪỬỮYÝỴỲỶỸĐ])[a-zA-ZaáạàảãăắặằẳẵâấậầẩẫeéẹèẻẽêếệềểễiíịìỉĩoóọòỏõôốộồổỗơớợờởỡuúụùủũưứựừửữyýỵỳỷỹđAÁẠÀẢÃĂẮẶẰẲẴÂẤẬẦẨẪEÉẸÈẺẼÊẾỆỀỂỄIÍỊÌỈĨOÓỌÒỎÕÔỐỘỒỔỖƠỚỢỜỞỠUÚỤÙỦŨƯỨỰỪỬỮYÝỴỲỶỸĐ\d\s\,\\\']{2,}$/;
        if ($("#txtDiaChi").val() == "") {
            $("#tbDiaChi").html("*Bắt buộc nhập địa chỉ");
            return false;
        }
        if (!reg.test($("#txtDiaChi").val())) {
            $("#tbDiaChi").html("Địa chỉ không đúng");
            return false;
        }
        $("#tbDiaChi").html("");
        return true;
    }
	function ktEmail(){
		var reg=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
		if ($("#txtEmail").val() === "") {
            $("#tbEmail").html("*Bắt buộc nhập email");
            return false;
        }
		if(!reg.test($("#txtEmail").val())){
			$("#tbEmail").html("email có mẫu: xxx@xxx.xxx");
            return false;
		}
		$("#tbEmail").html("");
        return true;
	}
	function updateInfo(){
		if(ktHoTen()==false || ktDiaChi()==false || ktNgaySinh()==false || ktNoiSinh()==false || ktCha()==false||ktMe()==false || ktEmail()== false){
			alert("Cập nhật thất bại!!! Hãy kiểm tra dữ liệu nhập!!!");
			return false;	
		}
			var ns=new Date($("#txtNgaySinh").val());
			var ngaysinh=ns.getDate()+ "/" + ns.getMonth() + "/" + ns.getFullYear();
			$("#hoten").html($("#txtHoTen").val());	
			$("#gt").html($("input[name='gender']:checked").val());
			$("#ngaysinh").html(ngaysinh);
			$("#noisinh").html($("#txtNoiSinh").val());
			$("#dc").html($("#txtDiaChi").val());
			$("#cha").html($("#txtCha").val());
			$("#me").html($("#txtMe").val());
			$("#email").html($("#txtEmail").val());
			$("#myModal").modal("hide");
			$("#update")[0].reset();;
			return true;
	}

    $("#txtHoTen").on("blur", ktHoTen);
    $("#txtNgaySinh").on("blur", ktNgaySinh);
	$("#txtNoiSinh").on("blur", ktNoiSinh);
	$("#txtDiaChi").on("blur", ktDiaChi);
    $("#txtMe").on("blur", ktMe);
    $("#txtCha").on("blur", ktCha);
	$("#txtEmail").on("blur", ktEmail);
	$("#btnUpdateInfo").on("click", updateInfo);
})
