const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
    {
        type: { type: String},
        city: { type: String},
        state: { type: String}
    }, { _id: false });

const loginStatusSchema = new mongoose.Schema({
    login_type: { type: String},
    logged_in: { type: Boolean, default: false }
}, { _id: false });

const userSchema = new mongoose.Schema({
    user_id: { type: Number  },
    user_name: { type: String},
    mail_id: { type: String  },
    active: { type: Boolean, default: true },
    password: { type: String},
    address: [addressSchema],
    login_status: [loginStatusSchema],
    
},
{ timestamps: true});

const User = mongoose.model("User", userSchema);

module.exports = User;
