const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
// Load User model
const User = require("../models/User");
// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json({errors});
    }
  User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ errors: "Email already exists", });
      } else {
        const newUser = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });


router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
      return res.status(400).json({errors});
    }
  const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email }).then(user => {
      if (!user) {
        return res.status(404).json({ errors: "Email not found" });
      }

      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName
          };
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 604800 // 7days in seconds
            },
            (err, token) => {
              res.json({
                "success": true,
                "token": "Bearer " + token,
                err
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ errors: "Password incorrect" });
        }
      });
    });
  });

  module.exports = router;