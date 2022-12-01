const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const url = 'mongodb://localhost/Articles'

const app = express();

mongoose.connect(url, {useNewUrlParser: true});
const con = mongoose.connection;

con.on('open', function() {
    console.log('connected...')
})


var corsOptions = {
    origin: '*',
}
app.use(express.json())
app.use(cors(corsOptions))

const articleRouter = require('./routers/articles')
app.use('/articles', articleRouter);

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// app.set({
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*", 
//     "Access-Control-Allow-Credentials" : true
// })

app.listen(9000, () => {
    console.log('Server started')
})