import Sequelize, { Model } from 'sequelize';

class Shops extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                user_id: {
                    type: Sequelize.INTEGER,
                    references: { model: 'users', key: 'id' },
                },
                fantasy_name: Sequelize.STRING,
                coporate_name: Sequelize.STRING,
                cnpj: Sequelize.STRING,
                email: Sequelize.STRING,
                telephone: Sequelize.STRING,
                created_at: Sequelize.DATE,
                updated_at: Sequelize.DATE,

            },
            {
                sequelize,
                tableName: 'shops',
                timestamps: false,
                underscored: false,
            }
        );
    }
}

export default Shops;
