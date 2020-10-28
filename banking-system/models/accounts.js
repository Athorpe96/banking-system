module.exports = function (sequelize, DataTypes) {
    const Accounts = sequelize.define("Accounts", {
        // The email cannot be null, and must be a proper email before creation
        savings: {
            type: DataTypes.INTEGER,
            allowNull: true,


        },
        // The password cannot be null
        checking: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });
    return Accounts
}