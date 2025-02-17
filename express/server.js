const express=require('express')





const app=express()

app.use(function(req,res,next){
const date=new Date()
if(date.getDay()>5|| date.getHours()>17|| date.getHours()<9){
return res.send("come back later")
}
next()

})
app.use(express.static(__dirname+"/public"))
app.get('/',function(req,res){
    res.render('home.ejs')
})

app.get('/ourservices',function(req,res){
    res.render('ourservices.ejs')
})

app.get('/contactus',function(req,res){
    res.render('contactus.ejs')
})



app.listen(5000,function(){
    console.log("server running")  
}) 