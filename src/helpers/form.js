module.exports = {
    formSuccess : (res, data, status) =>{
        res.status(status).send ({
            msg : 'success',
            status : status,
            data : data
        })
    },
    formError: (res, error, status) => {
        res.status(status).send({
            msg : 'Eror',
            status : status,
            error : error
        })
    }
}