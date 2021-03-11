const form = require("./form");
const jwt = require ("jsonwebtoken");


module.exports = {
    chekLogin : (req, res, next) => {
        const bearerToken = req.header(" akses token ");

        if (!bearerToken) {
            form.formError(res, "silakan login");
            
        } else {
            const token  = bearerToken.split(" ")[1];
            try{
                const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
                req.decodedToken = decodedToken;
                next();
            }catch (err){
                form.formError(res, "token tidak sesuai" , 403);
            }
            
        }

    },
};