'use strict';
module.exports = (sequelize, DataTypes) => {
  const ilance_project_categories = sequelize.define('ilance_project_categories', {
    cid: {
      autoIncrement: true,
      type: DataTypes.INTEGER(100),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryNUM: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(25),
      allowNull: false,
    }
  }, {});
  ilance_project_categories.associate = function(models) {
    // associations can be defined here
  };
  return ilance_project_categories;
};