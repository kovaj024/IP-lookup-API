const fs = require('fs');
const path = require('path');
require('dotenv').config();

const dbConfig = {
    development: {
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        host: process.env.DATABASE_HOST,
        dialect: process.env.DATABASE_DIALECT,
    },
};

const configFolderPath = path.join(__dirname, 'config');
const configFilePath = path.join(configFolderPath, 'config.json');

if (!fs.existsSync(configFolderPath)) {
    fs.mkdirSync(configFolderPath);
}

const jsonConfig = JSON.stringify(dbConfig, null, 2);

fs.writeFileSync(configFilePath, jsonConfig);

console.log('JSON configuration file created: config/config.json');
