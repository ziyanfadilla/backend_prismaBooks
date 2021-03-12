const { PrismaClient } = require ("@prisma/client");
const prisma = new PrismaClient();
const form = require ("../../helpers/form");
const bcrypt = require("bcrypt");
const jwt = require ("jsonwebtoken");

const cekEmail = (dataChek) => {
    return prisma.users
    .findFirst({
        where : {
            OR : [
                {
                    email : dataChek[0]
                },
                {
                    username : dataChek[1]
                },
            ],
        },
    })
    .then((data) =>{
        return data;
    })
    .catch((err) =>{
        return false;
    });
};

module.exports = {
    signUp: (req, res) => {
        const {body} = req;
        const emailUsername = [req.body.email, req.body.username];
        
        if (req.body.password !== req.body.confirm_password) {
            form.formError(res, "password salah", 403);

            
        }else{
            cekEmail(emailUsername).then((data) => {
                if (!data) {
                    const saltRounds = Math.floor(Math.random()* 10) + 1;
                    bcrypt.hash(body.password, saltRounds, (err, hashPassword) => {
                        delete body.confirm_password;
                        const newBody = {
                            ...body,
                            password : hashPassword,
                        };

                        prisma.users
                        .create({
                            data : newBody,
                        })
                        .then((data) => {
                            form.formSuccess(res, data, 200);
                        })
                        .catch((error) => {
                            form.formError(res, error, 500);
                        });
                    });

                    
                }else{
                    form.formError(res, "username dan email sukses", 403);
                }
            });
        }
    },

    signIn: (req,res)=>{
        const {body} = req;
        const emailUsername = [body.email, body.username];
        cekEmail(emailUsername)
        .then((data) => {
            if(!data){
                form.formError(res, "username salah", 404);

            }else{
                const isValid = bcrypt.compareSync(body.password, data.password);
                if (!isValid) {
                    form.formError(res, "password anda salah", 401)
                    
                }else{
                    const payload ={
                        id : data.id,
                        name : data.name,
                        username : data.username,
                        email : data.email
                    };
                    const token = jwt.sign(payload,process.env.SECRET_KEY,{
                        expiresIn : 86400,
                    });

                    delete data.password;

                    const newData = {
                        ...data,
                        token : token,
                    };

                    form.formSuccess(res, newData, 200);
                }
            }
        })

        .catch((err) => {
            console.log(err);
        });
    },
};