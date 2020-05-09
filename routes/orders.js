const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { ObjectId } = require("mongodb");
const User = require("../models/User");
const Shirts = require("../models/Shirts");
const Orders = require("../models/Orders");

// @route   GET api/orders
// @desc    Get all the orders
// @access  Public
router.get("/", async(req, res) => {
    try {
        // Once the shirt collection is populated, try this
        const allOrders = await Orders.find();
        res.json(allOrders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// @route   GET api/orders/:order_id
// @desc    Get order by ID
// @access  Public
router.get("/:order_id", async(req, res) => {
    try {
        let selectedOrder = await Orders.findById(req.params.order_id);

        if (!selectedOrder) {
            return res.status(400).json({ msg: "Order not found, Invalid order" });
        }
        res.status(500).send("Server Error");
    }
});

// @route   POST api/order
// @desc    Add orders
// @access  Public
router.post("/", async(req, res) => {
    const {
        custInfo,
        subtotal,
        taxTotal,
        shipping,
        total,
        shippingAddress,
        billingAddress,
        products,
    } = req.body;

    const orderFields = {};
    if (custInfo) orderFields.custInfo = custInfo;
    if (subtotal) orderFields.subtotal = subtotal;
    if (taxTotal) orderFields.tax = taxTotal;
    if (shipping) orderFields.shipping = shipping;
    if (total) orderFields.total = total;
    if (shippingAddress) orderFields.shippingAddress = shippingAddress;
    if (billingAddress) orderFields.billingAddress = billingAddress;
    if (products) orderFields.products = products;

    try {
        let newOrder = new Orders(orderFields);
        await newOrder.save();
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;