
$(function () {
    function addmon(){
        if($("input[name='rad']:checked").val()=="NLHDH")
        {
            var markup = "<tr>" +
                " <td><input type='radio' name='radio' value='NLHDH' /></td>" +
                " <td>Nguyên lý hệ điều hành</td>" +
                "<td>CS315</td>" +
                " <td>3</td>" +
                "<td>Lê Minh Tuấn</td>" +
                "<td>Thứ 2 Tiết 7-9</td>" +
                "<td>A707</td>" +
                "</tr >" +
                "<tr>" +
                " <td><input type='radio' name='radio' value='NLHDH' /></td>" +
                " <td>Nguyên lý hệ điều hành</td>" +
                "<td>CS315</td>" +
                " <td>3</td>" +
                "<td>Lê Minh Tuấn</td>" +
                "<td>Thứ 4 Tiết 7-9</td>" +
                "<td>A707</td>" +
                "</tr >" +
                "<tr>" +
                " <td><input type='radio' name='radio' value='NLHDH' /></td>" +
                " <td>Nguyên lý hệ điều hành</td>" +
                "<td>CS315</td>" +
                " <td>3</td>" +
                "<td>Lê Minh Tuấn</td>" +
                "<td>Thứ 6 Tiết 7-9</td>" +
                "<td>A707</td>" +
                "</tr >"+
                "<tr>" +
                " <td><input type='radio' name='radio' value='NLHDH' /></td>" +
                " <td>Nguyên lý hệ điều hành</td>" +
                "<td>CS315</td>" +
                " <td>3</td>" +
                "<td>Lê Minh Tuấn</td>" +
                "<td>Thứ 5 Tiết 7-9</td>" +
                "<td>A707</td>" +
                "</tr >";
                $("#tblInfoRegis").children("tr").remove();
            $("#tblInfoRegis").append(markup);
        }
        if($("input[name='rad']:checked").val()=="PTTKTT")
        {
            var markup = "<tr class='tr1'>" +
                " <td><input type='radio' name='radio' value='PTTKTT' /></td>" +
                " <td>Phân tích thiết kế thuật toán </td>" +
                "<td>CF211</td>" +
                " <td>3</td>" +
                "<td>Nguyễn Tú Anh</td>" +
                "<td>Thứ 2 Tiết 7-9</td>" +
                "<td>A703</td>" +
                "</tr >" +
                "<tr class='tr1'>" +
                " <td><input type='radio' name='radio' value='PTTKTT' /></td>" +
                " <td>Phân tích thiết kế thuật toán </td>" +
                "<td>CF211</td>" +
                " <td>3</td>" +
                "<td>Nguyễn Tú Anh</td>" +
                "<td>Thứ 4 Tiết 7-9</td>" +
                "<td>A703</td>" +
                "</tr >" +
                "<tr class='tr1'>" +
                " <td><input type='radio' name='radio' value='PTTKTT' /></td>" +
                " <td>Phân tích thiết kế thuật toán </td>" +
                "<td>CF211</td>" +
                " <td>3</td>" +
                "<td>Nguyễn Tú Anh</td>" +
                "<td>Thứ 6 Tiết 7-9</td>" +
                "<td>A703</td>" +
                "</tr >"+
                "<tr class='tr1'>" +
                " <td><input type='radio' name='radio' value='PTTKTT' /></td>" +
                " <td>Phân tích thiết kế thuật toán </td>" +
                "<td>CF211</td>" +
                " <td>3</td>" +
                "<td>Nguyễn Tú Anh</td>" +
                "<td>Thứ 5 Tiết 7-9</td>" +
                "<td>A703</td>" +
                "</tr >";
                $("#tblInfoRegis").children("tr").remove();
            $("#tblInfoRegis").append(markup);
        }
        if($("input[name='rad']:checked").val()=="toan")
        {
            var markup = "<tr>" +
                " <td><input type='radio' name='radio' value='toan' /></td>" +
                " <td>Toán rời rạc</td>" +
                "<td>MI201</td>" +
                " <td>3</td>" +
                "<td>Nguyễn Hồng Nhung</td>" +
                "<td>Thứ 2 Tiết 7-9</td>" +
                "<td>A501</td>" +
                "</tr >" +
                "<tr>" +
                " <td><input type='radio' name='radio' value='toan' /></td>" +
                " <td>Toán rời rạc</td>" +
                "<td>MI201</td>" +
                " <td>3</td>" +
                "<td>Nguyễn Hồng Nhung</td>" +
                "<td>Thứ 4 Tiết 7-9</td>" +
                "<td>A501</td>" +
                "</tr >" +
                "<tr>" +
                " <td><input type='radio' name='radio' value='toan' /></td>" +
                " <td>Toán rời rạc</td>" +
                "<td>MI201</td>" +
                " <td>3</td>" +
                "<td>Nguyễn Hồng Nhung</td>" +
                "<td>Thứ 5 Tiết 7-9</td>" +
                "<td>A501</td>" +
                "</tr >"+
                "<tr>" +
                " <td><input type='radio' name='radio' value='toan' /></td>" +
                " <td>Toán rời rạc</td>" +
                "<td>MI201</td>" +
                " <td>3</td>" +
                "<td>Nguyễn Hồng Nhung</td>" +
                "<td>Thứ 7 Tiết 7-9</td>" +
                "<td>A501</td>" +
                "</tr >";
                $("#tblInfoRegis").children("tr").remove();
            $("#tblInfoRegis").append(markup);
        }
        if($("input[name='rad']:checked").val()=="HTTT")
        {
            var markup = "<tr>" +
                " <td><input type='radio' name='radio' value='HTTT' /></td>" +
                " <td>Hệ thống TT</td>" +
                "<td>IS381</td>" +
                " <td>2</td>" +
                "<td>Đậu Hải Phong</td>" +
                "<td>Thứ 2 Tiết 7-9</td>" +
                "<td>706</td>" +
                "</tr >" +
                "<tr>" +
                " <td><input type='radio' name='radio' value='HTTT' /></td>" +
                " <td>Hệ thống TT</td>" +
                "<td>IS381</td>" +
                " <td>2</td>" +
                "<td>Đậu Hải Phong</td>" +
                "<td>Thứ 3 Tiết 7-9</td>" +
                "<td>706</td>" +
                "</tr >" +
                "<tr>" +
                " <td><input type='radio' name='radio' value='HTTT' /></td>" +
                " <td>Hệ thống TT</td>" +
                "<td>IS381</td>" +
                " <td>2</td>" +
                "<td>Đậu Hải Phong</td>" +
                "<td>Thứ 5 Tiết 7-9</td>" +
                "<td>706</td>" +
                "</tr >"+
                "<tr>" +
                " <td><input type='radio' name='radio' value='HTTT' /></td>" +
                " <td>Hệ thống TT</td>" +
                "<td>IS381</td>" +
                " <td>2</td>" +
                "<td>Đậu Hải Phong</td>" +
                "<td>Thứ 7 Tiết 7-9</td>" +
                "<td>706</td>" +
                "</tr >";
                $("#tblInfoRegis").children("tr").remove();
            $("#tblInfoRegis").append(markup);
        }
        if($("input[name='rad']:checked").val()=="CN")
        {
            var markup = "<tr>" +
                " <td><input type='radio' name='radio' value='CN' /></td>" +
                " <td>Công nghệ phần mềm</td>" +
                "<td>SE302</td>" +
                " <td>4</td>" +
                "<td>Vũ Minh Hoàng</td>" +
                "<td>Thứ 2 Tiết 7-9</td>" +
                "<td>A704</td>" +
                "</tr >" +
                "<tr>" +
                " <td><input type='radio' name='radio' value='CN' /></td>" +
                " <td>Công nghệ phần mềm</td>" +
                "<td>SE302</td>" +
                " <td>4</td>" +
                "<td>Vũ Minh Hoàng</td>" +
                "<td>Thứ 2 Tiết 7-9</td>" +
                "<td>A704</td>" +
                "</tr >" +
                "<tr>" +
                " <td><input type='radio' name='radio' value='CN' /></td>" +
                " <td>Công nghệ phần mềm</td>" +
                "<td>SE302</td>" +
                " <td>4</td>" +
                "<td>Vũ Minh Hoàng</td>" +
                "<td>Thứ 2 Tiết 7-9</td>" +
                "<td>A704</td>" +
                "</tr >"+
                "<tr>" +
                " <td><input type='radio' name='radio' value='CN' /></td>" +
                " <td>Công nghệ phần mềm</td>" +
                "<td>SE302</td>" +
                " <td>4</td>" +
                "<td>Vũ Minh Hoàng</td>" +
                "<td>Thứ 2 Tiết 7-9</td>" +
                "<td>A704</td>" +
                "</tr >";
                $("#tblInfoRegis").children("tr").remove();
            $("#tblInfoRegis").append(markup);
        }
        if($("input[name='rad']:checked").val()=="DLL")
        {
            var markup = "<tr>" +
                " <td><input type='radio' name='radio' value='DLL' /></td>" +
                " <td>Dữ liệu lớn</td>" +
                "<td>IS380</td>" +
                "<td>3</td>" +
                "<td>Trần Mạnh Trường</td>" +
                "<td>Thứ 3 Tiết 1-3</td>" +
                "<td>A701</td>" +
                "</tr >" +
                "<tr>" +
                " <td><input type='radio' name='radio' value='DLL' /></td>" +
                " <td>Dữ liệu lớn</td>" +
                "<td>IS380</td>" +
                " <td>3</td>" +
                "<td>Trần Mạnh Trường</td>" +
                "<td>Thứ 4 Tiết 7-9</td>" +
                "<td>A701</td>" +
                "</tr >" +
                "<tr>" +
                " <td><input type='radio' name='radio' value='DLL' /></td>" +
                " <td>Dữ liệu lớn</td>" +
                "<td>IS380</td>" +
                " <td>3</td>" +
                "<td>Trần Mạnh Trường</td>" +
                "<td>Thứ 5 Tiết 6-8</td>" +
                "<td>A701</td>" +
                "</tr >"+
                "<tr>" +
                " <td><input type='radio' name='radio' value='DLL' /></td>" +
                " <td>Dữ liệu lớn</td>" +
                "<td>IS380</td>" +
                " <td>3</td>" +
                "<td>Trần Mạnh Trường</td>" +
                "<td>Thứ 7 Tiết 7-9</td>" +
                "<td>A701</td>" +
                "</tr >";
                $("#tblInfoRegis").children("tr").remove();
            $("#tblInfoRegis").append(markup);
        }
        if($("input[name='rad']:checked").val()=="GT1")
        {
            var markup = "<tr>" +
                " <td><input type='radio' name='radio' value='GT1' /></td>" +
                " <td>Giải tích 1</td>" +
                "<td>MA110</td>" +
                " <td>3</td>" +
                "<td>Hoàng Ngọc Tùng</td>" +
                "<td>Thứ 2 Tiết 8-10</td>" +
                "<td>A305</td>" +
                "</tr >" +
                "<tr>" +
                " <td><input type='radio' name='radio' value='GT1' /></td>" +
                " <td>Giải tích 1</td>" +
                "<td>MA110</td>" +
                " <td>3</td>" +
                "<td>Hoàng Ngọc Tùng</td>" +
                "<td>Thứ 4 Tiết 8-10</td>" +
                "<td>A305</td>" +
                "</tr >" +
                "<tr>" +
                " <td><input type='radio' name='radio' value='GT1' /></td>" +
                " <td>Giải tích 1</td>" +
                "<td>MA110</td>" +
                " <td>3</td>" +
                "<td>Hoàng Ngọc Tùng</td>" +
                "<td>Thứ 5 Tiết 8-10</td>" +
                "<td>A305</td>" +
                "</tr >"+
                "<tr>" +
                " <td><input type='radio' name='radio' value='GT1' /></td>" +
                " <td>Giải tích 1</td>" +
                "<td>MA110</td>" +
                " <td>3</td>" +
                "<td>Hoàng Ngọc Tùng</td>" +
                "<td>Thứ 6 Tiết 8-10</td>" +
                "<td>A305</td>" +
                "</tr >";
                $("#tblInfoRegis").children("tr").remove();
            $("#tblInfoRegis").append(markup);
        }
    }
    var stc = 0;
    $("#regisSubject").on("click", function () {
        if ($("input[name='radio']:checked").val() == "NLHD" && (stc += 3) <= 15) {
            alert("Đăng kí thành công!!!");
            $("#tblInfo").find("input[name='rad']").each(function () {
                if ($(this).is(":checked")) {
                    $(this).parents("tr").hide();
                }
            });
            $("#tblInfoRegis").find("input[name='radio']").each(function () {
                if ($(this).is(":checked")) {
                    $("#tblregisted tbody").append($(this).parents("tr"));
                }
            });
            $("#tblInfoRegis").children("tr").remove();
        }
        else if ($("input[name='radio']:checked").val() == "PTTKTT" && (stc += 3) <= 15) {
            alert("Đăng kí thành công!!!");
            $("#tblInfo").find("input[name='rad']").each(function () {
                if ($(this).is(":checked")) {
                    $(this).parents("tr").hide();
                }
            });
            $("#tblInfoRegis").find("input[name='radio']").each(function () {
                if ($(this).is(":checked")) {
                    $("#tblregisted tbody").append($(this).parents("tr"));
                }
            });
            $("#tblInfoRegis").children("tr").remove();
        } 
        else if ($("input[name='radio']:checked").val() == "toan" && (stc += 3) <= 15) {
            alert("Đăng kí thành công!!!");
            $("#tblInfo").find("input[name='rad']").each(function () {
                if ($(this).is(":checked")) {
                    $(this).parents("tr").hide();
                }
            });
            $("#tblInfoRegis").find("input[name='radio']").each(function () {
                if ($(this).is(":checked")) {
                    $("#tblregisted tbody").append($(this).parents("tr"));
                }
            });
            $("#tblInfoRegis").children("tr").remove();
        } 
        else if ($("input[name='radio']:checked").val() == "HTTT" && (stc += 2) <= 15) {
            alert("Đăng kí thành công!!!");
            $("#tblInfo").find("input[name='rad']").each(function () {
                if ($(this).is(":checked")) {
                    $(this).parents("tr").hide();
                }
            });
            $("#tblInfoRegis").find("input[name='radio']").each(function () {
                if ($(this).is(":checked")) {
                    $("#tblregisted tbody").append($(this).parents("tr"));
                }
            });
            $("#tblInfoRegis").children("tr").remove();
        }
        else if ($("input[name='radio']:checked").val() == "CN" && (stc += 4) <= 15) {
            alert("Đăng kí thành công!!!");
            $("#tblInfo").find("input[name='rad']").each(function () {
                if ($(this).is(":checked")) {
                    $(this).parents("tr").hide();
                }
            });
            $("#tblInfoRegis").find("input[name='radio']").each(function () {
                if ($(this).is(":checked")) {
                    $("#tblregisted tbody").append($(this).parents("tr"));
                }
            });
            $("#tblInfoRegis").children("tr").remove();
        }
        else if ($("input[name='radio']:checked").val() == "DLL" && (stc += 3) <= 15) {
            alert("Đăng kí thành công!!!");
            $("#tblInfo").find("input[name='rad']").each(function () {
                if ($(this).is(":checked")) {
                    $(this).parents("tr").hide();
                }
            });
            $("#tblInfoRegis").find("input[name='radio']").each(function () {
                if ($(this).is(":checked")) {
                    $("#tblregisted tbody").append($(this).parents("tr"));
                }
            });
            $("#tblInfoRegis").children("tr").remove();
        }
        else if ($("input[name='radio']:checked").val() == "GT1" && (stc += 3) <= 15) {
            alert("Đăng kí thành công!!!");
            $("#tblInfo").find("input[name='rad']").each(function () {
                if ($(this).is(":checked")) {
                    $(this).parents("tr").hide();
                }
            });
            $("#tblInfoRegis").find("input[name='radio']").each(function () {
                if ($(this).is(":checked")) {
                    $("#tblregisted tbody").append($(this).parents("tr"));
                }
            });
            $("#tblInfoRegis").children("tr").remove();
        } 
        else {
            alert("Số tín chỉ đăng kí tối đa là 15");
            if ($("input[name='radio']:checked").val() == "CN") {
                stc -= 4;
            }
            else if($("input[name='radio]:checked").val()=="HTTT"){
                stc-=2
            }
            else{
                stc -= 3;
            }
                
        }   
            
    })
    $("#cancelSubject").on("click", function () {
        $("#tblregisted").find("input[name='radio']").each(function () {
            if ($(this).is(":checked")) {
                if ($(this).val() == "HTTT") {
                    stc =stc- 2;
                    $("#4").parents("tr").show();
                    $(this).parents("tr").remove();
                }
                if ($(this).val() == "PTTKTT") {
                    stc =stc- 3;
                    $("#2").parents("tr").show();
                    $(this).parents("tr").remove();
                }
                if ($(this).val() == "toan") {
                    stc = stc - 3;
                    $("#3").parents("tr").show();
                    $(this).parents("tr").remove();
                }
                if ($(this).val() == "NLHDH") {
                    stc = stc - 3;
                    $("#1").parents("tr").show();
                    $(this).parents("tr").remove();
                }
                if ($(this).val() == "DLL") {
                    stc = stc - 3;
                    $("#6").parents("tr").show();
                    $(this).parents("tr").remove();
                }
                if ($(this).val() == "CN") {
                    stc = stc - 4;
                    $("#5").parents("tr").show();
                    $(this).parents("tr").remove();
                }
                if ($(this).val() == "GT1")
                {
                    stc= stc-3;
                    $("#7").parents("tr").show();
                    $(this).parents("tr").remove();

                }
            }
        });
    })

    $("input[name='rad']").on("click", addmon);

})