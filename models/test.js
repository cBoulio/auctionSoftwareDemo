'use strict';
module.exports = (sequelize, DataTypes) => {
  const test = sequelize.define('test', {
    dbName: DataTypes.STRING,
    test: DataTypes.STRING
  }, {});
  test.associate = function(models) {
    // associations can be defined here
  };
  return test;
};