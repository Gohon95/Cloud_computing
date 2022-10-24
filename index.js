const port = process.env.PORT || 8080;

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://cloud:TOXPnmbaifRtU1lD@cluster0.9az5r4u.mongodb.net/produit"
);

const express = require("express");
const { Produit } = require("./Produit");

const app = express();
app.use(express.json());

app.post("/produit", async (req, res) => {
  const produit = new Produit({
    name: req.body.name,
    prix: req.body.prix,
    stock: req.body.stock,
  });
  try {
    
    const newproduit = await produit.save();
    res.status(201).json(newproduit)
}
catch (error) {
    res.status(400).json({message: error.message})
}

  const app = express();

  app.post("/produit", (req, res) => {
    res.status(201).json(produit);
  });
});

app.listen(8080, () => {
  console.log("hello");
});
