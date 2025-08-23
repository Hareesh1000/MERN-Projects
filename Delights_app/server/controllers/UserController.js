const User = require("../models/users");


async function createUser(req, res) {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}


// async function getUsers(req, res) {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// }


async function getUserById(req, res) {
  try {
    const user = await User.findOne({ user_id: req.params.id });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function authenticateUser(req,res) {
    try{
        console.log(req.body)
        const email = req.body.email

        const user = await User.findOne({mail_id:email, active:true})

        console.log(`user data is `,user)

        if(user){
           console.log(`user is available`)
             res.status(200).json(
                {           ////User details are not available from response.....
                    "user":user.user_name, "request":"Success",
                        "id":user.user_id,"authenticate":true
                })
        }

        else{
           console.log(`user is  not available`)
             res.status(200).json(
                {
                     "request":"Success",
                    "authenticate":false
                })
        }

    }
    catch(err){
         res.status(500).json({ error: err.message });
    }
}


module.exports = {createUser,getUserById,authenticateUser};
