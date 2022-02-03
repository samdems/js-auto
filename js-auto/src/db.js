import { join, dirname } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const file = join(__dirname, "../db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);

const main = async () => {
  await db.read();
  db.data = db.data || {};
  db.data.code = db.data.code || [];
  await db.write();
};
main();
export default db;
