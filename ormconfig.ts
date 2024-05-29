import { Design } from "src/design/entities/design.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
    type: "postgres",
    database: "interior-app",
    host:  "localhost",
    port: 5432,
    username: 'postgres',
    password: 'admin',
    entities: [Design],
    synchronize: true,
};

export default config;