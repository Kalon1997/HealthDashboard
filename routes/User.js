const { registerUser, login, logout, myProfile} = require('../controller/User');
const express = require('express');
const { isAuthedUser } = require('../middleware/Auth')
const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(login);
router.route('/logout').get(isAuthedUser, logout);
router.route('/myProfile').get(isAuthedUser, myProfile);
// router.route("/forgot/password").post(forgotPassword);
// router.route("/password/reset/:token").put(resetPassword);