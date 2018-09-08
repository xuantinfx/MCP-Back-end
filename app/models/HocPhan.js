const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HocPhanSchema = new Schema({
    maHocPhan: String,
    tenHocPhan: String,
    soTinChi: Number,
    loaiHocPhan: String,
    soTietLyThuyet: Number,
    soTietThucHanh: Number,
    soTietBaiTap: Number,
    hocPhanTienQuyet: String,
    hocPhanDeNghiHocTruoc: String,
    chiTietDaoTao: [{
        path: String
    }]
}, { strict: false });

module.exports = mongoose.model('HocPhan', HocPhanSchema);

