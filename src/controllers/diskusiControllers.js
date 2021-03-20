const { PrismaClient } = require('@prisma/client');
const form = require('../helpers/form');
const prisma = new PrismaClient();

module.exports = {
    addDiskusi : (req, res) => {
        const {body} = req;
        const newData = {
            ...body,
            buku : parseInt(body.buku),
            users : parseInt(body.users)
        };

        prisma.diskusi.create ({
            data : newData,
        })
        .then((data) =>{
            form.formSuccess(res, data, 200);
        })
        .catch((err) =>{
            form.formError(res, err, 500);
        });
    },

    getDiskusi : (req, res) => {
        prisma.diskusi.findMany()
        .then((data) =>{
            form.formSuccess(res, data, 200);
        })
        .catch((err) => {
            form.formError(res, err, 500);
        });
    },

    updateDiskusi : (req, res) => {
        const {id} = req.params;
        const {body} = req;
        prisma.diskusi.update({
            data : body,
            where : {
                id_diskusi : parseInt(id)
            }
        })
        .then((data) => {
            form.formSuccess(res, data, 200);
        })
        .catch((err) =>{
            form.formError(res, err, 500);
        });
    },

    deleteDiskusi : (req, res) => {
        const {id} = req.params;

        prisma.diskusi.delete({
            where : {
                id_diskusi : parseInt(id)
            }
        })
        .then((data) => {
            form.formSuccess(res, data, 200);
        })
        .catch((err) =>{
            form.formError(res, err, 500);
        })
    }
};