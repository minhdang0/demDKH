function addMultipleRowsFromData() {
    var listInfo = document.querySelector('.list-info');
    var data = [
        { studentID: "CTI651", userName: "Nguyễn Văn An", faculty: "Mạng Máy Tính", level: "Giảng Viên" },
        { studentID: "A41531", userName: "Trần Thị Bình", faculty: "Công Nghệ Thông Tin", level: "Sinh Viên" },
        { studentID: "A41540", userName: "Lê Đình Quang", faculty: "Hệ Thống Thông Tin", level: "Sinh Viên" },
        { studentID: "CT712", userName: "Trần Minh Ngọc", faculty: "Khoa Học Máy Tính", level: "Giảng Viên" },
        { studentID: "A42717", userName: "Bùi Thanh Bình", faculty: "Công Nghệ Thông Tin", level: "Sinh Viên" },
        { studentID: "A42521", userName: "Bùi Như Quỳnh", faculty: "Hệ Thống Thông Tin", level: "Sinh Viên" },
        { studentID: "CTI034", userName: "Hoàng Việt Quang", faculty: "Mạng Máy Tính", level: "Giảng Viên" },
        { studentID: "A42141", userName: "Dào Quang Khải", faculty: "Khoa Học Máy Tính", level: "Sinh Viên" },
        { studentID:"CTI201", userName: "Lê Đình Quang", faculty: "Khoa Học Máy Tính", level: "Giảng Viên" },
        { studentID: "A41533", userName: "Hoàng Thị Dung",faculty: "Hệ Thống Thông Tin", level: "Giảng Viên"}
    ];

    for (var i = 0; i < 10; i++) {
        var newRow = document.createElement("li");
        newRow.classList.add("row");

        newRow.innerHTML = `
            <div class="cell code cell-fix-150 text-left">${data[i].studentID}</div>
            <div class="cell user-name cell-fix-200 text-left">${data[i].userName}</div>
            <div class="cell falcuty cell-fix-200 text-left">${data[i].faculty}</div>
            <div class="cell level cell-fix-100 text-left">${data[i].level}</div>
            <div class="cell cell-fix-100 right text-left">
                <button type="button" class="btnEditUser fa fa-pencil bg-1 text-fff" onclick="fillEditUser(this)"></button>
                <button type="button" class="btnRemoveUser fa fa-remove bg-1 text-fff" onclick="removeUser(this)"></button>
            </div>
        `;

        listInfo.appendChild(newRow);
    }
}

// Call the function to add 10 rows to the list based on the 'data' variable
addMultipleRowsFromData();