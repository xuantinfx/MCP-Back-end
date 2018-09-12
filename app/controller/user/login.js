const {responseData} = require("../../utilities/responseData")
const NguoiDung = require('../../models/NguoiDung');
const {translate} = require('../../translate/translate')
const bcrypt =require('bcryptjs')
const _ = require('lodash')
const {createToken} = require('../auth')

module.exports = (req, res, next) => {
    let {email, matKhau} = req.body;

    if(!email) {
        responseData(res, {}, 200, {error: [translate("Email is not empty")], message: []})
        return;
    }

    if(!matKhau) {
        responseData(res, {}, 200, {error: [translate("Password is not empty")], message: []})
        return;
    }

    NguoiDung.findOne({email})
    .then(user => {
        if(user) {
            if(bcrypt.compareSync(matKhau, user.matKhau)) {
                let payload = _.omit(user.toObject(), ["matKhau", "bangDiem"]);
                let token = createToken(payload);

                responseData(res, {...payload, token}, 200, {error: [], message: [translate("Login success")]})
            } else {
                responseData(res, {}, 200, {error: [translate("Wrong password")], message: []})
            }
            
        } else {
            responseData(res, {}, 200, {error: [translate("User not exits")], message: []})
        }
    })
    .catch(err => {
        console.log(err)
        responseData(res, {}, 200, {error: [translate("Unknown error")], message: []})
    })
}