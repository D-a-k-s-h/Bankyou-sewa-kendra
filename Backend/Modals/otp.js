const mongoose = require('mongoose');
const mailSender = require('../Config/mailSender');
const otpTemplate = require('../mailTemplates/otpTemplate');

const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true
    },
    otp:{
        type: String,
        required: true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:10*60
    }
});

async function sendVerificationEmail(email,otp){
    try{
        const mailResponse = await mailSender(email,"Verification email from Banku Sewa Kendra",otp);
        //console.log("Mail send successfully",mailResponse);
    } catch(error){
        console.log(error.message);
    }
}

otpSchema.pre("send",function(next){
    sendVerificationEmail(this.email,this.otp);
    next();
});

module.exports = new mongoose.model("OTP",otpSchema);