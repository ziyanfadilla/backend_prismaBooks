const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const form = require('../helpers/form');

module.exports = {
    getUsers: (req, res) => {
        prisma.users.findMany()
            .then((data) => {
                res.send({
                    msg: "success",
                    status: 200,
                    data
                })
            })
            .catch((error) => {
                res.send({
                    msg: "error",
                    status: 500,
                    error
                })
            })
    },
    getUsersid: (req, res) => {
        const id = req.params.id;
        prisma.users
            .findUnique({
                where: {
                    id: parseInt(id)
                }
            })
            .then((data) => {
                res.send({
                    msg: "success",
                    status: 200,
                    data: data
                })
                console.log(data);
            })
            .catch((err) => {
                res.send({
                    msg: "eror",
                    status: 500,
                    err: err
                });
                console.log(err);
            });

    },
    updateUsers: (req, res) => {
        const id = req.params.id;

        const {body} = req
        prisma.users.update({
            data : body,
            where: {
                id: parseInt(id)
            }

        })
            .then((data) => {
                res.send({
                    msg: "success",
                    status: 200,
                    data
                })
                console.log("ini data".data);
            })
            .catch((error) => {
                res.send({
                    msg: "error",
                    status: 500,
                    error
                })
            })
    },

    addUsers: (req, res) => {
        const { body } = req;
        const newData = {
            ...body
        };
        prisma.users.create({
            data: newData,
        })
            .then((data) => {
                form.formSuccess(res, data, 200);
                console.log("ini data" + data);
            })
            .catch((err) => {
                form.formError(res, err, 500);
                console.log("ini eror" + err);
            });
    },

    deleteUsers: (req, res) => {
        const { id } = req.params;
        prisma.users.delete({
            where: {
                id: parseInt(id)
            }
        })
            .then((data) => {
                form.formSuccess(res, data, 200);
            })
            .catch((err) => {
                form.formError(req, err, 500)
            })
    }




};