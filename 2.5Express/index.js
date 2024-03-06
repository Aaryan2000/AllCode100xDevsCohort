// res.send() is for sending text
//res.json() is for sending JSON

const express=require("express");
const app=express()//Eg Creating a Clinic 

// function sum(n){
//     let ans=0;
//     for(let i=1;i<=n;i++){
//         ans=ans+i;
//     }
//     return ans;
// }
// app.get('/',function(req,res){//function(req,res) is callback function
//     const n=req.query.n;
//     const ans=sum(n);
//     res.send("Hi There ans is  " + ans);
// });
//For executing first run the server here then in chrome write localhost:3000/?n=5



//Project:Hospital using in memory DB means kepting all data in the RAM


var users=[{
    name:'John',
    Kidneys:[{    
        healthy:false
    },
    {healthy:true}]
}];

 //get:you can see how many kidney they have and there health
 app.get("/",function(req,res){
    const johnKidneys=users[0].Kidneys;
    const numberOfKidneys=johnKidneys.length;
    let numberOfHealthyKidneys=0;
    for(let i=0;i<numberOfKidneys;i++)
    {
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys=numberOfHealthyKidneys+1;
        }
    }
    const numberOfUnHealthyKidneys=numberOfKidneys-numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,numberOfHealthyKidneys,numberOfUnHealthyKidneys
    })
})

// post:For updation of Kidneys here i am increasing kidneys either healthy or unhealthy

 app.use(express.json());//writing these line only then it will catch the body that postman will sends you in 'post'.  express.json() is a middleware
                         //In every route it will be used
app.post("/",function(req,res){
const isHealthy=req.body.isHealthy;//by writing app.use(express.json()); body gets extracted inside app.post
users[0].Kidneys.push({
    healthy:isHealthy
})
res.json({
    msg:"Done!"
})
})



//put:user can replace a unhealthy kidney with healthy kidney
app.put("/",function(req,res){
    for(let i=0;i<users[0].Kidneys.length;i++){
        users[0].Kidneys[i].healthy=true;
    }
    res.json({})
})


// //Delete:user can remove all the unhealthy kidneys
app.delete("/",function(req,res){
    if(isThereAtleastOneUnhealthyKidney()){
        const newKidneys=[];
    for(let i=0;i<users[0].Kidneys.length;i++){
        if(users[0].Kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].Kidneys=newKidneys;
    res.json({msg:"Done"})
    }
    else{
        res.status(411).json({
            msg:"You have no Bad Kidney"
        })
    }
})

function isThereAtleastOneUnhealthyKidney(){
    let atLeastOneUnhealthyKidney=false;
    for(let i=0;i<users[0].Kidneys.length;i++){
        if(!users[0].Kidneys[i].healthy){
            atLeastOneUnhealthyKidney=true;
        }
    }
    return atLeastOneUnhealthyKidney;
}


app.listen(3000);//Listening on a specific port
