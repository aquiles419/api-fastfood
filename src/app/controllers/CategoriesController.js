import Errors from '../helpers/Errors';
import Categories from '../models/Category';
import Products from '../models/Products';

class CategoriesController {
    async list(req, res) {
        try {
            const response = await Categories.findAll({
                order: [['name', 'ASC']],
            });

            res.json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: 'Error getting Categories List.',
            });
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params;
            const categories = await Categories.findOne({
                where: {
                    id
                }
            });

            if (!categories) throw Errors.CATEGORIES;

            const products = await categories.getProducts({
               order: [['name', 'ASC']]
            });

            categories.setDataValue('products', products);

            res.json(categories);
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error getting Categories.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }

    async create(req, res) {
        try {
            const data = await Categories.create(req.body);

            res.status(201).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error adding Categories.' });
        }
    }

    async update(req, res) {
        try {
            const item = await Categories.update({
                id: req.params.id,
                ...req.body,
            });

            res.json(item);
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error updating Categories.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }

    async remove(req, res) {
        try {
            await Categories.remove(req.params);

            res.json({ message: 'Remove Categories.' });
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error removing Categories.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }
}

export default new CategoriesController();
