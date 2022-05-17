module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            'TB_USERS',
            [
                {
                    "id": 1,
                    "name": "User",
                    "email": "mail@mail.com",
                    "password_hash": "$2a$08$BUu7zgKmf58jBNjtUOJGze.WaMyNkqN75zFLiW6BdTb2MN6yvgTUC",
                    "created_at": "2022-05-16 03:05:10",
                    "updated_at": "2022-05-16 03:05:10"
                }
            ],
            {},
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete('TB_USERS', null, {});
    },
};
