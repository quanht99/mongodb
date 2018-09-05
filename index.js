const app = require('./app');
const http = require('http');
const mongoose = require('mongoose');

http.createServer(app);

app.listen(3006, function (err) {
    if (err) {
        res.json({
            message: err.message
        });
    }
    mongoose.connect('mongodb://localhost:27017/test_db', { useNewUrlParser: true }, function (err) {

        if (err) throw err;

        console.log('Đã Kết Nối');

    });
    console.log('Server running');
})

