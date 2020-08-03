/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ilance_subscription_user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(100),
      allowNull: false,
      primaryKey: true
    },
    subscriptionid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: 1
    },
    user_id: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      defaultValue: -1
    },
    paymethod: {
      type: DataTypes.ENUM('account','bank','visa','amex','mc','disc','paypal','paypal_pro','check','stormpay','cashu','moneybookers'),
      allowNull: false,
      defaultValue: "account"
    },
    startdate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    renewdate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    autopayment: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 1
    },
    autorenewal: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "1"
    },
    active: {
      type: DataTypes.ENUM('yes','no','cancelled'),
      allowNull: false,
      defaultValue: "no"
    },
    cancelled: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0
    },
    migrateto: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    migratelogic: {
      type: DataTypes.ENUM('none','waived','unpaid','paid'),
      allowNull: false,
      defaultValue: "none"
    },
    recurring: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0
    },
    invoiceid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    roleid: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: -1
    }
  },{
    sequelize,
    tableName: 'ilance_subscription_user'
  });
};
