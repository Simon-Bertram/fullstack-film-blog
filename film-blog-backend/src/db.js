import { MongoClient } from 'mongodb';

let db;

async function connectToDb(callback) {
  try {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();
    db = client.db('film-blog-db');
    callback();
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
}

export {
  db,
  connectToDb,
};