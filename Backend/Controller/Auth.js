const otpGenerate = require('otp-generator');
const OTP = require('../Modals/otp');
const mailSender = require('../Config/mailSender');
const otpTemplate = require('../mailTemplates/otpTemplate');

exports.sendOtp = async(req,res) => {
    try{
        const {email} = req.body;

        if(!email){
            return res.status(404).json({
                success:false,
                message:"Please provide email"
            })
        }

        var otp = otpGenerate.generate(6,{
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false
        });

        let result = await OTP.findOne({otp:otp});

        while(result){
            otp = otpGenerate.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false
            });
            result = await OTP.findOne({otp:otp});
        }

        const otpPayload = {email,otp};
        await OTP.create(otpPayload);

        mailSender(email,"OTP from Banku Sewa Kendra",otpTemplate(otp));

        return res.status(200).json({
            success:true,
            message:"OTP Generated Successfully",
            otp
        });

    } catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Can't Generate OTP"
        })
    }
}

exports.verifyOTP = async(req,res) => {
    try{
        const {email,otp} = req.body;

        if(!otp){
           return res.json(404).json({
                success:false,
                message:"Please enter valid otp"
            }) 
        }

        const recentOtp = await OTP.find({email}).sort({createdAt:-1}).limit(1);

        if(recentOtp.length == 0){
            return res.status(400).json({
                success:false,
                message:"Regenerate OTP please"
            })
        }
        else if(recentOtp[0].otp !== otp){
            return res.status(400).json({
                success:false,
                message:"OTP doesn't match,please re-enter otp"
            })
        }

        return res.status(200).json({
            success:true,
            message:"Login successful"
        });

    } catch(error){
        return res.json(500).json({
            success:false,
            message:error.message
        })
    }
}