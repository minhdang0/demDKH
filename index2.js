function ktsub() {
    var reg = /^[\w\d\s]+$/;
    if ($("#subjectName-new").val() === "") {
        $("#tbsub").html("*Bắt buộc nhập tên môn học");
        return false;
    }
    if (!reg.test($("#subjectName-new").val())) {
        $("#tbsub").html("Tên môn học chỉ được chứa ký tự, số và dấu cách");
        return false;
    }
    $("#tbsub").html(""); 
    return true;
}
$("#subjectName-new").on("blur", ktsub);

function ktid() {
    var reg = /^[a-zA-Z0-9]{1,5}$/; 
    if ($("#IDsubject-new").val() == "") {
        $("#tbid").html("*Bắt buộc nhập mã môn học");
        return false;
    }
    if (!reg.test($("#IDsubject-new").val())) {
        $("#tbid").html("Mã môn học chỉ chứa ký tự số và chữ, tối đa 5 ký tự");
        return false;
    }
    $("#tbid").html(""); 
    return true;
}
$("#IDsubject-new").on("blur", ktid);
function ktteacher() {
        var reg = /^[a-zA-ZaáạàảãăắặằẳẵâấậầẩẫeéẹèẻẽêếệềểễiíịìỉĩoóọòỏõôốộồổỗơớợờởỡuúụùủũưứựừửữyýỵỳỷỹđAÁẠÀẢÃĂẮẶẰẲẴÂẤẬẦẨẪEÉẸÈẺẼÊẾỆỀỂỄIÍỊÌỈĨOÓỌÒỎÕÔỐỘỒỔỖƠỚỢỜỞỠUÚỤÙỦŨƯỨỰỪỬỮYÝỴỲỶỸĐ\s]+$/;
        if ($("#teacher-new").val() == "") {
            $("#tbteacher").html("*Bắt buộc nhập tên giảng viên");
            return false;
        }
        if (!reg.test($("#teacher-new").val())) {
            $("#tbteacher").html("Tên giảng viên phải chứa kí tự chữ");
            return false;
        }
        $("#teacher-new").html("");
        return true;
}
$("#teacher-new").on("blur", ktteacher);
function ktschedule() {
        var reg = /^[a-zA-ZaáạàảãăắặằẳẵâấậầẩẫeéẹèẻẽêếệềểễiíịìỉĩoóọòỏõôốộồổỗơớợờởỡuúụùủũưứựừửữyýỵỳỷỹđAÁẠÀẢÃĂẮẶẰẲẴÂẤẬẦẨẪEÉẸÈẺẼÊẾỆỀỂỄIÍỊÌỈĨOÓỌÒỎÕÔỐỘỒỔỖƠỚỢỜỞỠUÚỤÙỦŨƯỨỰỪỬỮYÝỴỲỶỸĐ\s\d\,\\\']{2,}$/;
        if ($("#schedule-new").val() == "") {
            $("#tbschedule").html("*Bắt buộc nhập lịch dạy");
            return false;
        }
        if (!reg.test($("#schedule-new").val())) {
            $("#tbschedule").html("Chỉ chứa ký tự chữ và số");
            return false;
        }
        $("#schedule-new").html("");
        return true;
}
function ktuser() {
    var reg = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{1,7}$/;
    if ($("#Username-new").val() == "") {
        $("#tbusername").html("*Bắt buộc nhập tên user");
        return false;
    }
    if (!reg.test($("#Username-new").val())) {
        $("#tbusername").html("Tên user phải chứa cả chữ và số, tối đa 7 ký tự");
        return false;
    }
    $("#tbusername").html(""); 
}
function ktiduser() {
    var reg = /^[\w\s]+$/;
    if ($("#IDUser-new").val() == "") {
        $("#tbiduser").html("*Bắt buộc nhập mã user");
        return false;
    }
    if (!reg.test($("#IDUser-new").val())) {
        $("#tbiduser").html("Mã user có thể chứa ký tự, số và dấu cách");
        return false;
    }
    $("#tbiduser").html(""); // Xóa thông báo lỗi nếu hợp lệ
    return true;
}
$("#IDUser-new").on("blur", ktiduser);
function ktfalcuty() {
        var reg = /^[a-zA-ZaáạàảãăắặằẳẵâấậầẩẫeéẹèẻẽêếệềểễiíịìỉĩoóọòỏõôốộồổỗơớợờởỡuúụùủũưứựừửữyýỵỳỷỹđAÁẠÀẢÃĂẮẶẰẲẴÂẤẬẦẨẪEÉẸÈẺẼÊẾỆỀỂỄIÍỊÌỈĨOÓỌÒỎÕÔỐỘỒỔỖƠỚỢỜỞỠUÚỤÙỦŨƯỨỰỪỬỮYÝỴỲỶỸĐ\s\']+$/;
        if ($("#falcuty-new").val() == "") {
            $("#tbfalcuty").html("*Bắt buộc nhập tên khoa");
            return false;
        }
        if (!reg.test($("#falcuty-new").val())) {
            $("#tbfalcuty").html("Tên khoa chỉ chứa kí tự chữ");
            return false;
        }
        $("#falcuty-new").html("");
        return true;
}
$("#falcuty-new").on("blur", ktfalcuty);
// ELEMENT
function elm(x){
    var target = x.substring(1);
    var type = x.charAt(0);
    if(type == '#'){
        return document.getElementById(target);
    }else if(type == '.'){
        return document.getElementsByClassName(target);  
    }else {
        return document.getElementsByTagName(x);
    }
}
// SUB MENU
if(elm(".has-submenu")){
    for(var i=0,len=elm(".has-submenu").length; i<len; i++){
        elm(".has-submenu")[i].onclick = function(e){
            e.stopPropagation();
            toggle(this.nextElementSibling);
        }
    }   
}
//TOGGLE
function toggle(x){
  var css = window.getComputedStyle(x,null);
    if(css.getPropertyValue("display") == 'none'){
        x.style.display = 'block';
    }else {
        x.style.display = 'none';
    }
}
$(document).ready(function() {
    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );

    $("form[name='form']").validate({
        rules: {
            subjectName: {
                required: true,
                regex: "^[a-zA-Z'.\\s]{5,15}$"
            },
            IDsubject: {
                required: true,
                regex: "^[0-9]+$"
            },
            teacher: {
                required: true,
                regex: "^[a-zA-Z'.\\s]{10,40}$"
            },
            schedule: {
                required: true,
                regex: "^[a-zA-Z'.\\d]{10,40}$"
            },
        },
        messages: {
            subjectName: {
                required: "Bắt buộc nhập tên môn học",
                regex: "Tên môn học phải chứa ít nhất từ 5-15 ký tự"
            },
            IDsubject: {
                required: "Bắt buộc nhập mã môn học",
                regex: "Mã môn học chỉ được chứa ký tự số"
            },
            teacher: {
                required: "Bắt buộc nhập tên giảng viên",
                regex: "Tên giảng viên phải chứa ít nhất từ 10-40 ký tự"
            },
            schedule: {
                required: "Bắt buộc nhập lịch học",
                regex: "Lịch học phải chứa ít nhất từ 10-40 ký tự"
            },
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});

$(function () {
    function kiemtra(txt) {
        var reEx = /^[A-Z][A-Za-z]+$/;
        if (!reEx.test(txt.val())) {
            txt.addClass("error");
        } else {
            txt.removeClass("error");
        }
    }

    $("#subjectName-new").on("blur", function () {
        kiemtra($("#subjectName-new"));
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.formSearch');
    const searchInput = document.querySelector('.inputSearch');
    const subjects = document.querySelectorAll('.sub-name'); // Chọn tất cả phần tử chứa tên môn học

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const searchText = searchInput.value.toLowerCase(); // Lấy giá trị từ ô tìm kiếm và chuyển về chữ thường

        subjects.forEach(function(subject) {
            const subjectName = subject.textContent.toLowerCase(); // Lấy tên môn học và chuyển về chữ thường

            if (subjectName.includes(searchText)) { // Kiểm tra xem tên môn học có chứa từ khóa tìm kiếm hay không
                subject.parentElement.style.display = 'block'; // Hiển thị môn học nếu tìm thấy kết quả
            } else {
                subject.parentElement.style.display = 'none'; // Ẩn môn học nếu không tìm thấy kết quả
            }
        });
    });
});



