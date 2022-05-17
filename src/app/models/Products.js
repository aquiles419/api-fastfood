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
                    // references: { model: 'categories', key: 'id' },
                },
                name: Sequelize.STRING,
                description: Sequelize.STRING,
                price: Sequelize.STRING,
                image_product: Sequelize.STRING
            },
            {
                sequelize,
                tableName: 'TB_PRODUCTS'
            }
        );
    }
}

export default Products;
