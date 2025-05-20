import Database from "better-sqlite3";

const db = new Database('meals.db');

export async function getMeals() {
    await new Promise((resolve, reject) => { setTimeout(resolve, 2000); });
    return db.prepare('SELECT * FROM meals').all();
}   

