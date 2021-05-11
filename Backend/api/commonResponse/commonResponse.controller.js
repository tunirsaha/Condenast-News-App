exports.sendResponse = function (res, status, code, message, data) {
    res.setHeader('Content-Type', 'application/json')
    res.status(code).send({
        status: status,
        code: code,
        message: message,
        data: data
    })
}
