const express = require('express');
const fs = require('fs');
const bodyParser=require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const port = 3001;

app.use('/courses', require('./routers/courseRouter'));

//Get endpoint for image
app.get('/image', (req, res) => {
    const filePath = './image/image_processing.png';
    const image = fs.readFileSync(filePath);
    const extension = path.extname(filePath).substring(1);
    res.setHeader('Content-Type', `image/${extension}`);
    res.status(200).send(image);
  });

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));