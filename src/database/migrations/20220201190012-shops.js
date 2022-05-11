module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('shops', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: { model: 'users', key: 'id' },
                allowNull: false,
            },
            fantasy_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            coporate_name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            cnpj: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            telephone: {
                type: Sequelize.STRING,
                allowNull: false,
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
        await queryInterface.dropTable('shops');
    },
};
