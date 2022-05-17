module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            'TB_CATEGORIES',
            [
                {
                    "id": 1,
                    "shops_id": 1,
                    "name": "name",
                    "description": "description",
                    "category_image": "category_image",
                    "created_at": "2022-05-16 03:05:10",
                    "updated_at": "2022-05-16 03:05:10"
                }
            ],
            {},
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete('TB_CATEGORIES', null, {});
    },
};
