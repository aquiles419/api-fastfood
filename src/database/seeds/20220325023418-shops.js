module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            'TB_SHOPS',
            [
                {
                    "id": 1,
                    "user_id": 1,
                    "fantasy_name": "fantasy_name",
                    "corporate_name": "corporate_name",
                    "cnpj": "cnpj",
                    "email": "email",
                    "phone": "phone",
                    "created_at": "2022-05-16 03:05:10",
                    "updated_at": "2022-05-16 03:05:10"
                }
            ],
            {},
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete('TB_SHOPS', null, {});
    },
};
