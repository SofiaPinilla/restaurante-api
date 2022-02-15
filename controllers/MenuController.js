const Menu = require('../models/Menu')

const MenuController = {
    async getAll(req,res){
        const menus = await Menu.find()
        res.send(menus)
    }
}

module.exports = MenuController;