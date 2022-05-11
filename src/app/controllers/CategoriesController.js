import Errors from '../helpers/Errors';
import Categories from '../models/Category';

class CategoriesController {
    async list(req, res) {
        try {
            const response = await Categories.findAll(req.query);

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
            const categories = await Categories.findOne(req.params);

            if (!categories) throw Errors.CATEGORIES;

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
