import Sequelize, { Model } from 'sequelize';

class Products extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                categories_id: {
                    type: Sequelize.INTEGER,
                    references: { model: 'categories', key: 'id' },
                },
                name: Sequelize.STRING,
                description: Sequelize.STRING,
                price: Sequelize.STRING,
                image_product: Sequelize.STRING,
                created_at: Sequelize.DATE,
                updated_at: Sequelize.DATE,
            },
            {
                sequelize,
                tableName: 'products',
                timestamps: false,
                underscored: false,
            }
        );
    }
}

export default Products;
