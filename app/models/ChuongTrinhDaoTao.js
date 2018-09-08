const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ChuongTrinhDaoTaoSchema = new Schema({
    tenChuongTrinhDaoTao: String,
    maChuongTrinhDaoTao: String,
    trinhDoDaoTao: String,
    hinhThucDaoTao: String,
    khoaTuyen: String,
    mucTieuDaoTao: {
        mucTieuChung: String,
        mucTieuCuThe: String,
        coHoiNgheNghiep: String
    },
    thoiGianDaoTao: String,
    khoiLuongTinChi: Number,
    doiTuongTuyenSinh: String,
    quyTrinhDaoTao: String,
    cauTrucChuongTrinh: [{
        khoiKienThuc: String,
        chiTietSoTinChi: {
            soTinChiBatBuoc: Number,
            soTinChiTuChon: Number,
            soTinChiTuChonTuDo: Number
        },
        soTinChiTongCong: Number,
        ghiChu: String
    }],
    noiDungChuongTrinh: [{
        ten: String,
        pathId: String,
        path: String,
        dsHocPhan: [{
            maHocPhan: String
        }],
        soHocPhanTichLuyMin: Number,
        soTinChiTichLuyMin: Number
    }]
}, { strict: false });

module.exports = mongoose.model('ChuongTrinhDaoTao', ChuongTrinhDaoTaoSchema);