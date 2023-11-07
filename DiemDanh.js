// JavaScript source code
$(document).ready(function(){
	$("#Mon").change(function(){
		if($("#Mon").val()=="HTVCNW"){
			 var markup="<option value=\"IT333\">IT333</option>"+
							"<option value=\"DHHTTT12A\">DHHTTT12A</option>";		
			$("#Lop").children().remove();
			$("#Lop").append(markup);
		}
		if($("#Mon").val()=="LTHSK"){
			var markup="<option value=\"CS122\">CS122</option>"+
							"<option value=\"DHHTTT12B\">DHHTTT12B</option>";		
			$("#Lop").children().remove();
			$("#Lop").append(markup);
		}
		if($("#Mon").val()=="none"){
			var markup="<option value=\"none\">--Chọn Lớp--</option>";
			$("#Lop").children().remove();
			$("#Lop").append(markup);
		}
	});

	$("#DSsv").click(function(){
		$("#table-diemdanh").children().remove();
		if($("#Mon").val()=="HTVCNW" && $("#Lop").val()=="IT333"){
		var tablediemdanh=
				"<div class=\"table-responsive\">"+
					"<table class=\"table table-bordered\">"+
						"<thead id=\"table-head\">"+
							"<tr>"+
								"<td>STT</td>"+
								"<td>Họ Tên</td>"+
								"<td>MSSV</td>"+
								"<td>4/5</td>"+
								"<td>11/5</td>"+
								"<td>18/5</td>"+
								"<td>25/5</td>"+
								"<td>1/6</td>"+
								"<td>8/6</td>"+
							"</tr>"+
						"</thead>"+
						"<tbody>"+
							"<tr>"+
								"<td>1</td>"+
								"<td>Đặng Nhật Minh</td>"+
								"<td>A41530</td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
							"</tr>"+
							"<tr>"+
								"<td>2</td>"+
								"<td>Lê Quốc Oai</td>"+
								"<td>A41122</td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
						"	</tr>"+
						"</tbody>"+
					"</table>"+
				"</div>" ;		
		$("#table-diemdanh").append(tablediemdanh);
		}
		if($("#Mon").val()=="LTHSK" && $("#Lop").val()=="LT"){
		var tablediemdanh=
				"<div class=\"table-responsive\">"+
					"<table class=\"table table-bordered\">"+
						"<thead id=\"table-head\">"+
							"<tr>"+
								"<td>STT</td>"+
								"<td>Họ Tên</td>"+
								"<td>MSSV</td>"+
								"<td>4/5</td>"+
								"<td>11/5</td>"+
								"<td>18/5</td>"+
								"<td>25/5</td>"+
								"<td>1/6</td>"+
								"<td>8/6</td>"+
							"</tr>"+
						"</thead>"+
						"<tbody>"+
							"<tr>"+
								"<td>1</td>"+
								"<td>Dặng Nhật Minh</td>"+
								"<td>A41530</td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
							"</tr>"+
							"<tr>"+
								"<td>2</td>"+
								"<td>Lê Quốc Oai</td>"+
								"<td>A41142</td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
						"	</tr>"+
						"</tbody>"+
					"</table>"+
				"</div>" ;		
		$("#table-diemdanh").append(tablediemdanh);
		}
		if($("#Mon").val()=="HTVCNW" && $("#Lop").val()=="DHHTTT12A"){
		var tablediemdanh=
				"<div class=\"table-responsive\">"+
					"<table class=\"table table-bordered\">"+
						"<thead id=\"table-head\">"+
							"<tr>"+
								"<td>STT</td>"+
								"<td>Họ Tên</td>"+
								"<td>MSSV</td>"+
								"<td>4/5</td>"+
								"<td>11/5</td>"+
								"<td>18/5</td>"+
								"<td>25/5</td>"+
								"<td>1/6</td>"+
								"<td>8/6</td>"+
							"</tr>"+
						"</thead>"+
						"<tbody>"+
							"<tr>"+
								"<td>1</td>"+
								"<td>Đặng Nhật Minh</td>"+
								"<td>A41530</td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
							"</tr>"+
							"<tr>"+
								"<td>2</td>"+
								"<td>Lê Quốc Oai</td>"+
								"<td>A41442</td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
						"	</tr>"+
						"</tbody>"+
					"</table>"+
				"</div>" ;		
		$("#table-diemdanh").append(tablediemdanh);
		}
		if($("#Mon").val()=="LTHSK" && $("#Lop").val()=="CS122"){
		var tablediemdanh=
				"<div class=\"table-responsive\">"+
					"<table class=\"table table-bordered\">"+
						"<thead id=\"table-head\">"+
							"<tr>"+
								"<td>STT</td>"+
								"<td>Họ Tên</td>"+
								"<td>MSSV</td>"+
								"<td>4/5</td>"+
								"<td>11/5</td>"+
								"<td>18/5</td>"+
								"<td>25/5</td>"+
								"<td>1/6</td>"+
								"<td>8/6</td>"+
							"</tr>"+
						"</thead>"+
						"<tbody>"+
							"<tr>"+
								"<td>1</td>"+
								"<td>Đặng Nhật Minh</td>"+
								"<td>A41530</td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
							"</tr>"+
							"<tr>"+
								"<td>2</td>"+
								"<td>Lê Quốc Oai</td>"+
								"<td>A41442</td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
								"<td><input type=\"checkbox\"></td>"+
						"	</tr>"+
						"</tbody>"+
					"</table>"+
				"</div>" ;		
		$("#table-diemdanh").append(tablediemdanh);
		}
	});

	
});