const express = require('express');
const app = express();
const path = require('path');
const port = 8000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));
app.use('/public', express.static('public'));

app.get('/',(req, res)=>{
    res.render('index');
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})