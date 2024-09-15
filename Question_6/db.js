const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ass2question6')
.then(()=>{
    console.log('MongoDB Connected Successfully');
})
.catch((err)=>{
    console.log(`Error : ${err}`);
})

module.exports = mongoose;