const express = require('express');
const app = express();
const fs = require('fs');
// const cors = require('cors');

// app.use(cors());

const path = require('path'); 

app.get('/', (req,res) => {
    fs.readFile(path.join(process.cwd(), 'server/static', 'mockData.json'), (err, json) => {
        if (err) throw (err);
        let names = JSON.parse(json);
        res.status(200).json(names)
})

});
const PORT = process.env.PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is running at:', PORT )
});