import toast from "react-hot-toast";
import { otpEndpoint } from "../apis";
import { apiConnector } from "../apiConnector";

const {
    SENDOTP_API,
    VERIFY_OTP_API
} = otpEndpoint;

export function sendOtp(email){
    return async() => {
        const toastId = toast.loading("Loading...");
        try{
            const response = await apiConnector("POST",SENDOTP_API,{email});

            if(!response.data.success){
                throw new Error(response.data.message);
            }

            console.log("SENDOTP_API RESPONSE -> ",response)

            toast.success(`OTP sent to ${email}`);

        } catch(error){
            toast.error("OTP could not be sent");
            console.log(error.message);
        }
        toast.dismiss(toastId);
    }
}

export function verifyOtp(email, otp,navigate){
    return async() => {
        const toastId = toast.loading("Loading...");
        try{
            const response = await apiConnector(
                "POST",
                VERIFY_OTP_API,
                {email, otp}
            );

            if(!response.data.success){
                throw new Error(response.data.message);
            }

            console.log("VERIFY_OTP_API RESPONSE -> ",response)

            toast.success("OTP verified successfully");
            navigate('/');

        } catch(error){
            toast.error("OTP verification failed");
            console.log(error.message);
        }
        toast.dismiss(toastId);
    }
}