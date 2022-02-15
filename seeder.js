const express = require("express");
const app = express();
const axios = require('axios')
const Menu = require('./models/Menu.js');
const { MONGO_URI } = require('./config/keys')
const mongoose = require("mongoose");
mongoose
  .connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("conectado a mongoDB con éxito"))
  .catch((err) => console.error(err));
  app.use(express.json());
axios.get('https://api.documenu.com/v2/restaurant/4072702673999819?key=a0e20219fc56400e717fdc29d5cfb29a')
    .then(async res => {
        try {
            const menus = res.data.result.menus[0].menu_sections[7].menu_items
            for (const menu of menus) {
                    await Menu.create({
                        ...menu,
                    })
            }
        } catch (error) {
            console.error(error)
        }

    })