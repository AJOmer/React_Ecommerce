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
        ]
    ],
    async(req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            name,
            brand,
            colors,
            retail_price,
            images,
            description
        } = req.body;

        const shirtsField = {};
        if (name) shirtsField.name = name;
        if (brand) shirtsField.brand = brand;
        if (retail_price) shirtsField.retail_price = retail_price;
        if (description) shirtsField.description = description;
        if (colors) {
            shirtsField.colors = colors.split(',').map(color => color.trim());
        }
        if (images) {
            shirtsField.images - images.split(',').map(image => image.trim())
        }

        try {
            let isUserAdmin = req.user.isAdmin;

            if (isUserAdmin) {
                let shirt = await Shirts.findOne({ name });

                if (shirt) {
                    return res.status(400).json({ errors: [{ msg: 'Already exists' }] });
                }
                let newShirts - new Shirts(shirtsField);
                await newShirts.save();
                res.json({ msg: 'Successfully added new Shirt' })
            } else {
                return res.status(400).json({ msg: 'Not the admin, cannot delete' });
            }
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route   DELETE api/shirts/:shirts_id
// @desc    Delete shoes
// @access  Private
router.delete('/:shirts_id', auth, async(req, res) => {
    try {
        let isUserAdmin = req.user.isAdmin;

        // check if user is an admin
        if (isUserAdmin) {
            // remove shirts
            await Shirts.findByIdAndRemove({ _id: req.params.shirts_id });
            res.json({ msg: 'Shoes are removed' });
        } else {
            res.status(400).json({ msg: 'Not admin, cannot delete' });
        }
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;