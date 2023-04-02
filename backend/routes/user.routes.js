const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
// const swaggerJsdoc = require('swagger-jsdoc');
const { UserModel } = require("../model/user.model");
const userRouter = express();
userRouter.use(express.json());



// const options = {
//     definition: {
//       openapi: '3.0.0',
//       info: {
//         title: 'Node Js NOTES Project',
//         version: '1.0.0',
//       },
//     },
//     apis: ['./src/routes*.js'], // files containing annotations as above
//   };
  
//   const openapiSpecification = swaggerJsdoc(options);
// userRouter.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec));
// user post route or register route
// whenever user is registering we need to save it's password in hased form
// user bcrypt 
userRouter.post("/register", async (req, res) => {
    try {
        const newUser = req.body;
        // console.log(newUser);
        bcrypt.hash(newUser.password, 4, async function (err, hash) {
            newUser.password = hash;// adding hashed pwd to payload
            const user = new UserModel(newUser);
            await user.save();
            res.status(200).send({ msg: "new user added" })
        });
    } catch (err) {
        console.log(err);
        res.status(400).send({ msg: "error in adding new user" })
    }
})

// user login route 
userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        // console.log(user._id);
        if (user) {
            console.log(email, user.password);
            bcrypt.compare(password, user.password, function (err, result) {
                // console.log(result);
                // after successful login we will generate jwt token
                const token = jwt.sign({userId: user._id}, 'masai');
                result ?
                    res.status(200).send({ msg: "user logged in",token:token }) :
                    res.status(400).send({ msg: "Login Failed!" })

            });
        }
        else {
            res.status(400).send({ msg: "User not found" })
        }
        //we have to get hashed password from database 

    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: "Login Failed!" })
    }
})
// delete user

// patch user


module.exports = { userRouter };