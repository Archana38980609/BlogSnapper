import { defineConfig } from "drizzle-kit";
import { readConfig } from "./src/config";

const config = readConfig();

export default defineConfig({
  schema: "./src/lib/schema.ts",
  out: "./src/lib/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
  url: config.dbUrl,
  },
});


