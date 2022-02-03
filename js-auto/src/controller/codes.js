import db from "../db.js";
export default {
  async index() {
    await db.read();
    return db.data;
  },
  async create() {
    db.data.code.push({
      name: "test",
    });
    await db.write();
  },
};
