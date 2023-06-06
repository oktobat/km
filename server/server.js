// import express from 'express'; 오류남
const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('build'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/api/customers', (req, res)=>{
    res.send([
        {'id':1, 'image':'https://placeimg.com/64/64/1', 'name':'나동빈', 'birthday':'961222', 'gender':'남', 'job':'대학생'},
        {'id':2, 'image':'https://placeimg.com/64/64/2', 'name':'홍길동', 'birthday':'961222', 'gender':'남', 'job':'대학생'},
        {'id':3, 'image':'https://placeimg.com/64/64/3', 'name':'임삼빈', 'birthday':'961222', 'gender':'남', 'job':'대학생'}
    ]);
})

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/build/index.html')
})


app.listen(port, ()=>console.log(`Listening on port ${port}`))