// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require("dotenv");
dotenv.config();
const config = [
    {
        name: "default",
        type: "mysql",
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 3306,
        username: process.env.DB_USERNAME || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_DATABASE_1 || "orm_test_1",
        synchronize: true,
        logging: false,
        entities: ["src/entities/db1/**/*.ts"],
        migrations: ["src/migrations/db1/**/*.ts"],
        cli: {
            entitiesDir: "src/entities/db1",
            migrationsDir: "src/migrations/db1",
        },
    },
    {
        name: "database_2",
        type: "mysql",
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 3306,
        username: process.env.DB_USERNAME || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_DATABASE_2 || "orm_test_2",
        synchronize: true,
        logging: false,
        entities: ["src/entities/db2/**/*.ts"],
        migrations: ["src/migrations/db2/**/*.ts"],
        cli: {
            entitiesDir: "src/entities/db2",
            migrationsDir: "src/migrations/db2",
        },
    },
];

module.exports = config;
