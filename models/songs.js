const {
    Model
  } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class song extends Model {
        static associate(models) {
        // define association here
        }
    }
    song.init({
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [2, 25],
                    msg: 'Title must be 2-25 characters long.'
                }
            }
        },
        }, {
        sequelize,
        modelName: 'song',
    });

    return song;
    
}