import { Request, Response } from 'express';

interface Producto {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

class productsHandler {
  productos: Producto[];

  constructor() {
    this.productos = [];
  }

  getProducts = (req: Request, res: Response) => {
    if (!this.productos || !this.productos.length) {
      res.json({ error: 'No hay productos cargados' });
    } else {
      res.json(this.productos);
    }
  };

  getOneProduct = (req: Request, res: Response) => {
    const id = req.params.id;

    const producto = this.productos.find((prod) => prod.id === parseInt(id));

    res.json(producto);
  };

  addProduct = (req: Request, res: Response) => {
    const { title, price, thumbnail } = req.body;

    const newProduct: Producto = {
      id: this.productos.length + 1,
      title,
      price,
      thumbnail,
    };

    this.productos = [...this.productos, newProduct];

    res.sendStatus(201);
  };
}

export { productsHandler };
