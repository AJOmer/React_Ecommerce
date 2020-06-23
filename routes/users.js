const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");

//importing User Schema \\

const User = require("../models/User");

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
    "/", [
        check("firstname", "First Name is Required").not().isEmpty(),
        check("lastname", "Last Name is Required").not().isEmpty(),
        check("email", "Email is Required").isEmail(),
        check(
            "password",
            "Please enter a password with 5 or more character"
        ).isLength({ min: 5 }),
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // just deconstruct firstname, lastname, email, and password, isAdmin from req.body \\
        const { firstname, lastname, email, password, isAdmin } = req.body;

        try {
            // see if user exists \\
            let user = await User.findOne({ email });

            if (user) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: "User already exists" }] });
            }

            user = new User({
                firstname,
                lastname,
                email,
                password,
                isAdmin,
            });

            // Encrypt password \\
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            // Return jsonwebtoken
            const payload = {
                user: {
                    id: user.id,
                },
            };

            // Login good for 1 hour \\
            jwt.sign(
                payload,
                config.get("jwtSecret"), { expiresIn: 36000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    }
);

// @route   PUT api/users/address
// @desc    Add/edit address
// @access  Private

router.put(
    "/address", [
        auth, [
            check("street", "Street is required").not().isEmpty(),
            check("country", "Country is required").not().isEmpty(),
            check("city", "City is required").not().isEmpty(),
            check("state", "State/Province is required").not().isEmpty(),
            check("zipcode", "Zip/Postal Code is required").not().isEmpty(),
        ],
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { street, country, city, state, zipcode } = req.body;

        const newAddress = {
            street,
            country,
            city,
            state,
            zipcode,
        };

        try {
            // look for the user with the id and then update the address
            await User.updateOne({ _id: req.user.id }, {
                $set: {
                    address: newAddress,
                },
            });

            res.json({ msg: "Sucessfully saved your address." });
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    }
);
module.exports = router;