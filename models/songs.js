const {
    Model, DataTypes
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
            artist: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: {
                        args: [2,25],
                        msg: 'artist must be 2-25 characters long.'
                    }
                }
            }, mood: {
                type: DataTypes.ENUM('happy','sad','angry','romantic','motivational'),
                allowNull: false,
                validate: {
                    len: {
                        args: [2, 25],
                        msg: 'mood must be 2-25 characters long.'
                    }
                }
            },genre: {
                type: DataTypes.ENUM('rap','rock','R&B','Pop','electronic'),
                allowNull: false,
                validate: {
                    len: {
                        args: [2, 25],
                        msg: 'Genre must be 2-25 characters long.'
                    }
                }
            },
        }, {
        sequelize,
        modelName: 'song',
    });

    return song;
    
}
