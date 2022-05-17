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
                category_image: Sequelize.STRING
            },
            {
                sequelize,
                tableName: 'TB_CATEGORIES'
            }
        );
    }
    
    static associate(models) {
        this.hasMany(models.Products, {
            foreignKey: 'categories_id'
        });
    }
}

export default Categories;
