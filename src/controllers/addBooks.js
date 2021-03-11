const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const form = require("../helpers/form");


module.exports = {
  getBooks: (req, res) =>{
    prisma.buku
    .findMany()
    .then((data) =>{
      form.formSuccess(res, data, 200);
    })
    .catch((err)=>{
      form.formError(res, err, 500);
      console.log("eror wa"+err);
    });

  },
  addBooks: (req, res) => {
    const { body } = req;
    const newData = {
      ...body,
      isbn: parseInt(body.isbn)
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

  updateBooks: (req, res) =>{
    const {id } = req.params;
    const { body } = req;
    // const id_buku = parseInt(body.id_buku);

    prisma.buku
    .update({
      data: {
        ...body,
        isbn: parseInt(body.isbn)
      },
      where : {
        id_buku : parseInt(id),
      },
    })
    .then((data) =>{
      form.formSuccess(res, data, 200);
    })

    .catch((err) => {
      form.formError(res, err,500);
    });
  },

  deleteBooks: (req, res) => {
    const {id} = req.params;
    prisma.buku
    .delete({
      where : {
        id_buku: parseInt(id),
      },

    })
    .then((data) => {
      form.formSuccess(res, data, 200);
    })
    .catch((err)=>{
      form.formError(res, err, 500);
    });
  },


};
