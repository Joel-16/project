const ssl = {
  rejectUnauthorized: false
}

module.exports =
{
  type: 'postgres',
  url: process.env.DATABASE_URL || "postgres://postgres:5432@localhost:5432/tely",
  entities: ["dist/**/entities/*.entity{.ts,.js}"],
  migrations: ["dist/migration/*.js"],
  synchronize: true,
  autoLoadEntities: true,
  cli: {
    migrationsDir: "src/migration"
  },
  ssl: process.env.NODE_ENV === "production" && ssl,
}



