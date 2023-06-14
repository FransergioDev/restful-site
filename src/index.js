const express = require("express");
const axios = require("axios");
const app = express();

const apiUrl = "http://localhost:3000/api/v1/products";

app.set("view engine", "ejs");
app.set("views", "./src/views");

// Cria middware para link-rotas da pasta public
app.use(express.static("public"));

app.get("/products", (req, res) => {
  axios({ method: "get", url: apiUrl })
    .then((result) => {
      const products = result.data.data;
      //console.log("products", products);
      res.render("products", { products });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(3001, () => {
  console.log("Servidor inicilizado na porta 3001");
});
