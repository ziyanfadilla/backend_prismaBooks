const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const form = require('../helpers/form');

module.exports = {
    getRating : (req, res) => {
        prisma.rating
        .findMany()
        .then((data) => {
            form.formSuccess(res, data, 200)
        })
        .catch((err) =>{
            form.formError(res, err, 500)
        });
    },

    addRating : (req, res) => {
        const {body} = req;
        const newData = {
            ...body,
            rating: parseInt(body.rating),
            buku : parseInt(body.buku)
        };

        prisma.rating
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

    updateRating : (req, res) =>{
        const {id} = req.params;
        const {body} = req;

        prisma.rating
        .update({
            data : {
                ...body,
                rating : parseInt(body.rating),
                buku : parseInt(body.buku)
            },
            where : {
                id_rating : parseInt(id),
            },
          
        })
        .then((data) => {
            form.formSuccess(res,data, 200);
        })
        .catch((err) =>{
            form.formError(res, err, 500);
        });
    },

    deleteRating : (req, res) =>{
        const {id} = req.params;
        prisma.rating.delete({
            where : {
                id_rating : parseInt(id)
            }
        })
        .then((data) => {
            form.formSuccess(res, data, 200);
        })
        .catch((err) => {
            form.formError(res, err, 500)
        })
    }
};