const User = require("../models/users");


async function createUser(req, res) {
  try {

      const ids = await User.find({},{user_id:1,_id:0}).sort({user_id:-1}).limit(1);
      const user_id = ids[0].user_id+1;
        const { user_name, mail_id, password, address } = req.body;

        const newUser = new User({
      user_id,
      user_name,
      mail_id,
      password,
      address
    });

    // console.log(`id is `,newId)
    // console.log(req.body)
    const user = new User(newUser);

    await user.save();
    res.status(201).json( {         
                    "request":"Success",
                        "authenticate":true, "user":user
                });
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

        const user = await User.findOne({mail_id:email, active:true},
                {user_name:1,address:1,profile_pic:1}
        );


        console.log(`user data is `,user)

        if(user){
           console.log(`user is available`)
             res.status(200).json(
                {         
                    "request":"Success",
                        "authenticate":true, "user":user
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
