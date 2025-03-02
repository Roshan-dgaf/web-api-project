const dotenv = require("dotenv")
const express = require("express");
const cors = require("cors");
const ConnectDB = require("./db/conn")

dotenv.config()

//databse config
ConnectDB()
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json("server start");
});

// user routes
const userAuthRoutes = require("./routes/users/userAuthroutes");
app.use("/userauth/api", userAuthRoutes);


// recipe routes
const reciperoutes = require("./routes/recipes/recipeAuthRoutes");
app.use("/recipe/api", reciperoutes);

// review routes
const reviewroutes = require("./routes/reviews/reviewAuthRoutes");
app.use("/review/api", reviewroutes);

// server starttt
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server start at port no :http://localhost:${PORT}`)
})
