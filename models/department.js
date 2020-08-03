'use strict';
module.exports = (sequelize, DataTypes) => {
  const department = sequelize.define('department', {
    dbName: DataTypes.STRING
  }, {});
  department.associate = function(models) {
    // associations can be defined here
  };
  return department;
};