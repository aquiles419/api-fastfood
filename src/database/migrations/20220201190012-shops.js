module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('TB_SHOPS', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: { model: 'TB_USERS', key: 'id' },
                allowNull: false,
            },
            fantasy_name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            corporate_name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            cnpj: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('TB_SHOPS');
    },
};
