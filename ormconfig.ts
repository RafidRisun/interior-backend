import { Admin } from "src/admin/entities/admin.entity";
import { Client } from "src/client/entities/client.entity";
import { Design } from "src/design/entities/design.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
    type: "postgres",
    database: "interior-app",
    host:  "localhost",
    port: 5432,
    username: 'postgres',
    password: 'admin',
    entities: [Design, Client, Admin],
    synchronize: true,
};

export default config;