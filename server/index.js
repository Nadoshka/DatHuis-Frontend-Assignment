const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());


const path = require('path'); 

app.get('/', (req,res) => {
    fs.readFile(path.join(process.cwd(), 'server/static', 'mockData.json'), (err, json) => {
        if (err) throw (err);
        let names = JSON.parse(json);
        res.status(200).json(names)
})
});

app.post('/filter', (req, res) => {
    const {userInput} = req.body;
    fs.readFile(path.join(process.cwd(), 'server/static', 'mockData.json'), (err, json) => {
        if (err) throw (err);
        let names = JSON.parse(json);
        const filteredNames = names.filter(contact => {
            if (contact.name !== null) {
                return contact.name.toLowerCase().includes(userInput.toLowerCase());
            };
            return false;
        });
        res.status(200).json(filteredNames);
});
});

const PORT = process.env.PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is running at:', PORT )
});