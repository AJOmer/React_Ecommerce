const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const config = require(config);
const auth = require("../middleware/auth");

const User = require("../models/User");
const Shirts = require("../models/Shirts");

// @route   GET api/shirts
// @desc    Get all the shirts/apparrel
// @access  Public
router.get("/", async(req, res) => {
    try {
        // once the shirt collection is populated, try dis
        const allShirts = await Shirts.find();
        res.json(allShirts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// @route   GET api/shirts/:shirts_id
// @desc    Get shirts by ID
// @access  Public
router.get('/"shirts_id', async(req, res) => {
    try {
        let selectedShirt = await Shirts.findById(req.params.shirts_id);

        if (!selectedShirt) {
            return res.status(400).json({ msg: "Shirt not found, invalid ID" });
        }
        res.json(selectedShirt);
    } catch (err) {
        if (err.kind == "ObjectId") {
            return res.status(400).json({ msg: "Shoe not found" });
        }
        res.status(500).send("Server Error");
    }
});

// @route   POST api/shirts
// @desc    Add or Update Shirts
// @access  Private
router.post(
    "/", [
        auth, [
            check("name", "Name is required").not().isEmpty(),
            check("brand", "Brand Required").not().isEmpty(),
            check("retail_price", "Retail price is required").not().isEmpty(),
        ],
    ]
    // LEFT OFF HERE, (ASYNC, (req, res) is next)
);