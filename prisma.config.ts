// prisma.config.ts
import { defineConfig } from "prisma/config";
import "dotenv/config";

export default defineConfig({
  schema: "lib/prisma/schema-mysql.prisma",
  migrations: {
    path: "lib/prisma",
    seed: `tsx lib/prisma/seed.ts`,
  },
  datasource: {
    url: process.env.DATABASE_URL as string,
  },
});
