const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    name: String,
    description: String,
    pricing: Object,
    price: Number
}, { timestamps: true });

const Menu = mongoose.model('Menu', MenuSchema);

module.exports = Menu;