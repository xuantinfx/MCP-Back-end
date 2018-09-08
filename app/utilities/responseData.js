const _ = require('lodash')

module.exports.responseData = (res, data, status_code, message = {error: [], message: []}, paging) => {
    // Init Data
    let result = {
        data: {},
        status_code: status_code ? status_code : 200,
        message
    }
    
    // Send to client Array
    if(Array.isArray(data)) {
        result.data = getDataWithPaging(data, paging)
    }
    // Send to Client Object
    else {
        result.data = data;
    }

    // Set Content-Type and Status Code
    res.setHeader("Content-Type", "application/json");
    res.status(status_code ? status_code : 200);

    // Send to client
    res.end(JSON.stringify(result));
}

const getDataWithPaging = (data = [], paging = {page: 1, size: 10}) => {
    let total = data.length,
        page = paging.page || 1,
        size = paging.size || 10

        if(page <= 0) {
            page = 1;
        }
        if(size == -1) {
            size = total;
        }

    let result = data.slice((page - 1) * size, page * size);
	return {
        data: result,
        total,
		page,
		size
	};
}