const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('../config/nodemailer');
require('dotenv').config();

// Register user and send verification email
exports.registerUser = async (req, res) => {
  const { name, gender, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new User({ name, gender, email, password: bcrypt.hashSync(password, 10) });

    await user.save();

    // Send verification email
    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    //const verificationLink = `${process.env.CLIENT_URL}/verify-email?token=${token}`;
    //nodemailer.sendEmail(email, 'Verify your email', `Click the link to verify: ${verificationLink}`);

    //res.json({ msg: 'User registered, please verify your email.' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("Email:",email,"\nPassword:", password);
  
  try {

    const user = await User.findOne({ email });
    if (!user || !bcrypt.compareSync(password, user.password)) {

      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    if (!user.isVerified) {
      return res.status(400).json({ msg: 'Please verify your email' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Verify email
exports.verifyEmail = async (req, res) => {
  const { token } = req.query;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) return res.status(400).json({ msg: 'Invalid token' });

    user.isVerified = true;
    await user.save();

    res.json({ msg: 'Email verified' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'User not found' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' });
    user.resetPasswordToken = token;
    user.resetPasswordExpire = Date.now() + 15 * 60 * 1000; // 15 mins

    await user.save();

    const resetLink = `${process.env.CLIENT_URL}/reset-password?token=${token}`;
    nodemailer.sendEmail(email, 'Reset Password', `Click the link to reset your password: ${resetLink}`);

    res.json({ msg: 'Password reset email sent' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Reset Password
exports.resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user || user.resetPasswordExpire < Date.now()) {
      return res.status(400).json({ msg: 'Invalid or expired token' });
    }

    user.password = bcrypt.hashSync(newPassword, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.json({ msg: 'Password updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};