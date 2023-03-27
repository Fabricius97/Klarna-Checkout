import { getProducts } from "./services/api.js";
import { getProduct } from "./services/api.js";
import express from "express";
const app = express();
import { config } from "dotenv";
config();

app.get('/', async (req, res) => {
    const products = await getProducts();
    console.log(products);
    const markup = products.map((p) => `<a style="display: block; color: black; border: solid 2px black; margin: 20px; padding: 10px; href="/products/${p.id}">${p.title} - ${p.price}
    </a>`).join(' ');
    res.send(markup);
});

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const markup = `<h1>Hello ${id}</h1>`;
    res.send(markup);
});

app.get('/confirmation', async (req, res) => {
    const markup = `<h1>Hello Confirmation</h1>`
    res.send(markup);
})

app.listen(process.env.PORT);