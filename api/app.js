require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const md5 = require("md5");

const port = 4000;
const app = express();


app.use(express.json());

main().catch(err => console.log(err));

async function main() {
    const uri = process.env.MONGO_CONNECT_URI;
    await mongoose.connect(uri, { useNewUrlParser: true });
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
            password: md5(req.body.Password_),
        });
        await newUser.save();
        const resRender = { res: "Signup Success" };
        res.send(resRender);
    }   catch (err) {
            console.log(err);
        }
});

app.post('/login', async (req, res) => {
    const password = md5(req.body.Password_);
    const username = req.body.Username_;
  
    try {
      const foundUser = await GameUser.findOne({ userName: username });
      if (foundUser) {
        // Compare the encrypted passwords
        if (foundUser.password === password) {
            const resRender = { res: "Login Success" };
            res.send(resRender);
        } else {
          console.log('Incorrect password');
          res.status(401).json({ error: 'Incorrect password' });
        }
      } else {
        console.log('User not found');
        res.status(404).json({ error: 'User not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  

app.listen(port, (req, res) => {
	console.log(`Server started on port ${port}`);
});