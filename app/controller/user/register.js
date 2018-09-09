const {responseData} = require("../../utilities/responseData")
const NguoiDung = require('../../models/NguoiDung');
const {translate} = require('../../translate/translate')
const bcrypt =require('bcryptjs')
const _ = require('lodash')
const {createToken} = require('../auth')

module.exports = (req, res, next) => {
    let {email, hoVaTen, matKhau, cofirm_password} = req.body;

    if(!email) {
        responseData(res, {}, 200, {error: [translate("Email is not empty")], message: []})
        return;
    }

    if(!hoVaTen) {
        responseData(res, {}, 200, {error: [translate("Name is not empty")], message: []})
        return;
    }

    if(!matKhau) {
        responseData(res, {}, 200, {error: [translate("Password is not empty")], message: []})
        return;
    }

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

        let payload = _.omit(newUser, ["matKhau", "bangDiem"]);
        let token = createToken(payload);

        responseData(res, {...newUser, token}, 200, {error: [], message: [translate("Register success")]})
    })
    .catch(err => {
        if(err !== "") {
            console.log(err)
            responseData(res, {}, 200, {error: [translate("Unknown error")], message: []})
        }
    })
}