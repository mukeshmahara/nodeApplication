const Router = require("express").Router();
const indexControllers = require("../controllers/index.js"); 

Router.get("/",indexControllers.showIndex);

Router.get("/home",indexControllers.dataShow);

Router.get("/form",indexControllers.form);
Router.delete("/form/:id",indexControllers.deleteGoal);

Router.post("/form",indexControllers.formSubmit);


Router.get("/about",indexControllers.about);

// Router.get("/formState",indexControllers.formState);

// Router.post("/formSubmit",indexControllers.formSubmit);

module.exports=Router;