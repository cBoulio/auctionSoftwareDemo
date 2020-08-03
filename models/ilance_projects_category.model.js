/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ilance_projects_category', {
      cid: {
        autoIncrement: true,
        type: DataTypes.INTEGER(100),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      categoryNUM: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        autoIncrement: true,
      },
      category: {
        type: DataTypes.STRING(25),
        allowNull: false,
      }
    },{
      sequelize,
      tableName: 'ilance_projects_category'
    });
  };
  