//dữ liệu mẫu là mảng các JS object
//theo thiết kế: https://docs.google.com/spreadsheets/d/1iER7kPLNYPeJ6zvwZ2w_YrTR4o-7ncuyLAIu8O8RI1Y/edit#gid=0
module.exports = [{
        tenChuongTrinhDaoTao: "Cử nhân Kỹ thuật phần mềm",
        maChuongTrinhDaoTao: "KTPM2015",
        trinhDoDaoTao: "Đại học",
        hinhThucDaoTao: "Chính quy",
        khoaTuyen: "2015",
        mucTieuDaoTao: {
            mucTieuChung: `- Có kiến thức kỹ thuật vững chắc, hiểu được trách nhiệm đạo đức nghề nghiệp, để áp dụng
                        các công nghệ , kỹ thuật mới nhất của nghành công nghệ thông tin (CNTT) vào việc giải quyết 
                        các vấn đề trên thực tế, có thể áp dụng các phương pháp khoa học trong việc thực hiện các 
                        nghiên cứu trong lĩnh vực CNTT`,
            mucTieuCuThe: `Biết được trách nhiêmj, đạo đức nghề nghiệp, và hiện trạng kinh tế, môi trường xã hội. Có 
        đầy đủ các kỹ năng cá nhân, kỹ năng nhóm / giao tiếp và kỹ năng CDIO`,
            coHoiNgheNghiep: `Phân tích nghiệp vụ, Phân tích yêu cầu ngừoi dùng, Thiết kế phần mềm, Lập trình phần mềm, 
        Kiểm thử sản phẩm, Quản lý quy trình phát triển phần mềm, Quản lý dự án, Tư vấn, ...`
        },
        thoiGianDaoTao: "4 năm",
        khoiLuongTinChi: 146,
        doiTuongTuyenSinh: "Theo quy chế tuyển sinh đại học, cao đẳng hệ chính quy của Bộ Giáo Dục và Đào Tạo",
        quyTrinhDaoTao: "Theo Quy chế Đào tạo đại học và cao đẳng theo Hệ thống tín chỉ ban hành kèm theo Quyết định số 1368/ĐHQG-ĐH&SĐH ngày 21 tháng 11 năm 2008 của Giám đốc Đại học Quốc Gia TP.Hồ Chí Minh.",
        cauTrucChuongTrinh: [{
                khoiKienThuc: "Giáo dục đại cương",
                chiTietSoTinChi: {
                    soTinChiBatBuoc: 60,
                    soTinChiTuChon: 18,
                    soTinChiTuChonTuDo: 0
                },
                soTinChiTongCong: 78,
                ghiChu: ""
            },
            {
                khoiKienThuc: "Cơ sở nghành",
                chiTietSoTinChi: {
                    soTinChiBatBuoc: 20,
                    soTinChiTuChon: 0,
                    soTinChiTuChonTuDo: 0
                },
                soTinChiTongCong: 20,
                ghiChu: ""
            },
            {
                khoiKienThuc: "Nghành / chuyên nghành",
                chiTietSoTinChi: {
                    soTinChiBatBuoc: 20,
                    soTinChiTuChon: 8,
                    soTinChiTuChonTuDo: 10
                },
                soTinChiTongCong: 38,
                ghiChu: ""
            },
            {
                khoiKienThuc: "Tốt nghiệp",
                chiTietSoTinChi: {
                    soTinChiBatBuoc: 0,
                    soTinChiTuChon: 10,
                    soTinChiTuChonTuDo: 0
                },
                soTinChiTongCong: 10,
                ghiChu: ""
            }
        ],
        noiDungChuongTrinh: [{
                ten: "root",
                pathId: "root",
                path: null
            },
            {
                ten: "Kiến thức giáo dục đại cương",
                pathId: "KTGDDC",
                path: ",root,"
            },
            {
                ten: "Lý luận Triết học Mác-Lênin và Tư tưởng Hồ Chí Minh",
                pathId: "LLTHMLN&TTHCM",
                path: ",root,KTGDDC,",
                dsHocPhan: [],
                soHocPhanTichLuyMin: 3,
                soTinChiTichLuyMin: 10
            },
            {
                ten: "Kinh tế -xã hội",
                pathId: "KTXH",
                path: ",root,KTGDDC,",
                dsHocPhan: [],
                soHocPhanTichLuyMin: 2,
                soTinChiTichLuyMin: 5
            },
            {
                ten: "Ngoại ngữ",
                pathId: "NN",
                path: ",root,KTGDDC,",
                dsHocPhan: [],
                soHocPhanTichLuyMin: 4,
                soTinChiTichLuyMin: 12
            },
            {
                ten: "Toán - Tin học - Khoa học tự nhiên",
                pathId: "TTHKHTN",
                path: ",root,KTGDDC,",
                dsHocPhan: [],
                soHocPhanTichLuyMin: 15,
                soTinChiTichLuyMin: 51
            },
            {
                ten: "Giáo dục thể chất và giáo dục quốc phòng",
                pathId: "GDTC&GDQP",
                path: ",root,KTGDDC,",
                dsHocPhan: [],
                soHocPhanTichLuyMin: 3,
                soTinChiTichLuyMin: 8
            },
            {
                ten: "Kiến thức giáo dục chuyên nghiệp",
                pathId: "KTGDCN",
                path: ",root,"
            },
            {
                ten: "Kiến thức cơ sở ngành",
                pathId: "KTCSN",
                path: ",root,KTGDCN,",
                dsHocPhan: [],
                soHocPhanTichLuyMin: 5,
                soTinChiTichLuyMin: 20
            },
            {
                ten: "Kiến thức ngành/chuyên ngành",
                pathId: "KTNCN",
                path: ",root,KTGDCN,"
            },
            {
                ten: "Kiến thức bắt buộc ngành/chuyên ngành",
                pathId: "KTBBNCN",
                path: ",root,KTGDCN,KTNCN,",
                dsHocPhan: [],
                soHocPhanTichLuyMin: 5,
                soTinChiTichLuyMin: 20
            },
            {
                ten: "Kiến thức tự chọn ngành/chuyên ngành",
                pathId: "KTTCNCN",
                path: ",root,KTGDCN,KTNCN,",
                dsHocPhan: [],
                soHocPhanTichLuyMin: 2,
                soTinChiTichLuyMin: 8
            },
            {
                ten: "Kiến thức tự chọn tự do",
                pathId: "KTTCTD",
                path: ",root,KTGDCN,KTNCN,",
                dsHocPhan: [],
                soHocPhanTichLuyMin: 0,
                soTinChiTichLuyMin: 0
            },
            {
                ten: "Kiến thức tốt nghiệp",
                pathId: "KTTN",
                path: ",root,KTGDCN,",
                dsHocPhan: [],
                soHocPhanTichLuyMin: 1,
                soTinChiTichLuyMin: 10
            }
        ],
        dieuKienTotNghiep: "Tích luỹ ít nhất 146 tín chỉ của khối kiến thức giáo dục đại cương và giáo dục chuyên nghiệp như đã mô tả ở mục 6, đồng thời thoả các điều kiện theo điều 28.",
        filePdfGoc: "http://www.fit.hcmus.edu.vn/vn/LinkClick.aspx?fileticket=QuLok685kyE%3d&tabid=956&mid=1574"
}/*, {
        tenChuongTrinhDaoTao: "Cử nhân Hệ thống thông tin",
        maChuongTrinhDaoTao: "HTTT2015",
        trinhDoDaoTao: "Đại học",
        hinhThucDaoTao: "Chính quy",
        khoaTuyen: "2015",
        mucTieuDaoTao: {
            mucTieuChung: "",
            mucTieuCuThe: "",
            coHoiNgheNghiep: ""
        },
        thoiGianDaoTao: "4 năm",
        khoiLuongTinChi: 146,
        doiTuongTuyenSinh: "Theo quy chế tuyển sinh đại học, cao đẳng hệ chính quy của Bộ Giáo dục và đào tạo",
        quyTrinhDaoTao: "Theo Qui chế đào tạo đại học và cao đẳng theo Hệ thống tín chỉ ban hành kèm theo Quyết định số 1368/ĐHQG-ĐH&SĐH ngày 21 tháng 11 năm 2008 của Giám đốc Đại học Quốc gia TP Hồ Chí Minh.",
        cauTrucChuongTrinh: [{
            khoiKienThuc: "Giáo dục đại cương",
            chiTietSoTinChi: {
                soTinChiBatBuoc: 60,
                soTinChiTuChon: 18,
                soTinChiTuChonTuDo: 0
            },
            soTinChiTongCong: 78,
            ghiChu: ""
        }, {
            khoiKienThuc: "Cơ sở ngành",
            chiTietSoTinChi: {
                soTinChiBatBuoc: 20,
                soTinChiTuChon: 0,
                soTinChiTuChonTuDo: 0
            },
            soTinChiTongCong: 20,
            ghiChu: ""
        }, {
            khoiKienThuc: "Ngành/chuyên ngành",
            chiTietSoTinChi: {
                soTinChiBatBuoc: 20,
                soTinChiTuChon: 8,
                soTinChiTuChonTuDo: 10
            },
            soTinChiTongCong: 38,
            ghiChu: ""
        }, {
            khoiKienThuc: "Tốt nghiệp",
            chiTietSoTinChi: {
                soTinChiBatBuoc: 0,
                soTinChiTuChon: 10,
                soTinChiTuChonTuDo: 0
            },
            soTinChiTongCong: 10,
            ghiChu: ""
        }],
        noiDungChuongTrinh: [{
            ten: "",
            pathId: "",
            path: "",
            dsHocPhan: [],
            soHocPhanTichLuyMin: 0,
            soTinChiTichLuyMin: 0
        }],
        dieuKienTotNghiep: "Tích luỹ ít nhất 146 tín chỉ của khối kiến thức giáo dục đại cương và giáo dục chuyên nghiệp như đã mô tả ở mục 6, đồng thời thoả các điều kiện theo Điều 28 trong Qui chế Đào tạo đại học và cao đẳng theo hệ thống tín chỉ ban hành kèm theo Quyết định số 1368/ĐHQG-ĐH&SĐH ngày 21 tháng 11 năm 2008 của Giám đốc Đại học Quốc gia TP Hồ Chí Minh.",
        filePdfGoc: "http://www.fit.hcmus.edu.vn/vn/LinkClick.aspx?fileticket=a8hQWQaEvIE%3d&tabid=956&mid=1574"
    },
    {
        tenChuongTrinhDaoTao: "Cử nhân Khoa học Máy tính",
        maChuongTrinhDaoTao: "KHMT2015",
        trinhDoDaoTao: "Đại học",
        hinhThucDaoTao: "Chính quy",
        khoaTuyen: "2015",
        mucTieuDaoTao: {
            mucTieuChung: "",
            mucTieuCuThe: "",
            coHoiNgheNghiep: ""
        },
        thoiGianDaoTao: "4 năm",
        khoiLuongTinChi: 146,
        doiTuongTuyenSinh: "Theo quy chế tuyển sinh đại học, cao đẳng hệ chính quy của Bộ Giáo dục và đào tạo",
        quyTrinhDaoTao: "Theo Qui chế đào tạo đại học và cao đẳng theo Hệ thống tín chỉ ban hành kèm theo Quyết định số 1368/ĐHQG-ĐH&SĐH ngày 21 tháng 11 năm 2008 của Giám đốc Đại học Quốc gia TP Hồ Chí Minh.",
        cauTrucChuongTrinh: [{
            khoiKienThuc: "Giáo dục đại cương",
            chiTietSoTinChi: {
                soTinChiBatBuoc: 60,
                soTinChiTuChon: 18,
                soTinChiTuChonTuDo: 0
            },
            soTinChiTongCong: 78,
            ghiChu: ""
        }, {
            khoiKienThuc: "Cơ sở ngành",
            chiTietSoTinChi: {
                soTinChiBatBuoc: 20,
                soTinChiTuChon: 0,
                soTinChiTuChonTuDo: 0
            },
            soTinChiTongCong: 20,
            ghiChu: ""
        }, {
            khoiKienThuc: "Ngành/chuyên ngành",
            chiTietSoTinChi: {
                soTinChiBatBuoc: 20,
                soTinChiTuChon: 8,
                soTinChiTuChonTuDo: 10
            },
            soTinChiTongCong: 38,
            ghiChu: ""
        }, {
            khoiKienThuc: "Tốt nghiệp",
            chiTietSoTinChi: {
                soTinChiBatBuoc: 0,
                soTinChiTuChon: 10,
                soTinChiTuChonTuDo: 0
            },
            soTinChiTongCong: 10,
            ghiChu: ""
        }],
        noiDungChuongTrinh: [{
            ten: "",
            pathId: "",
            path: "",
            dsHocPhan: [],
            soHocPhanTichLuyMin: 0,
            soTinChiTichLuyMin: 0
        }],
        dieuKienTotNghiep: "Tích luỹ ít nhất 146 tín chỉ của khối kiến thức giáo dục đại cương và giáo dục chuyên nghiệp như đã mô tả ở mục 6, đồng thời thoả các điều kiện theo Điều 28 trong Qui chế Đào tạo đại học và cao đẳng theo hệ thống tín chỉ ban hành kèm theo Quyết định số 1368/ĐHQG-ĐH&SĐH ngày 21 tháng 11 năm 2008 của Giám đốc Đại học Quốc gia TP Hồ Chí Minh.",
        filePdfGoc: "http://www.fit.hcmus.edu.vn/vn/LinkClick.aspx?fileticket=ZOcA3NKF8x0%3d&tabid=956&mid=1574"
    }*/
]