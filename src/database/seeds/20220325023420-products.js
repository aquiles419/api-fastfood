module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            'TB_PRODUCTS',
            [
                {
                    "id": 1,
                    "categories_id": 1,
                    "name": "name 2",
                    "description": "description 2",
                    "price": "category_image 2",
                    "image_product": "image_product 2",
                    "created_at": "2022-05-16 03:05:10",
                    "updated_at": "2022-05-16 03:05:10"
                },
                {
                    "id": 2,
                    "categories_id": 1,
                    "name": "name 1",
                    "description": "description 1",
                    "price": "category_image 1",
                    "image_product": "image_product 1",
                    "created_at": "2022-05-16 03:05:10",
                    "updated_at": "2022-05-16 03:05:10"
                }
            ],
            {},
        );
    },

    async down(queryInterface) {
        queryInterface.bulkDelete('TB_PRODUCTS', null, {});
    },
};
