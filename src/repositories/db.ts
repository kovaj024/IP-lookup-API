import pgPromise from 'pg-promise';

const pgp = pgPromise();
const db = pgp(process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/ip-lookup-db');

export default db;
