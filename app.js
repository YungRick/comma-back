let express = require("express");
const cors = require('cors');
let app = express();
let port = 9999;
let testFile = 'files/trips/2016-07-02--11-56-24.json';
let dir = 'files/trips';
app.use(cors());
app.options('*', cors());
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get("/data", (req, res) => {
    var fs = require('fs');
    let arr = [];
    fs.readdir('files/trips/', (err, files) => {
        files.forEach(file => {
            let obj = JSON.parse(fs.readFileSync(`files/trips/${file}`, 'utf8'));
            arr.push(obj);
        });
    })
    console.log(arr, JSON.stringify(arr))
    res.json(JSON.stringify(arr));
});