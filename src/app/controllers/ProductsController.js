import Errors from '../helpers/Errors';
import Products from '../models/Products';

class ProductsController {
    async list(req, res) {
        try {
            const response = await Products.findAll(req.query);

            res.json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: 'Error getting Products List.',
            });
        }
    }

    async getOne(req, res) {
        try {
            const products = await Products.findOne(req.params);

            if (!products) throw Errors.PRODUCTS;

            res.json(products);
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error getting Products.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }

    async create(req, res) {
        try {
            const data = await Products.create(req.body);

            res.status(201).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error adding Products.' });
        }
    }

    async update(req, res) {
        try {
            const item = await Products.update({
                id: req.params.id,
                ...req.body,
            });

            res.json(item);
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error updating Products.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }

    async remove(req, res) {
        try {
            await Products.remove(req.params);

            res.json({ message: 'Remove Products.' });
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error removing Products.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }
}

export default new ProductsController();
