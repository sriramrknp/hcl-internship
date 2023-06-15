const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = 4000;
const app = express();


app.use(express.json());

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/gameUsersDB", {useNewUrlParser: true});
}

// Schema
const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String
});

// Model
const GameUser = mongoose.model('GameUser', userSchema);


app.post("/signup", async (req, res) => {
    try {
        const newUser = new GameUser({
            userName: req.body.Username_,
            email: req.body.Email_,
            password: req.body.Password_,
        });
        await newUser.save();
        const resRender = { res: "Signup Success" };
        res.send(resRender);
    }   catch (err) {
            console.log(err);
        }
});

app.post("/login", async (req, res) => {
    const password = req.body.Password_;
    const username = req.body.Username_;

    try {
        const foundUser = await GameUser.findOne({ userName: username });
        if (foundUser) {
          // Compare the encrypted passwords
          if (foundUser.password === password) {
            const resRender = { res: "Login Success" };
            res.send(resRender);
          } else {
            console.log("Incorrect password");
            // Handle incorrect password
            const resRender = { res: "Incorrect password" };
            res.send(resRender);          
          }
        } else {
          console.log("User not found");
          // Handle user not found
          const resRender = { res: "User not found" };
          res.send(resRender);
        }
      } catch (err) {
            console.log(err);
        }
});


app.listen(port, (req, res) => {
	console.log(`Server started on port ${port}`);
});