const { PrismaClient } = require("@prisma/client");
const express = require("express");
const prisma = new PrismaClient();

module.exports = {
  getBooks: (req, res) =>{
    const{ body } = req;
    prisma.books
    .findMany()
    .then((data) =>{
    FormData.formSucces(res, data, 200);
    })
    .catch((err)=>{
      form.formError(res, err, 500);
    });

  },
  addBooks: (req, res) => {
    const { body } = req;
    const newData = {
      ...body,
      isbn: Number(body.isbn),
      // foto: Number(body.foto),
    };
    
    prisma.buku
      .create({
        data: newData,
      })
      .then((data) => {
        res.send({
          msg: "succes",
          status: 200,
          data: data,
        });
        console.log(data);
      })

      .catch((err) => {
        req.send({
          msg: "eror",
          status: 500,
        });
        console.log(err);
      });
  },
  

};
