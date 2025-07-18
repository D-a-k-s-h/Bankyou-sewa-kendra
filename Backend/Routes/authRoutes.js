const express = require('express');
const { sendOtp, verifyOTP } = require('../Controller/Auth');
const router = express.Router();

router.post('/sendotp',sendOtp);
router.post('/verifyotp', verifyOTP);

module.exports = router;