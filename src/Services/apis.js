const BASE_URL = "http://localhost:4000/api/v1"

export const otpEndpoint = {
    SENDOTP_API: BASE_URL + '/auth/sendotp',
    VERIFY_OTP_API: BASE_URL + '/auth/verifyotp',
}