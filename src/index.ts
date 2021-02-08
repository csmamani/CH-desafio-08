import express, { Application, Request, Response } from 'express';
import { productsHandler } from './productsHandler';

const app: Application = express();

const PORT = 1234;

/*Middlewares*/
app.use(express.json());

const product = new productsHandler();

/*Routes*/
app.get('/api/productos', product.getProducts);

app.get('/api/productos/:id', product.getOneProduct);

app.post('/api/productos', product.addProduct);

/*Starting the server*/
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
