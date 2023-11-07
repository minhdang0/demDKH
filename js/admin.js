
var _updateObj=null;
var _levels={'gv':'Giảng Viên','sv':'Sinh Viên'};

function getCode(){
	var code=0;
	var codes=$.find('.code');
	for(var i in codes){
		var value=$(codes[i]).html();
	   
	    if(!isNaN(value)&&value>code){
				   code=value;
			   }
	}
	return ++code;
}

$(document).ready(function(){
	//subject
   $("#btnInsertSub").click(function(){
	   saveSubject();
   });
	
	//user
	   $("#btnInsertUser").click(function(){
	   saveUser();
   });

});

function saveSubject(){
	if(_updateObj!=null){
		updateSubject();
	}else{
		insertSubject();
	}
}

function updateSubject(){
	var subjectName = $("#subjectName-new").val();
     var IDsubject =  $("#IDsubject-new").val();
     var teacher = $("#teacher-new").val();
	 var schedule = $("#schedule-new").val();
	
     $(_updateObj).find('.sub-name').html(subjectName);
     $(_updateObj).find('.code').html(IDsubject);
     $(_updateObj).find('.teacher').html(teacher);
	 $(_updateObj).find('.day').html(schedule);
     
	   $().toastmessage('showSuccessToast', "Cập nhật môn học thành công");
	
	_updateObj=null;
}

function fillEditSubject(el){
	_updateObj=$(el).closest('.row');
	 var subjectName = $(_updateObj).find('.sub-name').html();
     var IDsubject =  $(_updateObj).find('.code').html();
     var teacher = $(_updateObj).find('.teacher').html();
	 var schedule = $(_updateObj).find('.day').html();
	$("#subjectName-new").val(subjectName);
	$("#IDsubject-new").val(IDsubject);
	$("#teacher-new").val(teacher);
	$("#schedule-new").val(schedule);
	
}

	function removeSubject(el){
		 var row =$(el).closest(".row");
		 row.remove();
		$().toastmessage('showSuccessToast', "Xóa môn học thành công");
	}
	
	function insertSubject(){
     var subjectName = $("#subjectName-new").val();
     var IDsubject =  $("#IDsubject-new").val();
     var teacher = $("#teacher-new").val();
	 var schedule = $("#schedule-new").val();
    
     var newRow = "<li class='row'>"+
	   "<div class='cell code cell-fix-150 text-left'>"+IDsubject+"</div>"+
                "<div class='cell sub-name cell-fix-250 text-left'>"+subjectName+"</div>"+
                "<div class='cell teacher cell-fix-200 text-left'>"+teacher+"</div>"+
                "<div class='cell day cell-fix-200'>"+schedule+"</div>"+
              "<div class='cell cell-fix-100 text-left'>"+
                    "<button type='button' class='btnEditSub fa fa-pencil bg-1 text-fff' onclick='fillEditSubject(this)'></button>"+
                    "<button  type='button' class='btnRemoveSub fa fa-remove bg-1 text-fff' onclick='removeSubject(this)' ></button>"+
                "</div>"+
            "</li>" ;
       $(".list-info").append(newRow);
	   $().toastmessage('showSuccessToast', "Thêm môn học thành công");
     };
function saveUser(){
		if(_updateObj!=null){
			
		updateUser();
	}else{
		insertUser();
	}
}
function updateUser(){
	var username = $("#Username-new").val();
     var IDuser =  $("#IDUser-new").val();
     var falcuty = $("#falcuty-new").val();
		var levelVal=$('#level').val();
		var leveltext=_levels[levelVal];
     $(_updateObj).find('.user-name').html(username);
     $(_updateObj).find('.code').html(IDuser);
     $(_updateObj).find('.falcuty').html(falcuty);
	 $(_updateObj).find('.level').html(leveltext);
     
	   $().toastmessage('showSuccessToast', "Cập nhật môn học thành công");
	
	_updateObj=null;
}
	
	function fillEditUser(el){
		_updateObj=$(el).closest('.row');
	 var username = $(_updateObj).find('.user-name').html();
     var IDuser =  $(_updateObj).find('.code').html();
     var falcuty = $(_updateObj).find('.falcuty').html();
	 var level = $(_updateObj).find('.level > label').attr('value');
	$("#Username-new").val(username);
	$("#IDUser-new").val(IDuser);
	$("#falcuty-new").val(falcuty);
	$('#level').val(level);
	}
function setLevel(text){
	var levels=$('#level');
	for(var i in levels){
		var curText=$(levels[i]).text();
		if(curText==text){
			$("#level").val($(levels[i]).val());
			break;
		}
	}
}
	function removeUser(el){
		 var row =$(el).closest(".row");
		 row.remove();
		$().toastmessage('showSuccessToast', "Xóa User thành công");
	}
	
	function insertUser(){
     var username = $("#Username-new").val();
     var IDuser =  $("#IDUser-new").val();
     var falcuty = $("#falcuty-new").val();
	 var val = $("#level").val();
		var level=_levels[val];
		
     var newRow = "<li class='row'><div class='cell code cell-fix-150 text-left'>"+IDuser+"</div>"
                +"<div class='cell user-name cell-fix-200 text-left'>"+username+"</div>"
                +"<div class='cell falcuty cell-fix-200 text-left'>"+falcuty+"</div>"
                +"<div class='cell level cell-fix-100 text-left'>"+level+"</div>"
                +"<div class='cell cell-fix-100 right text-left'>"
                    +"<button type='button' class='btnEditUser fa fa-pencil bg-1 text-fff' onclick='fillEditUser(this)'></button>"
                    +"<button  type='button' class='btnRemoveUser fa fa-remove bg-1 text-fff' onclick='removeUser(this)'</button>"
                + "</div>"
            +"</li>" ;
       $(".list-info").append(newRow);
	   $().toastmessage('showSuccessToast', "Thêm User thành công");
     };
function autoChangeCode(){
	var code=getCode();
	$('#IDsubject-new').val(code);
}
function redirect(element) {
	var selectedValue = element.value; // Lấy giá trị được chọn
	if (selectedValue) {
	  window.location.href = selectedValue; // Chuyển hướng tới trang đã chọn
	}
  }
	