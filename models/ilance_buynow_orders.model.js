/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ilance_buynow_orders', {
    orderid: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    parentid: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: 0
    },
    project_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    buyer_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    owner_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    invoiceid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    attachid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    qty: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: 1
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0.00
    },
    salestax: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0.00
    },
    salestaxstate: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    salestaxrate: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "0"
    },
    salestaxshipping: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0
    },
    escrowfee: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0.00
    },
    escrowfeebuyer: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0.00
    },
    fvf: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0.00
    },
    fvfbuyer: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0.00
    },
    isescrowfeepaid: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0
    },
    isescrowfeebuyerpaid: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0
    },
    isfvfpaid: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0
    },
    isfvfbuyerpaid: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0
    },
    escrowfeeinvoiceid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    escrowfeebuyerinvoiceid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    fvfinvoiceid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    fvfbuyerinvoiceid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: 0
    },
    ship_required: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 1
    },
    ship_location: {
      type: 'MEDIUMTEXT',
      allowNull: true
    },
    orderdate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    canceldate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    arrivedate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    paiddate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    releasedate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    winnermarkedaspaid: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0
    },
    winnermarkedaspaiddate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    winnermarkedaspaidmethod: {
      type: 'MEDIUMTEXT',
      allowNull: true
    },
    buyerpaymethod: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    buyershipcost: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0.00
    },
    buyershipperid: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: 0
    },
    sellermarkedasshipped: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0
    },
    sellermarkedasshippeddate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    shiptracknumber: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    buyerfeedback: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0
    },
    sellerfeedback: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.ENUM('paid','cancelled','pending_delivery','delivered','fraud','offline','offline_delivered'),
      allowNull: false,
      defaultValue: "paid"
    }
  }, {
    sequelize,
    tableName: 'ilance_buynow_orders'
  });
};
