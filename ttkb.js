// Hàm hiển thị thời khóa biểu cho lớp học cụ thể
var data =  [
    {
        "ma": "SK460",
        "ten": "Thực tập ngành công tác xã hội",
        "lop": "TTTOTNGHIEPCTXH.1",
        "thu": "1",
        "ca": "1-5",
        "phong": "BOMON1",
        "sotin": "4",
        "giangvien": "Nguyễn Thị Bùi Thành(CXW004)"
    },
    {
        "ma": "AD206",
        "ten": "Ẩm thực Việt Nam",
        "lop": "AMTHUCVN.2.1_BT",
        "thu": "3",
        "ca": "1-3",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "AD206",
        "ten": "Ẩm thực Việt Nam",
        "lop": "AMTHUCVN.2.2_BT",
        "thu": "3",
        "ca": "6-8",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "AD206",
        "ten": "Ẩm thực Việt Nam",
        "lop": "AMTHUCVN.2_LT",
        "thu": "5",
        "ca": "3-5",
        "phong": "B303",
        "sotin": "3",
        "giangvien": "Nguyễn Nhiên Hương(MDL026)"
    },
    {
        "ma": "TC316",
        "ten": "An ninh mạng truyền thông",
        "lop": "ANNINHTRUYENTHONG.1",
        "thu": "3",
        "ca": "1-2",
        "phong": "A603",
        "sotin": "3",
        "giangvien": "Hoàng Trọng Minh(CTI030)"
    },
    {
        "ma": "TC316",
        "ten": "An ninh mạng truyền thông",
        "lop": "ANNINHTRUYENTHONG.1",
        "thu": "3",
        "ca": "8-10",
        "phong": "A609",
        "sotin": "3",
        "giangvien": "Hoàng Trọng Minh(CTI030)"
    },
    {
        "ma": "IS345",
        "ten": "An toàn thông tin",
        "lop": "ANTOANTTIN.1",
        "thu": "4",
        "ca": "1-2",
        "phong": "A709",
        "sotin": "3",
        "giangvien": "Nguyễn Hữu  Tiến(CTI049)"
    },
    {
        "ma": "IS345",
        "ten": "An toàn thông tin",
        "lop": "ANTOANTTIN.2",
        "thu": "4",
        "ca": "3-5",
        "phong": "A709",
        "sotin": "3",
        "giangvien": "Nguyễn Hữu  Tiến(CTI049)"
    },
    {
        "ma": "IS345",
        "ten": "An toàn thông tin",
        "lop": "ANTOANTTIN.1",
        "thu": "4",
        "ca": "6-8",
        "phong": "A709",
        "sotin": "3",
        "giangvien": "Nguyễn Hữu  Tiến(CTI049)"
    },
    {
        "ma": "IS345",
        "ten": "An toàn thông tin",
        "lop": "ANTOANTTIN.2",
        "thu": "4",
        "ca": "9-10",
        "phong": "A709",
        "sotin": "3",
        "giangvien": "Nguyễn Hữu  Tiến(CTI049)"
    },
    {
        "ma": "FN335",
        "ten": "Bảo hiểm",
        "lop": "BAOHIEM.1",
        "thu": "2",
        "ca": "6-7",
        "phong": "B103",
        "sotin": "3",
        "giangvien": "Lê Thanh Nhàn(CQB019)"
    },
    {
        "ma": "FN335",
        "ten": "Bảo hiểm",
        "lop": "BAOHIEM.1",
        "thu": "6",
        "ca": "3-5",
        "phong": "B205",
        "sotin": "3",
        "giangvien": "Lê Thanh Nhàn(CQB019)"
    },
    {
        "ma": "TM312",
        "ten": "Biên tập Báo chí đa phương tiện",
        "lop": "BTBAOCHI.1_LT",
        "thu": "4",
        "ca": "2-5",
        "phong": "A604",
        "sotin": "3",
        "giangvien": "Hồ Xuân Ngọc(CXC008)"
    },
    {
        "ma": "TM312",
        "ten": "Biên tập Báo chí đa phương tiện",
        "lop": "BTBAOCHI.2_LT",
        "thu": "4",
        "ca": "6-9",
        "phong": "A604",
        "sotin": "3",
        "giangvien": "Vũ Tuấn Tú(MXC013)"
    },
    {
        "ma": "MD332",
        "ten": "Biên tập hậu kỳ",
        "lop": "BTHAUKY.6_LT",
        "thu": "5",
        "ca": "3-5",
        "phong": "BOMON",
        "sotin": "2",
        "giangvien": "Vũ Tuấn Tú(MXC013)"
    },
    {
        "ma": "MD332",
        "ten": "Biên tập hậu kỳ",
        "lop": "BTHAUKY.4_LT",
        "thu": "5",
        "ca": "6-8",
        "phong": "BOMON",
        "sotin": "2",
        "giangvien": "Vũ Tuấn Tú(MXC013)"
    },
    {
        "ma": "MD332",
        "ten": "Biên tập hậu kỳ",
        "lop": "BTHAUKY.5_LT",
        "thu": "6",
        "ca": "3-5",
        "phong": "BOMON",
        "sotin": "2",
        "giangvien": "Vũ Tuấn Tú(MXC013)"
    },
    {
        "ma": "MD332",
        "ten": "Biên tập hậu kỳ",
        "lop": "BTHAUKY.3_LT",
        "thu": "6",
        "ca": "6-8",
        "phong": "BOMON",
        "sotin": "2",
        "giangvien": "Vũ Tuấn Tú(MXC013)"
    },
    {
        "ma": "MD332",
        "ten": "Biên tập hậu kỳ",
        "lop": "BTHAUKY.1_LT",
        "thu": "7",
        "ca": "3-5",
        "phong": "BOMON",
        "sotin": "2",
        "giangvien": "Vũ Tuấn Tú(MXC013)"
    },
    {
        "ma": "MD332",
        "ten": "Biên tập hậu kỳ",
        "lop": "BTHAUKY.2_LT",
        "thu": "7",
        "ca": "6-8",
        "phong": "BOMON",
        "sotin": "2",
        "giangvien": "Vũ Tuấn Tú(MXC013)"
    },
    {
        "ma": "GJ272",
        "ten": "Bổ trợ kỹ năng tiếng Nhật trung cấp 2",
        "lop": "BOTROKNNHATTC2.1",
        "thu": "2",
        "ca": "3-5",
        "phong": "B305",
        "sotin": "2",
        "giangvien": "Trần Thị Lan Hương(CNJ035)"
    },
    {
        "ma": "GJ272",
        "ten": "Bổ trợ kỹ năng tiếng Nhật trung cấp 2",
        "lop": "BOTROKNNHATTC2.3",
        "thu": "3",
        "ca": "1-2",
        "phong": "A401",
        "sotin": "2",
        "giangvien": "Ueda Shinya(CVE003)"
    },
    {
        "ma": "GJ272",
        "ten": "Bổ trợ kỹ năng tiếng Nhật trung cấp 2",
        "lop": "BOTROKNNHATTC2.4",
        "thu": "3",
        "ca": "8-10",
        "phong": "B710",
        "sotin": "2",
        "giangvien": "Vũ Thị Kim Chi(CNJ003)"
    },
    {
        "ma": "GJ272",
        "ten": "Bổ trợ kỹ năng tiếng Nhật trung cấp 2",
        "lop": "BOTROKNNHATTC2.5",
        "thu": "3",
        "ca": "8-10",
        "phong": "B104",
        "sotin": "2",
        "giangvien": "Trương Phương Thúy(CNJ007)"
    },
    {
        "ma": "GJ272",
        "ten": "Bổ trợ kỹ năng tiếng Nhật trung cấp 2",
        "lop": "BOTROKNNHATTC2.2",
        "thu": "4",
        "ca": "3-5",
        "phong": "B611",
        "sotin": "2",
        "giangvien": "Nguyễn Huyền Ngọc(CNJ021)"
    },
    {
        "ma": "GJ272",
        "ten": "Bổ trợ kỹ năng tiếng Nhật trung cấp 2",
        "lop": "BOTROKNNHATTC2.3",
        "thu": "5",
        "ca": "3-5",
        "phong": "B310",
        "sotin": "2",
        "giangvien": "Nguyễn Thùy Linh(CNJ008)"
    },
    {
        "ma": "GJ272",
        "ten": "Bổ trợ kỹ năng tiếng Nhật trung cấp 2",
        "lop": "BOTROKNNHATTC2.1",
        "thu": "5",
        "ca": "3-4",
        "phong": "B512",
        "sotin": "2",
        "giangvien": "Nabeta Naoko(CNJ039)"
    },
    {
        "ma": "GJ272",
        "ten": "Bổ trợ kỹ năng tiếng Nhật trung cấp 2",
        "lop": "BOTROKNNHATTC2.4",
        "thu": "5",
        "ca": "8-9",
        "phong": "B410",
        "sotin": "2",
        "giangvien": "Ueda Shinya(CVE003)"
    },
    {
        "ma": "GJ272",
        "ten": "Bổ trợ kỹ năng tiếng Nhật trung cấp 2",
        "lop": "BOTROKNNHATTC2.5",
        "thu": "5",
        "ca": "8-9",
        "phong": "A401",
        "sotin": "2",
        "giangvien": "Nabeta Naoko(CNJ039)"
    },
    {
        "ma": "GJ272",
        "ten": "Bổ trợ kỹ năng tiếng Nhật trung cấp 2",
        "lop": "BOTROKNNHATTC2.2",
        "thu": "6",
        "ca": "3-4",
        "phong": "B304",
        "sotin": "2",
        "giangvien": "Ueda Shinya(CVE003)"
    },
    {
        "ma": "EC310",
        "ten": "Các phương pháp phân tích định lượng trong kinh tế",
        "lop": "PPPTDINHLUONGKTE.9",
        "thu": "3",
        "ca": "3-5",
        "phong": "B702",
        "sotin": "3",
        "giangvien": "Chu Thị Thu Thủy(CQB010)"
    },
    {
        "ma": "EC310",
        "ten": "Các phương pháp phân tích định lượng trong kinh tế",
        "lop": "PPPTDINHLUONGKTE.10",
        "thu": "3",
        "ca": "6-8",
        "phong": "B702",
        "sotin": "3",
        "giangvien": "Phạm Thị Bảo Oanh(CQB006)"
    },
    {
        "ma": "EC310",
        "ten": "Các phương pháp phân tích định lượng trong kinh tế",
        "lop": "PPPTDINHLUONGKTE.9",
        "thu": "4",
        "ca": "1-2",
        "phong": "A601",
        "sotin": "3",
        "giangvien": "Chu Thị Thu Thủy(CQB010)"
    },
    {
        "ma": "EC310",
        "ten": "Các phương pháp phân tích định lượng trong kinh tế",
        "lop": "PPPTDINHLUONGKTE.10",
        "thu": "6",
        "ca": "1-2",
        "phong": "A607",
        "sotin": "3",
        "giangvien": "Phạm Thị Bảo Oanh(CQB006)"
    },
    {
        "ma": "EC310",
        "ten": "Các phương pháp phân tích định lượng trong kinh tế",
        "lop": "PPPTDINHLUONGKTE.9",
        "thu": "7",
        "ca": "1-2",
        "phong": "B412",
        "sotin": "3",
        "giangvien": "Chu Thị Thu Thủy(CQB010)"
    },
    {
        "ma": "EC310",
        "ten": "Các phương pháp phân tích định lượng trong kinh tế",
        "lop": "PPPTDINHLUONGKTE.10",
        "thu": "7",
        "ca": "6-7",
        "phong": "B412",
        "sotin": "3",
        "giangvien": "Phạm Thị Bảo Oanh(CQB006)"
    },
    {
        "ma": "LG319",
        "ten": "Các phương pháp phân tích định lượng trong logistics và Quản lý chuỗi cung ứng",
        "lop": "PTĐLLOGIC.2",
        "thu": "2",
        "ca": "4-5",
        "phong": "B210",
        "sotin": "3",
        "giangvien": "Phạm Minh Hạnh(CQL006)"
    },
    {
        "ma": "LG319",
        "ten": "Các phương pháp phân tích định lượng trong logistics và Quản lý chuỗi cung ứng",
        "lop": "PTĐLLOGIC.2",
        "thu": "2",
        "ca": "6-7",
        "phong": "B210",
        "sotin": "3",
        "giangvien": "Phạm Minh Hạnh(CQL006)"
    },
    {
        "ma": "LG319",
        "ten": "Các phương pháp phân tích định lượng trong logistics và Quản lý chuỗi cung ứng",
        "lop": "PTĐLLOGIC.2",
        "thu": "4",
        "ca": "3-5",
        "phong": "B702",
        "sotin": "3",
        "giangvien": "Phạm Minh Hạnh(CQL006)"
    },
    {
        "ma": "VC102",
        "ten": "Các tôn giáo ở Việt Nam",
        "lop": "TONGIAOVN.1",
        "thu": "6",
        "ca": "6-10",
        "phong": "A402",
        "sotin": "3",
        "giangvien": "Nguyễn Nhật Linh(MXV048)"
    },
    {
        "ma": "CF213",
        "ten": "Cấu trúc dữ liệu và giải thuật",
        "lop": "CF213.5_LT",
        "thu": "2",
        "ca": "1-3",
        "phong": "A703",
        "sotin": "4",
        "giangvien": "Nguyễn Đức Dân(CTI011)"
    },
    {
        "ma": "CF213",
        "ten": "Cấu trúc dữ liệu và giải thuật",
        "lop": "CF213.3_LT",
        "thu": "2",
        "ca": "4-5",
        "phong": "A703",
        "sotin": "4",
        "giangvien": "Nguyễn Thị Huyền Châu(PAI001)"
    },
    {
        "ma": "CF213",
        "ten": "Cấu trúc dữ liệu và giải thuật",
        "lop": "CF213.4_LT",
        "thu": "2",
        "ca": "4-5",
        "phong": "A705",
        "sotin": "4",
        "giangvien": "Đoàn Trung Phong(PAI007)"
    },
    {
        "ma": "CF213",
        "ten": "Cấu trúc dữ liệu và giải thuật",
        "lop": "CF213.4_LT",
        "thu": "2",
        "ca": "6-8",
        "phong": "A705",
        "sotin": "4",
        "giangvien": "Đoàn Trung Phong(PAI007)"
    },
    {
        "ma": "CF213",
        "ten": "Cấu trúc dữ liệu và giải thuật",
        "lop": "CF213.5_LT",
        "thu": "2",
        "ca": "6-7",
        "phong": "A703",
        "sotin": "4",
        "giangvien": "Nguyễn Đức Dân(CTI011)"
    },
    {
        "ma": "CF213",
        "ten": "Cấu trúc dữ liệu và giải thuật",
        "lop": "CF213.3_LT",
        "thu": "2",
        "ca": "8-10",
        "phong": "A703",
        "sotin": "4",
        "giangvien": "Nguyễn Thị Huyền Châu(PAI001)"
    },
    {
        "ma": "CF213",
        "ten": "Cấu trúc dữ liệu và giải thuật",
        "lop": "CF213.5.1_BT",
        "thu": "4",
        "ca": "1-2",
        "phong": "A703",
        "sotin": "4",
        "giangvien": "Nguyễn Đức Dân(CTI011)"
    },
    {
        "ma": "CF213",
        "ten": "Cấu trúc dữ liệu và giải thuật",
        "lop": "CF213.3.1_BT",
        "thu": "4",
        "ca": "4-5",
        "phong": "A703",
        "sotin": "4",
        "giangvien": "Nguyễn Thị Huyền Châu(PAI001)"
    },
    {
        "ma": "CF213",
        "ten": "Cấu trúc dữ liệu và giải thuật",
        "lop": "CF213.4.1_BT",
        "thu": "4",
        "ca": "4-5",
        "phong": "A705",
        "sotin": "4",
        "giangvien": "Đoàn Trung Phong(PAI007)"
    },
    {
        "ma": "CF213",
        "ten": "Cấu trúc dữ liệu và giải thuật",
        "lop": "CF213.5.1_BT",
        "thu": "4",
        "ca": "6-7",
        "phong": "A703",
        "sotin": "4",
        "giangvien": "Nguyễn Đức Dân(CTI011)"
    },
    {
        "ma": "CF213",
        "ten": "Cấu trúc dữ liệu và giải thuật",
        "lop": "CF213.3.1_BT",
        "thu": "4",
        "ca": "9-10",
        "phong": "A703",
        "sotin": "4",
        "giangvien": "Nguyễn Thị Huyền Châu(PAI001)"
    },
    {
        "ma": "CF213",
        "ten": "Cấu trúc dữ liệu và giải thuật",
        "lop": "CF213.4.1_BT",
        "thu": "4",
        "ca": "9-10",
        "phong": "A705",
        "sotin": "4",
        "giangvien": "Đoàn Trung Phong(PAI007)"
    },
    {
        "ma": "CF213",
        "ten": "Cấu trúc dữ liệu và giải thuật",
        "lop": "CF213.1_LT",
        "thu": "6",
        "ca": "1-3",
        "phong": "A709",
        "sotin": "4",
        "giangvien": "Nguyễn Đức Dân(CTI011)"
    },
    {
        "ma": "CF213",
        "ten": "Cấu trúc dữ liệu và giải thuật",
        "lop": "CF213.2_LT",
        "thu": "6",
        "ca": "4-5",
        "phong": "A709",
        "sotin": "4",
        "giangvien": "Nguyễn Đức Dân(CTI011)"
    },
    {
        "ma": "CF213",
        "ten": "Cấu trúc dữ liệu và giải thuật",
        "lop": "CF213.1_LT",
        "thu": "6",
        "ca": "6-7",
        "phong": "A709",
        "sotin": "4",
        "giangvien": "Nguyễn Đức Dân(CTI011)"
    },
    {
        "ma": "CF213",
        "ten": "Cấu trúc dữ liệu và giải thuật",
        "lop": "CF213.2_LT",
        "thu": "6",
        "ca": "8-10",
        "phong": "A709",
        "sotin": "4",
        "giangvien": "Nguyễn Đức Dân(CTI011)"
    },
    {
        "ma": "CF213",
        "ten": "Cấu trúc dữ liệu và giải thuật",
        "lop": "CF213.1.1_BT",
        "thu": "7",
        "ca": "1-2",
        "phong": "A709",
        "sotin": "4",
        "giangvien": "Nguyễn Đức Dân(CTI011)"
    },
    {
        "ma": "CF213",
        "ten": "Cấu trúc dữ liệu và giải thuật",
        "lop": "CF213.2.1_BT",
        "thu": "7",
        "ca": "4-5",
        "phong": "A709",
        "sotin": "4",
        "giangvien": "Nguyễn Đức Dân(CTI011)"
    },
    {
        "ma": "CF213",
        "ten": "Cấu trúc dữ liệu và giải thuật",
        "lop": "CF213.1.1_BT",
        "thu": "7",
        "ca": "6-7",
        "phong": "A709",
        "sotin": "4",
        "giangvien": "Nguyễn Đức Dân(CTI011)"
    },
    {
        "ma": "CF213",
        "ten": "Cấu trúc dữ liệu và giải thuật",
        "lop": "CF213.2.1_BT",
        "thu": "7",
        "ca": "9-10",
        "phong": "A709",
        "sotin": "4",
        "giangvien": "Nguyễn Đức Dân(CTI011)"
    },
    {
        "ma": "TC487",
        "ten": "CĐTN : Truyền thông và mạng máy tính",
        "lop": "CĐTN:TTHONG&MANGMT.1",
        "thu": "1",
        "ca": "6-7",
        "phong": "BOMON1",
        "sotin": "6",
        "giangvien": "Hoàng Trọng Minh(CTI030)"
    },
    {
        "ma": "VP424",
        "ten": "CĐTN: Báo chí truyền thông Việt Nam đương đại",
        "lop": "CĐTN:BAOCHITTVNĐĐAI.1",
        "thu": "7",
        "ca": "6-10",
        "phong": "B104",
        "sotin": "3",
        "giangvien": "Lê Thanh Kim(MXV029)"
    },
    {
        "ma": "BK490",
        "ten": "CĐTN: Chuyên ngành Ngân hàng",
        "lop": "CĐTN:CNNGANHANG.1",
        "thu": "2",
        "ca": "3-5",
        "phong": "B304",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thúy(CQB005)"
    },
    {
        "ma": "BK490",
        "ten": "CĐTN: Chuyên ngành Ngân hàng",
        "lop": "CĐTN:CNNGANHANG.1",
        "thu": "5",
        "ca": "3-5",
        "phong": "A609",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thúy(CQB005)"
    },
    {
        "ma": "FN482",
        "ten": "CĐTN: Chuyên ngành Tài chính",
        "lop": "CĐTN:CNTAICHINH.1",
        "thu": "4",
        "ca": "8-10",
        "phong": "B403",
        "sotin": "3",
        "giangvien": "Ngô Thị Quyên(CQB001)"
    },
    {
        "ma": "FN482",
        "ten": "CĐTN: Chuyên ngành Tài chính",
        "lop": "CĐTN:CNTAICHINH.1",
        "thu": "5",
        "ca": "8-10",
        "phong": "B203",
        "sotin": "3",
        "giangvien": "Ngô Thị Quyên(CQB001)"
    },
    {
        "ma": "IS484",
        "ten": "CĐTN: Cơ sở dữ liệu",
        "lop": "CÐTN:CSODULIEU.1",
        "thu": "1",
        "ca": "1-5",
        "phong": "BOMON1",
        "sotin": "6",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "FN481",
        "ten": "CĐTN: Ngành Tài chính - Ngân hàng",
        "lop": "CĐTN:NGANHTCNH.1",
        "thu": "3",
        "ca": "8-10",
        "phong": "B401",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Tuyết(CQB022)"
    },
    {
        "ma": "FN481",
        "ten": "CĐTN: Ngành Tài chính - Ngân hàng",
        "lop": "CĐTN:NGANHTCNH.1",
        "thu": "6",
        "ca": "8-10",
        "phong": "B203",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Tuyết(CQB022)"
    },
    {
        "ma": "AI485",
        "ten": "CĐTN: Ngành Trí tuệ nhân tạo",
        "lop": "CDTN:NGANHTRITUENT.1",
        "thu": "1",
        "ca": "1-5",
        "phong": "BOMON1",
        "sotin": "6",
        "giangvien": "Nguyễn Thị Huyền Châu(PAI001)"
    },
    {
        "ma": "SE487",
        "ten": "CĐTN: Phát triển phần mềm",
        "lop": "CÐTN:PTPHANMEM.1",
        "thu": "1",
        "ca": "1-5",
        "phong": "BOMON1",
        "sotin": "6",
        "giangvien": "Trần Quang Duy(CTI019)"
    },
    {
        "ma": "LG301",
        "ten": "Chiến lược logistics và quản lý cung ứng",
        "lop": "CLLOG&QLCUNG.2",
        "thu": "2",
        "ca": "1-2",
        "phong": "B106",
        "sotin": "3",
        "giangvien": "Nguyễn Kim Cường(CQL007)"
    },
    {
        "ma": "LG301",
        "ten": "Chiến lược logistics và quản lý cung ứng",
        "lop": "CLLOG&QLCUNG.2",
        "thu": "3",
        "ca": "1-2",
        "phong": "B508",
        "sotin": "3",
        "giangvien": "Nguyễn Kim Cường(CQL007)"
    },
    {
        "ma": "LG301",
        "ten": "Chiến lược logistics và quản lý cung ứng",
        "lop": "CLLOG&QLCUNG.2",
        "thu": "4",
        "ca": "1-2",
        "phong": "B110",
        "sotin": "3",
        "giangvien": "Nguyễn Kim Cường(CQL007)"
    },
    {
        "ma": "IS222",
        "ten": "Cơ sở dữ liệu",
        "lop": "CSODULIEU.1",
        "thu": "2",
        "ca": "4-5",
        "phong": "A708",
        "sotin": "3",
        "giangvien": "Đinh Thị  Thúy(PAI006)"
    },
    {
        "ma": "IS222",
        "ten": "Cơ sở dữ liệu",
        "lop": "CSODULIEU.1",
        "thu": "2",
        "ca": "8-10",
        "phong": "A708",
        "sotin": "3",
        "giangvien": "Đinh Thị  Thúy(PAI006)"
    },
    {
        "ma": "IS222",
        "ten": "Cơ sở dữ liệu",
        "lop": "CSODULIEU.2",
        "thu": "4",
        "ca": "1-3",
        "phong": "A708",
        "sotin": "3",
        "giangvien": "Nguyễn Công Nhân(CTI048)"
    },
    {
        "ma": "IS222",
        "ten": "Cơ sở dữ liệu",
        "lop": "CSODULIEU.2",
        "thu": "4",
        "ca": "9-10",
        "phong": "A708",
        "sotin": "3",
        "giangvien": "Nguyễn Công Nhân(CTI048)"
    },
    {
        "ma": "IS222",
        "ten": "Cơ sở dữ liệu",
        "lop": "CSODULIEU.3",
        "thu": "6",
        "ca": "1-3",
        "phong": "A708",
        "sotin": "3",
        "giangvien": "Nguyễn Công Nhân(CTI048)"
    },
    {
        "ma": "IS222",
        "ten": "Cơ sở dữ liệu",
        "lop": "CSODULIEU.4",
        "thu": "6",
        "ca": "4-5",
        "phong": "A708",
        "sotin": "3",
        "giangvien": "Nguyễn Công Nhân(CTI048)"
    },
    {
        "ma": "IS222",
        "ten": "Cơ sở dữ liệu",
        "lop": "CSODULIEU.3",
        "thu": "6",
        "ca": "6-7",
        "phong": "A708",
        "sotin": "3",
        "giangvien": "Nguyễn Công Nhân(CTI048)"
    },
    {
        "ma": "IS222",
        "ten": "Cơ sở dữ liệu",
        "lop": "CSODULIEU.4",
        "thu": "6",
        "ca": "8-10",
        "phong": "A708",
        "sotin": "3",
        "giangvien": "Nguyễn Công Nhân(CTI048)"
    },
    {
        "ma": "VC208",
        "ten": "Cơ sở văn hóa Việt Nam",
        "lop": "COSOVHVN.1",
        "thu": "2",
        "ca": "4-5",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Bùi Cẩm Phượng(CDL005)"
    },
    {
        "ma": "VC208",
        "ten": "Cơ sở văn hóa Việt Nam",
        "lop": "COSOVHVN.1",
        "thu": "2",
        "ca": "6-8",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Bùi Cẩm Phượng(CDL005)"
    },
    {
        "ma": "FN318",
        "ten": "Công cụ tài chính phái sinh",
        "lop": "FN318.1",
        "thu": "4",
        "ca": "1-2",
        "phong": "A603",
        "sotin": "3",
        "giangvien": "Phạm Thị Bảo Oanh(CQB006)"
    },
    {
        "ma": "FN318",
        "ten": "Công cụ tài chính phái sinh",
        "lop": "FN318.2",
        "thu": "5",
        "ca": "6-7",
        "phong": "B608",
        "sotin": "3",
        "giangvien": "Phạm Thị Bảo Oanh(CQB006)"
    },
    {
        "ma": "FN318",
        "ten": "Công cụ tài chính phái sinh",
        "lop": "FN318.2",
        "thu": "6",
        "ca": "3-5",
        "phong": "B608",
        "sotin": "3",
        "giangvien": "Phạm Thị Bảo Oanh(CQB006)"
    },
    {
        "ma": "FN318",
        "ten": "Công cụ tài chính phái sinh",
        "lop": "FN318.1",
        "thu": "7",
        "ca": "3-5",
        "phong": "B611",
        "sotin": "3",
        "giangvien": "Phạm Thị Bảo Oanh(CQB006)"
    },
    {
        "ma": "CS102",
        "ten": "Công dân số",
        "lop": "CONGDANSO.5",
        "thu": "3",
        "ca": "1-2",
        "phong": "B708",
        "sotin": "2",
        "giangvien": "Đoàn Ngọc Đạt(PEL002)"
    },
    {
        "ma": "CS102",
        "ten": "Công dân số",
        "lop": "CONGDANSO.6",
        "thu": "3",
        "ca": "3-4",
        "phong": "B708",
        "sotin": "2",
        "giangvien": "Đoàn Ngọc Đạt(PEL002)"
    },
    {
        "ma": "CS102",
        "ten": "Công dân số",
        "lop": "CONGDANSO.7",
        "thu": "4",
        "ca": "1-2",
        "phong": "B708",
        "sotin": "2",
        "giangvien": "Hà Thu Giang(PEL001)"
    },
    {
        "ma": "CS102",
        "ten": "Công dân số",
        "lop": "CONGDANSO.8",
        "thu": "4",
        "ca": "3-4",
        "phong": "B708",
        "sotin": "2",
        "giangvien": "Hà Thu Giang(PEL001)"
    },
    {
        "ma": "CS102",
        "ten": "Công dân số",
        "lop": "CONGDANSO.9",
        "thu": "4",
        "ca": "6-7",
        "phong": "B708",
        "sotin": "2",
        "giangvien": "Đoàn Ngọc Đạt(PEL002)"
    },
    {
        "ma": "CS102",
        "ten": "Công dân số",
        "lop": "CONGDANSO.10",
        "thu": "4",
        "ca": "8-9",
        "phong": "B708",
        "sotin": "2",
        "giangvien": "Đoàn Ngọc Đạt(PEL002)"
    },
    {
        "ma": "CS102",
        "ten": "Công dân số",
        "lop": "CONGDANSO.11",
        "thu": "5",
        "ca": "1-2",
        "phong": "B708",
        "sotin": "2",
        "giangvien": "Hà Thu Giang(PEL001)"
    },
    {
        "ma": "CS102",
        "ten": "Công dân số",
        "lop": "CONGDANSO.12",
        "thu": "5",
        "ca": "3-4",
        "phong": "B708",
        "sotin": "2",
        "giangvien": "Hà Thu Giang(PEL001)"
    },
    {
        "ma": "CS102",
        "ten": "Công dân số",
        "lop": "CONGDANSO.5",
        "thu": "7",
        "ca": "12-13",
        "phong": "ONLINE",
        "sotin": "2",
        "giangvien": "Đoàn Ngọc Đạt(PEL002)"
    },
    {
        "ma": "CS102",
        "ten": "Công dân số",
        "lop": "CONGDANSO.6",
        "thu": "7",
        "ca": "12-13",
        "phong": "ONLINE",
        "sotin": "2",
        "giangvien": "Đoàn Ngọc Đạt(PEL002)"
    },
    {
        "ma": "CS102",
        "ten": "Công dân số",
        "lop": "CONGDANSO.9",
        "thu": "7",
        "ca": "12-13",
        "phong": "ONLINE",
        "sotin": "2",
        "giangvien": "Đoàn Ngọc Đạt(PEL002)"
    },
    {
        "ma": "CS102",
        "ten": "Công dân số",
        "lop": "CONGDANSO.10",
        "thu": "7",
        "ca": "12-13",
        "phong": "ONLINE",
        "sotin": "2",
        "giangvien": "Đoàn Ngọc Đạt(PEL002)"
    },
    {
        "ma": "CS102",
        "ten": "Công dân số",
        "lop": "CONGDANSO.11",
        "thu": "7",
        "ca": "12-13",
        "phong": "ONLINE",
        "sotin": "2",
        "giangvien": "Hà Thu Giang(PEL001)"
    },
    {
        "ma": "CS102",
        "ten": "Công dân số",
        "lop": "CONGDANSO.12",
        "thu": "7",
        "ca": "12-13",
        "phong": "ONLINE",
        "sotin": "2",
        "giangvien": "Hà Thu Giang(PEL001)"
    },
    {
        "ma": "CS102",
        "ten": "Công dân số",
        "lop": "CONGDANSO.8",
        "thu": "7",
        "ca": "12-13",
        "phong": "ONLINE",
        "sotin": "2",
        "giangvien": "Hà Thu Giang(PEL001)"
    },
    {
        "ma": "CS102",
        "ten": "Công dân số",
        "lop": "CONGDANSO.7",
        "thu": "7",
        "ca": "12-13",
        "phong": "ONLINE",
        "sotin": "2",
        "giangvien": "Hà Thu Giang(PEL001)"
    },
    {
        "ma": "SE302",
        "ten": "Công nghệ phần mềm",
        "lop": "CNPHANMEM.3_LT",
        "thu": "4",
        "ca": "1-2",
        "phong": "A509",
        "sotin": "2",
        "giangvien": "Đinh Thị  Thúy(PAI006)"
    },
    {
        "ma": "SE302",
        "ten": "Công nghệ phần mềm",
        "lop": "CNPHANMEM.2_LT",
        "thu": "6",
        "ca": "1-3",
        "phong": "B308",
        "sotin": "2",
        "giangvien": "Đinh Thị  Thúy(PAI006)"
    },
    {
        "ma": "SE302",
        "ten": "Công nghệ phần mềm",
        "lop": "CNPHANMEM.2.1_BT",
        "thu": "6",
        "ca": "6-7",
        "phong": "A601",
        "sotin": "2",
        "giangvien": "Đinh Thị  Thúy(PAI006)"
    },
    {
        "ma": "SE302",
        "ten": "Công nghệ phần mềm",
        "lop": "CNPHANMEM.1_LT",
        "thu": "7",
        "ca": "3-5",
        "phong": "A409",
        "sotin": "2",
        "giangvien": "Đinh Thị  Thúy(PAI006)"
    },
    {
        "ma": "SE302",
        "ten": "Công nghệ phần mềm",
        "lop": "CNPHANMEM.1.1_BT",
        "thu": "7",
        "ca": "6-7",
        "phong": "B406",
        "sotin": "2",
        "giangvien": "Đinh Thị  Thúy(PAI006)"
    },
    {
        "ma": "SE302",
        "ten": "Công nghệ phần mềm",
        "lop": "CNPHANMEM.3.1_BT",
        "thu": "7",
        "ca": "9-11",
        "phong": "B202",
        "sotin": "2",
        "giangvien": "Đinh Thị  Thúy(PAI006)"
    },
    {
        "ma": "IT333",
        "ten": "Công nghệ Web",
        "lop": "CNWEB.3",
        "thu": "4",
        "ca": "6-7",
        "phong": "A707",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "IT333",
        "ten": "Công nghệ Web",
        "lop": "CNWEB.4",
        "thu": "4",
        "ca": "8-10",
        "phong": "A707",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "IT333",
        "ten": "Công nghệ Web",
        "lop": "CNWEB.2",
        "thu": "6",
        "ca": "3-5",
        "phong": "A703",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "IT333",
        "ten": "Công nghệ Web",
        "lop": "CNWEB.1",
        "thu": "6",
        "ca": "6-8",
        "phong": "A703",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "IT333",
        "ten": "Công nghệ Web",
        "lop": "CNWEB.4",
        "thu": "6",
        "ca": "6-7",
        "phong": "A707",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "IT333",
        "ten": "Công nghệ Web",
        "lop": "CNWEB.3",
        "thu": "6",
        "ca": "8-10",
        "phong": "A707",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "IT333",
        "ten": "Công nghệ Web",
        "lop": "CNWEB.2",
        "thu": "6",
        "ca": "9-10",
        "phong": "A703",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "IT333",
        "ten": "Công nghệ Web",
        "lop": "CNWEB.1",
        "thu": "7",
        "ca": "1-2",
        "phong": "A703",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "SK354",
        "ten": "Công tác xã hội với nhóm phụ nữ yếu thế",
        "lop": "CTXHPHUNUYEUTHE.1",
        "thu": "5",
        "ca": "8-10",
        "phong": "B210",
        "sotin": "2",
        "giangvien": "Nguyễn Thị Kim Dung(CXW016)"
    },
    {
        "ma": "SK322",
        "ten": "Công tác xã hội với quản lý thảm hoạ",
        "lop": "CTXHQUANLYTHAMHOA.1",
        "thu": "2",
        "ca": "1-3",
        "phong": "B202",
        "sotin": "2",
        "giangvien": "Nguyễn Thị Hải(CXW022)"
    },
    {
        "ma": "VP310",
        "ten": "Đại cương quảng cáo",
        "lop": "DAICUONGQUANGCAO.1",
        "thu": "3",
        "ca": "6-10",
        "phong": "A502",
        "sotin": "3",
        "giangvien": "Nguyễn Phong Châu(MXC007)"
    },
    {
        "ma": "MA142",
        "ten": "Đại số tuyến tính, giải tích và ứng dụng trong kinh tế",
        "lop": "DSTTUDKTE.5_LT",
        "thu": "2",
        "ca": "8-9",
        "phong": "A303",
        "sotin": "4",
        "giangvien": "Nguyễn Hồng Châu(CTM004)"
    },
    {
        "ma": "MA142",
        "ten": "Đại số tuyến tính, giải tích và ứng dụng trong kinh tế",
        "lop": "DSTTUDKTE.7_LT",
        "thu": "3",
        "ca": "1-2",
        "phong": "B503",
        "sotin": "4",
        "giangvien": "Đỗ Thị Thuý Hằng(CTM009)"
    },
    {
        "ma": "MA142",
        "ten": "Đại số tuyến tính, giải tích và ứng dụng trong kinh tế",
        "lop": "DSTTUDKTE.6.2_BT",
        "thu": "3",
        "ca": "1-3",
        "phong": "A403",
        "sotin": "4",
        "giangvien": "Dương Thị Hương(CTM011)"
    },
    {
        "ma": "MA142",
        "ten": "Đại số tuyến tính, giải tích và ứng dụng trong kinh tế",
        "lop": "DSTTUDKTE.5_LT",
        "thu": "3",
        "ca": "6-8",
        "phong": "B503",
        "sotin": "4",
        "giangvien": "Nguyễn Hồng Châu(CTM004)"
    },
    {
        "ma": "MA142",
        "ten": "Đại số tuyến tính, giải tích và ứng dụng trong kinh tế",
        "lop": "DSTTUDKTE.6_LT",
        "thu": "4",
        "ca": "4-5",
        "phong": "B503",
        "sotin": "4",
        "giangvien": "Ngô Thị Thanh Nga(CTM006)"
    },
    {
        "ma": "MA142",
        "ten": "Đại số tuyến tính, giải tích và ứng dụng trong kinh tế",
        "lop": "DSTTUDKTE.5.2_BT",
        "thu": "4",
        "ca": "8-10",
        "phong": "A609",
        "sotin": "4",
        "giangvien": "Nguyễn Hồng Châu(CTM004)"
    },
    {
        "ma": "MA142",
        "ten": "Đại số tuyến tính, giải tích và ứng dụng trong kinh tế",
        "lop": "DSTTUDKTE.7.1_BT",
        "thu": "5",
        "ca": "3-5",
        "phong": "B402",
        "sotin": "4",
        "giangvien": "Đỗ Thị Thuý Hằng(CTM009)"
    },
    {
        "ma": "MA142",
        "ten": "Đại số tuyến tính, giải tích và ứng dụng trong kinh tế",
        "lop": "DSTTUDKTE.7.2_BT",
        "thu": "5",
        "ca": "3-5",
        "phong": "A601",
        "sotin": "4",
        "giangvien": "Ngô Thị Thanh Nga(CTM006)"
    },
    {
        "ma": "MA142",
        "ten": "Đại số tuyến tính, giải tích và ứng dụng trong kinh tế",
        "lop": "DSTTUDKTE.6_LT",
        "thu": "6",
        "ca": "3-5",
        "phong": "B507",
        "sotin": "4",
        "giangvien": "Ngô Thị Thanh Nga(CTM006)"
    },
    {
        "ma": "MA142",
        "ten": "Đại số tuyến tính, giải tích và ứng dụng trong kinh tế",
        "lop": "DSTTUDKTE.5.1_BT",
        "thu": "6",
        "ca": "6-8",
        "phong": "B208",
        "sotin": "4",
        "giangvien": "Nguyễn Hồng Châu(CTM004)"
    },
    {
        "ma": "MA142",
        "ten": "Đại số tuyến tính, giải tích và ứng dụng trong kinh tế",
        "lop": "DSTTUDKTE.7_LT",
        "thu": "7",
        "ca": "1-3",
        "phong": "B503",
        "sotin": "4",
        "giangvien": "Đỗ Thị Thuý Hằng(CTM009)"
    },
    {
        "ma": "MA142",
        "ten": "Đại số tuyến tính, giải tích và ứng dụng trong kinh tế",
        "lop": "DSTTUDKTE.6.1_BT",
        "thu": "7",
        "ca": "1-3",
        "phong": "B613",
        "sotin": "4",
        "giangvien": "Dương Thị Hương(CTM011)"
    },
    {
        "ma": "AD241",
        "ten": "Dẫn chương trình (MC)",
        "lop": "DANCT(MC).6.1_BT",
        "thu": "1",
        "ca": "6-8",
        "phong": "BOMON",
        "sotin": "3",
        "giangvien": "Vũ Thị Thanh Nhàn(CXC001)"
    },
    {
        "ma": "AD241",
        "ten": "Dẫn chương trình (MC)",
        "lop": "DANCT(MC).7.1_BT",
        "thu": "1",
        "ca": "6-8",
        "phong": "BOMON",
        "sotin": "3",
        "giangvien": "Nguyễn Văn Thiệu(CXC004)"
    },
    {
        "ma": "AD241",
        "ten": "Dẫn chương trình (MC)",
        "lop": "DANCT(MC).8.1_BT",
        "thu": "1",
        "ca": "6-8",
        "phong": "BOMON",
        "sotin": "3",
        "giangvien": "Trần Thị Thùy Dương(CXC006)"
    },
    {
        "ma": "AD241",
        "ten": "Dẫn chương trình (MC)",
        "lop": "DANCT(MC).9.1_BT",
        "thu": "1",
        "ca": "6-8",
        "phong": "BOMON",
        "sotin": "3",
        "giangvien": "Trần Thị Thùy Dương(CXC006)"
    },
    {
        "ma": "AD241",
        "ten": "Dẫn chương trình (MC)",
        "lop": "DANCT(MC).4.1_BT",
        "thu": "1",
        "ca": "6-8",
        "phong": "BOMON",
        "sotin": "3",
        "giangvien": "Nguyễn Văn Thiệu(CXC004)"
    },
    {
        "ma": "AD241",
        "ten": "Dẫn chương trình (MC)",
        "lop": "DANCT(MC).5.1_BT",
        "thu": "1",
        "ca": "6-8",
        "phong": "BOMON",
        "sotin": "3",
        "giangvien": "Vũ Thị Thanh Nhàn(CXC001)"
    },
    {
        "ma": "AD241",
        "ten": "Dẫn chương trình (MC)",
        "lop": "DANCT(MC).4_LT",
        "thu": "2",
        "ca": "3-5",
        "phong": "B406",
        "sotin": "3",
        "giangvien": "Nguyễn Văn Thiệu(CXC004)"
    },
    {
        "ma": "AD241",
        "ten": "Dẫn chương trình (MC)",
        "lop": "DANCT(MC).5_LT",
        "thu": "2",
        "ca": "6-8",
        "phong": "B408",
        "sotin": "3",
        "giangvien": "Vũ Thị Thanh Nhàn(CXC001)"
    },
    {
        "ma": "AD241",
        "ten": "Dẫn chương trình (MC)",
        "lop": "DANCT(MC).6_LT",
        "thu": "2",
        "ca": "9-11",
        "phong": "B408",
        "sotin": "3",
        "giangvien": "Vũ Thị Thanh Nhàn(CXC001)"
    },
    {
        "ma": "AD241",
        "ten": "Dẫn chương trình (MC)",
        "lop": "DANCT(MC).7_LT",
        "thu": "3",
        "ca": "3-5",
        "phong": "B404",
        "sotin": "3",
        "giangvien": "Nguyễn Văn Thiệu(CXC004)"
    },
    {
        "ma": "AD241",
        "ten": "Dẫn chương trình (MC)",
        "lop": "DANCT(MC).8_LT",
        "thu": "3",
        "ca": "6-8",
        "phong": "B404",
        "sotin": "3",
        "giangvien": "Trần Thị Thùy Dương(CXC006)"
    },
    {
        "ma": "AD241",
        "ten": "Dẫn chương trình (MC)",
        "lop": "DANCT(MC).9_LT",
        "thu": "3",
        "ca": "9-11",
        "phong": "B404",
        "sotin": "3",
        "giangvien": "Trần Thị Thùy Dương(CXC006)"
    },
    {
        "ma": "FN334",
        "ten": "Đầu tư chứng khoán",
        "lop": "DAUTUCK.4",
        "thu": "2",
        "ca": "6-7",
        "phong": "Afinance",
        "sotin": "2",
        "giangvien": "Nguyễn Thị Thu Trang(CQB024)"
    },
    {
        "ma": "FN334",
        "ten": "Đầu tư chứng khoán",
        "lop": "DAUTUCK.5",
        "thu": "4",
        "ca": "6-7",
        "phong": "Afinance",
        "sotin": "2",
        "giangvien": "Nguyễn Thị Thu Trang(CQB024)"
    },
    {
        "ma": "FN334",
        "ten": "Đầu tư chứng khoán",
        "lop": "DAUTUCK.4",
        "thu": "4",
        "ca": "8-10",
        "phong": "Afinance",
        "sotin": "2",
        "giangvien": "Nguyễn Thị Thu Trang(CQB024)"
    },
    {
        "ma": "FN334",
        "ten": "Đầu tư chứng khoán",
        "lop": "DAUTUCK.5",
        "thu": "7",
        "ca": "3-5",
        "phong": "Afinance",
        "sotin": "2",
        "giangvien": "Nguyễn Thị Thu Trang(CQB024)"
    },
    {
        "ma": "FN438",
        "ten": "Đầu tư tài chính",
        "lop": "DAUTUTAICHINH.1",
        "thu": "4",
        "ca": "3-5",
        "phong": "Afinance",
        "sotin": "3",
        "giangvien": "Chu Thị Thu Thủy(CQB010)"
    },
    {
        "ma": "FN438",
        "ten": "Đầu tư tài chính",
        "lop": "DAUTUTAICHINH.1",
        "thu": "5",
        "ca": "6-7",
        "phong": "Afinance",
        "sotin": "3",
        "giangvien": "Chu Thị Thu Thủy(CQB010)"
    },
    {
        "ma": "FN438",
        "ten": "Đầu tư tài chính",
        "lop": "DAUTUTAICHINH.1",
        "thu": "6",
        "ca": "6-7",
        "phong": "B703",
        "sotin": "3",
        "giangvien": "Chu Thị Thu Thủy(CQB010)"
    },
    {
        "ma": "NR433",
        "ten": "Điều dưỡng các bệnh Ngoại khoa nâng cao",
        "lop": "DDBENHNGKNC.1",
        "thu": "3",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "4",
        "giangvien": "Vũ Thị Hồng Liên(CSN998)"
    },
    {
        "ma": "NR433",
        "ten": "Điều dưỡng các bệnh Ngoại khoa nâng cao",
        "lop": "DDBENHNGKNC.1",
        "thu": "4",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "4",
        "giangvien": "Vũ Thị Hồng Liên(CSN998)"
    },
    {
        "ma": "NR433",
        "ten": "Điều dưỡng các bệnh Ngoại khoa nâng cao",
        "lop": "DDBENHNGKNC.1",
        "thu": "5",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "4",
        "giangvien": "Vũ Thị Hồng Liên(CSN998)"
    },
    {
        "ma": "NR433",
        "ten": "Điều dưỡng các bệnh Ngoại khoa nâng cao",
        "lop": "DDBENHNGKNC.1",
        "thu": "6",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "4",
        "giangvien": "Vũ Thị Hồng Liên(CSN998)"
    },
    {
        "ma": "NR431",
        "ten": "Điều dưỡng các bệnh nội khoa nâng cao",
        "lop": "DDBENHNOIKHOA.1 (TC)",
        "thu": "2",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "4",
        "giangvien": "Nguyễn Thị Thùy Trang(CSN021)"
    },
    {
        "ma": "NR431",
        "ten": "Điều dưỡng các bệnh nội khoa nâng cao",
        "lop": "DDBENHNOIKHOA.1 (TC)",
        "thu": "3",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "4",
        "giangvien": "Nguyễn Thị Thùy Trang(CSN021)"
    },
    {
        "ma": "NR413",
        "ten": "Điều dưỡng các bệnh Nội khoa nâng cao",
        "lop": "DDBENHNKNC.1",
        "thu": "3",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "4",
        "giangvien": "Vũ Thị Hồng Liên(CSN998)"
    },
    {
        "ma": "NR413",
        "ten": "Điều dưỡng các bệnh Nội khoa nâng cao",
        "lop": "DDBENHNKNC.1",
        "thu": "4",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "4",
        "giangvien": "Vũ Thị Hồng Liên(CSN998)"
    },
    {
        "ma": "NR431",
        "ten": "Điều dưỡng các bệnh nội khoa nâng cao",
        "lop": "DDBENHNOIKHOA.1 (TC)",
        "thu": "4",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "4",
        "giangvien": "Nguyễn Thị Thùy Trang(CSN021)"
    },
    {
        "ma": "NR431",
        "ten": "Điều dưỡng các bệnh nội khoa nâng cao",
        "lop": "DDBENHNOIKHOA.1 (TC)",
        "thu": "5",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "4",
        "giangvien": "Nguyễn Thị Thùy Trang(CSN021)"
    },
    {
        "ma": "NR413",
        "ten": "Điều dưỡng các bệnh Nội khoa nâng cao",
        "lop": "DDBENHNKNC.1",
        "thu": "5",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "4",
        "giangvien": "Vũ Thị Hồng Liên(CSN998)"
    },
    {
        "ma": "NR413",
        "ten": "Điều dưỡng các bệnh Nội khoa nâng cao",
        "lop": "DDBENHNKNC.1",
        "thu": "6",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "4",
        "giangvien": "Vũ Thị Hồng Liên(CSN998)"
    },
    {
        "ma": "TG211",
        "ten": "Điều hành chương trình du lịch",
        "lop": "DIEUHANHCTDL.1",
        "thu": "7",
        "ca": "3-5",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Phạm Thị Hiền(MDL032)"
    },
    {
        "ma": "TG211",
        "ten": "Điều hành chương trình du lịch",
        "lop": "DIEUHANHCTDL.1",
        "thu": "7",
        "ca": "6-7",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Phạm Thị Hiền(MDL032)"
    },
    {
        "ma": "ND347",
        "ten": "Dinh dưỡng tiết chế Ngoại, Sản",
        "lop": "DINHDUONGTCNS.1_LT",
        "thu": "2",
        "ca": "3-5",
        "phong": "BOMON1",
        "sotin": "4",
        "giangvien": "Phạm Duy Tường(CSD001)"
    },
    {
        "ma": "ND347",
        "ten": "Dinh dưỡng tiết chế Ngoại, Sản",
        "lop": "DINHDUONGTCNS.1.1_BT",
        "thu": "3",
        "ca": "6-8",
        "phong": "BENHVIEN",
        "sotin": "4",
        "giangvien": "Nguyễn Minh Trang(CSD007)"
    },
    {
        "ma": "ND347",
        "ten": "Dinh dưỡng tiết chế Ngoại, Sản",
        "lop": "DINHDUONGTCNS.1.1_BT",
        "thu": "4",
        "ca": "6-7",
        "phong": "BENHVIEN",
        "sotin": "4",
        "giangvien": "Nguyễn Minh Trang(CSD007)"
    },
    {
        "ma": "ND347",
        "ten": "Dinh dưỡng tiết chế Ngoại, Sản",
        "lop": "DINHDUONGTCNS.1.1_BT",
        "thu": "5",
        "ca": "6-7",
        "phong": "BENHVIEN",
        "sotin": "4",
        "giangvien": "Nguyễn Minh Trang(CSD007)"
    },
    {
        "ma": "ND347",
        "ten": "Dinh dưỡng tiết chế Ngoại, Sản",
        "lop": "DINHDUONGTCNS.1.1_BT",
        "thu": "6",
        "ca": "6-7",
        "phong": "BENHVIEN",
        "sotin": "4",
        "giangvien": "Nguyễn Minh Trang(CSD007)"
    },
    {
        "ma": "AD250",
        "ten": "Dinh dưỡng và tiết chế",
        "lop": "DINHDUONG&TIETCHE.1",
        "thu": "2",
        "ca": "6-7",
        "phong": "B301",
        "sotin": "3",
        "giangvien": "Phạm Duy Tường(CSD001)"
    },
    {
        "ma": "AD250",
        "ten": "Dinh dưỡng và tiết chế",
        "lop": "DINHDUONG&TIETCHE.1",
        "thu": "3",
        "ca": "6-8",
        "phong": "B203",
        "sotin": "3",
        "giangvien": "Phạm Duy Tường(CSD001)"
    },
    {
        "ma": "FN436",
        "ten": "Định giá tài sản",
        "lop": "DINHGIATAISAN.1",
        "thu": "3",
        "ca": "3-5",
        "phong": "A506",
        "sotin": "3",
        "giangvien": "Ngô Thị Quyên(CQB001)"
    },
    {
        "ma": "FN436",
        "ten": "Định giá tài sản",
        "lop": "DINHGIATAISAN.1",
        "thu": "6",
        "ca": "6-7",
        "phong": "B203",
        "sotin": "3",
        "giangvien": "Ngô Thị Quyên(CQB001)"
    },
    {
        "ma": "IT380",
        "ten": "Dự án Công nghệ thông tin",
        "lop": "DACNTT.1_LT",
        "thu": "5",
        "ca": "1-2",
        "phong": "A503",
        "sotin": "2",
        "giangvien": "Trần Mạnh Trường(MTI036)"
    },
    {
        "ma": "IT380",
        "ten": "Dự án Công nghệ thông tin",
        "lop": "DACNTT.1.1_BT",
        "thu": "5",
        "ca": "3-5",
        "phong": "A509",
        "sotin": "2",
        "giangvien": "Trần Mạnh Trường(MTI036)"
    },
    {
        "ma": "IT380",
        "ten": "Dự án Công nghệ thông tin",
        "lop": "DACNTT.2_LT",
        "thu": "7",
        "ca": "1-2",
        "phong": "A605",
        "sotin": "2",
        "giangvien": "Trần Mạnh Trường(MTI036)"
    },
    {
        "ma": "IT380",
        "ten": "Dự án Công nghệ thông tin",
        "lop": "DACNTT.2.1_BT",
        "thu": "7",
        "ca": "3-5",
        "phong": "A603",
        "sotin": "2",
        "giangvien": "Trần Mạnh Trường(MTI036)"
    },
    {
        "ma": "IS330",
        "ten": "Dữ liệu lớn",
        "lop": "DULIEULON.2_LT",
        "thu": "5",
        "ca": "4-5",
        "phong": "A705",
        "sotin": "2",
        "giangvien": "Vũ Minh Hoàng(MTI049)"
    },
    {
        "ma": "IS330",
        "ten": "Dữ liệu lớn",
        "lop": "DULIEULON.1_LT",
        "thu": "5",
        "ca": "6-7",
        "phong": "A705",
        "sotin": "2",
        "giangvien": "Vũ Minh Hoàng(MTI049)"
    },
    {
        "ma": "IS330",
        "ten": "Dữ liệu lớn",
        "lop": "DULIEULON.2.1_BT",
        "thu": "5",
        "ca": "8-10",
        "phong": "A705",
        "sotin": "2",
        "giangvien": "Vũ Minh Hoàng(MTI049)"
    },
    {
        "ma": "IS330",
        "ten": "Dữ liệu lớn",
        "lop": "DULIEULON.1.1_BT",
        "thu": "7",
        "ca": "6-8",
        "phong": "A705",
        "sotin": "2",
        "giangvien": "Vũ Minh Hoàng(MTI049)"
    },
    {
        "ma": "PG106",
        "ten": "GDTC: Bóng bàn cơ bản",
        "lop": "GDTC:BONGBANCB.7",
        "thu": "2",
        "ca": "1-2",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG106",
        "ten": "GDTC: Bóng bàn cơ bản",
        "lop": "GDTC:BONGBANCB.8",
        "thu": "2",
        "ca": "3-4",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG106",
        "ten": "GDTC: Bóng bàn cơ bản",
        "lop": "GDTC:BONGBANCB.9",
        "thu": "2",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG106",
        "ten": "GDTC: Bóng bàn cơ bản",
        "lop": "GDTC:BONGBANCB.10",
        "thu": "2",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG106",
        "ten": "GDTC: Bóng bàn cơ bản",
        "lop": "GDTC:BONGBANCB.11",
        "thu": "3",
        "ca": "1-2",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG106",
        "ten": "GDTC: Bóng bàn cơ bản",
        "lop": "GDTC:BONGBANCB.12",
        "thu": "3",
        "ca": "3-4",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG106",
        "ten": "GDTC: Bóng bàn cơ bản",
        "lop": "GDTC:BONGBANCB.13",
        "thu": "4",
        "ca": "1-2",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG106",
        "ten": "GDTC: Bóng bàn cơ bản",
        "lop": "GDTC:BONGBANCB.14",
        "thu": "4",
        "ca": "3-4",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG106",
        "ten": "GDTC: Bóng bàn cơ bản",
        "lop": "GDTC:BONGBANCB.15",
        "thu": "5",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG106",
        "ten": "GDTC: Bóng bàn cơ bản",
        "lop": "GDTC:BONGBANCB.16",
        "thu": "5",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG106",
        "ten": "GDTC: Bóng bàn cơ bản",
        "lop": "GDTC:BONGBANCB.17",
        "thu": "6",
        "ca": "1-2",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG106",
        "ten": "GDTC: Bóng bàn cơ bản",
        "lop": "GDTC:BONGBANCB.18",
        "thu": "6",
        "ca": "3-4",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG115",
        "ten": "GDTC: Bóng chuyền cơ bản",
        "lop": "GDTC:BONGCHUYENCB.19",
        "thu": "2",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG115",
        "ten": "GDTC: Bóng chuyền cơ bản",
        "lop": "GDTC:BONGCHUYENCB.20",
        "thu": "2",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG115",
        "ten": "GDTC: Bóng chuyền cơ bản",
        "lop": "GDTC:BONGCHUYENCB.15",
        "thu": "3",
        "ca": "1-2",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG115",
        "ten": "GDTC: Bóng chuyền cơ bản",
        "lop": "GDTC:BONGCHUYENCB.16",
        "thu": "3",
        "ca": "3-4",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG115",
        "ten": "GDTC: Bóng chuyền cơ bản",
        "lop": "GDTC:BONGCHUYENCB.17",
        "thu": "3",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG115",
        "ten": "GDTC: Bóng chuyền cơ bản",
        "lop": "GDTC:BONGCHUYENCB.18",
        "thu": "3",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG115",
        "ten": "GDTC: Bóng chuyền cơ bản",
        "lop": "GDTC:BONGCHUYENCB.13",
        "thu": "4",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG115",
        "ten": "GDTC: Bóng chuyền cơ bản",
        "lop": "GDTC:BONGCHUYENCB.14",
        "thu": "4",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG115",
        "ten": "GDTC: Bóng chuyền cơ bản",
        "lop": "GDTC:BONGCHUYENCB.11",
        "thu": "5",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG115",
        "ten": "GDTC: Bóng chuyền cơ bản",
        "lop": "GDTC:BONGCHUYENCB.12",
        "thu": "5",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG115",
        "ten": "GDTC: Bóng chuyền cơ bản",
        "lop": "GDTC:BONGCHUYENCB.7",
        "thu": "6",
        "ca": "1-2",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG115",
        "ten": "GDTC: Bóng chuyền cơ bản",
        "lop": "GDTC:BONGCHUYENCB.8",
        "thu": "6",
        "ca": "3-4",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG115",
        "ten": "GDTC: Bóng chuyền cơ bản",
        "lop": "GDTC:BONGCHUYENCB.9",
        "thu": "6",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG115",
        "ten": "GDTC: Bóng chuyền cơ bản",
        "lop": "GDTC:BONGCHUYENCB.10",
        "thu": "6",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG113",
        "ten": "GDTC: Bóng rổ cơ bản",
        "lop": "GDTC:BONGROCB.7",
        "thu": "2",
        "ca": "1-2",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG113",
        "ten": "GDTC: Bóng rổ cơ bản",
        "lop": "GDTC:BONGROCB.8",
        "thu": "2",
        "ca": "3-4",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG113",
        "ten": "GDTC: Bóng rổ cơ bản",
        "lop": "GDTC:BONGROCB.9",
        "thu": "2",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG113",
        "ten": "GDTC: Bóng rổ cơ bản",
        "lop": "GDTC:BONGROCB.10",
        "thu": "2",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG113",
        "ten": "GDTC: Bóng rổ cơ bản",
        "lop": "GDTC:BONGROCB.11",
        "thu": "3",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG113",
        "ten": "GDTC: Bóng rổ cơ bản",
        "lop": "GDTC:BONGROCB.12",
        "thu": "3",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG113",
        "ten": "GDTC: Bóng rổ cơ bản",
        "lop": "GDTC:BONGROCB.13",
        "thu": "4",
        "ca": "1-2",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG113",
        "ten": "GDTC: Bóng rổ cơ bản",
        "lop": "GDTC:BONGROCB.14",
        "thu": "4",
        "ca": "3-4",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG113",
        "ten": "GDTC: Bóng rổ cơ bản",
        "lop": "GDTC:BONGROCB.15",
        "thu": "5",
        "ca": "1-2",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG113",
        "ten": "GDTC: Bóng rổ cơ bản",
        "lop": "GDTC:BONGROCB.16",
        "thu": "5",
        "ca": "3-4",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG113",
        "ten": "GDTC: Bóng rổ cơ bản",
        "lop": "GDTC:BONGROCB.17",
        "thu": "6",
        "ca": "1-2",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG113",
        "ten": "GDTC: Bóng rổ cơ bản",
        "lop": "GDTC:BONGROCB.18",
        "thu": "6",
        "ca": "3-4",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG113",
        "ten": "GDTC: Bóng rổ cơ bản",
        "lop": "GDTC:BONGROCB.19",
        "thu": "6",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG113",
        "ten": "GDTC: Bóng rổ cơ bản",
        "lop": "GDTC:BONGROCB.20",
        "thu": "6",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG118",
        "ten": "GDTC: Thể dục cơ bản",
        "lop": "GDTC:THEDUCCB.7",
        "thu": "2",
        "ca": "1-2",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG118",
        "ten": "GDTC: Thể dục cơ bản",
        "lop": "GDTC:THEDUCCB.8",
        "thu": "2",
        "ca": "3-4",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG118",
        "ten": "GDTC: Thể dục cơ bản",
        "lop": "GDTC:THEDUCCB.9",
        "thu": "2",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG118",
        "ten": "GDTC: Thể dục cơ bản",
        "lop": "GDTC:THEDUCCB.10",
        "thu": "2",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG118",
        "ten": "GDTC: Thể dục cơ bản",
        "lop": "GDTC:THEDUCCB.11",
        "thu": "3",
        "ca": "1-2",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG118",
        "ten": "GDTC: Thể dục cơ bản",
        "lop": "GDTC:THEDUCCB.12",
        "thu": "3",
        "ca": "3-4",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG118",
        "ten": "GDTC: Thể dục cơ bản",
        "lop": "GDTC:THEDUCCB.13",
        "thu": "3",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG118",
        "ten": "GDTC: Thể dục cơ bản",
        "lop": "GDTC:THEDUCCB.14",
        "thu": "3",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG118",
        "ten": "GDTC: Thể dục cơ bản",
        "lop": "GDTC:THEDUCCB.15",
        "thu": "4",
        "ca": "1-2",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG118",
        "ten": "GDTC: Thể dục cơ bản",
        "lop": "GDTC:THEDUCCB.16",
        "thu": "4",
        "ca": "3-4",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG118",
        "ten": "GDTC: Thể dục cơ bản",
        "lop": "GDTC:THEDUCCB.17",
        "thu": "4",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG118",
        "ten": "GDTC: Thể dục cơ bản",
        "lop": "GDTC:THEDUCCB.18",
        "thu": "4",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG118",
        "ten": "GDTC: Thể dục cơ bản",
        "lop": "GDTC:THEDUCCB.19",
        "thu": "6",
        "ca": "1-2",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG118",
        "ten": "GDTC: Thể dục cơ bản",
        "lop": "GDTC:THEDUCCB.20",
        "thu": "6",
        "ca": "3-4",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG102",
        "ten": "GDTC: Thể dục cổ truyền cơ bản",
        "lop": "GDTC:COTRUYENCB.5",
        "thu": "2",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG102",
        "ten": "GDTC: Thể dục cổ truyền cơ bản",
        "lop": "GDTC:COTRUYENCB.6",
        "thu": "2",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG102",
        "ten": "GDTC: Thể dục cổ truyền cơ bản",
        "lop": "GDTC:COTRUYENCB.7",
        "thu": "3",
        "ca": "1-2",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG102",
        "ten": "GDTC: Thể dục cổ truyền cơ bản",
        "lop": "GDTC:COTRUYENCB.8",
        "thu": "3",
        "ca": "3-4",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG102",
        "ten": "GDTC: Thể dục cổ truyền cơ bản",
        "lop": "GDTC:COTRUYENCB.9",
        "thu": "4",
        "ca": "1-2",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG102",
        "ten": "GDTC: Thể dục cổ truyền cơ bản",
        "lop": "GDTC:COTRUYENCB.10",
        "thu": "4",
        "ca": "3-4",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG102",
        "ten": "GDTC: Thể dục cổ truyền cơ bản",
        "lop": "GDTC:COTRUYENCB.11",
        "thu": "4",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG102",
        "ten": "GDTC: Thể dục cổ truyền cơ bản",
        "lop": "GDTC:COTRUYENCB.12",
        "thu": "4",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG102",
        "ten": "GDTC: Thể dục cổ truyền cơ bản",
        "lop": "GDTC:COTRUYENCB.13",
        "thu": "5",
        "ca": "1-2",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG102",
        "ten": "GDTC: Thể dục cổ truyền cơ bản",
        "lop": "GDTC:COTRUYENCB.14",
        "thu": "5",
        "ca": "3-4",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "MA110",
        "ten": "Giải tích 1",
        "lop": "GIAITICH1.1_LT",
        "thu": "2",
        "ca": "1-3",
        "phong": "B501",
        "sotin": "3",
        "giangvien": "Nguyễn Lâm Tùng(CTM008)"
    },
    {
        "ma": "MA110",
        "ten": "Giải tích 1",
        "lop": "GIAITICH1.2.1_BT",
        "thu": "2",
        "ca": "4-5",
        "phong": "B402",
        "sotin": "3",
        "giangvien": "Nhâm Ngọc Tần(CTM013)"
    },
    {
        "ma": "MA110",
        "ten": "Giải tích 1",
        "lop": "GIAITICH1.1.1_BT",
        "thu": "3",
        "ca": "1-2",
        "phong": "B504",
        "sotin": "3",
        "giangvien": "Phan Ngọc Minh(CTM040)"
    },
    {
        "ma": "MA110",
        "ten": "Giải tích 1",
        "lop": "GIAITICH1.2.1_BT",
        "thu": "3",
        "ca": "6-7",
        "phong": "B705",
        "sotin": "3",
        "giangvien": "Nhâm Ngọc Tần(CTM013)"
    },
    {
        "ma": "MA110",
        "ten": "Giải tích 1",
        "lop": "GIAITICH1.2.2_BT",
        "thu": "3",
        "ca": "6-7",
        "phong": "B402",
        "sotin": "3",
        "giangvien": "Phan Ngọc Minh(CTM040)"
    },
    {
        "ma": "MA110",
        "ten": "Giải tích 1",
        "lop": "GIAITICH1.1.2_BT",
        "thu": "4",
        "ca": "1-2",
        "phong": "B208",
        "sotin": "3",
        "giangvien": "Nguyễn Lâm Tùng(CTM008)"
    },
    {
        "ma": "MA110",
        "ten": "Giải tích 1",
        "lop": "GIAITICH1.2_LT",
        "thu": "5",
        "ca": "8-10",
        "phong": "A303",
        "sotin": "3",
        "giangvien": "Nguyễn Quốc Tuấn(CTM024)"
    },
    {
        "ma": "MA110",
        "ten": "Giải tích 1",
        "lop": "GIAITICH1.1.2_BT",
        "thu": "6",
        "ca": "1-2",
        "phong": "B603",
        "sotin": "3",
        "giangvien": "Nguyễn Lâm Tùng(CTM008)"
    },
    {
        "ma": "MA110",
        "ten": "Giải tích 1",
        "lop": "GIAITICH1.1.1_BT",
        "thu": "7",
        "ca": "1-2",
        "phong": "A603",
        "sotin": "3",
        "giangvien": "Phan Ngọc Minh(CTM040)"
    },
    {
        "ma": "MA110",
        "ten": "Giải tích 1",
        "lop": "GIAITICH1.2.2_BT",
        "thu": "7",
        "ca": "6-7",
        "phong": "B202",
        "sotin": "3",
        "giangvien": "Phan Ngọc Minh(CTM040)"
    },
    {
        "ma": "MA111",
        "ten": "Giải tích 2",
        "lop": "GIAITICH2.1.1_BT",
        "thu": "2",
        "ca": "1-2",
        "phong": "B504",
        "sotin": "3",
        "giangvien": "Phan Ngọc Minh(CTM040)"
    },
    {
        "ma": "MA111",
        "ten": "Giải tích 2",
        "lop": "GIAITICH2.1_LT",
        "thu": "3",
        "ca": "1-3",
        "phong": "B507",
        "sotin": "3",
        "giangvien": "Hoàng Ngọc Tùng(CTM010)"
    },
    {
        "ma": "MA111",
        "ten": "Giải tích 2",
        "lop": "GIAITICH2.2.2_BT",
        "thu": "3",
        "ca": "6-7",
        "phong": "B108",
        "sotin": "3",
        "giangvien": "Nguyễn Quốc Tuấn(CTM024)"
    },
    {
        "ma": "MA111",
        "ten": "Giải tích 2",
        "lop": "GIAITICH2.2.1_BT",
        "thu": "3",
        "ca": "9-10",
        "phong": "B106",
        "sotin": "3",
        "giangvien": "Phan Ngọc Minh(CTM040)"
    },
    {
        "ma": "MA111",
        "ten": "Giải tích 2",
        "lop": "GIAITICH2.1.2_BT",
        "thu": "4",
        "ca": "1-2",
        "phong": "B108",
        "sotin": "3",
        "giangvien": "Hoàng Ngọc Tùng(CTM010)"
    },
    {
        "ma": "MA111",
        "ten": "Giải tích 2",
        "lop": "GIAITICH2.2_LT",
        "thu": "4",
        "ca": "8-10",
        "phong": "B501",
        "sotin": "3",
        "giangvien": "Nguyễn Quốc Tuấn(CTM024)"
    },
    {
        "ma": "MA111",
        "ten": "Giải tích 2",
        "lop": "GIAITICH2.1.1_BT",
        "thu": "6",
        "ca": "1-2",
        "phong": "B106",
        "sotin": "3",
        "giangvien": "Phan Ngọc Minh(CTM040)"
    },
    {
        "ma": "MA111",
        "ten": "Giải tích 2",
        "lop": "GIAITICH2.1.2_BT",
        "thu": "7",
        "ca": "1-2",
        "phong": "B106",
        "sotin": "3",
        "giangvien": "Hoàng Ngọc Tùng(CTM010)"
    },
    {
        "ma": "MA111",
        "ten": "Giải tích 2",
        "lop": "GIAITICH2.2.2_BT",
        "thu": "7",
        "ca": "6-7",
        "phong": "B108",
        "sotin": "3",
        "giangvien": "Nguyễn Quốc Tuấn(CTM024)"
    },
    {
        "ma": "MA111",
        "ten": "Giải tích 2",
        "lop": "GIAITICH2.2.1_BT",
        "thu": "7",
        "ca": "9-10",
        "phong": "B106",
        "sotin": "3",
        "giangvien": "Phan Ngọc Minh(CTM040)"
    },
    {
        "ma": "MK305",
        "ten": "Hành vi người tiêu dùng",
        "lop": "HVITIEUDUNG.2",
        "thu": "2",
        "ca": "3-5",
        "phong": "B205",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thùy Trang(CQM010)"
    },
    {
        "ma": "MK305",
        "ten": "Hành vi người tiêu dùng",
        "lop": "HVITIEUDUNG.2",
        "thu": "4",
        "ca": "1-2",
        "phong": "B205",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thùy Trang(CQM010)"
    },
    {
        "ma": "AD218",
        "ten": "Hát - Nhạc",
        "lop": "HATNHAC.5",
        "thu": "2",
        "ca": "6-8",
        "phong": "B707",
        "sotin": "4",
        "giangvien": "Nguyễn Đình Chúc(CAN015)"
    },
    {
        "ma": "AD218",
        "ten": "Hát - Nhạc",
        "lop": "HATNHAC.4",
        "thu": "2",
        "ca": "6-8",
        "phong": "B711",
        "sotin": "4",
        "giangvien": "Hoàng Bích Hà(MAN016)"
    },
    {
        "ma": "AD218",
        "ten": "Hát - Nhạc",
        "lop": "HATNHAC.6",
        "thu": "3",
        "ca": "6-8",
        "phong": "B707",
        "sotin": "4",
        "giangvien": "Trần Tuấn Hòa(CAN010)"
    },
    {
        "ma": "AD218",
        "ten": "Hát - Nhạc",
        "lop": "HATNHAC.5",
        "thu": "4",
        "ca": "3-5",
        "phong": "B707",
        "sotin": "4",
        "giangvien": "Nguyễn Đình Chúc(CAN015)"
    },
    {
        "ma": "AD218",
        "ten": "Hát - Nhạc",
        "lop": "HATNHAC.4",
        "thu": "4",
        "ca": "3-5",
        "phong": "B711",
        "sotin": "4",
        "giangvien": "Hoàng Bích Hà(MAN016)"
    },
    {
        "ma": "AD218",
        "ten": "Hát - Nhạc",
        "lop": "HATNHAC.6",
        "thu": "5",
        "ca": "3-5",
        "phong": "B707",
        "sotin": "4",
        "giangvien": "Trần Tuấn Hòa(CAN010)"
    },
    {
        "ma": "IS322",
        "ten": "Hệ quản trị cơ sở dữ liệu",
        "lop": "QTRICSODULIEU.3",
        "thu": "4",
        "ca": "1-2",
        "phong": "A707",
        "sotin": "3",
        "giangvien": "Trần Quang Duy(CTI019)"
    },
    {
        "ma": "IS322",
        "ten": "Hệ quản trị cơ sở dữ liệu",
        "lop": "QTRICSODULIEU.1",
        "thu": "5",
        "ca": "1-2",
        "phong": "A706",
        "sotin": "3",
        "giangvien": "Trần Quang Duy(CTI019)"
    },
    {
        "ma": "IS322",
        "ten": "Hệ quản trị cơ sở dữ liệu",
        "lop": "QTRICSODULIEU.2",
        "thu": "5",
        "ca": "3-5",
        "phong": "A706",
        "sotin": "3",
        "giangvien": "Trần Quang Duy(CTI019)"
    },
    {
        "ma": "IS322",
        "ten": "Hệ quản trị cơ sở dữ liệu",
        "lop": "QTRICSODULIEU.2",
        "thu": "6",
        "ca": "1-2",
        "phong": "A707",
        "sotin": "3",
        "giangvien": "Trần Quang Duy(CTI019)"
    },
    {
        "ma": "IS322",
        "ten": "Hệ quản trị cơ sở dữ liệu",
        "lop": "QTRICSODULIEU.1",
        "thu": "6",
        "ca": "3-5",
        "phong": "A707",
        "sotin": "3",
        "giangvien": "Trần Quang Duy(CTI019)"
    },
    {
        "ma": "IS322",
        "ten": "Hệ quản trị cơ sở dữ liệu",
        "lop": "QTRICSODULIEU.3",
        "thu": "7",
        "ca": "1-3",
        "phong": "A706",
        "sotin": "3",
        "giangvien": "Trần Quang Duy(CTI019)"
    },
    {
        "ma": "IS314",
        "ten": "Hệ thống thông tin",
        "lop": "HETHONGTTIN.1",
        "thu": "3",
        "ca": "1-3",
        "phong": "A409",
        "sotin": "3",
        "giangvien": "Nguyễn Mạnh Hùng(CTI010)"
    },
    {
        "ma": "IS314",
        "ten": "Hệ thống thông tin",
        "lop": "HETHONGTTIN.2",
        "thu": "3",
        "ca": "4-5",
        "phong": "A409",
        "sotin": "3",
        "giangvien": "Nguyễn Mạnh Hùng(CTI010)"
    },
    {
        "ma": "IS314",
        "ten": "Hệ thống thông tin",
        "lop": "HETHONGTTIN.1",
        "thu": "3",
        "ca": "6-7",
        "phong": "A409",
        "sotin": "3",
        "giangvien": "Nguyễn Mạnh Hùng(CTI010)"
    },
    {
        "ma": "IS314",
        "ten": "Hệ thống thông tin",
        "lop": "HETHONGTTIN.2",
        "thu": "3",
        "ca": "8-10",
        "phong": "A603",
        "sotin": "3",
        "giangvien": "Nguyễn Mạnh Hùng(CTI010)"
    },
    {
        "ma": "IS314",
        "ten": "Hệ thống thông tin",
        "lop": "HETHONGTTIN.3",
        "thu": "4",
        "ca": "1-3",
        "phong": "A409",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "IS314",
        "ten": "Hệ thống thông tin",
        "lop": "HETHONGTTIN.3",
        "thu": "4",
        "ca": "6-7",
        "phong": "A409",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "AN301B",
        "ten": "Hòa thanh B",
        "lop": "HOATHANHB.3",
        "thu": "2",
        "ca": "10-11",
        "phong": "B807",
        "sotin": "1",
        "giangvien": "Lưu Quang Minh(MAN005)"
    },
    {
        "ma": "AN301B",
        "ten": "Hòa thanh B",
        "lop": "HOATHANHB.1",
        "thu": "2",
        "ca": "4-5",
        "phong": "B807",
        "sotin": "1",
        "giangvien": "Lưu Quang Minh(MAN005)"
    },
    {
        "ma": "AN301B",
        "ten": "Hòa thanh B",
        "lop": "HOATHANHB.2",
        "thu": "2",
        "ca": "7-8",
        "phong": "B807",
        "sotin": "1",
        "giangvien": "Lưu Quang Minh(MAN005)"
    },
    {
        "ma": "AN301B",
        "ten": "Hòa thanh B",
        "lop": "HOATHANHB.4",
        "thu": "4",
        "ca": "7-8",
        "phong": "B807",
        "sotin": "1",
        "giangvien": "Nguyễn Hoàng Anh Minh(MAN017)"
    },
    {
        "ma": "CS320",
        "ten": "Học máy",
        "lop": "HOCMAY.1",
        "thu": "2",
        "ca": "1-3",
        "phong": "A705",
        "sotin": "3",
        "giangvien": "Đoàn Trung Phong(PAI007)"
    },
    {
        "ma": "CS320",
        "ten": "Học máy",
        "lop": "HOCMAY.2",
        "thu": "2",
        "ca": "9-11",
        "phong": "A707",
        "sotin": "3",
        "giangvien": "Đoàn Trung Phong(PAI007)"
    },
    {
        "ma": "CS320",
        "ten": "Học máy",
        "lop": "HOCMAY.2",
        "thu": "4",
        "ca": "1-3",
        "phong": "A705",
        "sotin": "3",
        "giangvien": "Đoàn Trung Phong(PAI007)"
    },
    {
        "ma": "CS320",
        "ten": "Học máy",
        "lop": "HOCMAY.1",
        "thu": "4",
        "ca": "6-8",
        "phong": "A705",
        "sotin": "3",
        "giangvien": "Đoàn Trung Phong(PAI007)"
    },
    {
        "ma": "TG222",
        "ten": "Hướng dẫn du lịch",
        "lop": "HUONGDANDL.1",
        "thu": "5",
        "ca": "6-7",
        "phong": "B601",
        "sotin": "3",
        "giangvien": "Ngô Quang Duy(MDL031)"
    },
    {
        "ma": "TG222",
        "ten": "Hướng dẫn du lịch",
        "lop": "HUONGDANDL.2",
        "thu": "5",
        "ca": "8-10",
        "phong": "B208",
        "sotin": "3",
        "giangvien": "Ngô Quang Duy(MDL031)"
    },
    {
        "ma": "TG222",
        "ten": "Hướng dẫn du lịch",
        "lop": "HUONGDANDL.3",
        "thu": "7",
        "ca": "4-5",
        "phong": "B108",
        "sotin": "3",
        "giangvien": "Phùng Đức Thiện(CDL007)"
    },
    {
        "ma": "TG222",
        "ten": "Hướng dẫn du lịch",
        "lop": "HUONGDANDL.3",
        "thu": "7",
        "ca": "6-8",
        "phong": "B110",
        "sotin": "3",
        "giangvien": "Phùng Đức Thiện(CDL007)"
    },
    {
        "ma": "TG222",
        "ten": "Hướng dẫn du lịch",
        "lop": "HUONGDANDL.1",
        "thu": "7",
        "ca": "6-8",
        "phong": "B502",
        "sotin": "3",
        "giangvien": "Ngô Quang Duy(MDL031)"
    },
    {
        "ma": "TG222",
        "ten": "Hướng dẫn du lịch",
        "lop": "HUONGDANDL.2",
        "thu": "7",
        "ca": "9-10",
        "phong": "B110",
        "sotin": "3",
        "giangvien": "Ngô Quang Duy(MDL031)"
    },
    {
        "ma": "IT332",
        "ten": "Internet of Things",
        "lop": "INTERNET.2",
        "thu": "7",
        "ca": "1-3",
        "phong": "A403",
        "sotin": "2",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "IT332",
        "ten": "Internet of Things",
        "lop": "INTERNET.1",
        "thu": "7",
        "ca": "4-5",
        "phong": "A601",
        "sotin": "2",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "IT332",
        "ten": "Internet of Things",
        "lop": "INTERNET.2",
        "thu": "7",
        "ca": "6-7",
        "phong": "A403",
        "sotin": "2",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "IT332",
        "ten": "Internet of Things",
        "lop": "INTERNET.1",
        "thu": "7",
        "ca": "8-10",
        "phong": "A403",
        "sotin": "2",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "AC210",
        "ten": "Kế toán doanh nghiệp",
        "lop": "KETOANDN.2",
        "thu": "3",
        "ca": "1-2",
        "phong": "A407",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Hồng Anh(CQA010)"
    },
    {
        "ma": "AC210",
        "ten": "Kế toán doanh nghiệp",
        "lop": "KETOANDN.1",
        "thu": "4",
        "ca": "8-10",
        "phong": "B202",
        "sotin": "3",
        "giangvien": "Mai Thanh Thủy(CQA006)"
    },
    {
        "ma": "AC210",
        "ten": "Kế toán doanh nghiệp",
        "lop": "KETOANDN.2",
        "thu": "6",
        "ca": "3-5",
        "phong": "A407",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Hồng Anh(CQA010)"
    },
    {
        "ma": "AC210",
        "ten": "Kế toán doanh nghiệp",
        "lop": "KETOANDN.1",
        "thu": "6",
        "ca": "6-7",
        "phong": "B106",
        "sotin": "3",
        "giangvien": "Mai Thanh Thủy(CQA006)"
    },
    {
        "ma": "AC211",
        "ten": "Kế toán tài chính 1",
        "lop": "KETOANTC1.1",
        "thu": "3",
        "ca": "6-7",
        "phong": "B208",
        "sotin": "3",
        "giangvien": "Vũ Thị Kim Lan(CQA005)"
    },
    {
        "ma": "AC211",
        "ten": "Kế toán tài chính 1",
        "lop": "KETOANTC1.1",
        "thu": "4",
        "ca": "8-10",
        "phong": "B208",
        "sotin": "3",
        "giangvien": "Vũ Thị Kim Lan(CQA005)"
    },
    {
        "ma": "IS326",
        "ten": "Khai phá dữ liệu",
        "lop": "KHAIPHADULIEU.2",
        "thu": "3",
        "ca": "3-5",
        "phong": "A705",
        "sotin": "3",
        "giangvien": "Vũ Minh Hoàng(MTI049)"
    },
    {
        "ma": "IS326",
        "ten": "Khai phá dữ liệu",
        "lop": "KHAIPHADULIEU.1",
        "thu": "3",
        "ca": "6-8",
        "phong": "A705",
        "sotin": "3",
        "giangvien": "Vũ Minh Hoàng(MTI049)"
    },
    {
        "ma": "IS326",
        "ten": "Khai phá dữ liệu",
        "lop": "KHAIPHADULIEU.2",
        "thu": "3",
        "ca": "9-10",
        "phong": "A705",
        "sotin": "3",
        "giangvien": "Vũ Minh Hoàng(MTI049)"
    },
    {
        "ma": "IS326",
        "ten": "Khai phá dữ liệu",
        "lop": "KHAIPHADULIEU.1",
        "thu": "7",
        "ca": "9-10",
        "phong": "A705",
        "sotin": "3",
        "giangvien": "Vũ Minh Hoàng(MTI049)"
    },
    {
        "ma": "IS327",
        "ten": "Kho dữ liệu",
        "lop": "KHODULIEU.1",
        "thu": "4",
        "ca": "4-5",
        "phong": "B706",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "IS327",
        "ten": "Kho dữ liệu",
        "lop": "KHODULIEU.1",
        "thu": "4",
        "ca": "6-7",
        "phong": "A601",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "MC499",
        "ten": "Khóa luận tốt nghiệp",
        "lop": "DOANTN.1",
        "thu": "1",
        "ca": "10-12",
        "phong": "BOMON",
        "sotin": "6",
        "giangvien": ""
    },
    {
        "ma": "LK499",
        "ten": "Khóa luận tốt nghiệp",
        "lop": "LK499.1",
        "thu": "1",
        "ca": "9-10",
        "phong": "BOMON",
        "sotin": "6",
        "giangvien": ""
    },
    {
        "ma": "BA331",
        "ten": "Khởi sự kinh doanh",
        "lop": "KHOISUKD.4",
        "thu": "4",
        "ca": "1-3",
        "phong": "B101",
        "sotin": "3",
        "giangvien": "Vũ Thị Tuyết(MQM034)"
    },
    {
        "ma": "BA331",
        "ten": "Khởi sự kinh doanh",
        "lop": "KHOISUKD.4",
        "thu": "6",
        "ca": "1-3",
        "phong": "B101",
        "sotin": "3",
        "giangvien": "Vũ Thị Tuyết(MQM034)"
    },
    {
        "ma": "SK324",
        "ten": "Kiểm huấn công tác xã hội",
        "lop": "KIEMHUANCTXH1.1",
        "thu": "4",
        "ca": "3-5",
        "phong": "B204",
        "sotin": "2",
        "giangvien": "Trần Tú Hoa(CXW034)"
    },
    {
        "ma": "SE312",
        "ten": "Kiểm thử và đảm bảo chất lượng phần mềm",
        "lop": "KIEMTHUDBCL.1",
        "thu": "7",
        "ca": "3-5",
        "phong": "B712",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "SE312",
        "ten": "Kiểm thử và đảm bảo chất lượng phần mềm",
        "lop": "KIEMTHUDBCL.1",
        "thu": "7",
        "ca": "6-7",
        "phong": "B604",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "CS212",
        "ten": "Kiến trúc máy tính",
        "lop": "KTRUCMAYTINH.1",
        "thu": "5",
        "ca": "1-2",
        "phong": "A703",
        "sotin": "3",
        "giangvien": "Bùi Trường Giang(CTI035)"
    },
    {
        "ma": "CS212",
        "ten": "Kiến trúc máy tính",
        "lop": "KTRUCMAYTINH.2",
        "thu": "5",
        "ca": "3-5",
        "phong": "A703",
        "sotin": "3",
        "giangvien": "Bùi Trường Giang(CTI035)"
    },
    {
        "ma": "CS212",
        "ten": "Kiến trúc máy tính",
        "lop": "KTRUCMAYTINH.3",
        "thu": "6",
        "ca": "4-5",
        "phong": "B703",
        "sotin": "3",
        "giangvien": "Bùi Trường Giang(CTI035)"
    },
    {
        "ma": "CS212",
        "ten": "Kiến trúc máy tính",
        "lop": "KTRUCMAYTINH.3",
        "thu": "6",
        "ca": "6-8",
        "phong": "A705",
        "sotin": "3",
        "giangvien": "Bùi Trường Giang(CTI035)"
    },
    {
        "ma": "CS212",
        "ten": "Kiến trúc máy tính",
        "lop": "KTRUCMAYTINH.2",
        "thu": "7",
        "ca": "1-2",
        "phong": "A705",
        "sotin": "3",
        "giangvien": "Bùi Trường Giang(CTI035)"
    },
    {
        "ma": "CS212",
        "ten": "Kiến trúc máy tính",
        "lop": "KTRUCMAYTINH.1",
        "thu": "7",
        "ca": "3-5",
        "phong": "A705",
        "sotin": "3",
        "giangvien": "Bùi Trường Giang(CTI035)"
    },
    {
        "ma": "BA320",
        "ten": "Kinh doanh quốc tế",
        "lop": "KDQUOCTE.2",
        "thu": "3",
        "ca": "3-5",
        "phong": "A406",
        "sotin": "3",
        "giangvien": "Lê Thị Hạnh(CQM008)"
    },
    {
        "ma": "IE322",
        "ten": "Kinh doanh quốc tế",
        "lop": "KDOANHQT.2",
        "thu": "5",
        "ca": "9-10",
        "phong": "B110",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Phương(CQE019)"
    },
    {
        "ma": "IE322",
        "ten": "Kinh doanh quốc tế",
        "lop": "KDOANHQT.2",
        "thu": "6",
        "ca": "1-3",
        "phong": "A603",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Phương(CQE019)"
    },
    {
        "ma": "BA320",
        "ten": "Kinh doanh quốc tế",
        "lop": "KDQUOCTE.2",
        "thu": "6",
        "ca": "1-2",
        "phong": "B205",
        "sotin": "3",
        "giangvien": "Lê Thị Hạnh(CQM008)"
    },
    {
        "ma": "IE204",
        "ten": "Kinh tế các nước Asean",
        "lop": "KTEASEAN.1",
        "thu": "2",
        "ca": "6-8",
        "phong": "B508",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thanh Thảo(CQE005)"
    },
    {
        "ma": "IE204",
        "ten": "Kinh tế các nước Asean",
        "lop": "KTEASEAN.1",
        "thu": "3",
        "ca": "1-2",
        "phong": "B613",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thanh Thảo(CQE005)"
    },
    {
        "ma": "IE201",
        "ten": "Kinh tế quốc tế 1",
        "lop": "KTEQTE1.1",
        "thu": "3",
        "ca": "6-7",
        "phong": "A607",
        "sotin": "3",
        "giangvien": "Vũ Đức Hiếu(CQE008)"
    },
    {
        "ma": "IE201",
        "ten": "Kinh tế quốc tế 1",
        "lop": "KTEQTE1.1",
        "thu": "6",
        "ca": "1-3",
        "phong": "B612",
        "sotin": "3",
        "giangvien": "Vũ Đức Hiếu(CQE008)"
    },
    {
        "ma": "IE302",
        "ten": "Kinh tế quốc tế 2",
        "lop": "KTQTE2.3",
        "thu": "2",
        "ca": "1-3",
        "phong": "A601",
        "sotin": "3",
        "giangvien": "Nguyễn Phương Mai(CQE002)"
    },
    {
        "ma": "IE302",
        "ten": "Kinh tế quốc tế 2",
        "lop": "KTQTE2.2",
        "thu": "2",
        "ca": "4-5",
        "phong": "B108",
        "sotin": "3",
        "giangvien": "Nguyễn Phương Mai(CQE002)"
    },
    {
        "ma": "IE302",
        "ten": "Kinh tế quốc tế 2",
        "lop": "KTQTE2.3",
        "thu": "5",
        "ca": "6-7",
        "phong": "B106",
        "sotin": "3",
        "giangvien": "Nguyễn Phương Mai(CQE002)"
    },
    {
        "ma": "IE302",
        "ten": "Kinh tế quốc tế 2",
        "lop": "KTQTE2.2",
        "thu": "7",
        "ca": "3-5",
        "phong": "B612",
        "sotin": "3",
        "giangvien": "Nguyễn Phương Mai(CQE002)"
    },
    {
        "ma": "EC204",
        "ten": "Kinh tế vi mô",
        "lop": "MICRO.2",
        "thu": "3",
        "ca": "1-3",
        "phong": "B103",
        "sotin": "3",
        "giangvien": "Lê Thị Kim Chung(CQE004)"
    },
    {
        "ma": "EC204",
        "ten": "Kinh tế vi mô",
        "lop": "MICRO.2",
        "thu": "4",
        "ca": "6-8",
        "phong": "B101",
        "sotin": "3",
        "giangvien": "Lê Thị Kim Chung(CQE004)"
    },
    {
        "ma": "EC205",
        "ten": "Kinh tế vĩ mô",
        "lop": "MACRO.2",
        "thu": "2",
        "ca": "4-5",
        "phong": "B103",
        "sotin": "3",
        "giangvien": "Trần Thị Thùy Linh(CQE001)"
    },
    {
        "ma": "EC205",
        "ten": "Kinh tế vĩ mô",
        "lop": "MACRO.2",
        "thu": "4",
        "ca": "4-5",
        "phong": "B101",
        "sotin": "3",
        "giangvien": "Trần Thị Thùy Linh(CQE001)"
    },
    {
        "ma": "EC205",
        "ten": "Kinh tế vĩ mô",
        "lop": "MACRO.2",
        "thu": "5",
        "ca": "1-2",
        "phong": "B105",
        "sotin": "3",
        "giangvien": "Trần Thị Thùy Linh(CQE001)"
    },
    {
        "ma": "EC200",
        "ten": "Kinh tế vĩ mô và vi mô",
        "lop": "KTEVIMO&VIMO.2",
        "thu": "4",
        "ca": "6-7",
        "phong": "B103",
        "sotin": "3",
        "giangvien": "Nguyễn Phương Mai(CQE002)"
    },
    {
        "ma": "EC200",
        "ten": "Kinh tế vĩ mô và vi mô",
        "lop": "KTEVIMO&VIMO.2",
        "thu": "5",
        "ca": "4-5",
        "phong": "B101",
        "sotin": "3",
        "giangvien": "Nguyễn Phương Mai(CQE002)"
    },
    {
        "ma": "EC200",
        "ten": "Kinh tế vĩ mô và vi mô",
        "lop": "KTEVIMO&VIMO.2",
        "thu": "6",
        "ca": "4-5",
        "phong": "B101",
        "sotin": "3",
        "giangvien": "Nguyễn Phương Mai(CQE002)"
    },
    {
        "ma": "VC232",
        "ten": "Kinh tế Việt Nam",
        "lop": "KINHTEVN.1",
        "thu": "2",
        "ca": "6-7",
        "phong": "A502",
        "sotin": "3",
        "giangvien": "Lê Việt Đức(CQE021)"
    },
    {
        "ma": "VC232",
        "ten": "Kinh tế Việt Nam",
        "lop": "KINHTEVN.1",
        "thu": "4",
        "ca": "8-10",
        "phong": "A502",
        "sotin": "3",
        "giangvien": "Lê Việt Đức(CQE021)"
    },
    {
        "ma": "FN499",
        "ten": "KLTN  chuyên ngành Tài chính",
        "lop": "KLTNTAICHINH.1",
        "thu": "1",
        "ca": "11-13",
        "phong": "",
        "sotin": "6",
        "giangvien": ""
    },
    {
        "ma": "BK499",
        "ten": "KLTN chuyên ngành Ngân hàng",
        "lop": "KLTNNGANHANG.1",
        "thu": "1",
        "ca": "11-13",
        "phong": "BOMON",
        "sotin": "6",
        "giangvien": ""
    },
    {
        "ma": "IT499",
        "ten": "KLTN ngành CNTT",
        "lop": "KLTN(NGANH CNTT).1",
        "thu": "1",
        "ca": "1-5",
        "phong": "BOMON1",
        "sotin": "6",
        "giangvien": "Trần Quang Duy(CTI019)"
    },
    {
        "ma": "SK499",
        "ten": "KLTN ngành Công tác xã hội",
        "lop": "KLTNCONGTACXAHOI.1",
        "thu": "1",
        "ca": "6-10",
        "phong": "BOMON2",
        "sotin": "6",
        "giangvien": "Ngô Thị Trang(CXW035)"
    },
    {
        "ma": "IS499",
        "ten": "KLTN ngành Hệ thống thông tin",
        "lop": "KLTNNGANHHTTTQL.1",
        "thu": "1",
        "ca": "1-5",
        "phong": "BOMON1",
        "sotin": "6",
        "giangvien": "Nguyễn Mạnh Hùng(CTI040)"
    },
    {
        "ma": "CS499",
        "ten": "KLTN ngành Khoa học máy tính",
        "lop": "KLTNKHOAHOCMAYTINH.1",
        "thu": "1",
        "ca": "1-5",
        "phong": "BOMON1",
        "sotin": "6",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "AI499",
        "ten": "KLTN ngành Trí tuệ nhân tạo",
        "lop": "KLTN(TA).1",
        "thu": "1",
        "ca": "1-5",
        "phong": "BOMON1",
        "sotin": "6",
        "giangvien": "Nguyễn Thị Huyền Châu(PAI001)"
    },
    {
        "ma": "TC499",
        "ten": "KLTN ngành Truyền thông và mạng máy tính",
        "lop": "KLTNTTHONG&MANGMT.1",
        "thu": "1",
        "ca": "6-7",
        "phong": "BOMON1",
        "sotin": "6",
        "giangvien": "Hoàng Trọng Minh(CTI030)"
    },
    {
        "ma": "ES232",
        "ten": "Kỹ năng Đọc tiếng Anh 2",
        "lop": "KNDOC(ANH)2.1",
        "thu": "2",
        "ca": "1-2",
        "phong": "A605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES232",
        "ten": "Kỹ năng Đọc tiếng Anh 2",
        "lop": "KNDOC(ANH)2.2",
        "thu": "2",
        "ca": "3-5",
        "phong": "B410",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES232",
        "ten": "Kỹ năng Đọc tiếng Anh 2",
        "lop": "KNDOC(ANH)2.3",
        "thu": "2",
        "ca": "6-7",
        "phong": "A605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES232",
        "ten": "Kỹ năng Đọc tiếng Anh 2",
        "lop": "KNDOC(ANH)2.4",
        "thu": "2",
        "ca": "8-10",
        "phong": "B410",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES232",
        "ten": "Kỹ năng Đọc tiếng Anh 2",
        "lop": "KNDOC(ANH)2.5",
        "thu": "3",
        "ca": "1-2",
        "phong": "A605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES232",
        "ten": "Kỹ năng Đọc tiếng Anh 2",
        "lop": "KNDOC(ANH)2.6",
        "thu": "3",
        "ca": "3-5",
        "phong": "B504",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES232",
        "ten": "Kỹ năng Đọc tiếng Anh 2",
        "lop": "KNDOC(ANH)2.7",
        "thu": "3",
        "ca": "6-7",
        "phong": "B506",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES232",
        "ten": "Kỹ năng Đọc tiếng Anh 2",
        "lop": "KNDOC(ANH)2.8",
        "thu": "3",
        "ca": "8-10",
        "phong": "A605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES232",
        "ten": "Kỹ năng Đọc tiếng Anh 2",
        "lop": "KNDOC(ANH)2.2",
        "thu": "4",
        "ca": "1-2",
        "phong": "B410",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES232",
        "ten": "Kỹ năng Đọc tiếng Anh 2",
        "lop": "KNDOC(ANH)2.1",
        "thu": "4",
        "ca": "3-5",
        "phong": "B406",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES232",
        "ten": "Kỹ năng Đọc tiếng Anh 2",
        "lop": "KNDOC(ANH)2.4",
        "thu": "4",
        "ca": "6-7",
        "phong": "B502",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES232",
        "ten": "Kỹ năng Đọc tiếng Anh 2",
        "lop": "KNDOC(ANH)2.3",
        "thu": "4",
        "ca": "8-10",
        "phong": "B408",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES232",
        "ten": "Kỹ năng Đọc tiếng Anh 2",
        "lop": "KNDOC(ANH)2.6",
        "thu": "5",
        "ca": "1-2",
        "phong": "B605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES232",
        "ten": "Kỹ năng Đọc tiếng Anh 2",
        "lop": "KNDOC(ANH)2.5",
        "thu": "5",
        "ca": "3-5",
        "phong": "A605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES232",
        "ten": "Kỹ năng Đọc tiếng Anh 2",
        "lop": "KNDOC(ANH)2.8",
        "thu": "5",
        "ca": "6-7",
        "phong": "B404",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES232",
        "ten": "Kỹ năng Đọc tiếng Anh 2",
        "lop": "KNDOC(ANH)2.7",
        "thu": "5",
        "ca": "8-10",
        "phong": "B406",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES233",
        "ten": "Kỹ năng Đọc tiếng Anh 3",
        "lop": "KNDOC(ANH)3.1",
        "thu": "3",
        "ca": "6-7",
        "phong": "B605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES233",
        "ten": "Kỹ năng Đọc tiếng Anh 3",
        "lop": "KNDOC(ANH)3.2",
        "thu": "3",
        "ca": "8-10",
        "phong": "B506",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES233",
        "ten": "Kỹ năng Đọc tiếng Anh 3",
        "lop": "KNDOC(ANH)3.2",
        "thu": "5",
        "ca": "6-7",
        "phong": "B410",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES233",
        "ten": "Kỹ năng Đọc tiếng Anh 3",
        "lop": "KNDOC(ANH)3.1",
        "thu": "5",
        "ca": "8-10",
        "phong": "B601",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "SC201",
        "ten": "Kỹ năng giao tiếp và thuyết trình",
        "lop": "KYNANGTTRINH.5",
        "thu": "3",
        "ca": "1-3",
        "phong": "B501",
        "sotin": "2",
        "giangvien": "Nguyễn Bảo Tuấn(CQM009)"
    },
    {
        "ma": "SC201",
        "ten": "Kỹ năng giao tiếp và thuyết trình",
        "lop": "KYNANGTTRINH.3",
        "thu": "3",
        "ca": "8-10",
        "phong": "B105",
        "sotin": "2",
        "giangvien": "Nguyễn Bảo Tuấn(CQM009)"
    },
    {
        "ma": "SC201",
        "ten": "Kỹ năng giao tiếp và thuyết trình",
        "lop": "KYNANGTTRINH.4",
        "thu": "6",
        "ca": "3-5",
        "phong": "B203",
        "sotin": "2",
        "giangvien": "Nguyễn Bảo Tuấn(CQM009)"
    },
    {
        "ma": "ES212",
        "ten": "Kỹ năng Nghe tiếng Anh 2",
        "lop": "KNNGHE(ANH)2.1",
        "thu": "2",
        "ca": "1-2",
        "phong": "A405",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES212",
        "ten": "Kỹ năng Nghe tiếng Anh 2",
        "lop": "KNNGHE(ANH)2.2",
        "thu": "2",
        "ca": "3-5",
        "phong": "A605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES212",
        "ten": "Kỹ năng Nghe tiếng Anh 2",
        "lop": "KNNGHE(ANH)2.3",
        "thu": "2",
        "ca": "6-7",
        "phong": "A405",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES212",
        "ten": "Kỹ năng Nghe tiếng Anh 2",
        "lop": "KNNGHE(ANH)2.4",
        "thu": "2",
        "ca": "8-10",
        "phong": "A605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES212",
        "ten": "Kỹ năng Nghe tiếng Anh 2",
        "lop": "KNNGHE(ANH)2.5",
        "thu": "3",
        "ca": "1-2",
        "phong": "A405",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES212",
        "ten": "Kỹ năng Nghe tiếng Anh 2",
        "lop": "KNNGHE(ANH)2.6",
        "thu": "3",
        "ca": "3-5",
        "phong": "A505",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES212",
        "ten": "Kỹ năng Nghe tiếng Anh 2",
        "lop": "KNNGHE(ANH)2.7",
        "thu": "3",
        "ca": "6-7",
        "phong": "A405",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES212",
        "ten": "Kỹ năng Nghe tiếng Anh 2",
        "lop": "KNNGHE(ANH)2.8",
        "thu": "3",
        "ca": "8-10",
        "phong": "A405",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES212",
        "ten": "Kỹ năng Nghe tiếng Anh 2",
        "lop": "KNNGHE(ANH)2.2",
        "thu": "4",
        "ca": "1-2",
        "phong": "A405",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES212",
        "ten": "Kỹ năng Nghe tiếng Anh 2",
        "lop": "KNNGHE(ANH)2.1",
        "thu": "4",
        "ca": "3-5",
        "phong": "A505",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES212",
        "ten": "Kỹ năng Nghe tiếng Anh 2",
        "lop": "KNNGHE(ANH)2.4",
        "thu": "4",
        "ca": "6-7",
        "phong": "A505",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES212",
        "ten": "Kỹ năng Nghe tiếng Anh 2",
        "lop": "KNNGHE(ANH)2.3",
        "thu": "4",
        "ca": "8-10",
        "phong": "A405",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES212",
        "ten": "Kỹ năng Nghe tiếng Anh 2",
        "lop": "KNNGHE(ANH)2.6",
        "thu": "5",
        "ca": "1-2",
        "phong": "A605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES212",
        "ten": "Kỹ năng Nghe tiếng Anh 2",
        "lop": "KNNGHE(ANH)2.5",
        "thu": "5",
        "ca": "3-5",
        "phong": "A405",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES212",
        "ten": "Kỹ năng Nghe tiếng Anh 2",
        "lop": "KNNGHE(ANH)2.8",
        "thu": "5",
        "ca": "6-7",
        "phong": "A405",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES212",
        "ten": "Kỹ năng Nghe tiếng Anh 2",
        "lop": "KNNGHE(ANH)2.7",
        "thu": "5",
        "ca": "8-10",
        "phong": "A605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES213",
        "ten": "Kỹ năng Nghe tiếng Anh 3",
        "lop": "KNNGHE(ANH)3.1",
        "thu": "4",
        "ca": "1-2",
        "phong": "B512",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES213",
        "ten": "Kỹ năng Nghe tiếng Anh 3",
        "lop": "KNNGHE(ANH)3.2",
        "thu": "4",
        "ca": "3-5",
        "phong": "B410",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES213",
        "ten": "Kỹ năng Nghe tiếng Anh 3",
        "lop": "KNNGHE(ANH)3.2",
        "thu": "6",
        "ca": "1-2",
        "phong": "A405",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES213",
        "ten": "Kỹ năng Nghe tiếng Anh 3",
        "lop": "KNNGHE(ANH)3.1",
        "thu": "6",
        "ca": "3-5",
        "phong": "A405",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GK262",
        "ten": "Kỹ năng nghe, nói, đọc, viết Hàn 5",
        "lop": "KNNNDV5(HAN).1",
        "thu": "2",
        "ca": "3-5",
        "phong": "B106",
        "sotin": "3",
        "giangvien": "Yu Do Ib(MNK019)"
    },
    {
        "ma": "GK262",
        "ten": "Kỹ năng nghe, nói, đọc, viết Hàn 5",
        "lop": "KNNNDV5(HAN).3",
        "thu": "2",
        "ca": "6-8",
        "phong": "B202",
        "sotin": "3",
        "giangvien": "Yu Do Ib(MNK019)"
    },
    {
        "ma": "GK262",
        "ten": "Kỹ năng nghe, nói, đọc, viết Hàn 5",
        "lop": "KNNNDV5(HAN).1",
        "thu": "3",
        "ca": "3-5",
        "phong": "B110",
        "sotin": "3",
        "giangvien": "Kim So Yeon(MNK028)"
    },
    {
        "ma": "GK262",
        "ten": "Kỹ năng nghe, nói, đọc, viết Hàn 5",
        "lop": "KNNNDV5(HAN).5",
        "thu": "3",
        "ca": "3-5",
        "phong": "B208",
        "sotin": "3",
        "giangvien": "Yu Do Ib(MNK019)"
    },
    {
        "ma": "GK262",
        "ten": "Kỹ năng nghe, nói, đọc, viết Hàn 5",
        "lop": "KNNNDV5(HAN).4",
        "thu": "3",
        "ca": "6-8",
        "phong": "B204",
        "sotin": "3",
        "giangvien": "Yu Do Ib(MNK019)"
    },
    {
        "ma": "GK262",
        "ten": "Kỹ năng nghe, nói, đọc, viết Hàn 5",
        "lop": "KNNNDV5(HAN).2",
        "thu": "3",
        "ca": "6-8",
        "phong": "B106",
        "sotin": "3",
        "giangvien": "Kim So Yeon(MNK028)"
    },
    {
        "ma": "GK262",
        "ten": "Kỹ năng nghe, nói, đọc, viết Hàn 5",
        "lop": "KNNNDV5(HAN).3",
        "thu": "4",
        "ca": "1-3",
        "phong": "B202",
        "sotin": "3",
        "giangvien": "Vương Thị Năm(CNK005)"
    },
    {
        "ma": "GK262",
        "ten": "Kỹ năng nghe, nói, đọc, viết Hàn 5",
        "lop": "KNNNDV5(HAN).2",
        "thu": "4",
        "ca": "3-5",
        "phong": "B108",
        "sotin": "3",
        "giangvien": "Yu Do Ib(MNK019)"
    },
    {
        "ma": "GK262",
        "ten": "Kỹ năng nghe, nói, đọc, viết Hàn 5",
        "lop": "KNNNDV5(HAN).4",
        "thu": "4",
        "ca": "3-5",
        "phong": "B106",
        "sotin": "3",
        "giangvien": "Kim So Yeon(MNK028)"
    },
    {
        "ma": "GK262",
        "ten": "Kỹ năng nghe, nói, đọc, viết Hàn 5",
        "lop": "KNNNDV5(HAN).3",
        "thu": "4",
        "ca": "6-8",
        "phong": "B204",
        "sotin": "3",
        "giangvien": "Kim So Yeon(MNK028)"
    },
    {
        "ma": "GK262",
        "ten": "Kỹ năng nghe, nói, đọc, viết Hàn 5",
        "lop": "KNNNDV5(HAN).1",
        "thu": "4",
        "ca": "6-8",
        "phong": "B106",
        "sotin": "3",
        "giangvien": "Vương Thị Năm(CNK005)"
    },
    {
        "ma": "GK262",
        "ten": "Kỹ năng nghe, nói, đọc, viết Hàn 5",
        "lop": "KNNNDV5(HAN).6",
        "thu": "4",
        "ca": "6-8",
        "phong": "B110",
        "sotin": "3",
        "giangvien": "Yu Do Ib(MNK019)"
    },
    {
        "ma": "GK262",
        "ten": "Kỹ năng nghe, nói, đọc, viết Hàn 5",
        "lop": "KNNNDV5(HAN).2",
        "thu": "5",
        "ca": "1-3",
        "phong": "B108",
        "sotin": "3",
        "giangvien": "Vương Thị Năm(CNK005)"
    },
    {
        "ma": "GK262",
        "ten": "Kỹ năng nghe, nói, đọc, viết Hàn 5",
        "lop": "KNNNDV5(HAN).5",
        "thu": "5",
        "ca": "3-5",
        "phong": "B202",
        "sotin": "3",
        "giangvien": "Kim So Yeon(MNK028)"
    },
    {
        "ma": "GK262",
        "ten": "Kỹ năng nghe, nói, đọc, viết Hàn 5",
        "lop": "KNNNDV5(HAN).6",
        "thu": "5",
        "ca": "6-8",
        "phong": "B108",
        "sotin": "3",
        "giangvien": "Kim So Yeon(MNK028)"
    },
    {
        "ma": "GK262",
        "ten": "Kỹ năng nghe, nói, đọc, viết Hàn 5",
        "lop": "KNNNDV5(HAN).4",
        "thu": "5",
        "ca": "8-10",
        "phong": "B202",
        "sotin": "3",
        "giangvien": "Vương Thị Năm(CNK005)"
    },
    {
        "ma": "GK262",
        "ten": "Kỹ năng nghe, nói, đọc, viết Hàn 5",
        "lop": "KNNNDV5(HAN).5",
        "thu": "6",
        "ca": "1-3",
        "phong": "B302",
        "sotin": "3",
        "giangvien": "Vương Thị Năm(CNK005)"
    },
    {
        "ma": "GK262",
        "ten": "Kỹ năng nghe, nói, đọc, viết Hàn 5",
        "lop": "KNNNDV5(HAN).6",
        "thu": "6",
        "ca": "6-8",
        "phong": "B202",
        "sotin": "3",
        "giangvien": "Vương Thị Năm(CNK005)"
    },
    {
        "ma": "ES222",
        "ten": "Kỹ năng Nói tiếng Anh 2",
        "lop": "KNNOI(ANH)2.1",
        "thu": "2",
        "ca": "1-2",
        "phong": "A505",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES222",
        "ten": "Kỹ năng Nói tiếng Anh 2",
        "lop": "KNNOI(ANH)2.2",
        "thu": "2",
        "ca": "3-5",
        "phong": "B404",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES222",
        "ten": "Kỹ năng Nói tiếng Anh 2",
        "lop": "KNNOI(ANH)2.3",
        "thu": "2",
        "ca": "6-7",
        "phong": "A505",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES222",
        "ten": "Kỹ năng Nói tiếng Anh 2",
        "lop": "KNNOI(ANH)2.4",
        "thu": "2",
        "ca": "8-10",
        "phong": "B404",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES222",
        "ten": "Kỹ năng Nói tiếng Anh 2",
        "lop": "KNNOI(ANH)2.5",
        "thu": "3",
        "ca": "1-2",
        "phong": "A505",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES222",
        "ten": "Kỹ năng Nói tiếng Anh 2",
        "lop": "KNNOI(ANH)2.6",
        "thu": "3",
        "ca": "3-5",
        "phong": "A605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES222",
        "ten": "Kỹ năng Nói tiếng Anh 2",
        "lop": "KNNOI(ANH)2.7",
        "thu": "3",
        "ca": "6-7",
        "phong": "A505",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES222",
        "ten": "Kỹ năng Nói tiếng Anh 2",
        "lop": "KNNOI(ANH)2.8",
        "thu": "3",
        "ca": "8-10",
        "phong": "A505",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES222",
        "ten": "Kỹ năng Nói tiếng Anh 2",
        "lop": "KNNOI(ANH)2.2",
        "thu": "4",
        "ca": "1-2",
        "phong": "A505",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES222",
        "ten": "Kỹ năng Nói tiếng Anh 2",
        "lop": "KNNOI(ANH)2.1",
        "thu": "4",
        "ca": "3-5",
        "phong": "B404",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES222",
        "ten": "Kỹ năng Nói tiếng Anh 2",
        "lop": "KNNOI(ANH)2.4",
        "thu": "4",
        "ca": "6-7",
        "phong": "A605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES222",
        "ten": "Kỹ năng Nói tiếng Anh 2",
        "lop": "KNNOI(ANH)2.3",
        "thu": "4",
        "ca": "8-10",
        "phong": "A605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES222",
        "ten": "Kỹ năng Nói tiếng Anh 2",
        "lop": "KNNOI(ANH)2.6",
        "thu": "5",
        "ca": "1-2",
        "phong": "B506",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES222",
        "ten": "Kỹ năng Nói tiếng Anh 2",
        "lop": "KNNOI(ANH)2.5",
        "thu": "5",
        "ca": "3-5",
        "phong": "A505",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES222",
        "ten": "Kỹ năng Nói tiếng Anh 2",
        "lop": "KNNOI(ANH)2.8",
        "thu": "5",
        "ca": "6-7",
        "phong": "A605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES222",
        "ten": "Kỹ năng Nói tiếng Anh 2",
        "lop": "KNNOI(ANH)2.7",
        "thu": "5",
        "ca": "8-10",
        "phong": "B404",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES223",
        "ten": "Kỹ năng Nói tiếng Anh 3",
        "lop": "KNNOI(ANH)3.1",
        "thu": "4",
        "ca": "1-2",
        "phong": "B606",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES223",
        "ten": "Kỹ năng Nói tiếng Anh 3",
        "lop": "KNNOI(ANH)3.2",
        "thu": "4",
        "ca": "3-5",
        "phong": "B612",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES223",
        "ten": "Kỹ năng Nói tiếng Anh 3",
        "lop": "KNNOI(ANH)3.2",
        "thu": "6",
        "ca": "1-2",
        "phong": "A505",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES223",
        "ten": "Kỹ năng Nói tiếng Anh 3",
        "lop": "KNNOI(ANH)3.1",
        "thu": "6",
        "ca": "3-5",
        "phong": "B502",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "AD216",
        "ten": "Kỹ năng sống",
        "lop": "KYNANGSONG.5",
        "thu": "2",
        "ca": "4-5",
        "phong": "A402",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Hải(CXW022)"
    },
    {
        "ma": "AD216",
        "ten": "Kỹ năng sống",
        "lop": "KYNANGSONG.5",
        "thu": "2",
        "ca": "6-8",
        "phong": "A402",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Hải(CXW022)"
    },
    {
        "ma": "AD216",
        "ten": "Kỹ năng sống",
        "lop": "KYNANGSONG.6",
        "thu": "5",
        "ca": "3-5",
        "phong": "A402",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Hải(CXW022)"
    },
    {
        "ma": "AD216",
        "ten": "Kỹ năng sống",
        "lop": "KYNANGSONG.7",
        "thu": "5",
        "ca": "3-5",
        "phong": "A406",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Kim Dung(CXW016)"
    },
    {
        "ma": "AD216",
        "ten": "Kỹ năng sống",
        "lop": "KYNANGSONG.6",
        "thu": "5",
        "ca": "6-7",
        "phong": "A402",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Hải(CXW022)"
    },
    {
        "ma": "AD216",
        "ten": "Kỹ năng sống",
        "lop": "KYNANGSONG.7",
        "thu": "5",
        "ca": "6-7",
        "phong": "A406",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Kim Dung(CXW016)"
    },
    {
        "ma": "ES242",
        "ten": "Kỹ năng Viết tiếng Anh 2",
        "lop": "KNVIET(ANH)2.1",
        "thu": "2",
        "ca": "1-2",
        "phong": "B410",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES242",
        "ten": "Kỹ năng Viết tiếng Anh 2",
        "lop": "KNVIET(ANH)2.2",
        "thu": "2",
        "ca": "3-5",
        "phong": "B504",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES242",
        "ten": "Kỹ năng Viết tiếng Anh 2",
        "lop": "KNVIET(ANH)2.3",
        "thu": "2",
        "ca": "6-7",
        "phong": "B404",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES242",
        "ten": "Kỹ năng Viết tiếng Anh 2",
        "lop": "KNVIET(ANH)2.4",
        "thu": "2",
        "ca": "8-10",
        "phong": "B504",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES242",
        "ten": "Kỹ năng Viết tiếng Anh 2",
        "lop": "KNVIET(ANH)2.5",
        "thu": "3",
        "ca": "1-2",
        "phong": "B603",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES242",
        "ten": "Kỹ năng Viết tiếng Anh 2",
        "lop": "KNVIET(ANH)2.6",
        "thu": "3",
        "ca": "3-5",
        "phong": "B508",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES242",
        "ten": "Kỹ năng Viết tiếng Anh 2",
        "lop": "KNVIET(ANH)2.7",
        "thu": "3",
        "ca": "6-7",
        "phong": "B603",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES242",
        "ten": "Kỹ năng Viết tiếng Anh 2",
        "lop": "KNVIET(ANH)2.8",
        "thu": "3",
        "ca": "8-10",
        "phong": "B504",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES242",
        "ten": "Kỹ năng Viết tiếng Anh 2",
        "lop": "KNVIET(ANH)2.2",
        "thu": "4",
        "ca": "1-2",
        "phong": "B504",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES242",
        "ten": "Kỹ năng Viết tiếng Anh 2",
        "lop": "KNVIET(ANH)2.1",
        "thu": "4",
        "ca": "3-5",
        "phong": "B408",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES242",
        "ten": "Kỹ năng Viết tiếng Anh 2",
        "lop": "KNVIET(ANH)2.4",
        "thu": "4",
        "ca": "6-7",
        "phong": "B510",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES242",
        "ten": "Kỹ năng Viết tiếng Anh 2",
        "lop": "KNVIET(ANH)2.3",
        "thu": "4",
        "ca": "8-10",
        "phong": "B508",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES242",
        "ten": "Kỹ năng Viết tiếng Anh 2",
        "lop": "KNVIET(ANH)2.6",
        "thu": "5",
        "ca": "1-2",
        "phong": "B607",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES242",
        "ten": "Kỹ năng Viết tiếng Anh 2",
        "lop": "KNVIET(ANH)2.8",
        "thu": "5",
        "ca": "1-2",
        "phong": "B608",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES242",
        "ten": "Kỹ năng Viết tiếng Anh 2",
        "lop": "KNVIET(ANH)2.5",
        "thu": "5",
        "ca": "3-5",
        "phong": "B404",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES242",
        "ten": "Kỹ năng Viết tiếng Anh 2",
        "lop": "KNVIET(ANH)2.7",
        "thu": "5",
        "ca": "8-10",
        "phong": "B504",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES243",
        "ten": "Kỹ năng Viết tiếng Anh 3",
        "lop": "KNVIET(ANH)3.1",
        "thu": "3",
        "ca": "6-7",
        "phong": "B710",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES243",
        "ten": "Kỹ năng Viết tiếng Anh 3",
        "lop": "KNVIET(ANH)3.2",
        "thu": "3",
        "ca": "8-10",
        "phong": "B603",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES243",
        "ten": "Kỹ năng Viết tiếng Anh 3",
        "lop": "KNVIET(ANH)3.2",
        "thu": "5",
        "ca": "6-7",
        "phong": "B612",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "ES243",
        "ten": "Kỹ năng Viết tiếng Anh 3",
        "lop": "KNVIET(ANH)3.1",
        "thu": "5",
        "ca": "8-10",
        "phong": "B605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "AN242B",
        "ten": "Kỹ thuật biểu diễn (vũ đạo) 2B",
        "lop": "KYTHUATVUDAO2B.1",
        "thu": "3",
        "ca": "2-3",
        "phong": "B809",
        "sotin": "1",
        "giangvien": "Nguyễn Tuấn Linh(CAN008)"
    },
    {
        "ma": "AN242B",
        "ten": "Kỹ thuật biểu diễn (vũ đạo) 2B",
        "lop": "KYTHUATVUDAO2B.2",
        "thu": "6",
        "ca": "2-3",
        "phong": "B809",
        "sotin": "1",
        "giangvien": "Nguyễn Tuấn Linh(CAN008)"
    },
    {
        "ma": "AN242B",
        "ten": "Kỹ thuật biểu diễn (vũ đạo) 2B",
        "lop": "KYTHUATVUDAO2B.3",
        "thu": "6",
        "ca": "4-5",
        "phong": "B809",
        "sotin": "1",
        "giangvien": "Nguyễn Tuấn Linh(CAN008)"
    },
    {
        "ma": "TC314",
        "ten": "Kỹ thuật kết nối mạng",
        "lop": "KTHUATKNOIMANG.1",
        "thu": "4",
        "ca": "6-7",
        "phong": "A509",
        "sotin": "3",
        "giangvien": "Hoàng Trọng Minh(CTI030)"
    },
    {
        "ma": "TC314",
        "ten": "Kỹ thuật kết nối mạng",
        "lop": "KTHUATKNOIMANG.1",
        "thu": "5",
        "ca": "8-10",
        "phong": "A603",
        "sotin": "3",
        "giangvien": "Hoàng Trọng Minh(CTI030)"
    },
    {
        "ma": "AN413B",
        "ten": "Kỹ thuật Phòng thu B",
        "lop": "KTPHONGTHUB.1",
        "thu": "5",
        "ca": "8-9",
        "phong": "B805",
        "sotin": "1",
        "giangvien": "Nguyễn Văn Thuấn(MAN007)"
    },
    {
        "ma": "AN413B",
        "ten": "Kỹ thuật Phòng thu B",
        "lop": "KTPHONGTHUB.2",
        "thu": "6",
        "ca": "4-5",
        "phong": "B805",
        "sotin": "1",
        "giangvien": "Nguyễn Văn Thuấn(MAN007)"
    },
    {
        "ma": "AN413B",
        "ten": "Kỹ thuật Phòng thu B",
        "lop": "KTPHONGTHUB.3",
        "thu": "6",
        "ca": "6-7",
        "phong": "B805",
        "sotin": "1",
        "giangvien": "Nguyễn Văn Thuấn(MAN007)"
    },
    {
        "ma": "AN413B",
        "ten": "Kỹ thuật Phòng thu B",
        "lop": "KTPHONGTHUB.4",
        "thu": "6",
        "ca": "8-9",
        "phong": "B805",
        "sotin": "1",
        "giangvien": "Nguyễn Văn Thuấn(MAN007)"
    },
    {
        "ma": "CS110",
        "ten": "Kỹ thuật số",
        "lop": "KYTHUATSO.1.1_BT",
        "thu": "4",
        "ca": "3-5",
        "phong": "A509",
        "sotin": "2",
        "giangvien": "Đinh Thị Nhung(MTI038)"
    },
    {
        "ma": "CS110",
        "ten": "Kỹ thuật số",
        "lop": "KYTHUATSO.1_LT",
        "thu": "4",
        "ca": "6-7",
        "phong": "B706",
        "sotin": "2",
        "giangvien": "Đinh Thị Nhung(MTI038)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.8",
        "thu": "2",
        "ca": "1-5",
        "phong": "B816",
        "sotin": "1",
        "giangvien": "Nguyễn Văn Quang(CAN013)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.10",
        "thu": "2",
        "ca": "1-4",
        "phong": "B812",
        "sotin": "1",
        "giangvien": "Phạm Thị Vân Anh(CAN016)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.7",
        "thu": "2",
        "ca": "2-3",
        "phong": "B814",
        "sotin": "1",
        "giangvien": "Trần Tuấn Hòa(CAN010)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.11",
        "thu": "2",
        "ca": "6-8",
        "phong": "B818",
        "sotin": "1",
        "giangvien": "Nguyễn Thị Hiền(MAN024)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.9",
        "thu": "2",
        "ca": "9-10",
        "phong": "B806",
        "sotin": "1",
        "giangvien": "Phạm Văn Giáp(MAN019)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.3",
        "thu": "3",
        "ca": "1-5",
        "phong": "B808",
        "sotin": "1",
        "giangvien": "Ngô Thị Thanh Huyền(CAN005)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.2",
        "thu": "3",
        "ca": "1-3",
        "phong": "B806",
        "sotin": "1",
        "giangvien": "Nguyễn Đình Chúc(CAN015)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.4",
        "thu": "3",
        "ca": "2-5",
        "phong": "B810",
        "sotin": "1",
        "giangvien": "Phạm Đức Thành(CAN002)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.6",
        "thu": "3",
        "ca": "3-4",
        "phong": "B818",
        "sotin": "1",
        "giangvien": "Tạ Thị Định(MAN015)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.1",
        "thu": "3",
        "ca": "6-10",
        "phong": "B804",
        "sotin": "1",
        "giangvien": "Trần Thị Ngọc Lan(CAN001)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.5",
        "thu": "3",
        "ca": "6-9",
        "phong": "B812",
        "sotin": "1",
        "giangvien": "Đoàn Thị Thúy Trang(MAN006)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.10",
        "thu": "4",
        "ca": "1-5",
        "phong": "B812",
        "sotin": "1",
        "giangvien": "Phạm Thị Vân Anh(CAN016)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.7",
        "thu": "4",
        "ca": "2-3",
        "phong": "B814",
        "sotin": "1",
        "giangvien": "Trần Tuấn Hòa(CAN010)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.1",
        "thu": "4",
        "ca": "2-2",
        "phong": "B804",
        "sotin": "1",
        "giangvien": "Trần Thị Ngọc Lan(CAN001)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.8",
        "thu": "4",
        "ca": "6-10",
        "phong": "B816",
        "sotin": "1",
        "giangvien": "Nguyễn Văn Quang(CAN013)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.2",
        "thu": "5",
        "ca": "1-3",
        "phong": "B806",
        "sotin": "1",
        "giangvien": "Nguyễn Đình Chúc(CAN015)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.11",
        "thu": "5",
        "ca": "1-3",
        "phong": "B814",
        "sotin": "1",
        "giangvien": "Nguyễn Thị Hiền(MAN024)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.1",
        "thu": "5",
        "ca": "1-5",
        "phong": "B804",
        "sotin": "1",
        "giangvien": "Trần Thị Ngọc Lan(CAN001)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.5",
        "thu": "5",
        "ca": "6-9",
        "phong": "B812",
        "sotin": "1",
        "giangvien": "Đoàn Thị Thúy Trang(MAN006)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.9",
        "thu": "5",
        "ca": "9-10",
        "phong": "B818",
        "sotin": "1",
        "giangvien": "Phạm Văn Giáp(MAN019)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.10",
        "thu": "6",
        "ca": "1-1",
        "phong": "B812",
        "sotin": "1",
        "giangvien": "Phạm Thị Vân Anh(CAN016)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.1",
        "thu": "6",
        "ca": "2-2",
        "phong": "B804",
        "sotin": "1",
        "giangvien": "Trần Thị Ngọc Lan(CAN001)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.4",
        "thu": "6",
        "ca": "2-5",
        "phong": "B810",
        "sotin": "1",
        "giangvien": "Phạm Đức Thành(CAN002)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.6",
        "thu": "6",
        "ca": "3-4",
        "phong": "B818",
        "sotin": "1",
        "giangvien": "Tạ Thị Định(MAN015)"
    },
    {
        "ma": "AN232B",
        "ten": "Kỹ thuật thanh nhạc 2B",
        "lop": "KYTHUATTHANHNHAC2B.3",
        "thu": "6",
        "ca": "6-10",
        "phong": "B808",
        "sotin": "1",
        "giangvien": "Ngô Thị Thanh Huyền(CAN005)"
    },
    {
        "ma": "AN333B",
        "ten": "Kỹ thuật thanh nhạc 3B",
        "lop": "KTTHANHNHAC3B.3",
        "thu": "2",
        "ca": "1-5",
        "phong": "B808",
        "sotin": "1",
        "giangvien": "Ngô Thị Thanh Huyền(CAN005)"
    },
    {
        "ma": "AN333B",
        "ten": "Kỹ thuật thanh nhạc 3B",
        "lop": "KTTHANHNHAC3B.6",
        "thu": "2",
        "ca": "10-10",
        "phong": "B812",
        "sotin": "1",
        "giangvien": "Phạm Thị Vân Anh(CAN016)"
    },
    {
        "ma": "AN333B",
        "ten": "Kỹ thuật thanh nhạc 3B",
        "lop": "KTTHANHNHAC3B.6",
        "thu": "2",
        "ca": "5-5",
        "phong": "B812",
        "sotin": "1",
        "giangvien": "Phạm Thị Vân Anh(CAN016)"
    },
    {
        "ma": "AN333B",
        "ten": "Kỹ thuật thanh nhạc 3B",
        "lop": "KTTHANHNHAC3B.1",
        "thu": "2",
        "ca": "6-10",
        "phong": "B804",
        "sotin": "1",
        "giangvien": "Trần Thị Ngọc Lan(CAN001)"
    },
    {
        "ma": "AN333B",
        "ten": "Kỹ thuật thanh nhạc 3B",
        "lop": "KTTHANHNHAC3B.4",
        "thu": "2",
        "ca": "6-8",
        "phong": "B810",
        "sotin": "1",
        "giangvien": "Phạm Đức Thành(CAN002)"
    },
    {
        "ma": "AN333B",
        "ten": "Kỹ thuật thanh nhạc 3B",
        "lop": "KTTHANHNHAC3B.5",
        "thu": "2",
        "ca": "6-11",
        "phong": "B816",
        "sotin": "1",
        "giangvien": "Nguyễn Văn Quang(CAN013)"
    },
    {
        "ma": "AN333B",
        "ten": "Kỹ thuật thanh nhạc 3B",
        "lop": "KTTHANHNHAC3B.2",
        "thu": "3",
        "ca": "6-10",
        "phong": "B806",
        "sotin": "1",
        "giangvien": "Nguyễn Đình Chúc(CAN015)"
    },
    {
        "ma": "AN333B",
        "ten": "Kỹ thuật thanh nhạc 3B",
        "lop": "KTTHANHNHAC3B.5",
        "thu": "4",
        "ca": "1-5",
        "phong": "B816",
        "sotin": "1",
        "giangvien": "Nguyễn Văn Quang(CAN013)"
    },
    {
        "ma": "AN333B",
        "ten": "Kỹ thuật thanh nhạc 3B",
        "lop": "KTTHANHNHAC3B.6",
        "thu": "4",
        "ca": "10-10",
        "phong": "B812",
        "sotin": "1",
        "giangvien": "Phạm Thị Vân Anh(CAN016)"
    },
    {
        "ma": "AN333B",
        "ten": "Kỹ thuật thanh nhạc 3B",
        "lop": "KTTHANHNHAC3B.4",
        "thu": "4",
        "ca": "3-5",
        "phong": "B810",
        "sotin": "1",
        "giangvien": "Phạm Đức Thành(CAN002)"
    },
    {
        "ma": "AN333B",
        "ten": "Kỹ thuật thanh nhạc 3B",
        "lop": "KTTHANHNHAC3B.3",
        "thu": "4",
        "ca": "6-10",
        "phong": "B808",
        "sotin": "1",
        "giangvien": "Ngô Thị Thanh Huyền(CAN005)"
    },
    {
        "ma": "AN333B",
        "ten": "Kỹ thuật thanh nhạc 3B",
        "lop": "KTTHANHNHAC3B.1",
        "thu": "4",
        "ca": "6-10",
        "phong": "B804",
        "sotin": "1",
        "giangvien": "Trần Thị Ngọc Lan(CAN001)"
    },
    {
        "ma": "AN333B",
        "ten": "Kỹ thuật thanh nhạc 3B",
        "lop": "KTTHANHNHAC3B.2",
        "thu": "5",
        "ca": "6-10",
        "phong": "B806",
        "sotin": "1",
        "giangvien": "Nguyễn Đình Chúc(CAN015)"
    },
    {
        "ma": "AN333B",
        "ten": "Kỹ thuật thanh nhạc 3B",
        "lop": "KTTHANHNHAC3B.5",
        "thu": "6",
        "ca": "1-1",
        "phong": "B816",
        "sotin": "1",
        "giangvien": "Nguyễn Văn Quang(CAN013)"
    },
    {
        "ma": "AN333B",
        "ten": "Kỹ thuật thanh nhạc 3B",
        "lop": "KTTHANHNHAC3B.6",
        "thu": "6",
        "ca": "2-2",
        "phong": "B812",
        "sotin": "1",
        "giangvien": "Phạm Thị Vân Anh(CAN016)"
    },
    {
        "ma": "AN434B",
        "ten": "Kỹ thuật thanh nhạc 4B",
        "lop": "KYTHUATTHANHNHAC4B.6",
        "thu": "2",
        "ca": "1-1",
        "phong": "B814",
        "sotin": "1",
        "giangvien": "Trần Tuấn Hòa(CAN010)"
    },
    {
        "ma": "AN434B",
        "ten": "Kỹ thuật thanh nhạc 4B",
        "lop": "KYTHUATTHANHNHAC4B.4",
        "thu": "2",
        "ca": "2-5",
        "phong": "B810",
        "sotin": "1",
        "giangvien": "Phạm Đức Thành(CAN002)"
    },
    {
        "ma": "AN434B",
        "ten": "Kỹ thuật thanh nhạc 4B",
        "lop": "KYTHUATTHANHNHAC4B.8",
        "thu": "2",
        "ca": "6-8",
        "phong": "B806",
        "sotin": "1",
        "giangvien": "Phạm Văn Giáp(MAN019)"
    },
    {
        "ma": "AN434B",
        "ten": "Kỹ thuật thanh nhạc 4B",
        "lop": "KYTHUATTHANHNHAC4B.9",
        "thu": "2",
        "ca": "6-9",
        "phong": "B812",
        "sotin": "1",
        "giangvien": "Phạm Thị Vân Anh(CAN016)"
    },
    {
        "ma": "AN434B",
        "ten": "Kỹ thuật thanh nhạc 4B",
        "lop": "KYTHUATTHANHNHAC4B.3",
        "thu": "2",
        "ca": "6-10",
        "phong": "B808",
        "sotin": "1",
        "giangvien": "Ngô Thị Thanh Huyền(CAN005)"
    },
    {
        "ma": "AN434B",
        "ten": "Kỹ thuật thanh nhạc 4B",
        "lop": "KYTHUATTHANHNHAC4B.7",
        "thu": "3",
        "ca": "1-5",
        "phong": "B816",
        "sotin": "1",
        "giangvien": "Nguyễn Văn Quang(CAN013)"
    },
    {
        "ma": "AN434B",
        "ten": "Kỹ thuật thanh nhạc 4B",
        "lop": "KYTHUATTHANHNHAC4B.5",
        "thu": "3",
        "ca": "1-2",
        "phong": "B818",
        "sotin": "1",
        "giangvien": "Tạ Thị Định(MAN015)"
    },
    {
        "ma": "AN434B",
        "ten": "Kỹ thuật thanh nhạc 4B",
        "lop": "KYTHUATTHANHNHAC4B.1",
        "thu": "3",
        "ca": "1-5",
        "phong": "B804",
        "sotin": "1",
        "giangvien": "Trần Thị Ngọc Lan(CAN001)"
    },
    {
        "ma": "AN434B",
        "ten": "Kỹ thuật thanh nhạc 4B",
        "lop": "KYTHUATTHANHNHAC4B.2",
        "thu": "3",
        "ca": "4-5",
        "phong": "B806",
        "sotin": "1",
        "giangvien": "Nguyễn Đình Chúc(CAN015)"
    },
    {
        "ma": "AN434B",
        "ten": "Kỹ thuật thanh nhạc 4B",
        "lop": "KYTHUATTHANHNHAC4B.3",
        "thu": "4",
        "ca": "1-2",
        "phong": "B808",
        "sotin": "1",
        "giangvien": "Ngô Thị Thanh Huyền(CAN005)"
    },
    {
        "ma": "AN434B",
        "ten": "Kỹ thuật thanh nhạc 4B",
        "lop": "KYTHUATTHANHNHAC4B.6",
        "thu": "4",
        "ca": "1-1",
        "phong": "B814",
        "sotin": "1",
        "giangvien": "Trần Tuấn Hòa(CAN010)"
    },
    {
        "ma": "AN434B",
        "ten": "Kỹ thuật thanh nhạc 4B",
        "lop": "KYTHUATTHANHNHAC4B.9",
        "thu": "4",
        "ca": "6-9",
        "phong": "B812",
        "sotin": "1",
        "giangvien": "Phạm Thị Vân Anh(CAN016)"
    },
    {
        "ma": "AN434B",
        "ten": "Kỹ thuật thanh nhạc 4B",
        "lop": "KYTHUATTHANHNHAC4B.3",
        "thu": "5",
        "ca": "1-5",
        "phong": "B808",
        "sotin": "1",
        "giangvien": "Ngô Thị Thanh Huyền(CAN005)"
    },
    {
        "ma": "AN434B",
        "ten": "Kỹ thuật thanh nhạc 4B",
        "lop": "KYTHUATTHANHNHAC4B.4",
        "thu": "5",
        "ca": "2-5",
        "phong": "B810",
        "sotin": "1",
        "giangvien": "Phạm Đức Thành(CAN002)"
    },
    {
        "ma": "AN434B",
        "ten": "Kỹ thuật thanh nhạc 4B",
        "lop": "KYTHUATTHANHNHAC4B.2",
        "thu": "5",
        "ca": "4-5",
        "phong": "B806",
        "sotin": "1",
        "giangvien": "Nguyễn Đình Chúc(CAN015)"
    },
    {
        "ma": "AN434B",
        "ten": "Kỹ thuật thanh nhạc 4B",
        "lop": "KYTHUATTHANHNHAC4B.7",
        "thu": "5",
        "ca": "6-10",
        "phong": "B816",
        "sotin": "1",
        "giangvien": "Nguyễn Văn Quang(CAN013)"
    },
    {
        "ma": "AN434B",
        "ten": "Kỹ thuật thanh nhạc 4B",
        "lop": "KYTHUATTHANHNHAC4B.8",
        "thu": "5",
        "ca": "6-8",
        "phong": "B818",
        "sotin": "1",
        "giangvien": "Phạm Văn Giáp(MAN019)"
    },
    {
        "ma": "AN434B",
        "ten": "Kỹ thuật thanh nhạc 4B",
        "lop": "KYTHUATTHANHNHAC4B.1",
        "thu": "5",
        "ca": "6-10",
        "phong": "B804",
        "sotin": "1",
        "giangvien": "Trần Thị Ngọc Lan(CAN001)"
    },
    {
        "ma": "AN434B",
        "ten": "Kỹ thuật thanh nhạc 4B",
        "lop": "KYTHUATTHANHNHAC4B.5",
        "thu": "6",
        "ca": "1-2",
        "phong": "B818",
        "sotin": "1",
        "giangvien": "Tạ Thị Định(MAN015)"
    },
    {
        "ma": "AN434B",
        "ten": "Kỹ thuật thanh nhạc 4B",
        "lop": "KYTHUATTHANHNHAC4B.3",
        "thu": "6",
        "ca": "1-2",
        "phong": "B808",
        "sotin": "1",
        "giangvien": "Ngô Thị Thanh Huyền(CAN005)"
    },
    {
        "ma": "AN212B",
        "ten": "Ký xướng âm 2B",
        "lop": "KYXUONGAM2B.1",
        "thu": "5",
        "ca": "2-3",
        "phong": "B803",
        "sotin": "1",
        "giangvien": "Trần Bá Huy(CAN007)"
    },
    {
        "ma": "AN212B",
        "ten": "Ký xướng âm 2B",
        "lop": "KYXUONGAM2B.2",
        "thu": "5",
        "ca": "6-7",
        "phong": "B803",
        "sotin": "1",
        "giangvien": "Nguyễn Như Cường(CAN009)"
    },
    {
        "ma": "AN212B",
        "ten": "Ký xướng âm 2B",
        "lop": "KYXUONGAM2B.3",
        "thu": "6",
        "ca": "2-3",
        "phong": "B803",
        "sotin": "1",
        "giangvien": "Nguyễn Như Cường(CAN009)"
    },
    {
        "ma": "CS122",
        "ten": "Lập trình hướng đối tượng",
        "lop": "LAPTRINHHUONGDT.1.1_BT",
        "thu": "2",
        "ca": "6-7",
        "phong": "A708",
        "sotin": "3",
        "giangvien": "Đinh Thị  Thúy(PAI006)"
    },
    {
        "ma": "CS122",
        "ten": "Lập trình hướng đối tượng",
        "lop": "LAPTRINHHUONGDT.1.1_BT",
        "thu": "4",
        "ca": "4-5",
        "phong": "A708",
        "sotin": "3",
        "giangvien": "Đinh Thị  Thúy(PAI006)"
    },
    {
        "ma": "CS122",
        "ten": "Lập trình hướng đối tượng",
        "lop": "LAPTRINHHUONGDT.1_LT",
        "thu": "4",
        "ca": "6-8",
        "phong": "A708",
        "sotin": "3",
        "giangvien": "Huỳnh Mùi(CTI001)"
    },
    {
        "ma": "CS122",
        "ten": "Lập trình hướng đối tượng",
        "lop": "LAPTRINHHUONGDT.2.1_BT",
        "thu": "4",
        "ca": "9-10",
        "phong": "A706",
        "sotin": "3",
        "giangvien": "Đinh Thị  Thúy(PAI006)"
    },
    {
        "ma": "CS122",
        "ten": "Lập trình hướng đối tượng",
        "lop": "LAPTRINHHUONGDT.2.1_BT",
        "thu": "6",
        "ca": "4-5",
        "phong": "A706",
        "sotin": "3",
        "giangvien": "Đinh Thị  Thúy(PAI006)"
    },
    {
        "ma": "CS122",
        "ten": "Lập trình hướng đối tượng",
        "lop": "LAPTRINHHUONGDT.2_LT",
        "thu": "6",
        "ca": "8-10",
        "phong": "A706",
        "sotin": "3",
        "giangvien": "Đinh Thị  Thúy(PAI006)"
    },
    {
        "ma": "CS314",
        "ten": "Lập trình ứng dụng di động",
        "lop": "LTUDDD.1_LT",
        "thu": "2",
        "ca": "1-2",
        "phong": "A706",
        "sotin": "2",
        "giangvien": "Nguyễn Quang Hưng(MTI052)"
    },
    {
        "ma": "CS314",
        "ten": "Lập trình ứng dụng di động",
        "lop": "LTUDDD.3.1_BT",
        "thu": "2",
        "ca": "3-5",
        "phong": "A706",
        "sotin": "2",
        "giangvien": "Nguyễn Quang Hưng(MTI052)"
    },
    {
        "ma": "CS314",
        "ten": "Lập trình ứng dụng di động",
        "lop": "LTUDDD.2_LT",
        "thu": "4",
        "ca": "1-2",
        "phong": "A706",
        "sotin": "2",
        "giangvien": "Nguyễn Quang Hưng(MTI052)"
    },
    {
        "ma": "CS314",
        "ten": "Lập trình ứng dụng di động",
        "lop": "LTUDDD.1.1_BT",
        "thu": "4",
        "ca": "3-5",
        "phong": "A706",
        "sotin": "2",
        "giangvien": "Nguyễn Quang Hưng(MTI052)"
    },
    {
        "ma": "CS314",
        "ten": "Lập trình ứng dụng di động",
        "lop": "LTUDDD.3_LT",
        "thu": "6",
        "ca": "1-2",
        "phong": "A705",
        "sotin": "2",
        "giangvien": "Nguyễn Quang Hưng(MTI052)"
    },
    {
        "ma": "CS314",
        "ten": "Lập trình ứng dụng di động",
        "lop": "LTUDDD.2.1_BT",
        "thu": "6",
        "ca": "3-5",
        "phong": "A705",
        "sotin": "2",
        "giangvien": "Nguyễn Quang Hưng(MTI052)"
    },
    {
        "ma": "MA100",
        "ten": "Logic và suy luận toán học",
        "lop": "LOGICSLTOAN.1_LT",
        "thu": "2",
        "ca": "6-7",
        "phong": "B507",
        "sotin": "2",
        "giangvien": "Bùi Huy Hiền(CTM003)"
    },
    {
        "ma": "MA100",
        "ten": "Logic và suy luận toán học",
        "lop": "LOGICSLTOAN.1.1_BT",
        "thu": "3",
        "ca": "8-10",
        "phong": "B705",
        "sotin": "2",
        "giangvien": "Trần Lê Nhật Minh(CTM039)"
    },
    {
        "ma": "MA100",
        "ten": "Logic và suy luận toán học",
        "lop": "LOGICSLTOAN.1.2_BT",
        "thu": "6",
        "ca": "6-8",
        "phong": "B108",
        "sotin": "2",
        "giangvien": "Lê Thị Yên Hồng(CTM016)"
    },
    {
        "ma": "MA101",
        "ten": "Logic, suy luận toán học và kỹ thuật đếm",
        "lop": "LOGICDEM.2.1_BT",
        "thu": "2",
        "ca": "4-5",
        "phong": "A601",
        "sotin": "3",
        "giangvien": "Nguyễn Hồng Đức(CVT008)"
    },
    {
        "ma": "MA101",
        "ten": "Logic, suy luận toán học và kỹ thuật đếm",
        "lop": "LOGICDEM.2.1_BT",
        "thu": "6",
        "ca": "4-5",
        "phong": "A601",
        "sotin": "3",
        "giangvien": "Nguyễn Hồng Đức(CVT008)"
    },
    {
        "ma": "MA101",
        "ten": "Logic, suy luận toán học và kỹ thuật đếm",
        "lop": "LOGICDEM.2_LT",
        "thu": "7",
        "ca": "3-5",
        "phong": "B106",
        "sotin": "3",
        "giangvien": "Phan Ngọc Minh(CTM040)"
    },
    {
        "ma": "NC211A",
        "ten": "LT kiểm soát nhiễm khuẩn trong thực hành điều dưỡng",
        "lop": "KSNHIEMKHUANTHDD.1",
        "thu": "7",
        "ca": "6-7",
        "phong": "B203",
        "sotin": "1",
        "giangvien": "Phạm Thành Đồng(CSN020)"
    },
    {
        "ma": "LK224",
        "ten": "Luật đất đai",
        "lop": "LUATDATDAI.1",
        "thu": "4",
        "ca": "6-8",
        "phong": "B303",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "LK224",
        "ten": "Luật đất đai",
        "lop": "LUATDATDAI.2",
        "thu": "4",
        "ca": "9-11",
        "phong": "B201",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "LK224",
        "ten": "Luật đất đai",
        "lop": "LUATDATDAI.1",
        "thu": "7",
        "ca": "1-2",
        "phong": "B201",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "LK224",
        "ten": "Luật đất đai",
        "lop": "LUATDATDAI.2",
        "thu": "7",
        "ca": "3-5",
        "phong": "B201",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "LK224",
        "ten": "Luật đất đai",
        "lop": "LUATDATDAI.1",
        "thu": "7",
        "ca": "6-8",
        "phong": "B201",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "LK224",
        "ten": "Luật đất đai",
        "lop": "LUATDATDAI.2",
        "thu": "7",
        "ca": "9-10",
        "phong": "B201",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "LK325",
        "ten": "Luật đầu tư",
        "lop": "LUATDAUTU.1",
        "thu": "3",
        "ca": "1-2",
        "phong": "B201",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LK325",
        "ten": "Luật đầu tư",
        "lop": "LUATDAUTU.2",
        "thu": "3",
        "ca": "3-5",
        "phong": "B307",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LK325",
        "ten": "Luật đầu tư",
        "lop": "LUATDAUTU.2",
        "thu": "6",
        "ca": "1-2",
        "phong": "B201",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LK325",
        "ten": "Luật đầu tư",
        "lop": "LUATDAUTU.1",
        "thu": "6",
        "ca": "3-5",
        "phong": "B303",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LK309",
        "ten": "Luật Kiểm toán Nhà nước",
        "lop": "LUATKIEMTOAN.1",
        "thu": "3",
        "ca": "1-2",
        "phong": "B301",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LK309",
        "ten": "Luật Kiểm toán Nhà nước",
        "lop": "LUATKIEMTOAN.2",
        "thu": "3",
        "ca": "3-5",
        "phong": "B301",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LK309",
        "ten": "Luật Kiểm toán Nhà nước",
        "lop": "LUATKIEMTOAN.1",
        "thu": "3",
        "ca": "6-8",
        "phong": "B301",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LK309",
        "ten": "Luật Kiểm toán Nhà nước",
        "lop": "LUATKIEMTOAN.2",
        "thu": "3",
        "ca": "9-10",
        "phong": "B301",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "EC221",
        "ten": "Luật Kinh tế",
        "lop": "LUATKTE.3",
        "thu": "3",
        "ca": "3-5",
        "phong": "B205",
        "sotin": "2",
        "giangvien": "Nguyễn Đình Tài(CXL006)"
    },
    {
        "ma": "EC221",
        "ten": "Luật Kinh tế",
        "lop": "LUATKTE.4",
        "thu": "4",
        "ca": "6-8",
        "phong": "A406",
        "sotin": "2",
        "giangvien": "Trần Thị Thu Hà(CXL010)"
    },
    {
        "ma": "LK212",
        "ten": "Luật lao động",
        "lop": "LUATLD.1",
        "thu": "3",
        "ca": "6-8",
        "phong": "B201",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LK212",
        "ten": "Luật lao động",
        "lop": "LUATLD.2",
        "thu": "3",
        "ca": "9-11",
        "phong": "B201",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LK212",
        "ten": "Luật lao động",
        "lop": "LUATLD.2",
        "thu": "5",
        "ca": "6-8",
        "phong": "B201",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LK212",
        "ten": "Luật lao động",
        "lop": "LUATLD.1",
        "thu": "5",
        "ca": "9-11",
        "phong": "B201",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LK314",
        "ten": "Luật Ngân hàng Việt Nam",
        "lop": "LUATNHVN.1",
        "thu": "5",
        "ca": "1-2",
        "phong": "B301",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LK314",
        "ten": "Luật Ngân hàng Việt Nam",
        "lop": "LUATNHVN.2",
        "thu": "5",
        "ca": "3-5",
        "phong": "B301",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LK314",
        "ten": "Luật Ngân hàng Việt Nam",
        "lop": "LUATNHVN.2",
        "thu": "6",
        "ca": "1-2",
        "phong": "B301",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LK314",
        "ten": "Luật Ngân hàng Việt Nam",
        "lop": "LUATNHVN.1",
        "thu": "6",
        "ca": "3-5",
        "phong": "B301",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "IE331",
        "ten": "Luật thương mại quốc tế",
        "lop": "LUATTMQTE.1",
        "thu": "3",
        "ca": "6-8",
        "phong": "B205",
        "sotin": "3",
        "giangvien": "Trần Thị Thu Hà(CXL010)"
    },
    {
        "ma": "LQ325",
        "ten": "Luật Thương mại quốc tế",
        "lop": "LUATTMQTE.1",
        "thu": "4",
        "ca": "1-2",
        "phong": "B201",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LQ325",
        "ten": "Luật Thương mại quốc tế",
        "lop": "LUATTMQTE.2",
        "thu": "4",
        "ca": "3-5",
        "phong": "B301",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "IE331",
        "ten": "Luật thương mại quốc tế",
        "lop": "LUATTMQTE.1",
        "thu": "4",
        "ca": "4-5",
        "phong": "B103",
        "sotin": "3",
        "giangvien": "Trần Thị Thu Hà(CXL010)"
    },
    {
        "ma": "LQ325",
        "ten": "Luật Thương mại quốc tế",
        "lop": "LUATTMQTE.1",
        "thu": "4",
        "ca": "6-8",
        "phong": "B307",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LQ325",
        "ten": "Luật Thương mại quốc tế",
        "lop": "LUATTMQTE.2",
        "thu": "4",
        "ca": "9-10",
        "phong": "B303",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LK302",
        "ten": "Luật Thương mại Việt Nam",
        "lop": "LUATTMVN.1",
        "thu": "3",
        "ca": "1-2",
        "phong": "B203",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LK302",
        "ten": "Luật Thương mại Việt Nam",
        "lop": "LUATTMVN.2",
        "thu": "3",
        "ca": "3-5",
        "phong": "B203",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LK302",
        "ten": "Luật Thương mại Việt Nam",
        "lop": "LUATTMVN.2",
        "thu": "5",
        "ca": "1-2",
        "phong": "B201",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LK302",
        "ten": "Luật Thương mại Việt Nam",
        "lop": "LUATTMVN.1",
        "thu": "5",
        "ca": "3-5",
        "phong": "B201",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "NR416A",
        "ten": "Lý thuyết chăm sóc SK người cao tuổi và BN hấp hối",
        "lop": "LTSKHOENCAOTUOI.1 (TC)",
        "thu": "5",
        "ca": "10-12",
        "phong": "A609",
        "sotin": "1",
        "giangvien": "Nguyễn Thị Như Mai(CSN003)"
    },
    {
        "ma": "NR331A",
        "ten": "Lý thuyết điều dưỡng các bệnh ngoại khoa 1",
        "lop": "LTNGOAIKHOA1.1",
        "thu": "4",
        "ca": "8-10",
        "phong": "B604",
        "sotin": "2",
        "giangvien": "Đỗ Quang Tuyển(CSN006)"
    },
    {
        "ma": "NR211A",
        "ten": "Lý thuyết điều dưỡng các bệnh nội khoa 1",
        "lop": "LTBENHNOIKHOA1.1",
        "thu": "5",
        "ca": "8-10",
        "phong": "B105",
        "sotin": "2",
        "giangvien": "Nguyễn Khánh Huyền(CSN030)"
    },
    {
        "ma": "NR314A",
        "ten": "Lý thuyết điều dưỡng các bệnh truyền nhiễm",
        "lop": "LTTRUYENNHIEM.1",
        "thu": "2",
        "ca": "9-10",
        "phong": "BOMON",
        "sotin": "1",
        "giangvien": "Nguyễn Thị Thùy Trang(CSN021)"
    },
    {
        "ma": "NR314A",
        "ten": "Lý thuyết điều dưỡng các bệnh truyền nhiễm",
        "lop": "LTTRUYENNHIEM.2",
        "thu": "4",
        "ca": "9-10",
        "phong": "BOMON",
        "sotin": "1",
        "giangvien": "Nguyễn Thị Thùy Trang(CSN021)"
    },
    {
        "ma": "NR310A",
        "ten": "Lý thuyết điều dưỡng hồi sức cấp cứu",
        "lop": "LTHOISUCCAPCUU.1",
        "thu": "2",
        "ca": "6-8",
        "phong": "BOMON",
        "sotin": "2",
        "giangvien": "Nguyễn Thị Thùy Trang(CSN021)"
    },
    {
        "ma": "NR310A",
        "ten": "Lý thuyết điều dưỡng hồi sức cấp cứu",
        "lop": "LTHOISUCCAPCUU.2",
        "thu": "4",
        "ca": "6-8",
        "phong": "BOMON",
        "sotin": "2",
        "giangvien": "Nguyễn Thị Thùy Trang(CSN021)"
    },
    {
        "ma": "CF231",
        "ten": "Lý thuyết thông tin và mã hóa",
        "lop": "LTTHONGTINMAHOA.1_LT",
        "thu": "3",
        "ca": "6-7",
        "phong": "A509",
        "sotin": "2",
        "giangvien": "Nguyễn Công Sứ(CTM021)"
    },
    {
        "ma": "CF231",
        "ten": "Lý thuyết thông tin và mã hóa",
        "lop": "LTTHONGTINMAHOA.1.1_BT",
        "thu": "5",
        "ca": "6-8",
        "phong": "A409",
        "sotin": "2",
        "giangvien": "Nguyễn Công Sứ(CTM021)"
    },
    {
        "ma": "NW212",
        "ten": "Mạng máy tính",
        "lop": "MANGMT.1.1_BT",
        "thu": "2",
        "ca": "1-3",
        "phong": "B706",
        "sotin": "2",
        "giangvien": "Nguyễn Hữu  Tiến(CTI049)"
    },
    {
        "ma": "NW212",
        "ten": "Mạng máy tính",
        "lop": "MANGMT.2_LT",
        "thu": "2",
        "ca": "4-5",
        "phong": "B706",
        "sotin": "2",
        "giangvien": "Nguyễn Hữu  Tiến(CTI049)"
    },
    {
        "ma": "NW212",
        "ten": "Mạng máy tính",
        "lop": "MANGMT.3_LT",
        "thu": "3",
        "ca": "1-2",
        "phong": "B706",
        "sotin": "2",
        "giangvien": "Nguyễn Hữu  Tiến(CTI049)"
    },
    {
        "ma": "NW212",
        "ten": "Mạng máy tính",
        "lop": "MANGMT.1_LT",
        "thu": "3",
        "ca": "6-7",
        "phong": "B706",
        "sotin": "2",
        "giangvien": "Nguyễn Hữu  Tiến(CTI049)"
    },
    {
        "ma": "NW212",
        "ten": "Mạng máy tính",
        "lop": "MANGMT.2.1_BT",
        "thu": "3",
        "ca": "8-10",
        "phong": "B706",
        "sotin": "2",
        "giangvien": "Nguyễn Hữu  Tiến(CTI049)"
    },
    {
        "ma": "NW212",
        "ten": "Mạng máy tính",
        "lop": "MANGMT.4_LT",
        "thu": "5",
        "ca": "6-7",
        "phong": "B706",
        "sotin": "2",
        "giangvien": "Trần Hoài Thanh(PCN002)"
    },
    {
        "ma": "NW212",
        "ten": "Mạng máy tính",
        "lop": "MANGMT.5.1_BT",
        "thu": "5",
        "ca": "8-10",
        "phong": "B706",
        "sotin": "2",
        "giangvien": "Trần Hoài Thanh(PCN002)"
    },
    {
        "ma": "NW212",
        "ten": "Mạng máy tính",
        "lop": "MANGMT.3.1_BT",
        "thu": "6",
        "ca": "3-5",
        "phong": "B706",
        "sotin": "2",
        "giangvien": "Nguyễn Hữu  Tiến(CTI049)"
    },
    {
        "ma": "NW212",
        "ten": "Mạng máy tính",
        "lop": "MANGMT.5_LT",
        "thu": "6",
        "ca": "6-7",
        "phong": "B706",
        "sotin": "2",
        "giangvien": "Trần Hoài Thanh(PCN002)"
    },
    {
        "ma": "NW212",
        "ten": "Mạng máy tính",
        "lop": "MANGMT.4.1_BT",
        "thu": "6",
        "ca": "8-10",
        "phong": "B706",
        "sotin": "2",
        "giangvien": "Trần Hoài Thanh(PCN002)"
    },
    {
        "ma": "NW212",
        "ten": "Mạng máy tính",
        "lop": "MANGMT.6.1_BT",
        "thu": "7",
        "ca": "1-3",
        "phong": "B706",
        "sotin": "2",
        "giangvien": "Trần Tuấn Toàn(CTI005)"
    },
    {
        "ma": "NW212",
        "ten": "Mạng máy tính",
        "lop": "MANGMT.7_LT",
        "thu": "7",
        "ca": "4-5",
        "phong": "B706",
        "sotin": "2",
        "giangvien": "Trần Tuấn Toàn(CTI005)"
    },
    {
        "ma": "NW212",
        "ten": "Mạng máy tính",
        "lop": "MANGMT.6_LT",
        "thu": "7",
        "ca": "6-7",
        "phong": "B706",
        "sotin": "2",
        "giangvien": "Trần Tuấn Toàn(CTI005)"
    },
    {
        "ma": "NW212",
        "ten": "Mạng máy tính",
        "lop": "MANGMT.7.1_BT",
        "thu": "7",
        "ca": "8-10",
        "phong": "B706",
        "sotin": "2",
        "giangvien": "Trần Tuấn Toàn(CTI005)"
    },
    {
        "ma": "MK202",
        "ten": "Marketing căn bản",
        "lop": "MARKETINGCB.2",
        "thu": "2",
        "ca": "1-2",
        "phong": "A607",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thùy Trang(CQM010)"
    },
    {
        "ma": "MK202",
        "ten": "Marketing căn bản",
        "lop": "MARKETINGCB.2",
        "thu": "7",
        "ca": "8-10",
        "phong": "B105",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thùy Trang(CQM010)"
    },
    {
        "ma": "MK430",
        "ten": "Marketing dịch vụ",
        "lop": "MARKETINGDV.2",
        "thu": "2",
        "ca": "3-5",
        "phong": "A406",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Liên Hương(CQM014)"
    },
    {
        "ma": "MK430",
        "ten": "Marketing dịch vụ",
        "lop": "MARKETINGDV.2",
        "thu": "6",
        "ca": "1-2",
        "phong": "A406",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Liên Hương(CQM014)"
    },
    {
        "ma": "MK338",
        "ten": "Marketing du lịch",
        "lop": "MARKETINGDL.1",
        "thu": "6",
        "ca": "4-5",
        "phong": "B407",
        "sotin": "3",
        "giangvien": "Phạm Trần Thăng Long(CDL004)"
    },
    {
        "ma": "MK338",
        "ten": "Marketing du lịch",
        "lop": "MARKETINGDL.1",
        "thu": "6",
        "ca": "6-8",
        "phong": "B407",
        "sotin": "3",
        "giangvien": "Phạm Trần Thăng Long(CDL004)"
    },
    {
        "ma": "MK337",
        "ten": "Marketing trong kinh doanh du lịch",
        "lop": "MARKETINGDULICH.1",
        "thu": "2",
        "ca": "8-10",
        "phong": "A606",
        "sotin": "2",
        "giangvien": "Phạm Trần Thăng Long(CDL004)"
    },
    {
        "ma": "MK337",
        "ten": "Marketing trong kinh doanh du lịch",
        "lop": "MARKETINGDULICH.2",
        "thu": "3",
        "ca": "8-10",
        "phong": "A606",
        "sotin": "2",
        "giangvien": "Phạm Trần Thăng Long(CDL004)"
    },
    {
        "ma": "TC300",
        "ten": "Mô hình hóa và mô phỏng",
        "lop": "MOHHOA&MOPHONG.1",
        "thu": "5",
        "ca": "1-3",
        "phong": "A705",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "TC300",
        "ten": "Mô hình hóa và mô phỏng",
        "lop": "MOHHOA&MOPHONG.1",
        "thu": "5",
        "ca": "6-7",
        "phong": "A509",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "AD219",
        "ten": "Nâng cao chất lượng giọng hát",
        "lop": "NCAOGIONGHAT.2",
        "thu": "3",
        "ca": "6-8",
        "phong": "B711",
        "sotin": "4",
        "giangvien": "Hoàng Bích Hà(MAN016)"
    },
    {
        "ma": "AD219",
        "ten": "Nâng cao chất lượng giọng hát",
        "lop": "NCAOGIONGHAT.2",
        "thu": "5",
        "ca": "3-5",
        "phong": "B711",
        "sotin": "4",
        "giangvien": "Hoàng Bích Hà(MAN016)"
    },
    {
        "ma": "BK312",
        "ten": "Ngân hàng phát triển",
        "lop": "NGANHANGPT.1",
        "thu": "4",
        "ca": "3-5",
        "phong": "A406",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thúy(CQB005)"
    },
    {
        "ma": "BK312",
        "ten": "Ngân hàng phát triển",
        "lop": "NGANHANGPT.1",
        "thu": "5",
        "ca": "6-7",
        "phong": "B101",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thúy(CQB005)"
    },
    {
        "ma": "BK201",
        "ten": "Ngân hàng thương mại 1",
        "lop": "NGANHANGTM1.2",
        "thu": "2",
        "ca": "3-5",
        "phong": "Acorebank",
        "sotin": "3",
        "giangvien": "Lê Thị Hà Thu(CQB007)"
    },
    {
        "ma": "BK201",
        "ten": "Ngân hàng thương mại 1",
        "lop": "NGANHANGTM1.1",
        "thu": "2",
        "ca": "6-7",
        "phong": "Acorebank",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thúy(CQB005)"
    },
    {
        "ma": "BK201",
        "ten": "Ngân hàng thương mại 1",
        "lop": "NGANHANGTM1.4",
        "thu": "3",
        "ca": "1-2",
        "phong": "Acorebank",
        "sotin": "3",
        "giangvien": "Phạm Thị Bảo Oanh(CQB006)"
    },
    {
        "ma": "BK201",
        "ten": "Ngân hàng thương mại 1",
        "lop": "NGANHANGTM1.1",
        "thu": "3",
        "ca": "3-5",
        "phong": "Acorebank",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thúy(CQB005)"
    },
    {
        "ma": "BK201",
        "ten": "Ngân hàng thương mại 1",
        "lop": "NGANHANGTM1.2",
        "thu": "3",
        "ca": "6-7",
        "phong": "Acorebank",
        "sotin": "3",
        "giangvien": "Lê Thị Hà Thu(CQB007)"
    },
    {
        "ma": "BK201",
        "ten": "Ngân hàng thương mại 1",
        "lop": "NGANHANGTM1.3",
        "thu": "3",
        "ca": "8-10",
        "phong": "Acorebank",
        "sotin": "3",
        "giangvien": "Lê Thị Hà Thu(CQB007)"
    },
    {
        "ma": "BK201",
        "ten": "Ngân hàng thương mại 1",
        "lop": "NGANHANGTM1.4",
        "thu": "4",
        "ca": "3-5",
        "phong": "Acorebank",
        "sotin": "3",
        "giangvien": "Phạm Thị Bảo Oanh(CQB006)"
    },
    {
        "ma": "BK201",
        "ten": "Ngân hàng thương mại 1",
        "lop": "NGANHANGTM1.1",
        "thu": "5",
        "ca": "1-2",
        "phong": "Acorebank",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thúy(CQB005)"
    },
    {
        "ma": "BK201",
        "ten": "Ngân hàng thương mại 1",
        "lop": "NGANHANGTM1.3",
        "thu": "6",
        "ca": "6-7",
        "phong": "Acorebank",
        "sotin": "3",
        "giangvien": "Lê Thị Hà Thu(CQB007)"
    },
    {
        "ma": "BK201",
        "ten": "Ngân hàng thương mại 1",
        "lop": "NGANHANGTM1.4",
        "thu": "6",
        "ca": "9-10",
        "phong": "Acorebank",
        "sotin": "3",
        "giangvien": "Phạm Thị Bảo Oanh(CQB006)"
    },
    {
        "ma": "BK201",
        "ten": "Ngân hàng thương mại 1",
        "lop": "NGANHANGTM1.2",
        "thu": "7",
        "ca": "1-2",
        "phong": "Acorebank",
        "sotin": "3",
        "giangvien": "Lê Thị Hà Thu(CQB007)"
    },
    {
        "ma": "BK201",
        "ten": "Ngân hàng thương mại 1",
        "lop": "NGANHANGTM1.3",
        "thu": "7",
        "ca": "6-7",
        "phong": "A507",
        "sotin": "3",
        "giangvien": "Lê Thị Hà Thu(CQB007)"
    },
    {
        "ma": "BK302",
        "ten": "Ngân hàng thương mại 2",
        "lop": "NGANHANGTM2.1",
        "thu": "3",
        "ca": "4-5",
        "phong": "B703",
        "sotin": "3",
        "giangvien": "Lê Thị Hà Thu(CQB007)"
    },
    {
        "ma": "BK302",
        "ten": "Ngân hàng thương mại 2",
        "lop": "NGANHANGTM2.1",
        "thu": "6",
        "ca": "8-9",
        "phong": "B601",
        "sotin": "3",
        "giangvien": "Lê Thị Hà Thu(CQB007)"
    },
    {
        "ma": "BK302",
        "ten": "Ngân hàng thương mại 2",
        "lop": "NGANHANGTM2.1",
        "thu": "7",
        "ca": "3-5",
        "phong": "Acorebank",
        "sotin": "3",
        "giangvien": "Lê Thị Hà Thu(CQB007)"
    },
    {
        "ma": "BK313",
        "ten": "Ngân hàng trung ương",
        "lop": "NGANHANGTW.1",
        "thu": "2",
        "ca": "6-7",
        "phong": "B203",
        "sotin": "3",
        "giangvien": "Lê Thị Hà Thu(CQB007)"
    },
    {
        "ma": "BK313",
        "ten": "Ngân hàng trung ương",
        "lop": "NGANHANGTW.1",
        "thu": "7",
        "ca": "8-10",
        "phong": "B203",
        "sotin": "3",
        "giangvien": "Lê Thị Hà Thu(CQB007)"
    },
    {
        "ma": "TR334",
        "ten": "Nghiệp vụ phục vụ Bar",
        "lop": "NGHIEPVUBAR.1",
        "thu": "2",
        "ca": "3-5",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thanh Hương(CDL011)"
    },
    {
        "ma": "TR334",
        "ten": "Nghiệp vụ phục vụ Bar",
        "lop": "NGHIEPVUBAR.1",
        "thu": "2",
        "ca": "6-7",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thanh Hương(CDL011)"
    },
    {
        "ma": "CF301",
        "ten": "Ngôn ngữ hình thức và Otomat",
        "lop": "NGONNGUHT&OTOMAT.T78703",
        "thu": "2",
        "ca": "6-7",
        "phong": "A706",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "CF301",
        "ten": "Ngôn ngữ hình thức và Otomat",
        "lop": "NGONNGUHT&OTOMAT.T78703",
        "thu": "6",
        "ca": "1-3",
        "phong": "A706",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "VL100",
        "ten": "Ngôn ngữ học đại cương",
        "lop": "NGONNGUHOCDC.1",
        "thu": "3",
        "ca": "3-5",
        "phong": "B101",
        "sotin": "2",
        "giangvien": "Vũ Linh Chi(CXV015)"
    },
    {
        "ma": "VL100",
        "ten": "Ngôn ngữ học đại cương",
        "lop": "NGONNGUHOCDC.2",
        "thu": "3",
        "ca": "6-8",
        "phong": "B307",
        "sotin": "2",
        "giangvien": "Vũ Linh Chi(CXV015)"
    },
    {
        "ma": "VL100",
        "ten": "Ngôn ngữ học đại cương",
        "lop": "NGONNGUHOCDC.3",
        "thu": "5",
        "ca": "3-5",
        "phong": "A303",
        "sotin": "2",
        "giangvien": "Vũ Linh Chi(CXV015)"
    },
    {
        "ma": "EL322",
        "ten": "Ngữ âm và âm vị học",
        "lop": "NGUAM.3",
        "thu": "7",
        "ca": "3-5",
        "phong": "A405",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "EL325",
        "ten": "Ngữ nghĩa học từ vựng",
        "lop": "NNHOCTVUNG.3",
        "thu": "6",
        "ca": "6-8",
        "phong": "A405",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "EL221",
        "ten": "Ngữ pháp học",
        "lop": "EL221.1",
        "thu": "3",
        "ca": "3-5",
        "phong": "A405",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "LG201",
        "ten": "Nguyên lý cơ bản về logistics và quản lý chuỗi cung ứng",
        "lop": "NLCBLOGIC&QLCCU.1",
        "thu": "3",
        "ca": "4-5",
        "phong": "B204",
        "sotin": "3",
        "giangvien": "Nguyễn Thanh Thủy(CQL004)"
    },
    {
        "ma": "LG201",
        "ten": "Nguyên lý cơ bản về logistics và quản lý chuỗi cung ứng",
        "lop": "NLCBLOGIC&QLCCU.1",
        "thu": "4",
        "ca": "9-10",
        "phong": "B110",
        "sotin": "3",
        "giangvien": "Nguyễn Thanh Thủy(CQL004)"
    },
    {
        "ma": "LG201",
        "ten": "Nguyên lý cơ bản về logistics và quản lý chuỗi cung ứng",
        "lop": "NLCBLOGIC&QLCCU.1",
        "thu": "5",
        "ca": "9-10",
        "phong": "B108",
        "sotin": "3",
        "giangvien": "Nguyễn Thanh Thủy(CQL004)"
    },
    {
        "ma": "CS315",
        "ten": "Nguyên lý hệ điều hành",
        "lop": "NLHEDIEUHANH.1",
        "thu": "6",
        "ca": "1-3",
        "phong": "A601",
        "sotin": "3",
        "giangvien": "Trần Sơn Tùng(MTI050)"
    },
    {
        "ma": "CS315",
        "ten": "Nguyên lý hệ điều hành",
        "lop": "NLHEDIEUHANH.2",
        "thu": "6",
        "ca": "4-5",
        "phong": "A403",
        "sotin": "3",
        "giangvien": "Trần Sơn Tùng(MTI050)"
    },
    {
        "ma": "CS315",
        "ten": "Nguyên lý hệ điều hành",
        "lop": "NLHEDIEUHANH.1",
        "thu": "6",
        "ca": "6-7",
        "phong": "A603",
        "sotin": "3",
        "giangvien": "Trần Sơn Tùng(MTI050)"
    },
    {
        "ma": "CS315",
        "ten": "Nguyên lý hệ điều hành",
        "lop": "NLHEDIEUHANH.2",
        "thu": "6",
        "ca": "8-10",
        "phong": "A609",
        "sotin": "3",
        "giangvien": "Trần Sơn Tùng(MTI050)"
    },
    {
        "ma": "CS315",
        "ten": "Nguyên lý hệ điều hành",
        "lop": "NLHEDIEUHANH.3",
        "thu": "7",
        "ca": "1-3",
        "phong": "A609",
        "sotin": "3",
        "giangvien": "Trần Sơn Tùng(MTI050)"
    },
    {
        "ma": "CS315",
        "ten": "Nguyên lý hệ điều hành",
        "lop": "NLHEDIEUHANH.4",
        "thu": "7",
        "ca": "4-5",
        "phong": "A609",
        "sotin": "3",
        "giangvien": "Trần Sơn Tùng(MTI050)"
    },
    {
        "ma": "CS315",
        "ten": "Nguyên lý hệ điều hành",
        "lop": "NLHEDIEUHANH.3",
        "thu": "7",
        "ca": "6-7",
        "phong": "A609",
        "sotin": "3",
        "giangvien": "Trần Sơn Tùng(MTI050)"
    },
    {
        "ma": "CS315",
        "ten": "Nguyên lý hệ điều hành",
        "lop": "NLHEDIEUHANH.4",
        "thu": "7",
        "ca": "8-10",
        "phong": "A609",
        "sotin": "3",
        "giangvien": "Trần Sơn Tùng(MTI050)"
    },
    {
        "ma": "AC201",
        "ten": "Nguyên lý kế toán",
        "lop": "NLKETOAN.8",
        "thu": "2",
        "ca": "1-3",
        "phong": "B402",
        "sotin": "3",
        "giangvien": "Nguyễn Trung Thùy Linh(CQA012)"
    },
    {
        "ma": "AC201",
        "ten": "Nguyên lý kế toán",
        "lop": "NLKETOAN.9",
        "thu": "2",
        "ca": "4-5",
        "phong": "A509",
        "sotin": "3",
        "giangvien": "Nguyễn Trung Thùy Linh(CQA012)"
    },
    {
        "ma": "AC201",
        "ten": "Nguyên lý kế toán",
        "lop": "NLKETOAN.10",
        "thu": "2",
        "ca": "6-8",
        "phong": "B106",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Hồng Anh(CQA010)"
    },
    {
        "ma": "AC201",
        "ten": "Nguyên lý kế toán",
        "lop": "NLKETOAN.7",
        "thu": "3",
        "ca": "3-5",
        "phong": "B108",
        "sotin": "3",
        "giangvien": "Nguyễn Thu Hoài(CQA007)"
    },
    {
        "ma": "AC201",
        "ten": "Nguyên lý kế toán",
        "lop": "NLKETOAN.11",
        "thu": "3",
        "ca": "6-7",
        "phong": "A609",
        "sotin": "3",
        "giangvien": "Đào Diệu Hằng(CQA003)"
    },
    {
        "ma": "AC201",
        "ten": "Nguyên lý kế toán",
        "lop": "NLKETOAN.12",
        "thu": "3",
        "ca": "6-7",
        "phong": "A606",
        "sotin": "3",
        "giangvien": "Nguyễn Thanh Huyền(CQA002)"
    },
    {
        "ma": "AC201",
        "ten": "Nguyên lý kế toán",
        "lop": "NLKETOAN.13",
        "thu": "3",
        "ca": "6-7",
        "phong": "B412",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "AC201",
        "ten": "Nguyên lý kế toán",
        "lop": "NLKETOAN.6",
        "thu": "3",
        "ca": "8-10",
        "phong": "A406",
        "sotin": "3",
        "giangvien": "Nguyễn Thanh Huyền(CQA002)"
    },
    {
        "ma": "AC201",
        "ten": "Nguyên lý kế toán",
        "lop": "NLKETOAN.13",
        "thu": "4",
        "ca": "8-10",
        "phong": "B506",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "AC201",
        "ten": "Nguyên lý kế toán",
        "lop": "NLKETOAN.12",
        "thu": "5",
        "ca": "1-3",
        "phong": "B501",
        "sotin": "3",
        "giangvien": "Nguyễn Thanh Huyền(CQA002)"
    },
    {
        "ma": "AC201",
        "ten": "Nguyên lý kế toán",
        "lop": "NLKETOAN.6",
        "thu": "5",
        "ca": "4-5",
        "phong": "A602",
        "sotin": "3",
        "giangvien": "Nguyễn Thanh Huyền(CQA002)"
    },
    {
        "ma": "AC201",
        "ten": "Nguyên lý kế toán",
        "lop": "NLKETOAN.7",
        "thu": "5",
        "ca": "6-7",
        "phong": "B208",
        "sotin": "3",
        "giangvien": "Nguyễn Thu Hoài(CQA007)"
    },
    {
        "ma": "AC201",
        "ten": "Nguyên lý kế toán",
        "lop": "NLKETOAN.11",
        "thu": "5",
        "ca": "8-10",
        "phong": "B607",
        "sotin": "3",
        "giangvien": "Đào Diệu Hằng(CQA003)"
    },
    {
        "ma": "AC201",
        "ten": "Nguyên lý kế toán",
        "lop": "NLKETOAN.9",
        "thu": "5",
        "ca": "8-10",
        "phong": "A507",
        "sotin": "3",
        "giangvien": "Nguyễn Trung Thùy Linh(CQA012)"
    },
    {
        "ma": "AC201",
        "ten": "Nguyên lý kế toán",
        "lop": "NLKETOAN.8",
        "thu": "6",
        "ca": "4-5",
        "phong": "B106",
        "sotin": "3",
        "giangvien": "Nguyễn Trung Thùy Linh(CQA012)"
    },
    {
        "ma": "AC201",
        "ten": "Nguyên lý kế toán",
        "lop": "NLKETOAN.10",
        "thu": "6",
        "ca": "6-7",
        "phong": "A507",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Hồng Anh(CQA010)"
    },
    {
        "ma": "MK201",
        "ten": "Nguyên lý marketing",
        "lop": "NLYMARKETING.1",
        "thu": "7",
        "ca": "3-5",
        "phong": "B105",
        "sotin": "2",
        "giangvien": "Nguyễn Tường Minh(CQM016)"
    },
    {
        "ma": "TR111",
        "ten": "Nhập môn du lịch",
        "lop": "NHAPMONDL.1",
        "thu": "2",
        "ca": "4-5",
        "phong": "B202",
        "sotin": "3",
        "giangvien": "Tạ Dương Trà My(CDL014)"
    },
    {
        "ma": "TR111",
        "ten": "Nhập môn du lịch",
        "lop": "NHAPMONDL.1",
        "thu": "4",
        "ca": "8-10",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Tạ Dương Trà My(CDL014)"
    },
    {
        "ma": "EC102",
        "ten": "Nhập môn kinh tế học",
        "lop": "NMONKTEHOC.2",
        "thu": "3",
        "ca": "3-5",
        "phong": "B105",
        "sotin": "2",
        "giangvien": "Nguyễn Thị Thanh Thảo(CQE005)"
    },
    {
        "ma": "EC102",
        "ten": "Nhập môn kinh tế học",
        "lop": "NMONKTEHOC.3",
        "thu": "6",
        "ca": "8-10",
        "phong": "B105",
        "sotin": "2",
        "giangvien": "Lê Việt Đức(CQE021)"
    },
    {
        "ma": "EC315",
        "ten": "Nhập môn kinh tế quốc tế",
        "lop": "NMKTEQTE(NNGU).2",
        "thu": "3",
        "ca": "6-8",
        "phong": "B101",
        "sotin": "2",
        "giangvien": "Trần Thị Thùy Linh(CQE001)"
    },
    {
        "ma": "EC315",
        "ten": "Nhập môn kinh tế quốc tế",
        "lop": "NMKTEQTE(NNGU).3",
        "thu": "6",
        "ca": "6-8",
        "phong": "B101",
        "sotin": "2",
        "giangvien": "Trần Thị Thùy Linh(CQE001)"
    },
    {
        "ma": "AI130",
        "ten": "Nhập môn trí tuệ nhân tạo",
        "lop": "NHAPMONTTNHANTAO.1",
        "thu": "2",
        "ca": "6-7",
        "phong": "A509",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Huyền Châu(PAI001)"
    },
    {
        "ma": "AI130",
        "ten": "Nhập môn trí tuệ nhân tạo",
        "lop": "NHAPMONTTNHANTAO.1",
        "thu": "4",
        "ca": "6-8",
        "phong": "B310",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Huyền Châu(PAI001)"
    },
    {
        "ma": "AD314",
        "ten": "Nhảy hiện đại",
        "lop": "NHAYHIENDAI.3",
        "thu": "2",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "4",
        "giangvien": "Nguyễn Tuấn Linh(CAN008)"
    },
    {
        "ma": "AD314",
        "ten": "Nhảy hiện đại",
        "lop": "NHAYHIENDAI.4",
        "thu": "2",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "4",
        "giangvien": "Nguyễn Tuấn Linh(CAN008)"
    },
    {
        "ma": "AD314",
        "ten": "Nhảy hiện đại",
        "lop": "NHAYHIENDAI.5",
        "thu": "3",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "4",
        "giangvien": "Nguyễn Đức Toàn(CAN006)"
    },
    {
        "ma": "AD314",
        "ten": "Nhảy hiện đại",
        "lop": "NHAYHIENDAI.6",
        "thu": "3",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "4",
        "giangvien": "Nguyễn Đức Toàn(CAN006)"
    },
    {
        "ma": "AD314",
        "ten": "Nhảy hiện đại",
        "lop": "NHAYHIENDAI.3",
        "thu": "4",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "4",
        "giangvien": "Nguyễn Tuấn Linh(CAN008)"
    },
    {
        "ma": "AD314",
        "ten": "Nhảy hiện đại",
        "lop": "NHAYHIENDAI.4",
        "thu": "4",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "4",
        "giangvien": "Nguyễn Tuấn Linh(CAN008)"
    },
    {
        "ma": "AD314",
        "ten": "Nhảy hiện đại",
        "lop": "NHAYHIENDAI.5",
        "thu": "5",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "4",
        "giangvien": "Nguyễn Đức Toàn(CAN006)"
    },
    {
        "ma": "AD314",
        "ten": "Nhảy hiện đại",
        "lop": "NHAYHIENDAI.6",
        "thu": "5",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "4",
        "giangvien": "Nguyễn Đức Toàn(CAN006)"
    },
    {
        "ma": "AD314",
        "ten": "Nhảy hiện đại",
        "lop": "NHAYHIENDAI.3",
        "thu": "6",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "4",
        "giangvien": "Nguyễn Tuấn Linh(CAN008)"
    },
    {
        "ma": "AD314",
        "ten": "Nhảy hiện đại",
        "lop": "NHAYHIENDAI.4",
        "thu": "6",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "4",
        "giangvien": "Nguyễn Tuấn Linh(CAN008)"
    },
    {
        "ma": "AD314",
        "ten": "Nhảy hiện đại",
        "lop": "NHAYHIENDAI.5",
        "thu": "7",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "4",
        "giangvien": "Nguyễn Đức Toàn(CAN006)"
    },
    {
        "ma": "AD314",
        "ten": "Nhảy hiện đại",
        "lop": "NHAYHIENDAI.6",
        "thu": "7",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "4",
        "giangvien": "Nguyễn Đức Toàn(CAN006)"
    },
    {
        "ma": "AD240",
        "ten": "Nhiếp ảnh cơ bản",
        "lop": "NHIEPANHCB.3.1_BT",
        "thu": "1",
        "ca": "1-3",
        "phong": "BOMON",
        "sotin": "3",
        "giangvien": "Phạm Hồng Đức(PCC013)"
    },
    {
        "ma": "AD240",
        "ten": "Nhiếp ảnh cơ bản",
        "lop": "NHIEPANHCB.4.1_BT",
        "thu": "1",
        "ca": "1-3",
        "phong": "BOMON",
        "sotin": "3",
        "giangvien": "Ngô Huy Hoàng(MXC009)"
    },
    {
        "ma": "AD240",
        "ten": "Nhiếp ảnh cơ bản",
        "lop": "NHIEPANHCB.3_LT",
        "thu": "3",
        "ca": "9-11",
        "phong": "B406",
        "sotin": "3",
        "giangvien": "Phạm Hồng Đức(PCC013)"
    },
    {
        "ma": "AD240",
        "ten": "Nhiếp ảnh cơ bản",
        "lop": "NHIEPANHCB.4_LT",
        "thu": "4",
        "ca": "9-11",
        "phong": "B406",
        "sotin": "3",
        "giangvien": "Ngô Huy Hoàng(MXC009)"
    },
    {
        "ma": "AC345",
        "ten": "Phân tích kinh doanh",
        "lop": "PHANTICHKD.5",
        "thu": "3",
        "ca": "3-5",
        "phong": "A407",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Hồng Anh(CQA010)"
    },
    {
        "ma": "AC345",
        "ten": "Phân tích kinh doanh",
        "lop": "PHANTICHKD.5",
        "thu": "6",
        "ca": "1-2",
        "phong": "A407",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Hồng Anh(CQA010)"
    },
    {
        "ma": "FN418",
        "ten": "Phân tích tài chính doanh nghiệp",
        "lop": "PTTAICHINHDN.2",
        "thu": "5",
        "ca": "8-10",
        "phong": "A509",
        "sotin": "2",
        "giangvien": "Đỗ Trường Sơn(CQB017)"
    },
    {
        "ma": "FN418",
        "ten": "Phân tích tài chính doanh nghiệp",
        "lop": "PTTAICHINHDN.1",
        "thu": "6",
        "ca": "3-5",
        "phong": "B604",
        "sotin": "2",
        "giangvien": "Đỗ Trường Sơn(CQB017)"
    },
    {
        "ma": "IS332",
        "ten": "Phân tích thiết kế hướng đối tượng",
        "lop": "TKEHDOITUONG.1",
        "thu": "2",
        "ca": "1-3",
        "phong": "A709",
        "sotin": "3",
        "giangvien": "Nguyễn Mạnh Hùng(CTI040)"
    },
    {
        "ma": "IS332",
        "ten": "Phân tích thiết kế hướng đối tượng",
        "lop": "TKEHDOITUONG.2",
        "thu": "2",
        "ca": "4-5",
        "phong": "A709",
        "sotin": "3",
        "giangvien": "Nguyễn Mạnh Hùng(CTI040)"
    },
    {
        "ma": "IS332",
        "ten": "Phân tích thiết kế hướng đối tượng",
        "lop": "TKEHDOITUONG.1",
        "thu": "2",
        "ca": "6-7",
        "phong": "A709",
        "sotin": "3",
        "giangvien": "Nguyễn Mạnh Hùng(CTI040)"
    },
    {
        "ma": "IS332",
        "ten": "Phân tích thiết kế hướng đối tượng",
        "lop": "TKEHDOITUONG.2",
        "thu": "2",
        "ca": "8-10",
        "phong": "A709",
        "sotin": "3",
        "giangvien": "Nguyễn Mạnh Hùng(CTI040)"
    },
    {
        "ma": "IS332",
        "ten": "Phân tích thiết kế hướng đối tượng",
        "lop": "TKEHDOITUONG.3",
        "thu": "3",
        "ca": "1-3",
        "phong": "A707",
        "sotin": "3",
        "giangvien": "Nguyễn Mạnh Hùng(CTI040)"
    },
    {
        "ma": "IS332",
        "ten": "Phân tích thiết kế hướng đối tượng",
        "lop": "TKEHDOITUONG.3",
        "thu": "5",
        "ca": "9-10",
        "phong": "A703",
        "sotin": "3",
        "giangvien": "Nguyễn Mạnh Hùng(CTI040)"
    },
    {
        "ma": "BA222",
        "ten": "Phân tích và lập dự án",
        "lop": "PTLAPDUAN.1",
        "thu": "4",
        "ca": "8-10",
        "phong": "B312",
        "sotin": "3",
        "giangvien": "Đỗ Trường Sơn(CQB017)"
    },
    {
        "ma": "BA222",
        "ten": "Phân tích và lập dự án",
        "lop": "PTLAPDUAN.2",
        "thu": "5",
        "ca": "3-5",
        "phong": "A407",
        "sotin": "3",
        "giangvien": "Đỗ Trường Sơn(CQB017)"
    },
    {
        "ma": "BA222",
        "ten": "Phân tích và lập dự án",
        "lop": "PTLAPDUAN.1",
        "thu": "5",
        "ca": "6-7",
        "phong": "A407",
        "sotin": "3",
        "giangvien": "Đỗ Trường Sơn(CQB017)"
    },
    {
        "ma": "BA222",
        "ten": "Phân tích và lập dự án",
        "lop": "PTLAPDUAN.2",
        "thu": "7",
        "ca": "6-7",
        "phong": "A601",
        "sotin": "3",
        "giangvien": "Đỗ Trường Sơn(CQB017)"
    },
    {
        "ma": "CF211",
        "ten": "Phân tích và thiết kế thuật toán",
        "lop": "PTTKTHUATTOAN.1_LT",
        "thu": "7",
        "ca": "4-5",
        "phong": "A706",
        "sotin": "2",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "CF211",
        "ten": "Phân tích và thiết kế thuật toán",
        "lop": "PTTKTHUATTOAN.1.1_BT",
        "thu": "7",
        "ca": "6-8",
        "phong": "A706",
        "sotin": "2",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "IT320",
        "ten": "Phát triển ứng dụng với Python",
        "lop": "LTPYTHON.1",
        "thu": "7",
        "ca": "1-2",
        "phong": "A708",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "IT320",
        "ten": "Phát triển ứng dụng với Python",
        "lop": "LTPYTHON.T78700",
        "thu": "7",
        "ca": "3-5",
        "phong": "A708",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "IT320",
        "ten": "Phát triển ứng dụng với Python",
        "lop": "LTPYTHON.1",
        "thu": "7",
        "ca": "6-8",
        "phong": "A708",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "IT320",
        "ten": "Phát triển ứng dụng với Python",
        "lop": "LTPYTHON.T78700",
        "thu": "7",
        "ca": "9-10",
        "phong": "A708",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "AN404",
        "ten": "Phối khí 2",
        "lop": "PHOIKHI.1",
        "thu": "5",
        "ca": "4-5",
        "phong": "B805",
        "sotin": "2",
        "giangvien": "Nguyễn Văn Thuấn(MAN007)"
    },
    {
        "ma": "AN404",
        "ten": "Phối khí 2",
        "lop": "PHOIKHI.2",
        "thu": "5",
        "ca": "6-7",
        "phong": "B805",
        "sotin": "2",
        "giangvien": "Nguyễn Văn Thuấn(MAN007)"
    },
    {
        "ma": "AN404",
        "ten": "Phối khí 2",
        "lop": "PHOIKHI.3",
        "thu": "6",
        "ca": "2-3",
        "phong": "B805",
        "sotin": "2",
        "giangvien": "Nguyễn Văn Thuấn(MAN007)"
    },
    {
        "ma": "TM221",
        "ten": "Phóng sự",
        "lop": "PHONGSU.1_LT",
        "thu": "4",
        "ca": "1-4",
        "phong": "B310",
        "sotin": "3",
        "giangvien": "Trần Bá Dung(CXC003)"
    },
    {
        "ma": "TM221",
        "ten": "Phóng sự",
        "lop": "PHONGSU.2_LT",
        "thu": "4",
        "ca": "6-9",
        "phong": "B206",
        "sotin": "3",
        "giangvien": "Trần Bá Dung(CXC003)"
    },
    {
        "ma": "TM221",
        "ten": "Phóng sự",
        "lop": "PHONGSU.3_LT",
        "thu": "6",
        "ca": "2-5",
        "phong": "B307",
        "sotin": "3",
        "giangvien": "Trần Bá Dung(CXC003)"
    },
    {
        "ma": "TM412",
        "ten": "Phóng sự truyền hình",
        "lop": "PHONGSUTH.1_LT",
        "thu": "7",
        "ca": "2-5",
        "phong": "A604",
        "sotin": "3",
        "giangvien": "Nguyễn Hải Đăng(MXC010)"
    },
    {
        "ma": "TM412",
        "ten": "Phóng sự truyền hình",
        "lop": "PHONGSUTH.2_LT",
        "thu": "7",
        "ca": "6-9",
        "phong": "A604",
        "sotin": "3",
        "giangvien": "Nguyễn Hải Đăng(MXC010)"
    },
    {
        "ma": "SM202",
        "ten": "Phương pháp nghiên cứu khoa học trong kinh tế",
        "lop": "PPNCKHOAHOCKTE.5",
        "thu": "2",
        "ca": "1-2",
        "phong": "B403",
        "sotin": "3",
        "giangvien": "Lê Thị Kim Chung(CQE004)"
    },
    {
        "ma": "SM202",
        "ten": "Phương pháp nghiên cứu khoa học trong kinh tế",
        "lop": "PPNCKHOAHOCKTE.8",
        "thu": "2",
        "ca": "1-2",
        "phong": "B205",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thúy(CQB005)"
    },
    {
        "ma": "SM202",
        "ten": "Phương pháp nghiên cứu khoa học trong kinh tế",
        "lop": "PPNCKHOAHOCKTE.6",
        "thu": "2",
        "ca": "6-7",
        "phong": "B101",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Phương(CQE019)"
    },
    {
        "ma": "SM202",
        "ten": "Phương pháp nghiên cứu khoa học trong kinh tế",
        "lop": "PPNCKHOAHOCKTE.7",
        "thu": "3",
        "ca": "1-2",
        "phong": "B101",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Phương(CQE019)"
    },
    {
        "ma": "SM202",
        "ten": "Phương pháp nghiên cứu khoa học trong kinh tế",
        "lop": "PPNCKHOAHOCKTE.7",
        "thu": "4",
        "ca": "3-5",
        "phong": "B401",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Phương(CQE019)"
    },
    {
        "ma": "SM202",
        "ten": "Phương pháp nghiên cứu khoa học trong kinh tế",
        "lop": "PPNCKHOAHOCKTE.9",
        "thu": "4",
        "ca": "6-7",
        "phong": "B105",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thúy(CQB005)"
    },
    {
        "ma": "SM202",
        "ten": "Phương pháp nghiên cứu khoa học trong kinh tế",
        "lop": "PPNCKHOAHOCKTE.8",
        "thu": "4",
        "ca": "8-10",
        "phong": "B205",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thúy(CQB005)"
    },
    {
        "ma": "SM202",
        "ten": "Phương pháp nghiên cứu khoa học trong kinh tế",
        "lop": "PPNCKHOAHOCKTE.5",
        "thu": "5",
        "ca": "3-5",
        "phong": "B407",
        "sotin": "3",
        "giangvien": "Lê Thị Kim Chung(CQE004)"
    },
    {
        "ma": "SM202",
        "ten": "Phương pháp nghiên cứu khoa học trong kinh tế",
        "lop": "PPNCKHOAHOCKTE.6",
        "thu": "5",
        "ca": "6-8",
        "phong": "B501",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Phương(CQE019)"
    },
    {
        "ma": "SM202",
        "ten": "Phương pháp nghiên cứu khoa học trong kinh tế",
        "lop": "PPNCKHOAHOCKTE.9",
        "thu": "5",
        "ca": "8-10",
        "phong": "B105",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thúy(CQB005)"
    },
    {
        "ma": "MC341",
        "ten": "Phương pháp nghiên cứu truyền thông",
        "lop": "PPNCUUTT.1_LT",
        "thu": "2",
        "ca": "3-5",
        "phong": "B610",
        "sotin": "2",
        "giangvien": "Hồ Xuân Ngọc(CXC008)"
    },
    {
        "ma": "MC341",
        "ten": "Phương pháp nghiên cứu truyền thông",
        "lop": "PPNCUUTT.2_LT",
        "thu": "2",
        "ca": "6-8",
        "phong": "B612",
        "sotin": "2",
        "giangvien": "Hồ Xuân Ngọc(CXC008)"
    },
    {
        "ma": "MC341",
        "ten": "Phương pháp nghiên cứu truyền thông",
        "lop": "PPNCUUTT.3_LT",
        "thu": "3",
        "ca": "6-8",
        "phong": "B609",
        "sotin": "2",
        "giangvien": "Hồ Xuân Ngọc(CXC008)"
    },
    {
        "ma": "MC341",
        "ten": "Phương pháp nghiên cứu truyền thông",
        "lop": "PPNCUUTT.4_LT",
        "thu": "3",
        "ca": "9-11",
        "phong": "B609",
        "sotin": "2",
        "giangvien": "Hồ Xuân Ngọc(CXC008)"
    },
    {
        "ma": "AN223B",
        "ten": "Piano ứng dụng 1B",
        "lop": "PIANOUNGDUNG1B.1",
        "thu": "3",
        "ca": "4-4",
        "phong": "B807",
        "sotin": "1",
        "giangvien": "Phạm Thanh Hà(MAN003)"
    },
    {
        "ma": "AN223B",
        "ten": "Piano ứng dụng 1B",
        "lop": "PIANOUNGDUNG1B.2",
        "thu": "4",
        "ca": "4-5",
        "phong": "B807",
        "sotin": "1",
        "giangvien": "Nguyễn Hoàng Anh Minh(MAN017)"
    },
    {
        "ma": "AN223B",
        "ten": "Piano ứng dụng 1B",
        "lop": "PIANOUNGDUNG1B.3",
        "thu": "5",
        "ca": "4-5",
        "phong": "B807",
        "sotin": "1",
        "giangvien": "Phạm Thanh Hà(MAN003)"
    },
    {
        "ma": "AN223B",
        "ten": "Piano ứng dụng 1B",
        "lop": "PIANOUNGDUNG1B.4",
        "thu": "5",
        "ca": "6-7",
        "phong": "B807",
        "sotin": "1",
        "giangvien": "Phạm Thanh Hà(MAN003)"
    },
    {
        "ma": "AN323B",
        "ten": "Piano ứng dụng 2B",
        "lop": "PIANOUD2B.1",
        "thu": "4",
        "ca": "2-3",
        "phong": "B807",
        "sotin": "1",
        "giangvien": "Nguyễn Hoàng Anh Minh(MAN017)"
    },
    {
        "ma": "AN323B",
        "ten": "Piano ứng dụng 2B",
        "lop": "PIANOUD2B.2",
        "thu": "6",
        "ca": "4-5",
        "phong": "B807",
        "sotin": "1",
        "giangvien": "Nguyễn Văn Thái(CAN011)"
    },
    {
        "ma": "AN323B",
        "ten": "Piano ứng dụng 2B",
        "lop": "PIANOUD2B.3",
        "thu": "6",
        "ca": "6-7",
        "phong": "B807",
        "sotin": "1",
        "giangvien": "Nguyễn Văn Thái(CAN011)"
    },
    {
        "ma": "MK425",
        "ten": "Quan hệ công chúng",
        "lop": "QHECONGCHUNG.2",
        "thu": "5",
        "ca": "4-5",
        "phong": "B204",
        "sotin": "3",
        "giangvien": "Phạm Long Châu(CQM006)"
    },
    {
        "ma": "MK425",
        "ten": "Quan hệ công chúng",
        "lop": "QHECONGCHUNG.2",
        "thu": "7",
        "ca": "8-10",
        "phong": "B108",
        "sotin": "3",
        "giangvien": "Phạm Long Châu(CQM006)"
    },
    {
        "ma": "BA217",
        "ten": "Quản lí nguồn nhân lực trong du lịch",
        "lop": "QLNHANLUCDL.1",
        "thu": "2",
        "ca": "1-3",
        "phong": "A506",
        "sotin": "3",
        "giangvien": "Phùng Đức Thiện(CDL007)"
    },
    {
        "ma": "BA217",
        "ten": "Quản lí nguồn nhân lực trong du lịch",
        "lop": "QLNHANLUCDL.1",
        "thu": "2",
        "ca": "6-7",
        "phong": "B407",
        "sotin": "3",
        "giangvien": "Phùng Đức Thiện(CDL007)"
    },
    {
        "ma": "BA324",
        "ten": "Quản lý dự án",
        "lop": "QLDUAN.1",
        "thu": "2",
        "ca": "3-5",
        "phong": "A606",
        "sotin": "3",
        "giangvien": "Nguyễn Hồng Nga(CQB015)"
    },
    {
        "ma": "BA324",
        "ten": "Quản lý dự án",
        "lop": "QLDUAN.1",
        "thu": "5",
        "ca": "6-7",
        "phong": "A603",
        "sotin": "3",
        "giangvien": "Nguyễn Hồng Nga(CQB015)"
    },
    {
        "ma": "IS334",
        "ten": "Quản lý dự án hệ thống thông tin",
        "lop": "QLYDANHTTT.2",
        "thu": "5",
        "ca": "6-8",
        "phong": "A609",
        "sotin": "3",
        "giangvien": "Trần Quang Duy(CTI019)"
    },
    {
        "ma": "IS334",
        "ten": "Quản lý dự án hệ thống thông tin",
        "lop": "QLYDANHTTT.1",
        "thu": "5",
        "ca": "9-10",
        "phong": "A409",
        "sotin": "3",
        "giangvien": "Trần Quang Duy(CTI019)"
    },
    {
        "ma": "IS334",
        "ten": "Quản lý dự án hệ thống thông tin",
        "lop": "QLYDANHTTT.1",
        "thu": "6",
        "ca": "6-8",
        "phong": "A409",
        "sotin": "3",
        "giangvien": "Trần Quang Duy(CTI019)"
    },
    {
        "ma": "IS334",
        "ten": "Quản lý dự án hệ thống thông tin",
        "lop": "QLYDANHTTT.2",
        "thu": "6",
        "ca": "9-10",
        "phong": "A603",
        "sotin": "3",
        "giangvien": "Trần Quang Duy(CTI019)"
    },
    {
        "ma": "SE422",
        "ten": "Quản lý dự án phần mềm",
        "lop": "QLDUANPHANMEM.1",
        "thu": "4",
        "ca": "3-5",
        "phong": "B701",
        "sotin": "3",
        "giangvien": "Trần Quang Duy(CTI019)"
    },
    {
        "ma": "SE422",
        "ten": "Quản lý dự án phần mềm",
        "lop": "QLDUANPHANMEM.1",
        "thu": "7",
        "ca": "4-5",
        "phong": "B312",
        "sotin": "3",
        "giangvien": "Trần Quang Duy(CTI019)"
    },
    {
        "ma": "LG330",
        "ten": "Quản lý kho hàng",
        "lop": "QUANLYKHO.2",
        "thu": "3",
        "ca": "9-11",
        "phong": "B702",
        "sotin": "3",
        "giangvien": "Nguyễn Thanh Thủy(CQL004)"
    },
    {
        "ma": "LG330",
        "ten": "Quản lý kho hàng",
        "lop": "QUANLYKHO.1",
        "thu": "4",
        "ca": "3-5",
        "phong": "A601",
        "sotin": "3",
        "giangvien": "Nguyễn Thanh Thủy(CQL004)"
    },
    {
        "ma": "LG330",
        "ten": "Quản lý kho hàng",
        "lop": "QUANLYKHO.2",
        "thu": "4",
        "ca": "6-8",
        "phong": "B711",
        "sotin": "3",
        "giangvien": "Nguyễn Thanh Thủy(CQL004)"
    },
    {
        "ma": "LG330",
        "ten": "Quản lý kho hàng",
        "lop": "QUANLYKHO.1",
        "thu": "5",
        "ca": "3-5",
        "phong": "B703",
        "sotin": "3",
        "giangvien": "Nguyễn Thanh Thủy(CQL004)"
    },
    {
        "ma": "LG219",
        "ten": "Quản lý logistics",
        "lop": "QUANLYLOGISYICS.1",
        "thu": "3",
        "ca": "6-8",
        "phong": "A407",
        "sotin": "3",
        "giangvien": "Nguyễn Thanh Thủy(CQL004)"
    },
    {
        "ma": "LG219",
        "ten": "Quản lý logistics",
        "lop": "QUANLYLOGISYICS.1",
        "thu": "5",
        "ca": "6-8",
        "phong": "B110",
        "sotin": "3",
        "giangvien": "Nguyễn Thanh Thủy(CQL004)"
    },
    {
        "ma": "TC473",
        "ten": "Quản lý mạng viễn thông",
        "lop": "QLMANGVT.1",
        "thu": "3",
        "ca": "3-5",
        "phong": "A601",
        "sotin": "3",
        "giangvien": "Hoàng Trọng Minh(CTI030)"
    },
    {
        "ma": "TC473",
        "ten": "Quản lý mạng viễn thông",
        "lop": "QLMANGVT.1",
        "thu": "3",
        "ca": "6-7",
        "phong": "A601",
        "sotin": "3",
        "giangvien": "Hoàng Trọng Minh(CTI030)"
    },
    {
        "ma": "SC321",
        "ten": "Quản lý mua hàng",
        "lop": "QLMUAHANG.1",
        "thu": "2",
        "ca": "6-8",
        "phong": "A607",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Vân Nga(CQL003)"
    },
    {
        "ma": "SC321",
        "ten": "Quản lý mua hàng",
        "lop": "QLMUAHANG.1",
        "thu": "5",
        "ca": "1-3",
        "phong": "B713",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Vân Nga(CQL003)"
    },
    {
        "ma": "NR404",
        "ten": "Quản lý y tế và Quản lý điều dưỡng",
        "lop": "QLDIEUDUONG.1",
        "thu": "3",
        "ca": "6-8",
        "phong": "B512",
        "sotin": "3",
        "giangvien": "Lê Thị Bình(CSN011)"
    },
    {
        "ma": "NR404",
        "ten": "Quản lý y tế và Quản lý điều dưỡng",
        "lop": "QLDIEUDUONG.1",
        "thu": "5",
        "ca": "8-10",
        "phong": "A403",
        "sotin": "3",
        "giangvien": "Lê Thị Bình(CSN011)"
    },
    {
        "ma": "BA313",
        "ten": "Quản trị chiến lược",
        "lop": "QTRICHIENLUOC.2",
        "thu": "2",
        "ca": "1-2",
        "phong": "B103",
        "sotin": "3",
        "giangvien": "Vũ Lệ Hằng(CQM001)"
    },
    {
        "ma": "BA313",
        "ten": "Quản trị chiến lược",
        "lop": "QTRICHIENLUOC.2",
        "thu": "5",
        "ca": "3-5",
        "phong": "B103",
        "sotin": "3",
        "giangvien": "Vũ Lệ Hằng(CQM001)"
    },
    {
        "ma": "BA335",
        "ten": "Quản trị cung ứng các DV cho hoạt động lữ hành",
        "lop": "QTDVLUHANH.1",
        "thu": "4",
        "ca": "3-5",
        "phong": "B307",
        "sotin": "3",
        "giangvien": "Tạ Dương Trà My(CDL014)"
    },
    {
        "ma": "BA335",
        "ten": "Quản trị cung ứng các DV cho hoạt động lữ hành",
        "lop": "QTDVLUHANH.1",
        "thu": "4",
        "ca": "6-7",
        "phong": "A506",
        "sotin": "3",
        "giangvien": "Tạ Dương Trà My(CDL014)"
    },
    {
        "ma": "BA335",
        "ten": "Quản trị cung ứng các DV cho hoạt động lữ hành",
        "lop": "QTDVLUHANH.2",
        "thu": "5",
        "ca": "4-5",
        "phong": "B307",
        "sotin": "3",
        "giangvien": "Tạ Dương Trà My(CDL014)"
    },
    {
        "ma": "BA335",
        "ten": "Quản trị cung ứng các DV cho hoạt động lữ hành",
        "lop": "QTDVLUHANH.2",
        "thu": "5",
        "ca": "8-10",
        "phong": "A602",
        "sotin": "3",
        "giangvien": "Tạ Dương Trà My(CDL014)"
    },
    {
        "ma": "BA335",
        "ten": "Quản trị cung ứng các DV cho hoạt động lữ hành",
        "lop": "QTDVLUHANH.3",
        "thu": "6",
        "ca": "3-5",
        "phong": "A602",
        "sotin": "3",
        "giangvien": "Tạ Dương Trà My(CDL014)"
    },
    {
        "ma": "BA335",
        "ten": "Quản trị cung ứng các DV cho hoạt động lữ hành",
        "lop": "QTDVLUHANH.3",
        "thu": "6",
        "ca": "6-7",
        "phong": "A602",
        "sotin": "3",
        "giangvien": "Tạ Dương Trà My(CDL014)"
    },
    {
        "ma": "HR311",
        "ten": "Quản trị dịch vụ bổ sung trong khách sạn",
        "lop": "QTDVKS.2",
        "thu": "3",
        "ca": "1-2",
        "phong": "A506",
        "sotin": "3",
        "giangvien": "Nguyễn Đức Anh(CDL015)"
    },
    {
        "ma": "HR311",
        "ten": "Quản trị dịch vụ bổ sung trong khách sạn",
        "lop": "QTDVKS.1",
        "thu": "5",
        "ca": "3-5",
        "phong": "A506",
        "sotin": "3",
        "giangvien": "Phùng Đức Thiện(CDL007)"
    },
    {
        "ma": "HR311",
        "ten": "Quản trị dịch vụ bổ sung trong khách sạn",
        "lop": "QTDVKS.2",
        "thu": "5",
        "ca": "8-10",
        "phong": "B401",
        "sotin": "3",
        "giangvien": "Nguyễn Đức Anh(CDL015)"
    },
    {
        "ma": "HR311",
        "ten": "Quản trị dịch vụ bổ sung trong khách sạn",
        "lop": "QTDVKS.1",
        "thu": "5",
        "ca": "9-10",
        "phong": "A606",
        "sotin": "3",
        "giangvien": "Phùng Đức Thiện(CDL007)"
    },
    {
        "ma": "BA236",
        "ten": "Quản trị điểm đến du lịch",
        "lop": "QTRIKDDIEMDEN.1",
        "thu": "2",
        "ca": "1-3",
        "phong": "A602",
        "sotin": "3",
        "giangvien": "Phạm Trần Thăng Long(CDL004)"
    },
    {
        "ma": "BA236",
        "ten": "Quản trị điểm đến du lịch",
        "lop": "QTRIKDDIEMDEN.1",
        "thu": "2",
        "ca": "6-7",
        "phong": "A506",
        "sotin": "3",
        "giangvien": "Phạm Trần Thăng Long(CDL004)"
    },
    {
        "ma": "BA102",
        "ten": "Quản trị học đại cương",
        "lop": "QUANTRIHOCDC.2",
        "thu": "2",
        "ca": "3-5",
        "phong": "B203",
        "sotin": "3",
        "giangvien": "Vũ Lệ Hằng(CQM001)"
    },
    {
        "ma": "BA102",
        "ten": "Quản trị học đại cương",
        "lop": "QUANTRIHOCDC.2",
        "thu": "5",
        "ca": "1-2",
        "phong": "B101",
        "sotin": "3",
        "giangvien": "Vũ Lệ Hằng(CQM001)"
    },
    {
        "ma": "BA333",
        "ten": "Quản trị kinh doanh khách sạn",
        "lop": "QTRIKDKS.1",
        "thu": "2",
        "ca": "4-5",
        "phong": "A506",
        "sotin": "3",
        "giangvien": "Phùng Đức Thiện(CDL007)"
    },
    {
        "ma": "BA333",
        "ten": "Quản trị kinh doanh khách sạn",
        "lop": "QTRIKDKS.1",
        "thu": "2",
        "ca": "8-10",
        "phong": "A506",
        "sotin": "3",
        "giangvien": "Phùng Đức Thiện(CDL007)"
    },
    {
        "ma": "HR204",
        "ten": "Quản trị lưu trú (HK/Rooms Division)",
        "lop": "HR204.1_LT",
        "thu": "2",
        "ca": "11-13",
        "phong": "ONLINE",
        "sotin": "3",
        "giangvien": "Trần Thu Nga(MDL007)"
    },
    {
        "ma": "HR204",
        "ten": "Quản trị lưu trú (HK/Rooms Division)",
        "lop": "HR204.1.1_BT",
        "thu": "3",
        "ca": "1-3",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Trần Thu Nga(MDL007)"
    },
    {
        "ma": "HR204",
        "ten": "Quản trị lưu trú (HK/Rooms Division)",
        "lop": "HR204.1.2_BT",
        "thu": "3",
        "ca": "4-5",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Trần Thu Nga(MDL007)"
    },
    {
        "ma": "HR204",
        "ten": "Quản trị lưu trú (HK/Rooms Division)",
        "lop": "HR204.1.2_BT",
        "thu": "3",
        "ca": "6-8",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Trần Thu Nga(MDL007)"
    },
    {
        "ma": "HR204",
        "ten": "Quản trị lưu trú (HK/Rooms Division)",
        "lop": "HR204.1.1_BT",
        "thu": "3",
        "ca": "9-10",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Trần Thu Nga(MDL007)"
    },
    {
        "ma": "BA314",
        "ten": "Quản trị nguồn nhân lực",
        "lop": "QTRINHANLUC.2",
        "thu": "3",
        "ca": "1-2",
        "phong": "A406",
        "sotin": "3",
        "giangvien": "Lê Thị Hạnh(CQM008)"
    },
    {
        "ma": "BA314",
        "ten": "Quản trị nguồn nhân lực",
        "lop": "QTRINHANLUC.2",
        "thu": "6",
        "ca": "3-5",
        "phong": "A406",
        "sotin": "3",
        "giangvien": "Lê Thị Hạnh(CQM008)"
    },
    {
        "ma": "HR205",
        "ten": "Quản trị phục vụ bàn",
        "lop": "HR205.1_LT",
        "thu": "3",
        "ca": "11-13",
        "phong": "ONLINE",
        "sotin": "3",
        "giangvien": "Nguyễn Phi Long(CDL016)"
    },
    {
        "ma": "HR205",
        "ten": "Quản trị phục vụ bàn",
        "lop": "HR205.1.1_BT",
        "thu": "4",
        "ca": "1-3",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Nguyễn Phi Long(CDL016)"
    },
    {
        "ma": "HR205",
        "ten": "Quản trị phục vụ bàn",
        "lop": "HR205.1.2_BT",
        "thu": "4",
        "ca": "4-5",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Nguyễn Phi Long(CDL016)"
    },
    {
        "ma": "HR205",
        "ten": "Quản trị phục vụ bàn",
        "lop": "HR205.1.2_BT",
        "thu": "4",
        "ca": "6-8",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Nguyễn Phi Long(CDL016)"
    },
    {
        "ma": "HR205",
        "ten": "Quản trị phục vụ bàn",
        "lop": "HR205.1.1_BT",
        "thu": "4",
        "ca": "9-10",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Nguyễn Phi Long(CDL016)"
    },
    {
        "ma": "SC312",
        "ten": "Quản trị rủi ro chuỗi cung ứng",
        "lop": "QTRUIROCU.2",
        "thu": "2",
        "ca": "3-5",
        "phong": "A609",
        "sotin": "3",
        "giangvien": "Trần Văn Vinh(CQL005)"
    },
    {
        "ma": "SC312",
        "ten": "Quản trị rủi ro chuỗi cung ứng",
        "lop": "QTRUIROCU.2",
        "thu": "7",
        "ca": "3-5",
        "phong": "B502",
        "sotin": "3",
        "giangvien": "Trần Văn Vinh(CQL005)"
    },
    {
        "ma": "FN333",
        "ten": "Quản trị rủi ro tài chính",
        "lop": "QUANTRIRUIROTC.1",
        "thu": "4",
        "ca": "3-5",
        "phong": "B407",
        "sotin": "3",
        "giangvien": "Đỗ Trường Sơn(CQB017)"
    },
    {
        "ma": "FN333",
        "ten": "Quản trị rủi ro tài chính",
        "lop": "QUANTRIRUIROTC.1",
        "thu": "7",
        "ca": "8-10",
        "phong": "B205",
        "sotin": "3",
        "giangvien": "Đỗ Trường Sơn(CQB017)"
    },
    {
        "ma": "BK405",
        "ten": "Quản trị rủi ro tín dụng của ngân hàng thương mại",
        "lop": "QTRIRUIROTDNHTM.1",
        "thu": "4",
        "ca": "6-7",
        "phong": "A507",
        "sotin": "3",
        "giangvien": "Phạm Thị Bảo Oanh(CQB006)"
    },
    {
        "ma": "BK405",
        "ten": "Quản trị rủi ro tín dụng của ngân hàng thương mại",
        "lop": "QTRIRUIROTDNHTM.1",
        "thu": "6",
        "ca": "6-8",
        "phong": "A407",
        "sotin": "3",
        "giangvien": "Phạm Thị Bảo Oanh(CQB006)"
    },
    {
        "ma": "HR310",
        "ten": "Quản trị sự kiện",
        "lop": "QTRISUKIEN.1",
        "thu": "4",
        "ca": "1-2",
        "phong": "A602",
        "sotin": "3",
        "giangvien": "Phùng Đức Thiện(CDL007)"
    },
    {
        "ma": "HR310",
        "ten": "Quản trị sự kiện",
        "lop": "QTRISUKIEN.2",
        "thu": "4",
        "ca": "3-5",
        "phong": "B203",
        "sotin": "3",
        "giangvien": "Phùng Đức Thiện(CDL007)"
    },
    {
        "ma": "HR310",
        "ten": "Quản trị sự kiện",
        "lop": "QTRISUKIEN.1",
        "thu": "4",
        "ca": "6-8",
        "phong": "A602",
        "sotin": "3",
        "giangvien": "Phùng Đức Thiện(CDL007)"
    },
    {
        "ma": "HR310",
        "ten": "Quản trị sự kiện",
        "lop": "QTRISUKIEN.2",
        "thu": "4",
        "ca": "9-10",
        "phong": "A506",
        "sotin": "3",
        "giangvien": "Phùng Đức Thiện(CDL007)"
    },
    {
        "ma": "HR310",
        "ten": "Quản trị sự kiện",
        "lop": "QTRISUKIEN.3",
        "thu": "5",
        "ca": "1-2",
        "phong": "A606",
        "sotin": "3",
        "giangvien": "Phùng Đức Thiện(CDL007)"
    },
    {
        "ma": "HR310",
        "ten": "Quản trị sự kiện",
        "lop": "QTRISUKIEN.3",
        "thu": "5",
        "ca": "6-8",
        "phong": "B303",
        "sotin": "3",
        "giangvien": "Phùng Đức Thiện(CDL007)"
    },
    {
        "ma": "BA211",
        "ten": "Quản trị tác nghiệp",
        "lop": "QTRTACNGHIEP.2",
        "thu": "6",
        "ca": "3-5",
        "phong": "B103",
        "sotin": "3",
        "giangvien": "Vương Thị Thanh Trì(CQM004)"
    },
    {
        "ma": "BA211",
        "ten": "Quản trị tác nghiệp",
        "lop": "QTRTACNGHIEP.2",
        "thu": "7",
        "ca": "9-10",
        "phong": "B103",
        "sotin": "3",
        "giangvien": "Vương Thị Thanh Trì(CQM004)"
    },
    {
        "ma": "FN212",
        "ten": "Quản trị tài chính doanh nghiệp 1",
        "lop": "QTTAICHINHDN1.2",
        "thu": "2",
        "ca": "3-5",
        "phong": "B407",
        "sotin": "3",
        "giangvien": "Ngô Thị Quyên(CQB001)"
    },
    {
        "ma": "FN212",
        "ten": "Quản trị tài chính doanh nghiệp 1",
        "lop": "QTTAICHINHDN1.3",
        "thu": "2",
        "ca": "6-7",
        "phong": "A609",
        "sotin": "3",
        "giangvien": "Ngô Thị Quyên(CQB001)"
    },
    {
        "ma": "FN212",
        "ten": "Quản trị tài chính doanh nghiệp 1",
        "lop": "QTTAICHINHDN1.3",
        "thu": "4",
        "ca": "3-5",
        "phong": "A609",
        "sotin": "3",
        "giangvien": "Ngô Thị Quyên(CQB001)"
    },
    {
        "ma": "FN212",
        "ten": "Quản trị tài chính doanh nghiệp 1",
        "lop": "QTTAICHINHDN1.2",
        "thu": "4",
        "ca": "6-7",
        "phong": "B407",
        "sotin": "3",
        "giangvien": "Ngô Thị Quyên(CQB001)"
    },
    {
        "ma": "FN313",
        "ten": "Quản trị tài chính doanh nghiệp 2",
        "lop": "QTTAICHINHDN2.1",
        "thu": "2",
        "ca": "3-5",
        "phong": "B711",
        "sotin": "3",
        "giangvien": "Chu Thị Thu Thủy(CQB010)"
    },
    {
        "ma": "FN313",
        "ten": "Quản trị tài chính doanh nghiệp 2",
        "lop": "QTTAICHINHDN2.1",
        "thu": "3",
        "ca": "8-10",
        "phong": "B312",
        "sotin": "3",
        "giangvien": "Chu Thị Thu Thủy(CQB010)"
    },
    {
        "ma": "FN313",
        "ten": "Quản trị tài chính doanh nghiệp 2",
        "lop": "QTTAICHINHDN2.2",
        "thu": "5",
        "ca": "8-10",
        "phong": "B710",
        "sotin": "3",
        "giangvien": "Chu Thị Thu Thủy(CQB010)"
    },
    {
        "ma": "FN313",
        "ten": "Quản trị tài chính doanh nghiệp 2",
        "lop": "QTTAICHINHDN2.2",
        "thu": "7",
        "ca": "3-5",
        "phong": "B406",
        "sotin": "3",
        "giangvien": "Chu Thị Thu Thủy(CQB010)"
    },
    {
        "ma": "FN214",
        "ten": "Quản trị tài chính trong du lịch",
        "lop": "QTRITCDULICH.1",
        "thu": "5",
        "ca": "1-2",
        "phong": "A506",
        "sotin": "3",
        "giangvien": "Ngô Thị Quyên(CQB001)"
    },
    {
        "ma": "FN214",
        "ten": "Quản trị tài chính trong du lịch",
        "lop": "QTRITCDULICH.2",
        "thu": "5",
        "ca": "3-5",
        "phong": "A502",
        "sotin": "3",
        "giangvien": "Ngô Thị Quyên(CQB001)"
    },
    {
        "ma": "FN214",
        "ten": "Quản trị tài chính trong du lịch",
        "lop": "QTRITCDULICH.2",
        "thu": "6",
        "ca": "1-2",
        "phong": "A606",
        "sotin": "3",
        "giangvien": "Ngô Thị Quyên(CQB001)"
    },
    {
        "ma": "FN214",
        "ten": "Quản trị tài chính trong du lịch",
        "lop": "QTRITCDULICH.1",
        "thu": "6",
        "ca": "3-5",
        "phong": "A606",
        "sotin": "3",
        "giangvien": "Ngô Thị Quyên(CQB001)"
    },
    {
        "ma": "MK313",
        "ten": "Quản trị thương hiệu",
        "lop": "QTRITHUONGHIEU.2",
        "thu": "2",
        "ca": "1-2",
        "phong": "B105",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Liên Hương(CQM014)"
    },
    {
        "ma": "MK313",
        "ten": "Quản trị thương hiệu",
        "lop": "QTRITHUONGHIEU.2",
        "thu": "6",
        "ca": "3-5",
        "phong": "B401",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Liên Hương(CQM014)"
    },
    {
        "ma": "HR320",
        "ten": "Quản trị tiệc",
        "lop": "QTRITIEC.2",
        "thu": "3",
        "ca": "1-2",
        "phong": "B401",
        "sotin": "3",
        "giangvien": "Nguyễn Phi Long(CDL016)"
    },
    {
        "ma": "HR320",
        "ten": "Quản trị tiệc",
        "lop": "QTRITIEC.2",
        "thu": "3",
        "ca": "6-8",
        "phong": "B303",
        "sotin": "3",
        "giangvien": "Nguyễn Phi Long(CDL016)"
    },
    {
        "ma": "HR320",
        "ten": "Quản trị tiệc",
        "lop": "QTRITIEC.3",
        "thu": "7",
        "ca": "3-5",
        "phong": "A506",
        "sotin": "3",
        "giangvien": "Nguyễn Phi Long(CDL016)"
    },
    {
        "ma": "HR320",
        "ten": "Quản trị tiệc",
        "lop": "QTRITIEC.3",
        "thu": "7",
        "ca": "6-7",
        "phong": "A506",
        "sotin": "3",
        "giangvien": "Nguyễn Phi Long(CDL016)"
    },
    {
        "ma": "HR200",
        "ten": "Quản trị tiền sảnh",
        "lop": "QTRITIENSANH.2.1_BT",
        "thu": "4",
        "ca": "1-2",
        "phong": "B305",
        "sotin": "3",
        "giangvien": "Nguyễn Đức Anh(CDL015)"
    },
    {
        "ma": "HR200",
        "ten": "Quản trị tiền sảnh",
        "lop": "QTRITIENSANH.2.1_BT",
        "thu": "4",
        "ca": "8-10",
        "phong": "B305",
        "sotin": "3",
        "giangvien": "Nguyễn Đức Anh(CDL015)"
    },
    {
        "ma": "HR200",
        "ten": "Quản trị tiền sảnh",
        "lop": "QTRITIENSANH.2.2_BT",
        "thu": "6",
        "ca": "1-2",
        "phong": "B305",
        "sotin": "3",
        "giangvien": "Nguyễn Đức Anh(CDL015)"
    },
    {
        "ma": "HR200",
        "ten": "Quản trị tiền sảnh",
        "lop": "QTRITIENSANH.2_LT",
        "thu": "6",
        "ca": "11-13",
        "phong": "ONLINE",
        "sotin": "3",
        "giangvien": "Nguyễn Đức Anh(CDL015)"
    },
    {
        "ma": "HR200",
        "ten": "Quản trị tiền sảnh",
        "lop": "QTRITIENSANH.2.3_BT",
        "thu": "6",
        "ca": "3-5",
        "phong": "B305",
        "sotin": "3",
        "giangvien": "Nguyễn Đức Anh(CDL015)"
    },
    {
        "ma": "HR200",
        "ten": "Quản trị tiền sảnh",
        "lop": "QTRITIENSANH.2.2_BT",
        "thu": "6",
        "ca": "6-8",
        "phong": "B305",
        "sotin": "3",
        "giangvien": "Nguyễn Đức Anh(CDL015)"
    },
    {
        "ma": "HR200",
        "ten": "Quản trị tiền sảnh",
        "lop": "QTRITIENSANH.2.3_BT",
        "thu": "6",
        "ca": "9-10",
        "phong": "B305",
        "sotin": "3",
        "giangvien": "Nguyễn Đức Anh(CDL015)"
    },
    {
        "ma": "HR206",
        "ten": "Quản trị và vận hành Bar",
        "lop": "HR206.1_LT",
        "thu": "5",
        "ca": "11-13",
        "phong": "ONLINE",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thanh Hương(CDL011)"
    },
    {
        "ma": "HR206",
        "ten": "Quản trị và vận hành Bar",
        "lop": "HR206.1.1_BT",
        "thu": "6",
        "ca": "1-3",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thanh Hương(CDL011)"
    },
    {
        "ma": "HR206",
        "ten": "Quản trị và vận hành Bar",
        "lop": "HR206.1.2_BT",
        "thu": "6",
        "ca": "4-5",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thanh Hương(CDL011)"
    },
    {
        "ma": "HR206",
        "ten": "Quản trị và vận hành Bar",
        "lop": "HR206.1.2_BT",
        "thu": "6",
        "ca": "6-8",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thanh Hương(CDL011)"
    },
    {
        "ma": "HR206",
        "ten": "Quản trị và vận hành Bar",
        "lop": "HR206.1.1_BT",
        "thu": "6",
        "ca": "9-10",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thanh Hương(CDL011)"
    },
    {
        "ma": "HR222",
        "ten": "Quản trị vận hành bếp",
        "lop": "HR222.1_LT",
        "thu": "4",
        "ca": "11-13",
        "phong": "ONLINE",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "HR222",
        "ten": "Quản trị vận hành bếp",
        "lop": "HR222.1.1_BT",
        "thu": "7",
        "ca": "3-5",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "HR222",
        "ten": "Quản trị vận hành bếp",
        "lop": "HR222.1.1_BT",
        "thu": "7",
        "ca": "6-7",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "AN311B",
        "ten": "Sáng tác ca khúc 1B",
        "lop": "SANGTACCAKHUC1B.1",
        "thu": "3",
        "ca": "6-7",
        "phong": "B807",
        "sotin": "1",
        "giangvien": "Phạm Thanh Hà(MAN003)"
    },
    {
        "ma": "AN311B",
        "ten": "Sáng tác ca khúc 1B",
        "lop": "SANGTACCAKHUC1B.2",
        "thu": "5",
        "ca": "2-3",
        "phong": "B807",
        "sotin": "1",
        "giangvien": "Phạm Thanh Hà(MAN003)"
    },
    {
        "ma": "AN311B",
        "ten": "Sáng tác ca khúc 1B",
        "lop": "SANGTACCAKHUC1B.3",
        "thu": "5",
        "ca": "8-9",
        "phong": "B807",
        "sotin": "1",
        "giangvien": "Phạm Thanh Hà(MAN003)"
    },
    {
        "ma": "MA104",
        "ten": "Số và cấu trúc đại số",
        "lop": "SOCAUTRUCDS.1.1_BT",
        "thu": "2",
        "ca": "6-7",
        "phong": "B108",
        "sotin": "3",
        "giangvien": "Nguyễn Quốc Tuấn(CTM024)"
    },
    {
        "ma": "MA104",
        "ten": "Số và cấu trúc đại số",
        "lop": "SOCAUTRUCDS.1.2_BT",
        "thu": "3",
        "ca": "8-9",
        "phong": "B402",
        "sotin": "3",
        "giangvien": "Nguyễn Lâm Tùng(CTM008)"
    },
    {
        "ma": "MA104",
        "ten": "Số và cấu trúc đại số",
        "lop": "SOCAUTRUCDS.1.2_BT",
        "thu": "4",
        "ca": "8-9",
        "phong": "B502",
        "sotin": "3",
        "giangvien": "Nguyễn Lâm Tùng(CTM008)"
    },
    {
        "ma": "MA104",
        "ten": "Số và cấu trúc đại số",
        "lop": "SOCAUTRUCDS.1_LT",
        "thu": "5",
        "ca": "8-10",
        "phong": "B507",
        "sotin": "3",
        "giangvien": "Bùi Huy Hiền(CTM003)"
    },
    {
        "ma": "MA104",
        "ten": "Số và cấu trúc đại số",
        "lop": "SOCAUTRUCDS.1.1_BT",
        "thu": "6",
        "ca": "9-10",
        "phong": "B108",
        "sotin": "3",
        "giangvien": "Nguyễn Quốc Tuấn(CTM024)"
    },
    {
        "ma": "MC308",
        "ten": "Sự kiện và tổ chức sự kiện",
        "lop": "SUKIEN&TCSK.1_LT",
        "thu": "4",
        "ca": "2-5",
        "phong": "B703",
        "sotin": "3",
        "giangvien": "Trần Thị Thùy Dương(CXC006)"
    },
    {
        "ma": "MC308",
        "ten": "Sự kiện và tổ chức sự kiện",
        "lop": "SUKIEN&TCSK.2_LT",
        "thu": "4",
        "ca": "6-9",
        "phong": "B609",
        "sotin": "3",
        "giangvien": "Trần Thị Thùy Dương(CXC006)"
    },
    {
        "ma": "FN222",
        "ten": "Tài chính công",
        "lop": "TAICHINHCONG.2",
        "thu": "2",
        "ca": "6-7",
        "phong": "B208",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Tuyết(CQB022)"
    },
    {
        "ma": "FN222",
        "ten": "Tài chính công",
        "lop": "TAICHINHCONG.2",
        "thu": "3",
        "ca": "3-5",
        "phong": "A609",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Tuyết(CQB022)"
    },
    {
        "ma": "FN222",
        "ten": "Tài chính công",
        "lop": "TAICHINHCONG.3",
        "thu": "3",
        "ca": "6-7",
        "phong": "A406",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Tuyết(CQB022)"
    },
    {
        "ma": "FN222",
        "ten": "Tài chính công",
        "lop": "TAICHINHCONG.3",
        "thu": "6",
        "ca": "3-5",
        "phong": "A502",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Tuyết(CQB022)"
    },
    {
        "ma": "FN211",
        "ten": "Tài chính doanh nghiệp",
        "lop": "TAICHINHDN.7",
        "thu": "2",
        "ca": "1-2",
        "phong": "A603",
        "sotin": "3",
        "giangvien": "Chu Thị Thu Thủy(CQB010)"
    },
    {
        "ma": "FN211",
        "ten": "Tài chính doanh nghiệp",
        "lop": "TAICHINHDN.5",
        "thu": "2",
        "ca": "1-2",
        "phong": "A507",
        "sotin": "3",
        "giangvien": "Ngô Thị Quyên(CQB001)"
    },
    {
        "ma": "FN211",
        "ten": "Tài chính doanh nghiệp",
        "lop": "TAICHINHDN.6",
        "thu": "3",
        "ca": "1-2",
        "phong": "A607",
        "sotin": "3",
        "giangvien": "Ngô Thị Quyên(CQB001)"
    },
    {
        "ma": "FN211",
        "ten": "Tài chính doanh nghiệp",
        "lop": "TAICHINHDN.9",
        "thu": "3",
        "ca": "6-7",
        "phong": "B610",
        "sotin": "3",
        "giangvien": "Chu Thị Thu Thủy(CQB010)"
    },
    {
        "ma": "FN211",
        "ten": "Tài chính doanh nghiệp",
        "lop": "TAICHINHDN.4",
        "thu": "3",
        "ca": "8-10",
        "phong": "B403",
        "sotin": "3",
        "giangvien": "Ngô Thị Quyên(CQB001)"
    },
    {
        "ma": "FN211",
        "ten": "Tài chính doanh nghiệp",
        "lop": "TAICHINHDN.7",
        "thu": "4",
        "ca": "6-8",
        "phong": "B608",
        "sotin": "3",
        "giangvien": "Chu Thị Thu Thủy(CQB010)"
    },
    {
        "ma": "FN211",
        "ten": "Tài chính doanh nghiệp",
        "lop": "TAICHINHDN.8",
        "thu": "6",
        "ca": "8-10",
        "phong": "A507",
        "sotin": "3",
        "giangvien": "Chu Thị Thu Thủy(CQB010)"
    },
    {
        "ma": "FN211",
        "ten": "Tài chính doanh nghiệp",
        "lop": "TAICHINHDN.5",
        "thu": "7",
        "ca": "3-5",
        "phong": "B710",
        "sotin": "3",
        "giangvien": "Ngô Thị Quyên(CQB001)"
    },
    {
        "ma": "FN211",
        "ten": "Tài chính doanh nghiệp",
        "lop": "TAICHINHDN.4",
        "thu": "7",
        "ca": "6-7",
        "phong": "B203",
        "sotin": "3",
        "giangvien": "Ngô Thị Quyên(CQB001)"
    },
    {
        "ma": "FN211",
        "ten": "Tài chính doanh nghiệp",
        "lop": "TAICHINHDN.8",
        "thu": "7",
        "ca": "6-7",
        "phong": "B606",
        "sotin": "3",
        "giangvien": "Chu Thị Thu Thủy(CQB010)"
    },
    {
        "ma": "FN211",
        "ten": "Tài chính doanh nghiệp",
        "lop": "TAICHINHDN.9",
        "thu": "7",
        "ca": "8-10",
        "phong": "A407",
        "sotin": "3",
        "giangvien": "Chu Thị Thu Thủy(CQB010)"
    },
    {
        "ma": "FN211",
        "ten": "Tài chính doanh nghiệp",
        "lop": "TAICHINHDN.6",
        "thu": "7",
        "ca": "8-10",
        "phong": "A507",
        "sotin": "3",
        "giangvien": "Ngô Thị Quyên(CQB001)"
    },
    {
        "ma": "FN261",
        "ten": "Tài chính quốc tế",
        "lop": "TAICHINHQT.1",
        "thu": "5",
        "ca": "3-5",
        "phong": "B203",
        "sotin": "3",
        "giangvien": "Ngô Khánh Huyền(CQB002)"
    },
    {
        "ma": "FN261",
        "ten": "Tài chính quốc tế",
        "lop": "TAICHINHQT.1",
        "thu": "7",
        "ca": "3-5",
        "phong": "B203",
        "sotin": "3",
        "giangvien": "Ngô Khánh Huyền(CQB002)"
    },
    {
        "ma": "FN201",
        "ten": "Tài chính tiền tệ căn bản",
        "lop": "TAICHINHTTECB.3",
        "thu": "4",
        "ca": "1-2",
        "phong": "A406",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thúy(CQB005)"
    },
    {
        "ma": "FN201",
        "ten": "Tài chính tiền tệ căn bản",
        "lop": "TAICHINHTTECB.4",
        "thu": "4",
        "ca": "3-5",
        "phong": "B205",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Tuyết(CQB022)"
    },
    {
        "ma": "FN201",
        "ten": "Tài chính tiền tệ căn bản",
        "lop": "TAICHINHTTECB.4",
        "thu": "5",
        "ca": "1-2",
        "phong": "B205",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Tuyết(CQB022)"
    },
    {
        "ma": "FN201",
        "ten": "Tài chính tiền tệ căn bản",
        "lop": "TAICHINHTTECB.2",
        "thu": "5",
        "ca": "8-10",
        "phong": "B205",
        "sotin": "3",
        "giangvien": "Phạm Thị Bảo Oanh(CQB006)"
    },
    {
        "ma": "FN201",
        "ten": "Tài chính tiền tệ căn bản",
        "lop": "TAICHINHTTECB.3",
        "thu": "6",
        "ca": "3-5",
        "phong": "A506",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thúy(CQB005)"
    },
    {
        "ma": "FN201",
        "ten": "Tài chính tiền tệ căn bản",
        "lop": "TAICHINHTTECB.5",
        "thu": "6",
        "ca": "6-7",
        "phong": "B401",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Tuyết(CQB022)"
    },
    {
        "ma": "FN201",
        "ten": "Tài chính tiền tệ căn bản",
        "lop": "TAICHINHTTECB.2",
        "thu": "7",
        "ca": "1-2",
        "phong": "B205",
        "sotin": "3",
        "giangvien": "Phạm Thị Bảo Oanh(CQB006)"
    },
    {
        "ma": "FN201",
        "ten": "Tài chính tiền tệ căn bản",
        "lop": "TAICHINHTTECB.5",
        "thu": "7",
        "ca": "6-8",
        "phong": "B401",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Tuyết(CQB022)"
    },
    {
        "ma": "PS210",
        "ten": "Tâm lí học du lịch",
        "lop": "TAMLIDL.1",
        "thu": "2",
        "ca": "4-5",
        "phong": "B201",
        "sotin": "3",
        "giangvien": "Trần Hoàng Thị Diễm Ngọc(CXW032)"
    },
    {
        "ma": "PS210",
        "ten": "Tâm lí học du lịch",
        "lop": "TAMLIDL.1",
        "thu": "2",
        "ca": "6-8",
        "phong": "B201",
        "sotin": "3",
        "giangvien": "Trần Hoàng Thị Diễm Ngọc(CXW032)"
    },
    {
        "ma": "PS210",
        "ten": "Tâm lí học du lịch",
        "lop": "TAMLIDL.2",
        "thu": "4",
        "ca": "4-5",
        "phong": "B201",
        "sotin": "3",
        "giangvien": "Trần Hoàng Thị Diễm Ngọc(CXW032)"
    },
    {
        "ma": "PS210",
        "ten": "Tâm lí học du lịch",
        "lop": "TAMLIDL.2",
        "thu": "4",
        "ca": "6-8",
        "phong": "B201",
        "sotin": "3",
        "giangvien": "Trần Hoàng Thị Diễm Ngọc(CXW032)"
    },
    {
        "ma": "PS210",
        "ten": "Tâm lí học du lịch",
        "lop": "TAMLIDL.3",
        "thu": "6",
        "ca": "4-5",
        "phong": "B201",
        "sotin": "3",
        "giangvien": "Trần Hoàng Thị Diễm Ngọc(CXW032)"
    },
    {
        "ma": "PS210",
        "ten": "Tâm lí học du lịch",
        "lop": "TAMLIDL.3",
        "thu": "6",
        "ca": "6-8",
        "phong": "B201",
        "sotin": "3",
        "giangvien": "Trần Hoàng Thị Diễm Ngọc(CXW032)"
    },
    {
        "ma": "PH206",
        "ten": "Tâm lý - Đạo đức y học",
        "lop": "TAMLY&DDYHOC.1 (TC)",
        "thu": "6",
        "ca": "10-12",
        "phong": "A303",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "PH306",
        "ten": "Tâm lý y học – Y đức",
        "lop": "PH306.1",
        "thu": "4",
        "ca": "6-7",
        "phong": "A303",
        "sotin": "3",
        "giangvien": "Vũ Thy Cầm(MSN049)"
    },
    {
        "ma": "PH306",
        "ten": "Tâm lý y học – Y đức",
        "lop": "PH306.1",
        "thu": "7",
        "ca": "8-10",
        "phong": "A303",
        "sotin": "3",
        "giangvien": "Phạm Thành Đồng(CSN020)"
    },
    {
        "ma": "NR415B",
        "ten": "TH điều dưỡng các bệnh tâm thần",
        "lop": "THSKHOETAMTHAN.1",
        "thu": "1",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "1",
        "giangvien": "Lê Đức Sang(CSN017)"
    },
    {
        "ma": "NR415B",
        "ten": "TH điều dưỡng các bệnh tâm thần",
        "lop": "THSKHOETAMTHAN.2",
        "thu": "2",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "1",
        "giangvien": "Lê Đức Sang(CSN017)"
    },
    {
        "ma": "NR310B",
        "ten": "TH Điều dưỡng hồi sức cấp cứu",
        "lop": "THHOISUCCAPCUU.1 (TC)",
        "thu": "7",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "1",
        "giangvien": "Hà Thị Huyền(CSN001)"
    },
    {
        "ma": "NR310B",
        "ten": "TH Điều dưỡng hồi sức cấp cứu",
        "lop": "THHOISUCCAPCUU.2 (TC)",
        "thu": "7",
        "ca": "6-9",
        "phong": "BENHVIEN",
        "sotin": "1",
        "giangvien": "Vũ Dũng(CSN012)"
    },
    {
        "ma": "NR219B",
        "ten": "TH Điều dưỡng nhi khoa",
        "lop": "THDDUONGNHI.2 (TC)",
        "thu": "7",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "1",
        "giangvien": "Hà Thị Huyền(CSN001)"
    },
    {
        "ma": "NR219B",
        "ten": "TH Điều dưỡng nhi khoa",
        "lop": "THDDUONGNHI.1 (TC)",
        "thu": "7",
        "ca": "6-9",
        "phong": "BENHVIEN",
        "sotin": "1",
        "giangvien": "Hà Thị Huyền(CSN001)"
    },
    {
        "ma": "MC223",
        "ten": "Thăm dò dư luận xã hội",
        "lop": "THAMDODLXH.1_LT",
        "thu": "4",
        "ca": "3-5",
        "phong": "B504",
        "sotin": "2",
        "giangvien": "Vũ Thị Thanh Nhàn(CXC001)"
    },
    {
        "ma": "MC223",
        "ten": "Thăm dò dư luận xã hội",
        "lop": "THAMDODLXH.2_LT",
        "thu": "4",
        "ca": "6-8",
        "phong": "B504",
        "sotin": "2",
        "giangvien": "Vũ Thị Thanh Nhàn(CXC001)"
    },
    {
        "ma": "MC223",
        "ten": "Thăm dò dư luận xã hội",
        "lop": "THAMDODLXH.3_LT",
        "thu": "5",
        "ca": "3-5",
        "phong": "B506",
        "sotin": "2",
        "giangvien": "Vũ Thị Thanh Nhàn(CXC001)"
    },
    {
        "ma": "MC223",
        "ten": "Thăm dò dư luận xã hội",
        "lop": "THAMDODLXH.4_LT",
        "thu": "5",
        "ca": "6-8",
        "phong": "B506",
        "sotin": "2",
        "giangvien": "Vũ Thị Thanh Nhàn(CXC001)"
    },
    {
        "ma": "AN235B",
        "ten": "Thanh nhạc ứng dụng 2B",
        "lop": "THANHNHACUNGDUNG2B.1",
        "thu": "2",
        "ca": "6-8",
        "phong": "B809",
        "sotin": "1",
        "giangvien": "Cao Nguyệt Hằng(MAN025)"
    },
    {
        "ma": "AN235B",
        "ten": "Thanh nhạc ứng dụng 2B",
        "lop": "THANHNHACUNGDUNG2B.2",
        "thu": "3",
        "ca": "3-5",
        "phong": "B803",
        "sotin": "1",
        "giangvien": "Cao Nguyệt Hằng(MAN025)"
    },
    {
        "ma": "BK321",
        "ten": "Thanh toán quốc tế",
        "lop": "THANHTOANQT.1",
        "thu": "5",
        "ca": "6-7",
        "phong": "Acorebank",
        "sotin": "3",
        "giangvien": "Ngô Khánh Huyền(CQB002)"
    },
    {
        "ma": "BK321",
        "ten": "Thanh toán quốc tế",
        "lop": "THANHTOANQT.1",
        "thu": "6",
        "ca": "3-5",
        "phong": "Acorebank",
        "sotin": "3",
        "giangvien": "Ngô Khánh Huyền(CQB002)"
    },
    {
        "ma": "BK321",
        "ten": "Thanh toán quốc tế",
        "lop": "THANHTOANQT.1",
        "thu": "7",
        "ca": "6-7",
        "phong": "Acorebank",
        "sotin": "3",
        "giangvien": "Ngô Khánh Huyền(CQB002)"
    },
    {
        "ma": "PG120",
        "ten": "Thể dục cơ bản nâng cao",
        "lop": "TDCBNANGCAO.15",
        "thu": "3",
        "ca": "1-2",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG120",
        "ten": "Thể dục cơ bản nâng cao",
        "lop": "TDCBNANGCAO.16",
        "thu": "3",
        "ca": "3-4",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG120",
        "ten": "Thể dục cơ bản nâng cao",
        "lop": "TDCBNANGCAO.17",
        "thu": "3",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG120",
        "ten": "Thể dục cơ bản nâng cao",
        "lop": "TDCBNANGCAO.18",
        "thu": "3",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG120",
        "ten": "Thể dục cơ bản nâng cao",
        "lop": "TDCBNANGCAO.5",
        "thu": "4",
        "ca": "1-2",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG120",
        "ten": "Thể dục cơ bản nâng cao",
        "lop": "TDCBNANGCAO.6",
        "thu": "4",
        "ca": "3-4",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG120",
        "ten": "Thể dục cơ bản nâng cao",
        "lop": "TDCBNANGCAO.7",
        "thu": "4",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG120",
        "ten": "Thể dục cơ bản nâng cao",
        "lop": "TDCBNANGCAO.8",
        "thu": "4",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG120",
        "ten": "Thể dục cơ bản nâng cao",
        "lop": "TDCBNANGCAO.9",
        "thu": "5",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG120",
        "ten": "Thể dục cơ bản nâng cao",
        "lop": "TDCBNANGCAO.10",
        "thu": "5",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG120",
        "ten": "Thể dục cơ bản nâng cao",
        "lop": "TDCBNANGCAO.11",
        "thu": "6",
        "ca": "1-2",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG120",
        "ten": "Thể dục cơ bản nâng cao",
        "lop": "TDCBNANGCAO.12",
        "thu": "6",
        "ca": "3-4",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG120",
        "ten": "Thể dục cơ bản nâng cao",
        "lop": "TDCBNANGCAO.13",
        "thu": "6",
        "ca": "6-7",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "PG120",
        "ten": "Thể dục cơ bản nâng cao",
        "lop": "TDCBNANGCAO.14",
        "thu": "6",
        "ca": "8-9",
        "phong": "NHATC",
        "sotin": "1",
        "giangvien": ""
    },
    {
        "ma": "FN331",
        "ten": "Thị trường chứng khoán",
        "lop": "THITRUONGCK.2",
        "thu": "2",
        "ca": "1-2",
        "phong": "Afinance",
        "sotin": "3",
        "giangvien": "Ngô Khánh Huyền(CQB002)"
    },
    {
        "ma": "FN331",
        "ten": "Thị trường chứng khoán",
        "lop": "THITRUONGCK.1",
        "thu": "2",
        "ca": "3-5",
        "phong": "Afinance",
        "sotin": "3",
        "giangvien": "Ngô Khánh Huyền(CQB002)"
    },
    {
        "ma": "FN331",
        "ten": "Thị trường chứng khoán",
        "lop": "THITRUONGCK.1",
        "thu": "3",
        "ca": "1-2",
        "phong": "Afinance",
        "sotin": "3",
        "giangvien": "Ngô Khánh Huyền(CQB002)"
    },
    {
        "ma": "FN331",
        "ten": "Thị trường chứng khoán",
        "lop": "THITRUONGCK.2",
        "thu": "3",
        "ca": "3-5",
        "phong": "Afinance",
        "sotin": "3",
        "giangvien": "Ngô Khánh Huyền(CQB002)"
    },
    {
        "ma": "FN331",
        "ten": "Thị trường chứng khoán",
        "lop": "THITRUONGCK.3",
        "thu": "3",
        "ca": "6-7",
        "phong": "B302",
        "sotin": "3",
        "giangvien": "Ngô Khánh Huyền(CQB002)"
    },
    {
        "ma": "FN331",
        "ten": "Thị trường chứng khoán",
        "lop": "THITRUONGCK.2",
        "thu": "4",
        "ca": "1-2",
        "phong": "Afinance",
        "sotin": "3",
        "giangvien": "Ngô Khánh Huyền(CQB002)"
    },
    {
        "ma": "FN331",
        "ten": "Thị trường chứng khoán",
        "lop": "THITRUONGCK.3",
        "thu": "5",
        "ca": "8-10",
        "phong": "Afinance",
        "sotin": "3",
        "giangvien": "Ngô Khánh Huyền(CQB002)"
    },
    {
        "ma": "FN331",
        "ten": "Thị trường chứng khoán",
        "lop": "THITRUONGCK.1",
        "thu": "6",
        "ca": "1-2",
        "phong": "A507",
        "sotin": "3",
        "giangvien": "Ngô Khánh Huyền(CQB002)"
    },
    {
        "ma": "FN331",
        "ten": "Thị trường chứng khoán",
        "lop": "THITRUONGCK.3",
        "thu": "7",
        "ca": "1-2",
        "phong": "A409",
        "sotin": "3",
        "giangvien": "Ngô Khánh Huyền(CQB002)"
    },
    {
        "ma": "MD112",
        "ten": "Thiết kế dàn trang tạp chí và báo",
        "lop": "TKDANTRANGTC.3_LT",
        "thu": "2",
        "ca": "2-5",
        "phong": "B709",
        "sotin": "3",
        "giangvien": "Nguyễn Mạnh Tường(MXC016)"
    },
    {
        "ma": "MD112",
        "ten": "Thiết kế dàn trang tạp chí và báo",
        "lop": "TKDANTRANGTC.4_LT",
        "thu": "2",
        "ca": "6-9",
        "phong": "B709",
        "sotin": "3",
        "giangvien": "Phạm Hoài Thanh(MXC002)"
    },
    {
        "ma": "MD112",
        "ten": "Thiết kế dàn trang tạp chí và báo",
        "lop": "TKDANTRANGTC.1_LT",
        "thu": "5",
        "ca": "2-5",
        "phong": "B709",
        "sotin": "3",
        "giangvien": "Hoàng Hải Yến(MXC008)"
    },
    {
        "ma": "MD112",
        "ten": "Thiết kế dàn trang tạp chí và báo",
        "lop": "TKDANTRANGTC.2_LT",
        "thu": "5",
        "ca": "6-9",
        "phong": "B709",
        "sotin": "3",
        "giangvien": "Hoàng Hải Yến(MXC008)"
    },
    {
        "ma": "MD112",
        "ten": "Thiết kế dàn trang tạp chí và báo",
        "lop": "TKDANTRANGTC.5_LT",
        "thu": "7",
        "ca": "2-5",
        "phong": "B709",
        "sotin": "3",
        "giangvien": "Nguyễn Mạnh Tường(MXC016)"
    },
    {
        "ma": "MD112",
        "ten": "Thiết kế dàn trang tạp chí và báo",
        "lop": "TKDANTRANGTC.6_LT",
        "thu": "7",
        "ca": "6-9",
        "phong": "B709",
        "sotin": "3",
        "giangvien": "Nguyễn Mạnh Tường(MXC016)"
    },
    {
        "ma": "FA421",
        "ten": "Thiết kế đồ họa truyền thông",
        "lop": "TKDOHOATT.1_LT",
        "thu": "3",
        "ca": "2-5",
        "phong": "B709",
        "sotin": "3",
        "giangvien": "Phạm Hoài Thanh(MXC002)"
    },
    {
        "ma": "FA421",
        "ten": "Thiết kế đồ họa truyền thông",
        "lop": "TKDOHOATT.2_LT",
        "thu": "4",
        "ca": "2-5",
        "phong": "B709",
        "sotin": "3",
        "giangvien": "Phạm Hoài Thanh(MXC002)"
    },
    {
        "ma": "FA421",
        "ten": "Thiết kế đồ họa truyền thông",
        "lop": "TKDOHOATT.3_LT",
        "thu": "4",
        "ca": "6-9",
        "phong": "B709",
        "sotin": "3",
        "giangvien": "Phạm Hoài Thanh(MXC002)"
    },
    {
        "ma": "FA421",
        "ten": "Thiết kế đồ họa truyền thông",
        "lop": "TKDOHOATT.4_LT",
        "thu": "6",
        "ca": "2-5",
        "phong": "B709",
        "sotin": "3",
        "giangvien": "Hoàng Hải Yến(MXC008)"
    },
    {
        "ma": "TG311",
        "ten": "Thiết kế và tổ chức sản xuất sự kiện",
        "lop": "TKE&TCSXSK.1",
        "thu": "5",
        "ca": "4-5",
        "phong": "A603",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "TG311",
        "ten": "Thiết kế và tổ chức sản xuất sự kiện",
        "lop": "TKE&TCSXSK.1",
        "thu": "5",
        "ca": "6-8",
        "phong": "B606",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "TG312",
        "ten": "Thiết kế và tổ chức Teambuilding",
        "lop": "TG312.1",
        "thu": "3",
        "ca": "1-3",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Tạ Dương Trà My(CDL014)"
    },
    {
        "ma": "TG312",
        "ten": "Thiết kế và tổ chức Teambuilding",
        "lop": "TG312.2",
        "thu": "3",
        "ca": "4-5",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Tạ Dương Trà My(CDL014)"
    },
    {
        "ma": "TG312",
        "ten": "Thiết kế và tổ chức Teambuilding",
        "lop": "TG312.2",
        "thu": "5",
        "ca": "1-3",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Tạ Dương Trà My(CDL014)"
    },
    {
        "ma": "TG312",
        "ten": "Thiết kế và tổ chức Teambuilding",
        "lop": "TG312.1",
        "thu": "5",
        "ca": "4-5",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Tạ Dương Trà My(CDL014)"
    },
    {
        "ma": "MA238",
        "ten": "Thống kê nâng cao",
        "lop": "TKENANGCAO.1_LT",
        "thu": "2",
        "ca": "6-8",
        "phong": "A601",
        "sotin": "3",
        "giangvien": "Phan Thanh Hồng(CTM007)"
    },
    {
        "ma": "MA238",
        "ten": "Thống kê nâng cao",
        "lop": "TKENANGCAO.1.1_BT",
        "thu": "4",
        "ca": "6-7",
        "phong": "A702",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Nhung(CTM005)"
    },
    {
        "ma": "MA238",
        "ten": "Thống kê nâng cao",
        "lop": "TKENANGCAO.1.1_BT",
        "thu": "6",
        "ca": "6-7",
        "phong": "A702",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Nhung(CTM005)"
    },
    {
        "ma": "MA232",
        "ten": "Thống kê xã hội học",
        "lop": "TKEXHHOC.5.1_BT",
        "thu": "2",
        "ca": "9-10",
        "phong": "B708",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "MA232",
        "ten": "Thống kê xã hội học",
        "lop": "TKEXHHOC.5",
        "thu": "3",
        "ca": "1-3",
        "phong": "B306",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "MA232",
        "ten": "Thống kê xã hội học",
        "lop": "TKEXHHOC.5.1_BT",
        "thu": "4",
        "ca": "9-10",
        "phong": "B704",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "MA233",
        "ten": "Thống kê y học",
        "lop": "TKEYHOC.3_LT",
        "thu": "2",
        "ca": "6-7",
        "phong": "B703",
        "sotin": "2",
        "giangvien": "Lê Đức Sang(CSN017)"
    },
    {
        "ma": "MA233",
        "ten": "Thống kê y học",
        "lop": "TKEYHOC.3.1_BT",
        "thu": "2",
        "ca": "8-10",
        "phong": "B703",
        "sotin": "2",
        "giangvien": "Lê Đức Sang(CSN017)"
    },
    {
        "ma": "MA233",
        "ten": "Thống kê y học",
        "lop": "TKEYHOC.1_LT",
        "thu": "4",
        "ca": "6-7",
        "phong": "B703",
        "sotin": "2",
        "giangvien": "Lê Đức Sang(CSN017)"
    },
    {
        "ma": "MA233",
        "ten": "Thống kê y học",
        "lop": "TKEYHOC.1.1_BT",
        "thu": "4",
        "ca": "8-10",
        "phong": "B703",
        "sotin": "2",
        "giangvien": "Lê Đức Sang(CSN017)"
    },
    {
        "ma": "MA233",
        "ten": "Thống kê y học",
        "lop": "TKEYHOC.2_LT",
        "thu": "6",
        "ca": "6-7",
        "phong": "B703",
        "sotin": "2",
        "giangvien": "Vũ Dũng(CSN012)"
    },
    {
        "ma": "MA233",
        "ten": "Thống kê y học",
        "lop": "TKEYHOC.2.1_BT",
        "thu": "6",
        "ca": "8-10",
        "phong": "B703",
        "sotin": "2",
        "giangvien": "Vũ Dũng(CSN012)"
    },
    {
        "ma": "AN251B",
        "ten": "Thực hành biểu diễn 1B",
        "lop": "THBIEUDIEN1B.1",
        "thu": "3",
        "ca": "8-9",
        "phong": "B810",
        "sotin": "2",
        "giangvien": "Phạm Đức Thành(CAN002)"
    },
    {
        "ma": "AN251B",
        "ten": "Thực hành biểu diễn 1B",
        "lop": "THBIEUDIEN1B.2",
        "thu": "4",
        "ca": "9-10",
        "phong": "B810",
        "sotin": "2",
        "giangvien": "Phạm Đức Thành(CAN002)"
    },
    {
        "ma": "AN251B",
        "ten": "Thực hành biểu diễn 1B",
        "lop": "THBIEUDIEN1B.3",
        "thu": "5",
        "ca": "8-9",
        "phong": "B810",
        "sotin": "2",
        "giangvien": "Phạm Đức Thành(CAN002)"
    },
    {
        "ma": "AN251B",
        "ten": "Thực hành biểu diễn 1B",
        "lop": "THBIEUDIEN1B.4",
        "thu": "6",
        "ca": "6-7",
        "phong": "B810",
        "sotin": "2",
        "giangvien": "Phạm Đức Thành(CAN002)"
    },
    {
        "ma": "AN352B",
        "ten": "Thực hành biểu diễn 2B",
        "lop": "THBIEUDIEN2B.1",
        "thu": "4",
        "ca": "6-7",
        "phong": "B810",
        "sotin": "1",
        "giangvien": "Phạm Đức Thành(CAN002)"
    },
    {
        "ma": "AN352B",
        "ten": "Thực hành biểu diễn 2B",
        "lop": "THBIEUDIEN2B.2",
        "thu": "5",
        "ca": "6-7",
        "phong": "B810",
        "sotin": "1",
        "giangvien": "Phạm Đức Thành(CAN002)"
    },
    {
        "ma": "AN352B",
        "ten": "Thực hành biểu diễn 2B",
        "lop": "THBIEUDIEN2B.3",
        "thu": "6",
        "ca": "8-9",
        "phong": "B810",
        "sotin": "1",
        "giangvien": "Phạm Đức Thành(CAN002)"
    },
    {
        "ma": "NR321B",
        "ten": "Thực hành điều dưỡng các bệnh nhi khoa",
        "lop": "THNHIKHOA.3",
        "thu": "2",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "2",
        "giangvien": "Hà Thị Huyền(CSN001)"
    },
    {
        "ma": "NR321B",
        "ten": "Thực hành điều dưỡng các bệnh nhi khoa",
        "lop": "THNHIKHOA.3",
        "thu": "3",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "2",
        "giangvien": "Hà Thị Huyền(CSN001)"
    },
    {
        "ma": "NR321B",
        "ten": "Thực hành điều dưỡng các bệnh nhi khoa",
        "lop": "THNHIKHOA.2",
        "thu": "4",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "2",
        "giangvien": "Hà Thị Huyền(CSN001)"
    },
    {
        "ma": "NR321B",
        "ten": "Thực hành điều dưỡng các bệnh nhi khoa",
        "lop": "THNHIKHOA.1",
        "thu": "4",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "2",
        "giangvien": "Nguyễn Thị Thùy Trang(CSN021)"
    },
    {
        "ma": "NR321B",
        "ten": "Thực hành điều dưỡng các bệnh nhi khoa",
        "lop": "THNHIKHOA.1",
        "thu": "5",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "2",
        "giangvien": "Nguyễn Thị Thùy Trang(CSN021)"
    },
    {
        "ma": "NR321B",
        "ten": "Thực hành điều dưỡng các bệnh nhi khoa",
        "lop": "THNHIKHOA.2",
        "thu": "5",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "2",
        "giangvien": "Hà Thị Huyền(CSN001)"
    },
    {
        "ma": "NR202B",
        "ten": "Thực hành điều dưỡng cơ bản 2",
        "lop": "THDIEUDUONGCB2.1",
        "thu": "2",
        "ca": "6-9",
        "phong": "BOMON1",
        "sotin": "2",
        "giangvien": "Hà Thị Huyền(CSN001)"
    },
    {
        "ma": "NR202B",
        "ten": "Thực hành điều dưỡng cơ bản 2",
        "lop": "THDIEUDUONGCB2.2",
        "thu": "2",
        "ca": "6-9",
        "phong": "BOMON1",
        "sotin": "2",
        "giangvien": "Phạm Thành Đồng(CSN020)"
    },
    {
        "ma": "NR202B",
        "ten": "Thực hành điều dưỡng cơ bản 2",
        "lop": "THDIEUDUONGCB2.3",
        "thu": "2",
        "ca": "6-9",
        "phong": "BOMON2",
        "sotin": "2",
        "giangvien": "Nguyễn Khánh Huyền(CSN030)"
    },
    {
        "ma": "NR202B",
        "ten": "Thực hành điều dưỡng cơ bản 2",
        "lop": "THDIEUDUONGCB2.3",
        "thu": "6",
        "ca": "6-9",
        "phong": "BOMON2",
        "sotin": "2",
        "giangvien": "Nguyễn Khánh Huyền(CSN030)"
    },
    {
        "ma": "NR202B",
        "ten": "Thực hành điều dưỡng cơ bản 2",
        "lop": "THDIEUDUONGCB2.2",
        "thu": "6",
        "ca": "6-9",
        "phong": "BOMON1",
        "sotin": "2",
        "giangvien": "Phạm Thành Đồng(CSN020)"
    },
    {
        "ma": "NR202B",
        "ten": "Thực hành điều dưỡng cơ bản 2",
        "lop": "THDIEUDUONGCB2.1",
        "thu": "6",
        "ca": "6-9",
        "phong": "BOMON1",
        "sotin": "2",
        "giangvien": "Hà Thị Huyền(CSN001)"
    },
    {
        "ma": "NR451B",
        "ten": "Thực hành điều dưỡng cộng đồng",
        "lop": "THÐDCONGDONG.2",
        "thu": "1",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "1",
        "giangvien": "Đỗ Quang Tuyển(CSN006)"
    },
    {
        "ma": "NR451B",
        "ten": "Thực hành điều dưỡng cộng đồng",
        "lop": "THÐDCONGDONG.1",
        "thu": "2",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "1",
        "giangvien": "Đỗ Quang Tuyển(CSN006)"
    },
    {
        "ma": "NR342B",
        "ten": "Thực hành điều dưỡng phụ sản",
        "lop": "THPHUSAN.2",
        "thu": "2",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "2",
        "giangvien": "Phạm Thành Đồng(CSN020)"
    },
    {
        "ma": "NR342B",
        "ten": "Thực hành điều dưỡng phụ sản",
        "lop": "THPHUSAN.1",
        "thu": "2",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "2",
        "giangvien": "Nguyễn Thị Như Mai(CSN003)"
    },
    {
        "ma": "NR342B",
        "ten": "Thực hành điều dưỡng phụ sản",
        "lop": "THPHUSAN.2",
        "thu": "3",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "2",
        "giangvien": "Phạm Thành Đồng(CSN020)"
    },
    {
        "ma": "NR342B",
        "ten": "Thực hành điều dưỡng phụ sản",
        "lop": "THPHUSAN.1",
        "thu": "3",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "2",
        "giangvien": "Nguyễn Thị Như Mai(CSN003)"
    },
    {
        "ma": "NR342B",
        "ten": "Thực hành điều dưỡng phụ sản",
        "lop": "THPHUSAN.3",
        "thu": "4",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "2",
        "giangvien": "Nguyễn Thị Như Mai(CSN003)"
    },
    {
        "ma": "NR342B",
        "ten": "Thực hành điều dưỡng phụ sản",
        "lop": "THPHUSAN.3",
        "thu": "5",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "2",
        "giangvien": "Nguyễn Thị Như Mai(CSN003)"
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.2",
        "thu": "2",
        "ca": "8-9",
        "phong": "B210",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.3",
        "thu": "2",
        "ca": "8-9",
        "phong": "A403",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.4",
        "thu": "2",
        "ca": "8-9",
        "phong": "B308",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.1",
        "thu": "2",
        "ca": "8-9",
        "phong": "B208",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.1",
        "thu": "3",
        "ca": "8-9",
        "phong": "B212",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.4",
        "thu": "3",
        "ca": "8-9",
        "phong": "B308",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.3",
        "thu": "3",
        "ca": "8-9",
        "phong": "B310",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.2",
        "thu": "3",
        "ca": "8-9",
        "phong": "A403",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.2",
        "thu": "4",
        "ca": "8-9",
        "phong": "B304",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.3",
        "thu": "4",
        "ca": "8-9",
        "phong": "B306",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.1",
        "thu": "4",
        "ca": "8-9",
        "phong": "B212",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.4",
        "thu": "4",
        "ca": "8-9",
        "phong": "B308",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.3",
        "thu": "5",
        "ca": "6-7",
        "phong": "B302",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.2",
        "thu": "5",
        "ca": "8-9",
        "phong": "A403",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.1",
        "thu": "5",
        "ca": "8-9",
        "phong": "B212",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.4",
        "thu": "5",
        "ca": "8-9",
        "phong": "B308",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.4",
        "thu": "6",
        "ca": "8-9",
        "phong": "B308",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.1",
        "thu": "6",
        "ca": "8-9",
        "phong": "B402",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.2",
        "thu": "6",
        "ca": "8-9",
        "phong": "B412",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.3",
        "thu": "6",
        "ca": "8-9",
        "phong": "B410",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.3",
        "thu": "7",
        "ca": "6-7",
        "phong": "B612",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.4",
        "thu": "7",
        "ca": "6-7",
        "phong": "B308",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.1",
        "thu": "7",
        "ca": "8-9",
        "phong": "B512",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "GZ212",
        "ten": "Thực hành tiếng Trung Quốc 5",
        "lop": "GZ212.2",
        "thu": "7",
        "ca": "8-9",
        "phong": "A409",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "IP404",
        "ten": "Thực tập ngành CNTT",
        "lop": "TT(NGANH CNTT).1",
        "thu": "1",
        "ca": "6-10",
        "phong": "BOMON1",
        "sotin": "2",
        "giangvien": "Trần Quang Duy(CTI019)"
    },
    {
        "ma": "IP401",
        "ten": "Thực tập ngành Khoa học máy tính",
        "lop": "TTKHMAYTINH.1",
        "thu": "1",
        "ca": "1-5",
        "phong": "BOMON1",
        "sotin": "2",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "IP405",
        "ten": "Thực tập ngành Trí tuệ nhân tạo",
        "lop": "TT(NGANH TA).1",
        "thu": "1",
        "ca": "1-5",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Huyền Châu(PAI001)"
    },
    {
        "ma": "MD292",
        "ten": "Thực tập thiết kế",
        "lop": "TTTHIETKE.3",
        "thu": "1",
        "ca": "1-5",
        "phong": "BOMON2",
        "sotin": "3",
        "giangvien": "Nguyễn Văn Thiệu(CXC004)"
    },
    {
        "ma": "MD292",
        "ten": "Thực tập thiết kế",
        "lop": "TTTHIETKE.4",
        "thu": "1",
        "ca": "1-5",
        "phong": "BOMON",
        "sotin": "3",
        "giangvien": "Trần Thị Thùy Dương(CXC006)"
    },
    {
        "ma": "MD292",
        "ten": "Thực tập thiết kế",
        "lop": "TTTHIETKE.5",
        "thu": "1",
        "ca": "1-5",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Hồ Xuân Ngọc(CXC008)"
    },
    {
        "ma": "MD292",
        "ten": "Thực tập thiết kế",
        "lop": "TTTHIETKE.1",
        "thu": "1",
        "ca": "1-5",
        "phong": "BOMON",
        "sotin": "3",
        "giangvien": "Vũ Thị Thanh Nhàn(CXC001)"
    },
    {
        "ma": "MD292",
        "ten": "Thực tập thiết kế",
        "lop": "TTTHIETKE.2",
        "thu": "1",
        "ca": "1-5",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Phạm Bích San(CXC002)"
    },
    {
        "ma": "MD292",
        "ten": "Thực tập thiết kế",
        "lop": "TTTHIETKE.2",
        "thu": "1",
        "ca": "6-10",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Phạm Bích San(CXC002)"
    },
    {
        "ma": "MD292",
        "ten": "Thực tập thiết kế",
        "lop": "TTTHIETKE.1",
        "thu": "1",
        "ca": "6-10",
        "phong": "BOMON",
        "sotin": "3",
        "giangvien": "Vũ Thị Thanh Nhàn(CXC001)"
    },
    {
        "ma": "MD292",
        "ten": "Thực tập thiết kế",
        "lop": "TTTHIETKE.5",
        "thu": "1",
        "ca": "6-10",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Hồ Xuân Ngọc(CXC008)"
    },
    {
        "ma": "MD292",
        "ten": "Thực tập thiết kế",
        "lop": "TTTHIETKE.4",
        "thu": "1",
        "ca": "6-10",
        "phong": "BOMON",
        "sotin": "3",
        "giangvien": "Trần Thị Thùy Dương(CXC006)"
    },
    {
        "ma": "MD292",
        "ten": "Thực tập thiết kế",
        "lop": "TTTHIETKE.3",
        "thu": "1",
        "ca": "6-10",
        "phong": "BOMON2",
        "sotin": "3",
        "giangvien": "Nguyễn Văn Thiệu(CXC004)"
    },
    {
        "ma": "LK480",
        "ten": "Thực tập tốt nghiệp",
        "lop": "TTTN(LUATKT).T",
        "thu": "1",
        "ca": "1-3",
        "phong": "BOMON",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "MC492",
        "ten": "Thực tập tốt nghiệp",
        "lop": "TTTN.1.1_BT",
        "thu": "1",
        "ca": "1-5",
        "phong": "BOMON",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "MC492",
        "ten": "Thực tập tốt nghiệp",
        "lop": "TTTN.1.1_BT",
        "thu": "1",
        "ca": "6-10",
        "phong": "BOMON",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "MC492",
        "ten": "Thực tập tốt nghiệp",
        "lop": "TTTN.1_LT",
        "thu": "7",
        "ca": "1-2",
        "phong": "B612",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "VC429",
        "ten": "Thực tập tốt nghiệp chuyên ngành Du lịch",
        "lop": "THUCTAPDULICH.1",
        "thu": "1",
        "ca": "1-5",
        "phong": "BOMON",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "VC429",
        "ten": "Thực tập tốt nghiệp chuyên ngành Du lịch",
        "lop": "THUCTAPDULICH.1",
        "thu": "1",
        "ca": "6-10",
        "phong": "BOMON",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "VP412",
        "ten": "Thực tập tốt nghiệp chuyên ngành Văn hóa - Truyền thông báo chí",
        "lop": "TTVHOATRUYENTHONG.1",
        "thu": "1",
        "ca": "1-5",
        "phong": "BOMON",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "VP412",
        "ten": "Thực tập tốt nghiệp chuyên ngành Văn hóa - Truyền thông báo chí",
        "lop": "TTVHOATRUYENTHONG.1",
        "thu": "1",
        "ca": "6-10",
        "phong": "BOMON",
        "sotin": "4",
        "giangvien": ""
    },
    {
        "ma": "IP408",
        "ten": "Thực tập tốt nghiệp ngành Hệ thống thông tin",
        "lop": "TTTN(HeThongTT).1",
        "thu": "1",
        "ca": "1-5",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Nguyễn Mạnh Hùng(CTI040)"
    },
    {
        "ma": "FN495",
        "ten": "Thực tập tốt nghiệp ngành Tài chính – Ngân hàng",
        "lop": "TTTN(NGANH TC_NH).1",
        "thu": "1",
        "ca": "9-10",
        "phong": "",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "FN224",
        "ten": "Thuế",
        "lop": "THUE.2",
        "thu": "2",
        "ca": "3-5",
        "phong": "A603",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thu Trang(CQB024)"
    },
    {
        "ma": "FN224",
        "ten": "Thuế",
        "lop": "THUE.3",
        "thu": "3",
        "ca": "6-7",
        "phong": "B306",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thu Trang(CQB024)"
    },
    {
        "ma": "FN224",
        "ten": "Thuế",
        "lop": "THUE.2",
        "thu": "4",
        "ca": "4-5",
        "phong": "A407",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thu Trang(CQB024)"
    },
    {
        "ma": "FN224",
        "ten": "Thuế",
        "lop": "THUE.3",
        "thu": "6",
        "ca": "3-5",
        "phong": "A507",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Thu Trang(CQB024)"
    },
    {
        "ma": "GE121",
        "ten": "Tiếng Anh sơ trung cấp 1",
        "lop": "TANHSTC1.1",
        "thu": "2",
        "ca": "1-2",
        "phong": "B601",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE121",
        "ten": "Tiếng Anh sơ trung cấp 1",
        "lop": "TANHSTC1.2",
        "thu": "2",
        "ca": "4-5",
        "phong": "B506",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE121",
        "ten": "Tiếng Anh sơ trung cấp 1",
        "lop": "TANHSTC1.1",
        "thu": "4",
        "ca": "1-2",
        "phong": "B608",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE121",
        "ten": "Tiếng Anh sơ trung cấp 1",
        "lop": "TANHSTC1.2",
        "thu": "4",
        "ca": "4-5",
        "phong": "B510",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE121",
        "ten": "Tiếng Anh sơ trung cấp 1",
        "lop": "TANHSTC1.1",
        "thu": "6",
        "ca": "1-2",
        "phong": "B504",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE121",
        "ten": "Tiếng Anh sơ trung cấp 1",
        "lop": "TANHSTC1.2",
        "thu": "6",
        "ca": "4-5",
        "phong": "B603",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE222",
        "ten": "Tiếng Anh sơ trung cấp 2",
        "lop": "TANHSTC2.3",
        "thu": "2",
        "ca": "1-2",
        "phong": "B604",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE222",
        "ten": "Tiếng Anh sơ trung cấp 2",
        "lop": "TANHSTC2.4",
        "thu": "2",
        "ca": "4-5",
        "phong": "B607",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE222",
        "ten": "Tiếng Anh sơ trung cấp 2",
        "lop": "TANHSTC2.5",
        "thu": "3",
        "ca": "1-2",
        "phong": "B604",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE222",
        "ten": "Tiếng Anh sơ trung cấp 2",
        "lop": "TANHSTC2.6",
        "thu": "3",
        "ca": "4-5",
        "phong": "B610",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE222",
        "ten": "Tiếng Anh sơ trung cấp 2",
        "lop": "TANHSTC2.3",
        "thu": "4",
        "ca": "1-2",
        "phong": "B611",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE222",
        "ten": "Tiếng Anh sơ trung cấp 2",
        "lop": "TANHSTC2.4",
        "thu": "4",
        "ca": "4-5",
        "phong": "B713",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE222",
        "ten": "Tiếng Anh sơ trung cấp 2",
        "lop": "TANHSTC2.5",
        "thu": "5",
        "ca": "1-2",
        "phong": "B610",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE222",
        "ten": "Tiếng Anh sơ trung cấp 2",
        "lop": "TANHSTC2.6",
        "thu": "5",
        "ca": "4-5",
        "phong": "B406",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE222",
        "ten": "Tiếng Anh sơ trung cấp 2",
        "lop": "TANHSTC2.3",
        "thu": "6",
        "ca": "1-2",
        "phong": "B510",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE222",
        "ten": "Tiếng Anh sơ trung cấp 2",
        "lop": "TANHSTC2.4",
        "thu": "6",
        "ca": "4-5",
        "phong": "B611",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE222",
        "ten": "Tiếng Anh sơ trung cấp 2",
        "lop": "TANHSTC2.5",
        "thu": "7",
        "ca": "1-2",
        "phong": "A405",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE222",
        "ten": "Tiếng Anh sơ trung cấp 2",
        "lop": "TANHSTC2.6",
        "thu": "7",
        "ca": "4-5",
        "phong": "A605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "PE113",
        "ten": "Tiếng Anh trong điều dưỡng 3",
        "lop": "TIENGANHDD3.1 (TC)",
        "thu": "2",
        "ca": "10-12",
        "phong": "B208",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "PE113",
        "ten": "Tiếng Anh trong điều dưỡng 3",
        "lop": "TIENGANHDD3.1 (TC)",
        "thu": "4",
        "ca": "10-12",
        "phong": "B603",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.7",
        "thu": "2",
        "ca": "1-2",
        "phong": "B607",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.20",
        "thu": "2",
        "ca": "1-2",
        "phong": "B613",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.33",
        "thu": "2",
        "ca": "1-2",
        "phong": "B710",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.35",
        "thu": "2",
        "ca": "1-2",
        "phong": "B713",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.8",
        "thu": "2",
        "ca": "4-5",
        "phong": "A403",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.22",
        "thu": "2",
        "ca": "4-5",
        "phong": "A401",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.9",
        "thu": "2",
        "ca": "6-7",
        "phong": "B410",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.23",
        "thu": "2",
        "ca": "6-7",
        "phong": "B611",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.34",
        "thu": "2",
        "ca": "6-8",
        "phong": "B212",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.32",
        "thu": "2",
        "ca": "9-10",
        "phong": "B601",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.24",
        "thu": "2",
        "ca": "9-10",
        "phong": "B512",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.10",
        "thu": "2",
        "ca": "9-10",
        "phong": "B506",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.12",
        "thu": "3",
        "ca": "1-2",
        "phong": "B605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.16",
        "thu": "3",
        "ca": "1-2",
        "phong": "B606",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.25",
        "thu": "3",
        "ca": "1-2",
        "phong": "B713",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.26",
        "thu": "3",
        "ca": "4-5",
        "phong": "B308",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.17",
        "thu": "3",
        "ca": "4-5",
        "phong": "B306",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.13",
        "thu": "3",
        "ca": "4-5",
        "phong": "A403",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.14",
        "thu": "3",
        "ca": "6-7",
        "phong": "B712",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.18",
        "thu": "3",
        "ca": "6-7",
        "phong": "B713",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.27",
        "thu": "3",
        "ca": "6-7",
        "phong": "A401",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.31",
        "thu": "3",
        "ca": "6-8",
        "phong": "B206",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.19",
        "thu": "3",
        "ca": "9-10",
        "phong": "B510",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.15",
        "thu": "3",
        "ca": "9-10",
        "phong": "B508",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.28",
        "thu": "3",
        "ca": "9-10",
        "phong": "B602",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.36",
        "thu": "3",
        "ca": "9-10",
        "phong": "B606",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.7",
        "thu": "4",
        "ca": "1-2",
        "phong": "B710",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.8",
        "thu": "4",
        "ca": "4-5",
        "phong": "A403",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.22",
        "thu": "4",
        "ca": "4-5",
        "phong": "A401",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.23",
        "thu": "4",
        "ca": "6-7",
        "phong": "B212",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.9",
        "thu": "4",
        "ca": "6-7",
        "phong": "A403",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.29",
        "thu": "4",
        "ca": "8-10",
        "phong": "B713",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.24",
        "thu": "4",
        "ca": "9-10",
        "phong": "B604",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.32",
        "thu": "4",
        "ca": "9-10",
        "phong": "B608",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.10",
        "thu": "4",
        "ca": "9-10",
        "phong": "B410",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.12",
        "thu": "5",
        "ca": "1-2",
        "phong": "B611",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.16",
        "thu": "5",
        "ca": "1-2",
        "phong": "B612",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.25",
        "thu": "5",
        "ca": "1-2",
        "phong": "A401",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.21",
        "thu": "5",
        "ca": "3-5",
        "phong": "A401",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.17",
        "thu": "5",
        "ca": "4-5",
        "phong": "B603",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.13",
        "thu": "5",
        "ca": "4-5",
        "phong": "B508",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.26",
        "thu": "5",
        "ca": "4-5",
        "phong": "A403",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.14",
        "thu": "5",
        "ca": "6-7",
        "phong": "B613",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.18",
        "thu": "5",
        "ca": "6-7",
        "phong": "A403",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.27",
        "thu": "5",
        "ca": "6-7",
        "phong": "A601",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.34",
        "thu": "5",
        "ca": "6-8",
        "phong": "B304",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.19",
        "thu": "5",
        "ca": "9-10",
        "phong": "B506",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.15",
        "thu": "5",
        "ca": "9-10",
        "phong": "A505",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.28",
        "thu": "5",
        "ca": "9-10",
        "phong": "B603",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.36",
        "thu": "5",
        "ca": "9-10",
        "phong": "B604",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.33",
        "thu": "6",
        "ca": "1-2",
        "phong": "B712",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.35",
        "thu": "6",
        "ca": "1-2",
        "phong": "A401",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.11",
        "thu": "6",
        "ca": "1-3",
        "phong": "B611",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.7",
        "thu": "6",
        "ca": "1-2",
        "phong": "B605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.20",
        "thu": "6",
        "ca": "1-2",
        "phong": "B710",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.22",
        "thu": "6",
        "ca": "4-5",
        "phong": "A401",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.8",
        "thu": "6",
        "ca": "4-5",
        "phong": "B612",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.9",
        "thu": "6",
        "ca": "6-7",
        "phong": "A505",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.23",
        "thu": "6",
        "ca": "6-7",
        "phong": "B713",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.30",
        "thu": "6",
        "ca": "8-10",
        "phong": "B713",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.29",
        "thu": "6",
        "ca": "8-10",
        "phong": "B605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.24",
        "thu": "6",
        "ca": "9-10",
        "phong": "B508",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.32",
        "thu": "6",
        "ca": "9-10",
        "phong": "B602",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.10",
        "thu": "6",
        "ca": "9-10",
        "phong": "A405",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.12",
        "thu": "7",
        "ca": "1-2",
        "phong": "B410",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.11",
        "thu": "7",
        "ca": "1-3",
        "phong": "B508",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.20",
        "thu": "7",
        "ca": "1-2",
        "phong": "B604",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.16",
        "thu": "7",
        "ca": "1-2",
        "phong": "B510",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.33",
        "thu": "7",
        "ca": "1-2",
        "phong": "B608",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.35",
        "thu": "7",
        "ca": "1-2",
        "phong": "B610",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.25",
        "thu": "7",
        "ca": "1-2",
        "phong": "B605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.21",
        "thu": "7",
        "ca": "3-5",
        "phong": "B713",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.17",
        "thu": "7",
        "ca": "4-5",
        "phong": "B607",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.13",
        "thu": "7",
        "ca": "4-5",
        "phong": "B508",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.26",
        "thu": "7",
        "ca": "4-5",
        "phong": "A403",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.31",
        "thu": "7",
        "ca": "6-8",
        "phong": "B607",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.14",
        "thu": "7",
        "ca": "6-7",
        "phong": "A405",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.18",
        "thu": "7",
        "ca": "6-7",
        "phong": "A605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.27",
        "thu": "7",
        "ca": "6-7",
        "phong": "B605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.30",
        "thu": "7",
        "ca": "8-10",
        "phong": "B410",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.28",
        "thu": "7",
        "ca": "9-10",
        "phong": "B404",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.36",
        "thu": "7",
        "ca": "9-10",
        "phong": "B502",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.19",
        "thu": "7",
        "ca": "9-10",
        "phong": "A505",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE231",
        "ten": "Tiếng Anh trung cấp 1",
        "lop": "TANHTC1.15",
        "thu": "7",
        "ca": "9-10",
        "phong": "A405",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.43",
        "thu": "2",
        "ca": "1-2",
        "phong": "B612",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.35",
        "thu": "2",
        "ca": "1-2",
        "phong": "B610",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.48",
        "thu": "2",
        "ca": "1-2",
        "phong": "A401",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.36",
        "thu": "2",
        "ca": "4-5",
        "phong": "A503",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.37",
        "thu": "2",
        "ca": "6-7",
        "phong": "B603",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.44",
        "thu": "2",
        "ca": "6-7",
        "phong": "B610",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.49",
        "thu": "2",
        "ca": "6-7",
        "phong": "A403",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.53",
        "thu": "2",
        "ca": "6-8",
        "phong": "B206",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.46",
        "thu": "2",
        "ca": "8-10",
        "phong": "B713",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.45",
        "thu": "2",
        "ca": "8-10",
        "phong": "B712",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.38",
        "thu": "2",
        "ca": "9-10",
        "phong": "B508",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.52",
        "thu": "2",
        "ca": "9-10",
        "phong": "B608",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.39",
        "thu": "3",
        "ca": "1-2",
        "phong": "B712",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.40",
        "thu": "3",
        "ca": "4-5",
        "phong": "B312",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.41",
        "thu": "3",
        "ca": "6-7",
        "phong": "B212",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.50",
        "thu": "3",
        "ca": "6-7",
        "phong": "B304",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.51",
        "thu": "3",
        "ca": "9-10",
        "phong": "B607",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.42",
        "thu": "3",
        "ca": "9-10",
        "phong": "B601",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.35",
        "thu": "4",
        "ca": "1-2",
        "phong": "B712",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.43",
        "thu": "4",
        "ca": "1-2",
        "phong": "A401",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.48",
        "thu": "4",
        "ca": "1-2",
        "phong": "A403",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.36",
        "thu": "4",
        "ca": "4-5",
        "phong": "B206",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.37",
        "thu": "4",
        "ca": "6-7",
        "phong": "B304",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.44",
        "thu": "4",
        "ca": "6-7",
        "phong": "B306",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.49",
        "thu": "4",
        "ca": "6-7",
        "phong": "B308",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.45",
        "thu": "4",
        "ca": "8-10",
        "phong": "B613",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.46",
        "thu": "4",
        "ca": "8-10",
        "phong": "B712",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.38",
        "thu": "4",
        "ca": "9-10",
        "phong": "B504",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.52",
        "thu": "4",
        "ca": "9-10",
        "phong": "B612",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.39",
        "thu": "5",
        "ca": "1-2",
        "phong": "B613",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.40",
        "thu": "5",
        "ca": "4-5",
        "phong": "B206",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.41",
        "thu": "5",
        "ca": "6-7",
        "phong": "B212",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.50",
        "thu": "5",
        "ca": "6-7",
        "phong": "B308",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.54",
        "thu": "5",
        "ca": "6-8",
        "phong": "B310",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.51",
        "thu": "5",
        "ca": "9-10",
        "phong": "B606",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.42",
        "thu": "5",
        "ca": "9-10",
        "phong": "B510",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.35",
        "thu": "6",
        "ca": "1-2",
        "phong": "B607",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.43",
        "thu": "6",
        "ca": "1-2",
        "phong": "B613",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.48",
        "thu": "6",
        "ca": "1-2",
        "phong": "A403",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.36",
        "thu": "6",
        "ca": "4-5",
        "phong": "B713",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.37",
        "thu": "6",
        "ca": "6-7",
        "phong": "B504",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.44",
        "thu": "6",
        "ca": "6-7",
        "phong": "B606",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.49",
        "thu": "6",
        "ca": "6-7",
        "phong": "A401",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.53",
        "thu": "6",
        "ca": "6-8",
        "phong": "B312",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.47",
        "thu": "6",
        "ca": "8-10",
        "phong": "B510",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.38",
        "thu": "6",
        "ca": "9-10",
        "phong": "B502",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.52",
        "thu": "6",
        "ca": "9-10",
        "phong": "B603",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.39",
        "thu": "7",
        "ca": "1-2",
        "phong": "B512",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.40",
        "thu": "7",
        "ca": "4-5",
        "phong": "B613",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.41",
        "thu": "7",
        "ca": "6-7",
        "phong": "B512",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.50",
        "thu": "7",
        "ca": "6-7",
        "phong": "B610",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.54",
        "thu": "7",
        "ca": "6-8",
        "phong": "B611",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.47",
        "thu": "7",
        "ca": "8-10",
        "phong": "B406",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.42",
        "thu": "7",
        "ca": "9-10",
        "phong": "A605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE232",
        "ten": "Tiếng Anh trung cấp 2",
        "lop": "ANHTC2.51",
        "thu": "7",
        "ca": "9-10",
        "phong": "B504",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE333",
        "ten": "Tiếng Anh trung cấp 3",
        "lop": "ANHTC3.21",
        "thu": "2",
        "ca": "3-5",
        "phong": "B206",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE333",
        "ten": "Tiếng Anh trung cấp 3",
        "lop": "ANHTC3.35",
        "thu": "2",
        "ca": "8-10",
        "phong": "B603",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE333",
        "ten": "Tiếng Anh trung cấp 3",
        "lop": "ANHTC3.36",
        "thu": "2",
        "ca": "8-10",
        "phong": "B607",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE333",
        "ten": "Tiếng Anh trung cấp 3",
        "lop": "ANHTC3.39",
        "thu": "3",
        "ca": "1-3",
        "phong": "B212",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE333",
        "ten": "Tiếng Anh trung cấp 3",
        "lop": "ANHTC3.40",
        "thu": "4",
        "ca": "1-3",
        "phong": "B312",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE333",
        "ten": "Tiếng Anh trung cấp 3",
        "lop": "ANHTC3.33",
        "thu": "4",
        "ca": "3-5",
        "phong": "B308",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE333",
        "ten": "Tiếng Anh trung cấp 3",
        "lop": "ANHTC3.37",
        "thu": "4",
        "ca": "8-10",
        "phong": "B510",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE333",
        "ten": "Tiếng Anh trung cấp 3",
        "lop": "ANHTC3.38",
        "thu": "4",
        "ca": "8-10",
        "phong": "B602",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE333",
        "ten": "Tiếng Anh trung cấp 3",
        "lop": "ANHTC3.26",
        "thu": "5",
        "ca": "1-3",
        "phong": "A403",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE333",
        "ten": "Tiếng Anh trung cấp 3",
        "lop": "ANHTC3.27",
        "thu": "5",
        "ca": "1-3",
        "phong": "B104",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE333",
        "ten": "Tiếng Anh trung cấp 3",
        "lop": "ANHTC3.34",
        "thu": "5",
        "ca": "3-5",
        "phong": "B306",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE333",
        "ten": "Tiếng Anh trung cấp 3",
        "lop": "ANHTC3.28",
        "thu": "5",
        "ca": "6-8",
        "phong": "B306",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE333",
        "ten": "Tiếng Anh trung cấp 3",
        "lop": "ANHTC3.31",
        "thu": "6",
        "ca": "6-8",
        "phong": "B710",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE333",
        "ten": "Tiếng Anh trung cấp 3",
        "lop": "ANHTC3.29",
        "thu": "6",
        "ca": "6-8",
        "phong": "A605",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE333",
        "ten": "Tiếng Anh trung cấp 3",
        "lop": "ANHTC3.30",
        "thu": "6",
        "ca": "8-10",
        "phong": "B406",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE333",
        "ten": "Tiếng Anh trung cấp 3",
        "lop": "ANHTC3.32",
        "thu": "6",
        "ca": "8-10",
        "phong": "B408",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE333",
        "ten": "Tiếng Anh trung cấp 3",
        "lop": "ANHTC3.22",
        "thu": "7",
        "ca": "1-3",
        "phong": "B603",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE333",
        "ten": "Tiếng Anh trung cấp 3",
        "lop": "ANHTC3.23",
        "thu": "7",
        "ca": "1-3",
        "phong": "B606",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE333",
        "ten": "Tiếng Anh trung cấp 3",
        "lop": "ANHTC3.24",
        "thu": "7",
        "ca": "6-8",
        "phong": "B504",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GE333",
        "ten": "Tiếng Anh trung cấp 3",
        "lop": "ANHTC3.25",
        "thu": "7",
        "ca": "6-8",
        "phong": "B508",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GD201",
        "ten": "Tiếng Đức A2.1",
        "lop": "TIENGDUCA2.1.1",
        "thu": "3",
        "ca": "3-5",
        "phong": "BOMON",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GD201",
        "ten": "Tiếng Đức A2.1",
        "lop": "TIENGDUCA2.1.1",
        "thu": "5",
        "ca": "3-5",
        "phong": "BOMON",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GD301",
        "ten": "Tiếng Đức B1.1",
        "lop": "TIENGDUCB1.1.1",
        "thu": "3",
        "ca": "6-8",
        "phong": "BOMON1",
        "sotin": "2",
        "giangvien": "Nguyễn Khánh Huyền(CSN030)"
    },
    {
        "ma": "GD301",
        "ten": "Tiếng Đức B1.1",
        "lop": "TIENGDUCB1.1.1",
        "thu": "5",
        "ca": "6-8",
        "phong": "BOMON1",
        "sotin": "2",
        "giangvien": "Nguyễn Khánh Huyền(CSN030)"
    },
    {
        "ma": "GD303",
        "ten": "Tiếng Đức B1.2",
        "lop": "TIENGDUCB1.2.1",
        "thu": "7",
        "ca": "3-5",
        "phong": "BOMON",
        "sotin": "2",
        "giangvien": "Vũ Thị Hồng Liên(CSN998)"
    },
    {
        "ma": "GD303",
        "ten": "Tiếng Đức B1.2",
        "lop": "TIENGDUCB1.2.1",
        "thu": "7",
        "ca": "6-8",
        "phong": "BOMON",
        "sotin": "2",
        "giangvien": "Vũ Thị Hồng Liên(CSN998)"
    },
    {
        "ma": "GK101",
        "ten": "Tiếng Hàn 1",
        "lop": "TIENGHAN1.3",
        "thu": "2",
        "ca": "1-2",
        "phong": "B302",
        "sotin": "2",
        "giangvien": "Dương Thị Hải Ngọc(CNK027)"
    },
    {
        "ma": "GK101",
        "ten": "Tiếng Hàn 1",
        "lop": "TIENGHAN1.4",
        "thu": "2",
        "ca": "3-5",
        "phong": "B302",
        "sotin": "2",
        "giangvien": "Nguyễn Thu Trang(CNK022)"
    },
    {
        "ma": "GK101",
        "ten": "Tiếng Hàn 1",
        "lop": "TIENGHAN1.3",
        "thu": "4",
        "ca": "1-2",
        "phong": "B613",
        "sotin": "2",
        "giangvien": "Dương Thị Hải Ngọc(CNK027)"
    },
    {
        "ma": "GK101",
        "ten": "Tiếng Hàn 1",
        "lop": "TIENGHAN1.3",
        "thu": "5",
        "ca": "1-2",
        "phong": "B302",
        "sotin": "2",
        "giangvien": "Dương Thị Hải Ngọc(CNK027)"
    },
    {
        "ma": "GK101",
        "ten": "Tiếng Hàn 1",
        "lop": "TIENGHAN1.4",
        "thu": "6",
        "ca": "3-5",
        "phong": "B402",
        "sotin": "2",
        "giangvien": "Nguyễn Thu Trang(CNK022)"
    },
    {
        "ma": "GK102",
        "ten": "Tiếng Hàn 2",
        "lop": "TIENGHAN2.4",
        "thu": "2",
        "ca": "3-5",
        "phong": "B212",
        "sotin": "2",
        "giangvien": "Dương Thị Hải Ngọc(CNK027)"
    },
    {
        "ma": "GK102",
        "ten": "Tiếng Hàn 2",
        "lop": "TIENGHAN2.3",
        "thu": "3",
        "ca": "1-2",
        "phong": "B302",
        "sotin": "2",
        "giangvien": "Nguyễn Thị Huyền(CNK023)"
    },
    {
        "ma": "GK102",
        "ten": "Tiếng Hàn 2",
        "lop": "TIENGHAN2.3",
        "thu": "5",
        "ca": "1-2",
        "phong": "B106",
        "sotin": "2",
        "giangvien": "Nguyễn Thị Huyền(CNK023)"
    },
    {
        "ma": "GK102",
        "ten": "Tiếng Hàn 2",
        "lop": "TIENGHAN2.4",
        "thu": "5",
        "ca": "3-5",
        "phong": "B304",
        "sotin": "2",
        "giangvien": "Dương Thị Hải Ngọc(CNK027)"
    },
    {
        "ma": "GK102",
        "ten": "Tiếng Hàn 2",
        "lop": "TIENGHAN2.3",
        "thu": "6",
        "ca": "1-2",
        "phong": "B606",
        "sotin": "2",
        "giangvien": "Nguyễn Thị Huyền(CNK023)"
    },
    {
        "ma": "AK314",
        "ten": "Tiếng Hàn cao cấp 1",
        "lop": "HANCC1.3",
        "thu": "2",
        "ca": "1-3",
        "phong": "B110",
        "sotin": "3",
        "giangvien": "Hoàng Thị Thanh Hoa(CNK013)"
    },
    {
        "ma": "AK314",
        "ten": "Tiếng Hàn cao cấp 1",
        "lop": "HANCC1.2",
        "thu": "2",
        "ca": "1-3",
        "phong": "B108",
        "sotin": "3",
        "giangvien": "Đặng Thu Trang(CNK016)"
    },
    {
        "ma": "AK314",
        "ten": "Tiếng Hàn cao cấp 1",
        "lop": "HANCC1.5",
        "thu": "2",
        "ca": "3-5",
        "phong": "B208",
        "sotin": "3",
        "giangvien": "Yang Jae Sik(MNK006)"
    },
    {
        "ma": "AK314",
        "ten": "Tiếng Hàn cao cấp 1",
        "lop": "HANCC1.1",
        "thu": "2",
        "ca": "6-8",
        "phong": "B110",
        "sotin": "3",
        "giangvien": "Hoàng Thị Thanh Hoa(CNK013)"
    },
    {
        "ma": "AK314",
        "ten": "Tiếng Hàn cao cấp 1",
        "lop": "HANCC1.4",
        "thu": "3",
        "ca": "1-3",
        "phong": "B610",
        "sotin": "3",
        "giangvien": "Hoàng Thị Thanh Hoa(CNK013)"
    },
    {
        "ma": "AK314",
        "ten": "Tiếng Hàn cao cấp 1",
        "lop": "HANCC1.3",
        "thu": "3",
        "ca": "3-5",
        "phong": "B302",
        "sotin": "3",
        "giangvien": "Đặng Thu Trang(CNK016)"
    },
    {
        "ma": "AK314",
        "ten": "Tiếng Hàn cao cấp 1",
        "lop": "HANCC1.6",
        "thu": "3",
        "ca": "3-5",
        "phong": "B713",
        "sotin": "3",
        "giangvien": "Yang Jae Sik(MNK006)"
    },
    {
        "ma": "AK314",
        "ten": "Tiếng Hàn cao cấp 1",
        "lop": "HANCC1.5",
        "thu": "3",
        "ca": "8-10",
        "phong": "B302",
        "sotin": "3",
        "giangvien": "Hoàng Thị Thanh Hoa(CNK013)"
    },
    {
        "ma": "AK314",
        "ten": "Tiếng Hàn cao cấp 1",
        "lop": "HANCC1.6",
        "thu": "3",
        "ca": "8-10",
        "phong": "B306",
        "sotin": "3",
        "giangvien": "Đặng Thu Trang(CNK016)"
    },
    {
        "ma": "AK314",
        "ten": "Tiếng Hàn cao cấp 1",
        "lop": "HANCC1.5",
        "thu": "4",
        "ca": "1-3",
        "phong": "B713",
        "sotin": "3",
        "giangvien": "Đặng Thu Trang(CNK016)"
    },
    {
        "ma": "AK314",
        "ten": "Tiếng Hàn cao cấp 1",
        "lop": "HANCC1.1",
        "thu": "4",
        "ca": "3-5",
        "phong": "B110",
        "sotin": "3",
        "giangvien": "Yang Jae Sik(MNK006)"
    },
    {
        "ma": "AK314",
        "ten": "Tiếng Hàn cao cấp 1",
        "lop": "HANCC1.6",
        "thu": "4",
        "ca": "3-5",
        "phong": "B210",
        "sotin": "3",
        "giangvien": "Hoàng Thị Thanh Hoa(CNK013)"
    },
    {
        "ma": "AK314",
        "ten": "Tiếng Hàn cao cấp 1",
        "lop": "HANCC1.2",
        "thu": "4",
        "ca": "6-8",
        "phong": "B302",
        "sotin": "3",
        "giangvien": "Hoàng Thị Thanh Hoa(CNK013)"
    },
    {
        "ma": "AK314",
        "ten": "Tiếng Hàn cao cấp 1",
        "lop": "HANCC1.1",
        "thu": "5",
        "ca": "3-5",
        "phong": "B106",
        "sotin": "3",
        "giangvien": "Đặng Thu Trang(CNK016)"
    },
    {
        "ma": "AK314",
        "ten": "Tiếng Hàn cao cấp 1",
        "lop": "HANCC1.4",
        "thu": "5",
        "ca": "3-5",
        "phong": "B302",
        "sotin": "3",
        "giangvien": "Yang Jae Sik(MNK006)"
    },
    {
        "ma": "AK314",
        "ten": "Tiếng Hàn cao cấp 1",
        "lop": "HANCC1.4",
        "thu": "6",
        "ca": "3-5",
        "phong": "B208",
        "sotin": "3",
        "giangvien": "Đặng Thu Trang(CNK016)"
    },
    {
        "ma": "AK314",
        "ten": "Tiếng Hàn cao cấp 1",
        "lop": "HANCC1.2",
        "thu": "6",
        "ca": "3-5",
        "phong": "B110",
        "sotin": "3",
        "giangvien": "Yang Jae Sik(MNK006)"
    },
    {
        "ma": "AK314",
        "ten": "Tiếng Hàn cao cấp 1",
        "lop": "HANCC1.3",
        "thu": "7",
        "ca": "3-5",
        "phong": "B302",
        "sotin": "3",
        "giangvien": "Yang Jae Sik(MNK006)"
    },
    {
        "ma": "GJ101",
        "ten": "Tiếng Nhật 1",
        "lop": "NHAT1.3",
        "thu": "2",
        "ca": "8-10",
        "phong": "B104",
        "sotin": "2",
        "giangvien": "Trần Thị Lan Hương(CNJ035)"
    },
    {
        "ma": "GJ101",
        "ten": "Tiếng Nhật 1",
        "lop": "NHAT1.4",
        "thu": "2",
        "ca": "8-10",
        "phong": "A405",
        "sotin": "2",
        "giangvien": "Nguyễn Nhật Nam(CNJ041)"
    },
    {
        "ma": "GJ101",
        "ten": "Tiếng Nhật 1",
        "lop": "NHAT1.3",
        "thu": "4",
        "ca": "8-10",
        "phong": "A409",
        "sotin": "2",
        "giangvien": "Vũ Thị Thu Hương(CNJ025)"
    },
    {
        "ma": "GJ101",
        "ten": "Tiếng Nhật 1",
        "lop": "NHAT1.4",
        "thu": "6",
        "ca": "8-10",
        "phong": "A403",
        "sotin": "2",
        "giangvien": "Đinh Huyền Phương(CNJ036)"
    },
    {
        "ma": "GJ102",
        "ten": "Tiếng Nhật 2",
        "lop": "NHAT2.2",
        "thu": "2",
        "ca": "3-5",
        "phong": "A407",
        "sotin": "2",
        "giangvien": "Nguyễn Nhật Nam(CNJ041)"
    },
    {
        "ma": "GJ102",
        "ten": "Tiếng Nhật 2",
        "lop": "NHAT2.3",
        "thu": "3",
        "ca": "8-10",
        "phong": "B305",
        "sotin": "2",
        "giangvien": "Nguyễn Thùy Linh(CNJ034)"
    },
    {
        "ma": "GJ102",
        "ten": "Tiếng Nhật 2",
        "lop": "NHAT2.4",
        "thu": "4",
        "ca": "8-10",
        "phong": "B606",
        "sotin": "2",
        "giangvien": "Nguyễn Nhật Nam(CNJ041)"
    },
    {
        "ma": "GJ102",
        "ten": "Tiếng Nhật 2",
        "lop": "NHAT2.3",
        "thu": "5",
        "ca": "8-10",
        "phong": "B104",
        "sotin": "2",
        "giangvien": "Đinh Huyền Phương(CNJ036)"
    },
    {
        "ma": "GJ102",
        "ten": "Tiếng Nhật 2",
        "lop": "NHAT2.2",
        "thu": "6",
        "ca": "3-5",
        "phong": "B310",
        "sotin": "2",
        "giangvien": "Vũ Thị Thu Hương(CNJ025)"
    },
    {
        "ma": "GJ102",
        "ten": "Tiếng Nhật 2",
        "lop": "NHAT2.4",
        "thu": "6",
        "ca": "8-10",
        "phong": "A401",
        "sotin": "2",
        "giangvien": "Vũ Thị Thu Hương(CNJ025)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.1",
        "thu": "2",
        "ca": "1-2",
        "phong": "B408",
        "sotin": "4",
        "giangvien": "Trần Thị Lan Hương(CNJ035)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.2",
        "thu": "2",
        "ca": "1-2",
        "phong": "B502",
        "sotin": "4",
        "giangvien": "Nguyễn Thùy Linh(CNJ034)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.3",
        "thu": "2",
        "ca": "3-4",
        "phong": "B502",
        "sotin": "4",
        "giangvien": "Trương Phương Thúy(CNJ007)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.4",
        "thu": "2",
        "ca": "6-7",
        "phong": "B104",
        "sotin": "4",
        "giangvien": "Nguyễn Thùy Linh(CNJ008)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.5",
        "thu": "2",
        "ca": "6-7",
        "phong": "B406",
        "sotin": "4",
        "giangvien": "Trương Phương Thúy(CNJ007)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.2",
        "thu": "3",
        "ca": "1-2",
        "phong": "B408",
        "sotin": "4",
        "giangvien": "Đinh Huyền Phương(CNJ036)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.1",
        "thu": "3",
        "ca": "1-2",
        "phong": "B404",
        "sotin": "4",
        "giangvien": "Trần Thị Lan Hương(CNJ035)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.3",
        "thu": "3",
        "ca": "3-4",
        "phong": "B506",
        "sotin": "4",
        "giangvien": "Vũ Thị Kim Chi(CNJ003)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.5",
        "thu": "3",
        "ca": "6-7",
        "phong": "B604",
        "sotin": "4",
        "giangvien": "Đinh Huyền Phương(CNJ036)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.4",
        "thu": "3",
        "ca": "6-7",
        "phong": "B104",
        "sotin": "4",
        "giangvien": "Nguyễn Thùy Linh(CNJ008)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.2",
        "thu": "4",
        "ca": "1-2",
        "phong": "B502",
        "sotin": "4",
        "giangvien": "Nguyễn Thùy Linh(CNJ034)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.1",
        "thu": "4",
        "ca": "1-2",
        "phong": "B408",
        "sotin": "4",
        "giangvien": "Vũ Thị Kim Chi(CNJ003)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.3",
        "thu": "4",
        "ca": "3-4",
        "phong": "B502",
        "sotin": "4",
        "giangvien": "Trương Phương Thúy(CNJ007)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.4",
        "thu": "4",
        "ca": "6-7",
        "phong": "B512",
        "sotin": "4",
        "giangvien": "Nguyễn Thùy Linh(CNJ008)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.5",
        "thu": "4",
        "ca": "6-7",
        "phong": "B104",
        "sotin": "4",
        "giangvien": "Đinh Huyền Phương(CNJ036)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.3",
        "thu": "5",
        "ca": "1-2",
        "phong": "B606",
        "sotin": "4",
        "giangvien": "Trương Phương Thúy(CNJ007)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.2",
        "thu": "5",
        "ca": "1-2",
        "phong": "B601",
        "sotin": "4",
        "giangvien": "Nguyễn Thùy Linh(CNJ034)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.1",
        "thu": "5",
        "ca": "1-2",
        "phong": "B510",
        "sotin": "4",
        "giangvien": "Vũ Thị Kim Chi(CNJ003)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.5",
        "thu": "5",
        "ca": "6-7",
        "phong": "B104",
        "sotin": "4",
        "giangvien": "Đinh Huyền Phương(CNJ036)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.4",
        "thu": "5",
        "ca": "6-7",
        "phong": "B406",
        "sotin": "4",
        "giangvien": "Hoàng Thị Hường(CNJ005)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.1",
        "thu": "6",
        "ca": "1-2",
        "phong": "B404",
        "sotin": "4",
        "giangvien": "Vũ Thị Kim Chi(CNJ003)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.2",
        "thu": "6",
        "ca": "1-2",
        "phong": "B408",
        "sotin": "4",
        "giangvien": "Đinh Huyền Phương(CNJ036)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.3",
        "thu": "6",
        "ca": "3-4",
        "phong": "B404",
        "sotin": "4",
        "giangvien": "Trương Phương Thúy(CNJ007)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.4",
        "thu": "6",
        "ca": "6-7",
        "phong": "B406",
        "sotin": "4",
        "giangvien": "Nguyễn Thùy Linh(CNJ008)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.5",
        "thu": "6",
        "ca": "6-7",
        "phong": "B502",
        "sotin": "4",
        "giangvien": "Trương Phương Thúy(CNJ007)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.2",
        "thu": "7",
        "ca": "1-2",
        "phong": "B502",
        "sotin": "4",
        "giangvien": "Đinh Huyền Phương(CNJ036)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.1",
        "thu": "7",
        "ca": "1-2",
        "phong": "B408",
        "sotin": "4",
        "giangvien": "Trần Thị Lan Hương(CNJ035)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.3",
        "thu": "7",
        "ca": "3-4",
        "phong": "B404",
        "sotin": "4",
        "giangvien": "Vũ Thị Kim Chi(CNJ003)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.5",
        "thu": "7",
        "ca": "6-7",
        "phong": "B712",
        "sotin": "4",
        "giangvien": "Đinh Huyền Phương(CNJ036)"
    },
    {
        "ma": "GJ242",
        "ten": "Tiếng Nhật trung cấp 2",
        "lop": "NHATTC2.4",
        "thu": "7",
        "ca": "6-7",
        "phong": "B710",
        "sotin": "4",
        "giangvien": "Nguyễn Thùy Linh(CNJ008)"
    },
    {
        "ma": "GF101",
        "ten": "Tiếng Pháp 1",
        "lop": "PHAP1.9",
        "thu": "2",
        "ca": "1-2",
        "phong": "A409",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF101",
        "ten": "Tiếng Pháp 1",
        "lop": "PHAP1.5",
        "thu": "2",
        "ca": "3-5",
        "phong": "B204",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF101",
        "ten": "Tiếng Pháp 1",
        "lop": "PHAP1.8",
        "thu": "2",
        "ca": "6-8",
        "phong": "B506",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF101",
        "ten": "Tiếng Pháp 1",
        "lop": "PHAP1.6",
        "thu": "3",
        "ca": "3-5",
        "phong": "B402",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF101",
        "ten": "Tiếng Pháp 1",
        "lop": "PHAP1.10",
        "thu": "3",
        "ca": "9-11",
        "phong": "B204",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF101",
        "ten": "Tiếng Pháp 1",
        "lop": "PHAP1.9",
        "thu": "4",
        "ca": "1-2",
        "phong": "A609",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF101",
        "ten": "Tiếng Pháp 1",
        "lop": "PHAP1.5",
        "thu": "4",
        "ca": "3-5",
        "phong": "B208",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF101",
        "ten": "Tiếng Pháp 1",
        "lop": "PHAP1.8",
        "thu": "4",
        "ca": "6-8",
        "phong": "B402",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF101",
        "ten": "Tiếng Pháp 1",
        "lop": "PHAP1.6",
        "thu": "5",
        "ca": "3-5",
        "phong": "B110",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF101",
        "ten": "Tiếng Pháp 1",
        "lop": "PHAP1.10",
        "thu": "5",
        "ca": "9-11",
        "phong": "B402",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF101",
        "ten": "Tiếng Pháp 1",
        "lop": "PHAP1.9",
        "thu": "6",
        "ca": "1-2",
        "phong": "B608",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF101",
        "ten": "Tiếng Pháp 1",
        "lop": "PHAP1.7",
        "thu": "6",
        "ca": "3-5",
        "phong": "B204",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF101",
        "ten": "Tiếng Pháp 1",
        "lop": "PHAP1.11",
        "thu": "6",
        "ca": "6-8",
        "phong": "B712",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF101",
        "ten": "Tiếng Pháp 1",
        "lop": "PHAP1.7",
        "thu": "7",
        "ca": "3-5",
        "phong": "B412",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF101",
        "ten": "Tiếng Pháp 1",
        "lop": "PHAP1.11",
        "thu": "7",
        "ca": "6-8",
        "phong": "B106",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF102",
        "ten": "Tiếng Pháp 2",
        "lop": "PHAP2.5",
        "thu": "2",
        "ca": "3-5",
        "phong": "A409",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF102",
        "ten": "Tiếng Pháp 2",
        "lop": "PHAP2.9",
        "thu": "2",
        "ca": "6-7",
        "phong": "B204",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF102",
        "ten": "Tiếng Pháp 2",
        "lop": "PHAP2.11",
        "thu": "2",
        "ca": "8-10",
        "phong": "B108",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF102",
        "ten": "Tiếng Pháp 2",
        "lop": "PHAP2.10",
        "thu": "3",
        "ca": "1-2",
        "phong": "B104",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF102",
        "ten": "Tiếng Pháp 2",
        "lop": "PHAP2.6",
        "thu": "3",
        "ca": "3-5",
        "phong": "A603",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF102",
        "ten": "Tiếng Pháp 2",
        "lop": "PHAP2.8",
        "thu": "3",
        "ca": "6-7",
        "phong": "A603",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF102",
        "ten": "Tiếng Pháp 2",
        "lop": "PHAP2.5",
        "thu": "4",
        "ca": "3-5",
        "phong": "A603",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF102",
        "ten": "Tiếng Pháp 2",
        "lop": "PHAP2.9",
        "thu": "4",
        "ca": "6-7",
        "phong": "B202",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF102",
        "ten": "Tiếng Pháp 2",
        "lop": "PHAP2.11",
        "thu": "4",
        "ca": "8-10",
        "phong": "B210",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF102",
        "ten": "Tiếng Pháp 2",
        "lop": "PHAP2.10",
        "thu": "5",
        "ca": "1-2",
        "phong": "B210",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF102",
        "ten": "Tiếng Pháp 2",
        "lop": "PHAP2.6",
        "thu": "5",
        "ca": "3-5",
        "phong": "A409",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF102",
        "ten": "Tiếng Pháp 2",
        "lop": "PHAP2.8",
        "thu": "5",
        "ca": "6-7",
        "phong": "B202",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF102",
        "ten": "Tiếng Pháp 2",
        "lop": "PHAP2.7",
        "thu": "6",
        "ca": "3-5",
        "phong": "B210",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF102",
        "ten": "Tiếng Pháp 2",
        "lop": "PHAP2.9",
        "thu": "6",
        "ca": "6-7",
        "phong": "B510",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF102",
        "ten": "Tiếng Pháp 2",
        "lop": "PHAP2.10",
        "thu": "7",
        "ca": "1-2",
        "phong": "B402",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF102",
        "ten": "Tiếng Pháp 2",
        "lop": "PHAP2.7",
        "thu": "7",
        "ca": "3-5",
        "phong": "B504",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GF102",
        "ten": "Tiếng Pháp 2",
        "lop": "PHAP2.8",
        "thu": "7",
        "ca": "6-7",
        "phong": "B208",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.3",
        "thu": "2",
        "ca": "1-2",
        "phong": "A407",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.4",
        "thu": "2",
        "ca": "3-5",
        "phong": "B612",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.8",
        "thu": "2",
        "ca": "6-7",
        "phong": "A503",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.12",
        "thu": "2",
        "ca": "6-7",
        "phong": "A603",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.10",
        "thu": "2",
        "ca": "8-10",
        "phong": "A609",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.6",
        "thu": "3",
        "ca": "1-2",
        "phong": "A501",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.5",
        "thu": "3",
        "ca": "3-5",
        "phong": "A507",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.9",
        "thu": "3",
        "ca": "6-7",
        "phong": "A503",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.12",
        "thu": "3",
        "ca": "6-7",
        "phong": "B312",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.11",
        "thu": "3",
        "ca": "8-10",
        "phong": "A503",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.3",
        "thu": "4",
        "ca": "1-2",
        "phong": "A503",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.4",
        "thu": "4",
        "ca": "3-5",
        "phong": "A501",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.12",
        "thu": "4",
        "ca": "6-7",
        "phong": "A603",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.8",
        "thu": "4",
        "ca": "6-7",
        "phong": "A503",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.10",
        "thu": "4",
        "ca": "8-10",
        "phong": "A503",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.6",
        "thu": "5",
        "ca": "1-2",
        "phong": "A409",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.5",
        "thu": "5",
        "ca": "3-5",
        "phong": "A503",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.9",
        "thu": "5",
        "ca": "6-7",
        "phong": "B210",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.3",
        "thu": "6",
        "ca": "1-2",
        "phong": "B512",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.7",
        "thu": "6",
        "ca": "3-5",
        "phong": "A409",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.8",
        "thu": "6",
        "ca": "6-7",
        "phong": "A503",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.11",
        "thu": "6",
        "ca": "8-10",
        "phong": "B110",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.6",
        "thu": "7",
        "ca": "1-2",
        "phong": "A407",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.7",
        "thu": "7",
        "ca": "3-5",
        "phong": "A407",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ101",
        "ten": "Tiếng Trung 1",
        "lop": "TRUNG1.9",
        "thu": "7",
        "ca": "6-7",
        "phong": "B713",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.11",
        "thu": "2",
        "ca": "1-2",
        "phong": "A503",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.3",
        "thu": "2",
        "ca": "3-5",
        "phong": "A501",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.7",
        "thu": "2",
        "ca": "6-7",
        "phong": "A501",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.8",
        "thu": "2",
        "ca": "8-10",
        "phong": "A509",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.6",
        "thu": "3",
        "ca": "1-2",
        "phong": "A503",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.12",
        "thu": "3",
        "ca": "3-5",
        "phong": "A607",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.4",
        "thu": "3",
        "ca": "3-5",
        "phong": "A501",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.9",
        "thu": "3",
        "ca": "6-7",
        "phong": "A501",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.10",
        "thu": "3",
        "ca": "8-10",
        "phong": "A501",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.11",
        "thu": "4",
        "ca": "1-2",
        "phong": "B707",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.3",
        "thu": "4",
        "ca": "3-5",
        "phong": "A503",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.7",
        "thu": "4",
        "ca": "6-7",
        "phong": "A501",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.8",
        "thu": "4",
        "ca": "8-10",
        "phong": "A501",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.6",
        "thu": "5",
        "ca": "1-2",
        "phong": "A501",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.4",
        "thu": "5",
        "ca": "3-5",
        "phong": "A501",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.9",
        "thu": "5",
        "ca": "6-7",
        "phong": "A501",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.10",
        "thu": "5",
        "ca": "8-10",
        "phong": "A501",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.11",
        "thu": "6",
        "ca": "1-2",
        "phong": "A501",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.12",
        "thu": "6",
        "ca": "3-5",
        "phong": "A607",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.5",
        "thu": "6",
        "ca": "3-5",
        "phong": "A503",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.7",
        "thu": "6",
        "ca": "6-7",
        "phong": "A501",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.6",
        "thu": "7",
        "ca": "1-2",
        "phong": "A501",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.5",
        "thu": "7",
        "ca": "3-5",
        "phong": "A501",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ102",
        "ten": "Tiếng Trung 2",
        "lop": "TRUNG2.9",
        "thu": "7",
        "ca": "6-7",
        "phong": "A501",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ222",
        "ten": "Tiếng Trung trung cấp 2",
        "lop": "GZ222.2",
        "thu": "2",
        "ca": "6-7",
        "phong": "B402",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ222",
        "ten": "Tiếng Trung trung cấp 2",
        "lop": "GZ222.3",
        "thu": "2",
        "ca": "6-7",
        "phong": "B504",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ222",
        "ten": "Tiếng Trung trung cấp 2",
        "lop": "GZ222.4",
        "thu": "2",
        "ca": "6-7",
        "phong": "A407",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ222",
        "ten": "Tiếng Trung trung cấp 2",
        "lop": "GZ222.4",
        "thu": "3",
        "ca": "6-7",
        "phong": "B310",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ222",
        "ten": "Tiếng Trung trung cấp 2",
        "lop": "GZ222.1",
        "thu": "3",
        "ca": "6-7",
        "phong": "B308",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ222",
        "ten": "Tiếng Trung trung cấp 2",
        "lop": "GZ222.4",
        "thu": "4",
        "ca": "6-7",
        "phong": "A407",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ222",
        "ten": "Tiếng Trung trung cấp 2",
        "lop": "GZ222.3",
        "thu": "4",
        "ca": "6-7",
        "phong": "B208",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ222",
        "ten": "Tiếng Trung trung cấp 2",
        "lop": "GZ222.2",
        "thu": "4",
        "ca": "6-7",
        "phong": "B108",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ222",
        "ten": "Tiếng Trung trung cấp 2",
        "lop": "GZ222.1",
        "thu": "5",
        "ca": "6-7",
        "phong": "B204",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ222",
        "ten": "Tiếng Trung trung cấp 2",
        "lop": "GZ222.2",
        "thu": "6",
        "ca": "6-7",
        "phong": "B310",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ222",
        "ten": "Tiếng Trung trung cấp 2",
        "lop": "GZ222.3",
        "thu": "6",
        "ca": "6-7",
        "phong": "B104",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "GZ222",
        "ten": "Tiếng Trung trung cấp 2",
        "lop": "GZ222.1",
        "thu": "7",
        "ca": "6-7",
        "phong": "B608",
        "sotin": "2",
        "giangvien": ""
    },
    {
        "ma": "AN201B",
        "ten": "Tính năng nhạc cụ B",
        "lop": "TINHNANGNHACCUB.1",
        "thu": "2",
        "ca": "3-3",
        "phong": "B807",
        "sotin": "1",
        "giangvien": "Lưu Quang Minh(MAN005)"
    },
    {
        "ma": "AN201B",
        "ten": "Tính năng nhạc cụ B",
        "lop": "TINHNANGNHACCUB.2",
        "thu": "2",
        "ca": "6-6",
        "phong": "B807",
        "sotin": "1",
        "giangvien": "Lưu Quang Minh(MAN005)"
    },
    {
        "ma": "AN201B",
        "ten": "Tính năng nhạc cụ B",
        "lop": "TINHNANGNHACCUB.3",
        "thu": "2",
        "ca": "9-9",
        "phong": "B807",
        "sotin": "1",
        "giangvien": "Lưu Quang Minh(MAN005)"
    },
    {
        "ma": "AN201B",
        "ten": "Tính năng nhạc cụ B",
        "lop": "TINHNANGNHACCUB.4",
        "thu": "4",
        "ca": "6-6",
        "phong": "B807",
        "sotin": "1",
        "giangvien": "Nguyễn Hoàng Anh Minh(MAN017)"
    },
    {
        "ma": "TM314",
        "ten": "Tổ chức sản xuất chương trình phát thanh, truyền hình",
        "lop": "TOCHUCSXCT.1_LT",
        "thu": "5",
        "ca": "2-5",
        "phong": "B712",
        "sotin": "3",
        "giangvien": "Hồ Xuân Ngọc(CXC008)"
    },
    {
        "ma": "TM314",
        "ten": "Tổ chức sản xuất chương trình phát thanh, truyền hình",
        "lop": "TOCHUCSXCT.2_LT",
        "thu": "5",
        "ca": "6-9",
        "phong": "B206",
        "sotin": "3",
        "giangvien": "Trần Thị Thùy Dương(CXC006)"
    },
    {
        "ma": "MI201",
        "ten": "Toán rời rạc",
        "lop": "TOANROIRAC.2",
        "thu": "2",
        "ca": "1-3",
        "phong": "B310",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "MI201",
        "ten": "Toán rời rạc",
        "lop": "TOANROIRAC.1",
        "thu": "2",
        "ca": "4-5",
        "phong": "B110",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "MI201",
        "ten": "Toán rời rạc",
        "lop": "TOANROIRAC.1",
        "thu": "2",
        "ca": "8-10",
        "phong": "A603",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "MI201",
        "ten": "Toán rời rạc",
        "lop": "TOANROIRAC.3",
        "thu": "3",
        "ca": "3-5",
        "phong": "B310",
        "sotin": "3",
        "giangvien": "Nguyễn Lâm Tùng(CTM008)"
    },
    {
        "ma": "MI201",
        "ten": "Toán rời rạc",
        "lop": "TOANROIRAC.5",
        "thu": "3",
        "ca": "9-10",
        "phong": "B210",
        "sotin": "3",
        "giangvien": "Nguyễn Công Sứ(CTM021)"
    },
    {
        "ma": "MI201",
        "ten": "Toán rời rạc",
        "lop": "TOANROIRAC.4",
        "thu": "4",
        "ca": "4-5",
        "phong": "B412",
        "sotin": "3",
        "giangvien": "Hoàng Ngọc Tùng(CTM010)"
    },
    {
        "ma": "MI201",
        "ten": "Toán rời rạc",
        "lop": "TOANROIRAC.2",
        "thu": "6",
        "ca": "4-5",
        "phong": "A603",
        "sotin": "3",
        "giangvien": "Bộ môn Tin học(CTI)"
    },
    {
        "ma": "MI201",
        "ten": "Toán rời rạc",
        "lop": "TOANROIRAC.3",
        "thu": "6",
        "ca": "4-5",
        "phong": "A609",
        "sotin": "3",
        "giangvien": "Nguyễn Lâm Tùng(CTM008)"
    },
    {
        "ma": "MI201",
        "ten": "Toán rời rạc",
        "lop": "TOANROIRAC.5",
        "thu": "6",
        "ca": "8-10",
        "phong": "B106",
        "sotin": "3",
        "giangvien": "Nguyễn Công Sứ(CTM021)"
    },
    {
        "ma": "MI201",
        "ten": "Toán rời rạc",
        "lop": "TOANROIRAC.4",
        "thu": "7",
        "ca": "3-5",
        "phong": "A509",
        "sotin": "3",
        "giangvien": "Hoàng Ngọc Tùng(CTM010)"
    },
    {
        "ma": "MI302",
        "ten": "Tối ưu hóa",
        "lop": "TOIUUHOA.1.1_BT",
        "thu": "2",
        "ca": "8-10",
        "phong": "B306",
        "sotin": "2",
        "giangvien": "Trần Minh Nguyệt(CTM012)"
    },
    {
        "ma": "MI302",
        "ten": "Tối ưu hóa",
        "lop": "TOIUUHOA.1_LT",
        "thu": "3",
        "ca": "9-10",
        "phong": "B412",
        "sotin": "2",
        "giangvien": "Trần Minh Nguyệt(CTM012)"
    },
    {
        "ma": "MI322",
        "ten": "Trí tuệ nhân tạo và công nghệ tri thức",
        "lop": "TRITUENT&CNTRITHUC.1",
        "thu": "6",
        "ca": "1-5",
        "phong": "A509",
        "sotin": "3",
        "giangvien": "Nguyễn Hoàng Phương(CTI029)"
    },
    {
        "ma": "MI322",
        "ten": "Trí tuệ nhân tạo và công nghệ tri thức",
        "lop": "TRITUENT&CNTRITHUC.2",
        "thu": "6",
        "ca": "6-10",
        "phong": "B212",
        "sotin": "3",
        "giangvien": "Nguyễn Hoàng Phương(CTI029)"
    },
    {
        "ma": "MI322",
        "ten": "Trí tuệ nhân tạo và công nghệ tri thức",
        "lop": "TRITUENT&CNTRITHUC.3",
        "thu": "7",
        "ca": "1-5",
        "phong": "A401",
        "sotin": "3",
        "giangvien": "Nguyễn Hoàng Phương(CTI029)"
    },
    {
        "ma": "ND338",
        "ten": "Triệu chứng bệnh học Nhi khoa",
        "lop": "TCBENNHIKHOA.1_LT",
        "thu": "4",
        "ca": "1-4",
        "phong": "BOMON1",
        "sotin": "3",
        "giangvien": "Hà Thị Huyền(CSN001)"
    },
    {
        "ma": "ND338",
        "ten": "Triệu chứng bệnh học Nhi khoa",
        "lop": "TCBENNHIKHOA.1.1_BT",
        "thu": "5",
        "ca": "1-2",
        "phong": "BENHVIEN",
        "sotin": "3",
        "giangvien": "Nguyễn Minh Trang(CSD007)"
    },
    {
        "ma": "ND338",
        "ten": "Triệu chứng bệnh học Nhi khoa",
        "lop": "TCBENNHIKHOA.1.1_BT",
        "thu": "6",
        "ca": "1-3",
        "phong": "BENHVIEN",
        "sotin": "3",
        "giangvien": "Nguyễn Minh Trang(CSD007)"
    },
    {
        "ma": "ND340",
        "ten": "Triệu chứng bệnh học Sản phụ khoa",
        "lop": "TCHUNGBENHSPK.1_LT",
        "thu": "2",
        "ca": "1-4",
        "phong": "BENHVIEN",
        "sotin": "3",
        "giangvien": "Nguyễn Thị Như Mai(CSN003)"
    },
    {
        "ma": "ND340",
        "ten": "Triệu chứng bệnh học Sản phụ khoa",
        "lop": "TCHUNGBENHSPK.1.1_BT",
        "thu": "3",
        "ca": "1-5",
        "phong": "BENHVIEN",
        "sotin": "3",
        "giangvien": "Nguyễn Minh Trang(CSD007)"
    },
    {
        "ma": "AN253",
        "ten": "Trống",
        "lop": "TRONG.1",
        "thu": "2",
        "ca": "3-5",
        "phong": "BOMON1",
        "sotin": "2",
        "giangvien": "Nguyễn Quang Linh(MAN014)"
    },
    {
        "ma": "AN253",
        "ten": "Trống",
        "lop": "TRONG.2",
        "thu": "2",
        "ca": "6-8",
        "phong": "BOMON1",
        "sotin": "2",
        "giangvien": "Nguyễn Quang Linh(MAN014)"
    },
    {
        "ma": "IP402",
        "ten": "TT ngành Truyền thông và mạng máy tính",
        "lop": "TTTTHONG&MANGMT.1",
        "thu": "1",
        "ca": "1-5",
        "phong": "BOMON1",
        "sotin": "2",
        "giangvien": "Hoàng Trọng Minh(CTI030)"
    },
    {
        "ma": "LQ211",
        "ten": "Tư pháp quốc tế",
        "lop": "TUPHAPQTE.1",
        "thu": "2",
        "ca": "1-2",
        "phong": "B201",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LQ211",
        "ten": "Tư pháp quốc tế",
        "lop": "TUPHAPQTE.2",
        "thu": "2",
        "ca": "3-5",
        "phong": "B301",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LQ211",
        "ten": "Tư pháp quốc tế",
        "lop": "TUPHAPQTE.1",
        "thu": "2",
        "ca": "6-8",
        "phong": "B205",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "LQ211",
        "ten": "Tư pháp quốc tế",
        "lop": "TUPHAPQTE.2",
        "thu": "2",
        "ca": "9-10",
        "phong": "B201",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "IM206",
        "ten": "ứng dụng Excel",
        "lop": "UDEXCEL.7",
        "thu": "1",
        "ca": "1-2",
        "phong": "ONLINE",
        "sotin": "2",
        "giangvien": "Nguyễn Mạnh Hùng(CTI010)"
    },
    {
        "ma": "IM206",
        "ten": "ứng dụng Excel",
        "lop": "UDEXCEL.9",
        "thu": "1",
        "ca": "1-2",
        "phong": "ONLINE",
        "sotin": "2",
        "giangvien": "Đoàn Ngọc Đạt(PEL002)"
    },
    {
        "ma": "IM206",
        "ten": "ứng dụng Excel",
        "lop": "UDEXCEL.8",
        "thu": "1",
        "ca": "3-4",
        "phong": "ONLINE",
        "sotin": "2",
        "giangvien": "Nguyễn Mạnh Hùng(CTI010)"
    },
    {
        "ma": "IM206",
        "ten": "ứng dụng Excel",
        "lop": "UDEXCEL.10",
        "thu": "1",
        "ca": "3-4",
        "phong": "ONLINE",
        "sotin": "2",
        "giangvien": "Đoàn Ngọc Đạt(PEL002)"
    },
    {
        "ma": "IM206",
        "ten": "ứng dụng Excel",
        "lop": "UDEXCEL.5",
        "thu": "1",
        "ca": "6-7",
        "phong": "ONLINE",
        "sotin": "2",
        "giangvien": "Trần Tuấn Toàn(CTI005)"
    },
    {
        "ma": "IM206",
        "ten": "ứng dụng Excel",
        "lop": "UDEXCEL.6",
        "thu": "1",
        "ca": "8-9",
        "phong": "ONLINE",
        "sotin": "2",
        "giangvien": "Trần Tuấn Toàn(CTI005)"
    },
    {
        "ma": "IM206",
        "ten": "ứng dụng Excel",
        "lop": "UDEXCEL.5",
        "thu": "2",
        "ca": "6-7",
        "phong": "B706",
        "sotin": "2",
        "giangvien": "Trần Tuấn Toàn(CTI005)"
    },
    {
        "ma": "IM206",
        "ten": "ứng dụng Excel",
        "lop": "UDEXCEL.6",
        "thu": "2",
        "ca": "8-9",
        "phong": "B706",
        "sotin": "2",
        "giangvien": "Trần Tuấn Toàn(CTI005)"
    },
    {
        "ma": "IM206",
        "ten": "ứng dụng Excel",
        "lop": "UDEXCEL.7",
        "thu": "3",
        "ca": "12-13",
        "phong": "MSteam",
        "sotin": "2",
        "giangvien": "Nguyễn Mạnh Hùng(CTI010)"
    },
    {
        "ma": "IM206",
        "ten": "ứng dụng Excel",
        "lop": "UDEXCEL.8",
        "thu": "4",
        "ca": "12-13",
        "phong": "MSteam",
        "sotin": "2",
        "giangvien": "Nguyễn Mạnh Hùng(CTI010)"
    },
    {
        "ma": "IM206",
        "ten": "ứng dụng Excel",
        "lop": "UDEXCEL.9",
        "thu": "5",
        "ca": "1-2",
        "phong": "B706",
        "sotin": "2",
        "giangvien": "Đoàn Ngọc Đạt(PEL002)"
    },
    {
        "ma": "IM206",
        "ten": "ứng dụng Excel",
        "lop": "UDEXCEL.10",
        "thu": "5",
        "ca": "3-4",
        "phong": "B706",
        "sotin": "2",
        "giangvien": "Đoàn Ngọc Đạt(PEL002)"
    },
    {
        "ma": "AD215",
        "ten": "Ứng dụng PowerPoint",
        "lop": "UDPOWERPOINT.5",
        "thu": "1",
        "ca": "1-2",
        "phong": "ONLINE",
        "sotin": "3",
        "giangvien": "Phạm Thị Kim Hoa(CTI003)"
    },
    {
        "ma": "AD215",
        "ten": "Ứng dụng PowerPoint",
        "lop": "UDPOWERPOINT.6",
        "thu": "1",
        "ca": "3-4",
        "phong": "ONLINE",
        "sotin": "3",
        "giangvien": "Phạm Thị Kim Hoa(CTI003)"
    },
    {
        "ma": "AD215",
        "ten": "Ứng dụng PowerPoint",
        "lop": "UDPOWERPOINT.7",
        "thu": "1",
        "ca": "6-7",
        "phong": "ONLINE",
        "sotin": "3",
        "giangvien": "Phạm Thị Kim Hoa(CTI003)"
    },
    {
        "ma": "AD215",
        "ten": "Ứng dụng PowerPoint",
        "lop": "UDPOWERPOINT.T78715",
        "thu": "1",
        "ca": "6-7",
        "phong": "ONLINE",
        "sotin": "3",
        "giangvien": "Khuất Hoàng Huệ Anh(MTI021)"
    },
    {
        "ma": "AD215",
        "ten": "Ứng dụng PowerPoint",
        "lop": "UDPOWERPOINT.8",
        "thu": "1",
        "ca": "8-9",
        "phong": "ONLINE",
        "sotin": "3",
        "giangvien": "Phạm Thị Kim Hoa(CTI003)"
    },
    {
        "ma": "AD215",
        "ten": "Ứng dụng PowerPoint",
        "lop": "UDPOWERPOINT.T78716",
        "thu": "1",
        "ca": "8-9",
        "phong": "ONLINE",
        "sotin": "3",
        "giangvien": "Khuất Hoàng Huệ Anh(MTI021)"
    },
    {
        "ma": "AD215",
        "ten": "Ứng dụng PowerPoint",
        "lop": "UDPOWERPOINT.T78715",
        "thu": "2",
        "ca": "12-13",
        "phong": "MSteam",
        "sotin": "3",
        "giangvien": "Khuất Hoàng Huệ Anh(MTI021)"
    },
    {
        "ma": "AD215",
        "ten": "Ứng dụng PowerPoint",
        "lop": "UDPOWERPOINT.T78716",
        "thu": "5",
        "ca": "12-13",
        "phong": "MSteam",
        "sotin": "3",
        "giangvien": "Khuất Hoàng Huệ Anh(MTI021)"
    },
    {
        "ma": "AD215",
        "ten": "Ứng dụng PowerPoint",
        "lop": "UDPOWERPOINT.7",
        "thu": "5",
        "ca": "6-7",
        "phong": "A706",
        "sotin": "3",
        "giangvien": "Phạm Thị Kim Hoa(CTI003)"
    },
    {
        "ma": "AD215",
        "ten": "Ứng dụng PowerPoint",
        "lop": "UDPOWERPOINT.8",
        "thu": "5",
        "ca": "8-9",
        "phong": "A706",
        "sotin": "3",
        "giangvien": "Phạm Thị Kim Hoa(CTI003)"
    },
    {
        "ma": "AD215",
        "ten": "Ứng dụng PowerPoint",
        "lop": "UDPOWERPOINT.5",
        "thu": "7",
        "ca": "1-2",
        "phong": "A707",
        "sotin": "3",
        "giangvien": "Phạm Thị Kim Hoa(CTI003)"
    },
    {
        "ma": "AD215",
        "ten": "Ứng dụng PowerPoint",
        "lop": "UDPOWERPOINT.6",
        "thu": "7",
        "ca": "3-4",
        "phong": "A707",
        "sotin": "3",
        "giangvien": "Phạm Thị Kim Hoa(CTI003)"
    },
    {
        "ma": "IS386",
        "ten": "Ứng dụng thương mại điện tử trong du lịch",
        "lop": "UDTM-DTDL.1.1_BT",
        "thu": "2",
        "ca": "4-5",
        "phong": "ONLINE",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "IS386",
        "ten": "Ứng dụng thương mại điện tử trong du lịch",
        "lop": "UDTM-DTDL.1.1_BT",
        "thu": "2",
        "ca": "6-7",
        "phong": "ONLINE",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "IS386",
        "ten": "Ứng dụng thương mại điện tử trong du lịch",
        "lop": "UDTM-DTDL.1_LT",
        "thu": "6",
        "ca": "6-8",
        "phong": "A606",
        "sotin": "3",
        "giangvien": ""
    },
    {
        "ma": "VC303",
        "ten": "Văn hóa ứng xử của người Việt",
        "lop": "VHOAUNGXUVN.1",
        "thu": "4",
        "ca": "1-5",
        "phong": "B304",
        "sotin": "3",
        "giangvien": "Trịnh Thị Hà(MXV042)"
    },
    {
        "ma": "VC200",
        "ten": "Văn hoá Việt Nam",
        "lop": "VHOAVN.3",
        "thu": "2",
        "ca": "3-5",
        "phong": "A502",
        "sotin": "2",
        "giangvien": "Trần Tiến Khôi(CXV003)"
    },
    {
        "ma": "VC200",
        "ten": "Văn hoá Việt Nam",
        "lop": "VHOAVN.1",
        "thu": "7",
        "ca": "3-5",
        "phong": "A602",
        "sotin": "2",
        "giangvien": "Trần Tiến Khôi(CXV003)"
    },
    {
        "ma": "VC200",
        "ten": "Văn hoá Việt Nam",
        "lop": "VHOAVN.2",
        "thu": "7",
        "ca": "6-8",
        "phong": "A602",
        "sotin": "2",
        "giangvien": "Trần Tiến Khôi(CXV003)"
    },
    {
        "ma": "MA239",
        "ten": "Xác suất thống kê",
        "lop": "XSUATTKE.1_LT",
        "thu": "2",
        "ca": "4-5",
        "phong": "B501",
        "sotin": "4",
        "giangvien": "Phan Thanh Hồng(CTM007)"
    },
    {
        "ma": "MA239",
        "ten": "Xác suất thống kê",
        "lop": "XSUATTKE.2_LT",
        "thu": "2",
        "ca": "8-10",
        "phong": "B507",
        "sotin": "4",
        "giangvien": "Nguyễn Công Sứ(CTM021)"
    },
    {
        "ma": "MA239",
        "ten": "Xác suất thống kê",
        "lop": "XSUATTKE.1_LT",
        "thu": "4",
        "ca": "3-5",
        "phong": "B507",
        "sotin": "4",
        "giangvien": "Phan Thanh Hồng(CTM007)"
    },
    {
        "ma": "MA239",
        "ten": "Xác suất thống kê",
        "lop": "XSUATTKE.2.1_BT",
        "thu": "4",
        "ca": "8-10",
        "phong": "A704",
        "sotin": "4",
        "giangvien": "Nguyễn Thị Nhung(CTM005)"
    },
    {
        "ma": "MA239",
        "ten": "Xác suất thống kê",
        "lop": "XSUATTKE.1.1_BT",
        "thu": "5",
        "ca": "3-5",
        "phong": "A704",
        "sotin": "4",
        "giangvien": "Trần Minh Nguyệt(CTM012)"
    },
    {
        "ma": "MA239",
        "ten": "Xác suất thống kê",
        "lop": "XSUATTKE.1.2_BT",
        "thu": "5",
        "ca": "8-10",
        "phong": "A704",
        "sotin": "4",
        "giangvien": "Trần Minh Nguyệt(CTM012)"
    },
    {
        "ma": "MA239",
        "ten": "Xác suất thống kê",
        "lop": "XSUATTKE.2_LT",
        "thu": "5",
        "ca": "9-10",
        "phong": "B501",
        "sotin": "4",
        "giangvien": "Nguyễn Công Sứ(CTM021)"
    },
    {
        "ma": "MA239",
        "ten": "Xác suất thống kê",
        "lop": "XSUATTKE.2.2_BT",
        "thu": "6",
        "ca": "8-10",
        "phong": "B704",
        "sotin": "4",
        "giangvien": "Nguyễn Thị Nhung(CTM005)"
    },
    {
        "ma": "MA231",
        "ten": "Xác suất thống kê ứng dụng",
        "lop": "XSTKEUDUNG.5.2_BT",
        "thu": "2",
        "ca": "3-5",
        "phong": "A702",
        "sotin": "4",
        "giangvien": "Trần Minh Nguyệt(CTM012)"
    },
    {
        "ma": "MA231",
        "ten": "Xác suất thống kê ứng dụng",
        "lop": "XSTKEUDUNG.4_LT",
        "thu": "2",
        "ca": "6-7",
        "phong": "A303",
        "sotin": "4",
        "giangvien": "Nguyễn Thị Nhung(CTM005)"
    },
    {
        "ma": "MA231",
        "ten": "Xác suất thống kê ứng dụng",
        "lop": "XSTKEUDUNG.5_LT",
        "thu": "3",
        "ca": "4-5",
        "phong": "B501",
        "sotin": "4",
        "giangvien": "Nhâm Ngọc Tần(CTM013)"
    },
    {
        "ma": "MA231",
        "ten": "Xác suất thống kê ứng dụng",
        "lop": "XSTKEUDUNG.5.1_BT",
        "thu": "4",
        "ca": "3-5",
        "phong": "A702",
        "sotin": "4",
        "giangvien": "Nhâm Ngọc Tần(CTM013)"
    },
    {
        "ma": "MA231",
        "ten": "Xác suất thống kê ứng dụng",
        "lop": "XSTKEUDUNG.5_LT",
        "thu": "5",
        "ca": "3-5",
        "phong": "B507",
        "sotin": "4",
        "giangvien": "Nhâm Ngọc Tần(CTM013)"
    },
    {
        "ma": "MA231",
        "ten": "Xác suất thống kê ứng dụng",
        "lop": "XSTKEUDUNG.4_LT",
        "thu": "5",
        "ca": "8-10",
        "phong": "B101",
        "sotin": "4",
        "giangvien": "Nguyễn Thị Nhung(CTM005)"
    },
    {
        "ma": "MA231",
        "ten": "Xác suất thống kê ứng dụng",
        "lop": "XSTKEUDUNG.4.2_BT",
        "thu": "6",
        "ca": "8-10",
        "phong": "A702",
        "sotin": "4",
        "giangvien": "Trần Minh Nguyệt(CTM012)"
    },
    {
        "ma": "MA231",
        "ten": "Xác suất thống kê ứng dụng",
        "lop": "XSTKEUDUNG.4.1_BT",
        "thu": "7",
        "ca": "8-10",
        "phong": "A702",
        "sotin": "4",
        "giangvien": "Đỗ Thị Thuý Hằng(CTM009)"
    },
    {
        "ma": "SK323",
        "ten": "Xây dựng và quản lý dự án trong công tác xã hội",
        "lop": "XDQLDUANCTXH.1",
        "thu": "3",
        "ca": "6-8",
        "phong": "B202",
        "sotin": "2",
        "giangvien": "Trần Tú Hoa(CXW034)"
    },
    {
        "ma": "MC412",
        "ten": "Xử lý khủng hoảng truyền thông",
        "lop": "XULYKHTT.1_LT",
        "thu": "4",
        "ca": "6-9",
        "phong": "B611",
        "sotin": "3",
        "giangvien": "Phạm Bích San(CXC002)"
    },
    {
        "ma": "MC412",
        "ten": "Xử lý khủng hoảng truyền thông",
        "lop": "XULYKHTT.3_LT",
        "thu": "6",
        "ca": "2-5",
        "phong": "B610",
        "sotin": "3",
        "giangvien": "Vũ Thị Thanh Nhàn(CXC001)"
    },
    {
        "ma": "MC412",
        "ten": "Xử lý khủng hoảng truyền thông",
        "lop": "XULYKHTT.2_LT",
        "thu": "6",
        "ca": "6-9",
        "phong": "B404",
        "sotin": "3",
        "giangvien": "Phạm Bích San(CXC002)"
    },
    {
        "ma": "MC412",
        "ten": "Xử lý khủng hoảng truyền thông",
        "lop": "XULYKHTT.4_LT",
        "thu": "6",
        "ca": "6-9",
        "phong": "B610",
        "sotin": "3",
        "giangvien": "Vũ Thị Thanh Nhàn(CXC001)"
    },
    {
        "ma": "CF321",
        "ten": "Xử lý tín hiệu số",
        "lop": "TINHIEUSO.1",
        "thu": "3",
        "ca": "1-5",
        "phong": "A509",
        "sotin": "3",
        "giangvien": "Hà Thị Thu Lan(MTI024)"
    },
    {
        "ma": "BK327",
        "ten": "Xuất nhập khẩu",
        "lop": "XUATNHAPKHAU.1",
        "thu": "2",
        "ca": "6-7",
        "phong": "A606",
        "sotin": "3",
        "giangvien": "Ngô Khánh Huyền(CQB002)"
    },
    {
        "ma": "BK327",
        "ten": "Xuất nhập khẩu",
        "lop": "XUATNHAPKHAU.1",
        "thu": "4",
        "ca": "3-5",
        "phong": "A606",
        "sotin": "3",
        "giangvien": "Ngô Khánh Huyền(CQB002)"
    }
]
function displaySubjects(data) {
    const subjectBox = document.getElementById("subject-box");
    
    data.forEach(item => {
        const subjectDiv = document.createElement("div");
        subjectDiv.classList.add("subject");

        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = item.lop;

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(`${item.ten} ( ${item.lop} (Thứ ${item.thu} [${item.ca}])`));
        subjectDiv.appendChild(label);

        subjectBox.appendChild(subjectDiv);
    });
    handleCheckboxChange();
}
displaySubjects(data);

// Thêm sự kiện cho checkbox
function handleCheckboxChange() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const isChecked = this.checked;
            const classID = this.value; // Giả sử giá trị của checkbox là ID của lớp học

            const selectedClass = data.find(item => item.ma === classID);

            if (isChecked) {
                updateTimetable(selectedClass);
            } else {
                removeFromTimetable(selectedClass);
            }
        });
    });
}

function updateTimetable(classDetails) {
    const classID = classDetails.ma;
    const dayAbbreviations = ["", "mon", "tue", "wed", "thur", "fri", "sat", "sun"];
    const timetableBody = document.getElementById('timetable-body');

    classDetails.thu.split(',').forEach(day => {
        const [dayIndex, timeStart, timeEnd] = day.split('-').map(value => parseInt(value));
        for (let i = timeStart; i <= timeEnd; i++) {
            const cell = document.createElement('td');
            cell.id = dayAbbreviations[dayIndex] + "-" + i;
            cell.innerHTML = classDetails.ten;
            cell.classList.add("occupied");
            cell.setAttribute("data-classID", classID);
            
            // Thêm cell vào hàng tương ứng trong bảng thời khóa biểu
            const row = timetableBody.querySelector(`tr[data-time="${i}"]`);
            if (!row) {
                const newRow = document.createElement('tr');
                newRow.setAttribute("data-time", i);
                newRow.appendChild(cell);
                timetableBody.appendChild(newRow);
            } else {
                row.appendChild(cell);
            }
        }
    });
}

// Hiển thị thời khóa biểu dựa trên dữ liệu lớp học
data.forEach(classDetails => {
    updateTimetable(classDetails);
});