// let names= [];

const Goal=require("../models/Goal")


exports.dataShow=(req,res)=>{

    res.render("index.ejs",{name:"Mukesh Mahara"});
    
}

exports.form=(req,res)=>{
    res.render("form.ejs");
}
exports.showIndex=async(req,res)=>{
    const goals= await Goal.find({});
    console.log(goals);
    res.render("index.ejs",{name:"lol",goals:goals})
}

// exports.formState=(req,res)=>{
//     res.render("formState.ejs");
// }
exports.formSubmit=(req,res)=>{
    
let title = req.body.title;
if(title===undefined||title===""){
    res.send("You entered nothng")
}

const goal= new Goal({
    title:title //or title
});
goal.save();
res.redirect("/");
    
}
exports.deleteGoal=async(req,res)=>{
    await Goal.remove({_id:req.params.id});
    res.redirect('/');
}

exports.about=(req,res)=>{
    
    res.send("Its mukesh mahara");
}

exports.signup=(req,res)=>{

    // res.send("This is the user signup page Comming soon!!");
    res.render("signup.ejs");
    // res.redirect('/signup');
}

exports.login=(req,res)=>{
    res.render("login.ejs");
}

exports.webspeechdemo=(req,res)=>{
    res.render("webspeechdemo.ejs");
}