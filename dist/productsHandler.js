"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsHandler = void 0;
var productsHandler = /** @class */ (function () {
    function productsHandler() {
        var _this = this;
        this.getProducts = function (req, res) {
            if (!_this.productos || !_this.productos.length) {
                res.status(400).json({ error: 'No hay productos cargados' });
            }
            res.json(_this.productos);
        };
        this.getOneProduct = function (req, res) {
            var id = req.params.id;
            var producto = _this.productos.find(function (prod) { return prod.id === parseInt(id); });
            if (!producto) {
                res.status(404).json({ error: 'Producto no encontrado' });
            }
            res.json(producto);
        };
        this.addProduct = function (req, res) {
            var _a = req.body, title = _a.title, price = _a.price, thumbnail = _a.thumbnail;
            var newProduct = {
                id: _this.productos.length + 1,
                title: title,
                price: price,
                thumbnail: thumbnail,
            };
            _this.productos = __spreadArrays(_this.productos, [newProduct]);
            res.status(201).json({ 'Producto creado': newProduct });
        };
        this.productos = [];
    }
    return productsHandler;
}());
exports.productsHandler = productsHandler;
