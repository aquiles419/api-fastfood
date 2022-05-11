import Errors from '../helpers/Errors';
import Shops from '../models/Shops';

class ShopsController {
    async list(req, res) {
        try {
            const response = await Shops.findAll(req.query);

            res.json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: 'Error getting Shops List.',
            });
        }
    }

    async getOne(req, res) {
        try {
            const shops = await Shops.findOne(req.params);

            if (!shops) throw Errors.SHOPS;

            res.json(shops);
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error getting Shops.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }

    async create(req, res) {
        try {
            const data = await Shops.create(req.body);

            res.status(201).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error adding Shops.' });
        }
    }

    async update(req, res) {
        try {
            const item = await Shops.update({
                id: req.params.id,
                ...req.body,
            });

            res.json(item);
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error updating Shops.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }

    async remove(req, res) {
        try {
            await Shops.remove(req.params);

            res.json({ message: 'Remove Shops.' });
        } catch (error) {
            console.error(error);
            const errorMessage = error.code
                ? error.message
                : 'Error removing Shops.';
            res.status(error.status || 500).json({ error: errorMessage });
        }
    }
}

export default new ShopsController();
