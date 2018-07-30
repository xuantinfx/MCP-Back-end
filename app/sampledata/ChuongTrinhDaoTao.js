//dữ liệu mẫu là mảng các JS object
//theo thiết kế: https://docs.google.com/spreadsheets/d/1iER7kPLNYPeJ6zvwZ2w_YrTR4o-7ncuyLAIu8O8RI1Y/edit#gid=0
exports.ChuongTrinhDaoTao = [{
    tenChuongTrinhDaoTao: "",
    trinhDoDaoTao: "",
    hinhThucDaoTao: "",
    khoaTuyen: "",
    mucTieuDaoTao: {
        mucTieuChung: "",
        mucTieuCuThe: "",
        coHoiNgheNghiep: ""
    },
    thoiGianDaoTao: "",
    khoiLuongTinChi: "",
    doiTuongTuyenSinh: "",
    quyTrinhDaoTao: "",
    cauTrucChuongTrinh: [{
        khoiKienThuc: "",
        chiTietSoTinChi: {
            soTinChiBatBuoc: "",
            soTinChiTuChon: "",
            soTinChiTuChonTuDo: ""
        },
        soTinChiTongCong: "",
        ghiChu: ""
    }],
    noiDungChuongTrinh:{
        kienThucGiaoDucDaiCuong: {
            ten: "",
            khoiKienThuc: [{
                ten: "",
                dsHocPhan: []
            }]
        },
        kienThucGiaoDucChuyenNghiep: {
            ten: "",
            kienThucCoSoNganh: {
                ten: "",
                dsHocPhan: []
            },
            kienThucChuyenNganh:{
                ten: "",
                dsLoai: [{
                    ten: "",
                    soHocPhanTichLuyMin: "",
                    soTinChiTichLuyMin: "",
                    dsHocPhan: []
                }]
            },
            kienThucTotNghiep: {
                ten: "",
                soTinChiTichLuyMin: "",
                dsHocPhan: []
            }
        }
    },
    dieuKienTotNghiep: "",
    filePdfGoc: ""
}]