module.exports.responseData = (res, data) => {
    res.end(JSON.stringify(data));
}