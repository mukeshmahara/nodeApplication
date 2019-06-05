const Router = require("express").Router();
const indexControllers = require("../controllers/index.js"); 

Router.get("/",indexControllers.showIndex);

Router.get("/home",indexControllers.dataShow);

Router.get("/form",indexControllers.form);
Router.delete("/form/:id",indexControllers.deleteGoal);

Router.post("/form",indexControllers.formSubmit);


Router.get("/about",indexControllers.about);

Router.get("/signup",indexControllers.signup);

Router.get("/login",indexControllers.login);
// Router.get("/formState",indexControllers.formState);

// Router.post("/formSubmit",indexControllers.formSubmit);

Router.get("/webspeechdemo",indexControllers.webspeechdemo);
Router.get("/portfolio",indexControllers.portfolio);

module.exports=Router;