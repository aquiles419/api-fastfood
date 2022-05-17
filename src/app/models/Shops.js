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
                corporate_name: Sequelize.STRING,
                cnpj: Sequelize.STRING,
                email: Sequelize.STRING,
                phone: Sequelize.STRING
            },
            {
                sequelize,
                tableName: 'TB_SHOPS'
            }
        );
    }
}

export default Shops;
