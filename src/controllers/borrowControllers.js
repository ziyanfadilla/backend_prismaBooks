const { PrismaClient } = require ('@prisma/client');
const prisma = new PrismaClient();
const form = require ('../helpers/form');

module.exports = {
    getBorrow : (req, res) =>{
        prisma.pinjaman
        .findMany()
        .then((data) =>{
            form.formSuccess(res, data,200);
        })
        .catch((err) =>{
            form.formError(res, err, 500);
        });
    },

    addBorrow : (req, res)=>{
        const { body } = req;
        const newData = {
            ...body,
            awal_pinjaman : new Date (body.awal_pinjaman),
            akhir_pinjaman : new Date (body.akhir_pinjaman),
            id_buku : parseInt(body.id_buku),
            id_user : parseInt(body.id_user)

        };

        prisma.pinjaman
        .create({
            data : newData,
        })
        .then((data) => {
            form.formSuccess(res, data, 200);

        })
        .catch((err) =>{
            form.formError(res, err, 500);
        });
    },

    updateBorrow : (req, res) => {
        const {id} = req.params;
        const {body} = req;
        prisma.pinjaman.update({
            data : body,
            where : {
                id_pinjaman : parseInt(id)
            }

        })
        .then((data) =>{
            form.formSuccess(res, data, 200);
        })
        .catch((err) => {
            form.formError(req, err, 500);
        });
    },
    deleteBorrow:(req, res) => {
        const {id} = req.params;
        prisma.pinjaman.delete({
            where : {
                id_pinjaman : parseInt(id)
            }
        })
        .then((data) =>{
            form.formSuccess(res, data, 200);
            
        })
        .catch((err) =>{
            form.formError(req, err, 500);
        })
    }
};