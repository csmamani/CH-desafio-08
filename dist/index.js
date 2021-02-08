"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var productsHandler_1 = require("./productsHandler");
var app = express_1.default();
var PORT = 1234;
/*Middlewares*/
app.use(express_1.default.json());
var product = new productsHandler_1.productsHandler();
/*Routes*/
app.get('/api/productos', product.getProducts);
app.get('/api/productos/:id', product.getOneProduct);
app.post('/api/productos', product.addProduct);
/*Starting the server*/
app.listen(PORT, function () {
    console.log("Server on port " + PORT);
});
