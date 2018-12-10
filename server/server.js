const express = require('express')
const mongoose = require('mongoose')
//连接mongo  并且使用imooc集合
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})
//类似于mysql的表  mongo有文档、字段的概念
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))
//新增数据
// User.create({
//     user:'xiaohua',
//     age:10
// },function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })


//新建app

// User.remove({age:18},function(err,doc){ 
//     console.log(doc)
// })
// User.update({'user':'xiaoming'},{'$set':{age:26}},function(err,doc){
//     console.log(doc)
// })
const app = express()

app.get('/',function(req,res){ //路径 请求、响应
    res.send('<h1>Hello world</h1>')
})
app.get('/data',function(req,res){
    // User.find({},function(err,doc){
    //     res.json(doc)
    // })
    // User.find({user:'xiaoming'},function(err,doc){
    //     res.json(doc)
    // })
    User.findOne({user:'xiaoming'},function(err,doc){
        res.json(doc)
    })
    // res.json({name:'dongtao react app11',type:'IT'})
})

app.listen(9093,function(){
    console.log('node app start at port 9093')
})