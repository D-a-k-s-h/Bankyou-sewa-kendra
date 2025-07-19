const BASE_URL = "https://bankyou-sewa-kendra-backend.onrender.com/api/v1";

export const otpEndpoint = {
    SENDOTP_API: BASE_URL + '/auth/sendotp',
    VERIFY_OTP_API: BASE_URL + '/auth/verifyotp',
}