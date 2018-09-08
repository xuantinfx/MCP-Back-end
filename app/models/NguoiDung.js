const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let NguoiDungSchema = new Schema({
    email: String,
    hoVaTen: String,
    mssv: String,
    matKhau: String,
    khoa: String,
    khoaTuyen: String,
    bangDiem: [{
        maHocPhan: String,
        diemSo: Number,
        diemChu: String,
        trangThai: String,
        lichSuDiem: [{
            thoiGian: Date,
            diemSo: Number,
            diemChu: String,
            trangThai: String
        }]
    }]
}, { strict: false });

module.exports = mongoose.model('NguoiDung', NguoiDungSchema);

