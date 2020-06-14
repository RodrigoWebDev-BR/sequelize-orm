const { Model, Sequelize } = require('sequelize')
const crypto = require('crypto')

class Users extends Model {
    static init(sequelize){
        super.init({
            user_name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.STRING,            
                set(value) {
                    crypto.createHash('md5').update(value).setEncoding('base64')
                }
        },
        {
            sequelize
        }
        )
    }
}

module.exports = Users