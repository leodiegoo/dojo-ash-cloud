module.exports = function () {
    return function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, HEAD, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization, Content-Type, Accept, application/json, multipart/form-data, application/x-www-form-urlencoded, storage,text/plain, idaplicacao, iddataflow, params,Text, dados, files, Referer, x-access-token');
        next();
    };
};
