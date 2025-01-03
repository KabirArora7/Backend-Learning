import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
const port = 3000;


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
  });



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});