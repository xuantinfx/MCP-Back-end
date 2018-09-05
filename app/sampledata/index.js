const ChuongTrinhDaoTao =  require('./ChuongTrinhDaoTao');
const HocPhan = require('./HocPhan');
const NguoiDung = require('./NguoiDung');
const ChuongTrinhDaoTaoModel = require('../models/ChuongTrinhDaoTao');
const HocPhanModel = require('../models/HocPhan');
const NguoiDungModel = require('../models/NguoiDung');

const mongoose = require('mongoose')
const {connectionString} = require('../config')
mongoose.connect(connectionString);

// insert NguoiDung
NguoiDungModel.insertMany(NguoiDung, (err, docs) => {
    if(err) {
        console.error(err);
        throw err;
    } else {
        docs.forEach(doc => {
            console.log("Inserted",doc.hoVaTen);
        })
    }
})

// insert ChuongTrinhDaoTao
// insert NguoiDung
ChuongTrinhDaoTaoModel.insertMany(ChuongTrinhDaoTao, (err, docs) => {
    if(err) {
        console.error(err);
        throw err;
    } else {
        docs.forEach(doc => {
            console.log("Inserted",doc.tenChuongTrinhDaoTao);
        })
    }
})