const {responseData} = require("../../utilities/responseData")
const NguoiDung = require('../../models/NguoiDung');
const {translate} = require('../../translate/translate')
const bcrypt =require('bcryptjs')
const _ = require('lodash')

module.exports = (req, res, next) => {
    let {email, hoVaTen, matKhau, cofirm_password} = req.body;

    if(matKhau !== cofirm_password) {
        responseData(res, {}, 200, {error: [translate("Password and cofirm password not match")], message: []})
        return;
    }

    NguoiDung.findOne({email})
    .then(user => {
        if(user) {
            responseData(res, {}, 200, {error: [translate("This email has already been taken")], message: []})
            throw "";
        }
        return ;
    })
    .then(() => {
        let newUser = {
            ...req.body,
            email,
            hoVaTen, 
            matKhau: bcrypt.hashSync(matKhau, bcrypt.genSaltSync(10))
        }
        newUser = _.omit(newUser, ["cofirm_password"])
        new NguoiDung(newUser).save()

        responseData(res, {newUser}, 200, {error: [], message: [translate("Register success")]})
    })
    .catch(err => {
        if(err !== "") {
            console.log(err)
            responseData(res, {}, 200, {error: [translate("Unknown error")], message: []})
        }
    })
}