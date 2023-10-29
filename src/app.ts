import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import IpInfoController from './controllers/IpInfoController';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, IP Lookup API!');
});

app.get('/lookup/:ipAddress', IpInfoController.lookupAndCache);

app.get('/cache/:ipAddress', IpInfoController.getCachedResult);

app.delete('/cache/:ipAddress', IpInfoController.removeCachedResult);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
