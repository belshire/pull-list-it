'use strict';
module.exports = (sequelize, DataTypes) => {
  const Publisher = sequelize.define('Publisher', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  Publisher.associate = function(models) {
    // associations can be defined here
  };
  return Publisher;
};
