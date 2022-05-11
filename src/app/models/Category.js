import Sequelize, { Model } from 'sequelize';

class Categories extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                shops_id: {
                    type: Sequelize.INTEGER,
                    references: { model: 'shops', key: 'id' },
                },
                name: Sequelize.STRING,
                description: Sequelize.STRING,
                category_image: Sequelize.STRING,
                created_at: Sequelize.DATE,
                updated_at: Sequelize.DATE,
            },
            {
                sequelize,
                tableName: 'categories',
                timestamps: false,
                underscored: false,
            }
        );
    }
}

export default Categories;
