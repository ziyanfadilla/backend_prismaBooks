const { PrismaClient } = require ("@prisma/client");
const prisma = new PrismaClient();
const form = require("../helpers/form");

module.exports = {
    getCategory: (req, res) => {
        
        prisma.kategori
        .findMany()
        .then((data) =>{
            form.formSuccess(res, data, 200)
        })
        .catch((err) =>{
            form.formError(res, err, 500);
        });
    },
    
    postCategory: (req, res) => {
        const {body} = req;
        const newData = {
            ...body
        };
        prisma.kategori
        .create({
            data : newData,
        })
        .then((data) =>{
            form.formSuccess(res, data, 200);
        })
        .catch((err) =>{
            form.formError(res, err, 500);
        });
    },

    updateCategory : (req, res) => {
        const {id} = req.params;
        const {body} = req;
        prisma.kategori
        .update({
            data : body,
            where : {
                id_kategori : parseInt(id)
            }
        })
        .then((data)=> {
            form.formSuccess(res,data, 200);
        })
        .catch((err) =>{
            form.formError(res, err, 500);
        });

    },
    deleteCategory: (req, res) => {
        const {id} = req.params;
        prisma.kategori.delete({
            where: {
                id_kategori: parseInt(id)
            }
        })
        .then((data) =>{
            form.formSuccess(res, data, 200);
        })
        .catch((err) =>{
            form.formError(req,err, 500);
        })
    }

};