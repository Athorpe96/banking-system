

// Creating our User model
module.exports = function (sequelize, DataTypes) {
    const Accounts = sequelize.define("Accounts", {



        savings: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        checking: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    })
    return Accounts;
}





