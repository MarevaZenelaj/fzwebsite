const express = require('express');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));

const server = app.listen(7000, ()=>{
    console.log(`Express running -> PORT ${server.address().port}`);
})

app.get('/', (req, res)=>{
    res.render('index', {
        title: 'Homepage'
      });
})