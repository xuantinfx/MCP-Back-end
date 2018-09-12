const i18n_module = require('i18n-nodejs');
const listLanguage = require('./listLanguage');

module.exports.translate = (key) => {
    const langFile = "../../translate/locale.json";
    let result = {};
    let i18n = null;
    for(let i = 0; i < listLanguage.length; i++) {
        i18n = new i18n_module(listLanguage[i], langFile);
        result[listLanguage[i]] = i18n.__(key);
    }

    return result;
}  