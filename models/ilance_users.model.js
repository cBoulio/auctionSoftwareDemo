/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  
  const ilance_users = sequelize.define('ilance_users',{
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(100),
      allowNull: false,
      primaryKey: true
    },
    ipaddress: {
      type: DataTypes.STRING(25),
      allowNull: true,
      defaultValue: "127.0.0.1"
    },
    iprestrict: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: 0
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    password: {
      type: DataTypes.STRING(32),
      allowNull: true,
      defaultValue: ""
    },
    salt: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: ""
    },
    secretquestion: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ""
    },
    secretanswer: {
      type: DataTypes.STRING(32),
      allowNull: true,
      defaultValue: ""
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: ""
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ""
    },
    address2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    state: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    zip_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: ""
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    country: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: 500
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "2020-08-02 19:53:07"
    },
    subcategories: {
      type: 'MEDIUMTEXT',
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('active','suspended','cancelled','unverified','banned','moderated'),
      allowNull: true,
      defaultValue: "active"
    },
    serviceawards: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      defaultValue: 0
    },
    productawards: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      defaultValue: 0
    },
    servicesold: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      defaultValue: 0
    },
    productsold: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      defaultValue: 0
    },
    rating: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    score: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      defaultValue: 0
    },
    feedback: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    bidstoday: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: 0
    },
    bidsthismonth: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: 0
    },
    auctiondelists: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      defaultValue: 0
    },
    bidretracts: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      defaultValue: 0
    },
    lastseen: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "2020-08-02 14:53:07"
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "2020-08-02 14:53:07"
    },
    rid: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: ""
    },
    account_number: {
      type: DataTypes.STRING(25),
      allowNull: true,
      defaultValue: ""
    },
    available_balance: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0.00
    },
    total_balance: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0.00
    },
    income_reported: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0.00
    },
    income_spent: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0.00
    },
    startpage: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: "main"
    },
    styleid: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    project_distance: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: 1
    },
    currency_calculation: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: 1
    },
    languageid: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    currencyid: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    timezone: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    notifyservices: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    notifyproducts: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    notifyservicescats: {
      type: 'MEDIUMTEXT',
      allowNull: true
    },
    notifyproductscats: {
      type: 'MEDIUMTEXT',
      allowNull: true
    },
    lastemailservicecats: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "2020-08-02 19:53:07"
    },
    lastemailproductcats: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "2020-08-02 19:53:07"
    },
    displayprofile: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    emailnotify: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    displayfinancials: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    vatnumber: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    regnumber: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    dnbnumber: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    companyname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    usecompanyname: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    timeonsite: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    daysonsite: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    isadmin: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: 0
    },
    permissions: {
      type: 'MEDIUMTEXT',
      allowNull: true
    },
    searchoptions: {
      type: 'MEDIUMTEXT',
      allowNull: true
    },
    rateperhour: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0.00
    },
    profilevideourl: {
      type: 'MEDIUMTEXT',
      allowNull: true
    },
    profileintro: {
      type: 'MEDIUMTEXT',
      allowNull: true
    },
    gender: {
      type: DataTypes.ENUM('','male','female'),
      allowNull: true,
      defaultValue: ""
    },
    freelancing: {
      type: DataTypes.ENUM('','individual','business'),
      allowNull: true,
      defaultValue: ""
    },
    autopayment: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: 1
    },
    posthtml: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: 0
    },
    username_history: {
      type: 'MEDIUMTEXT',
      allowNull: true
    },
    password_lastchanged: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "2020-08-02 14:53:07"
    },
    role: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: 0
    },
    store: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: 0
    },
    store_pay: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: 0
    }
  },{});
  ilance_users.associate = function(models) {
    ilance_users.hasMany(models.ilance_projects, {foreignKey:'user_id'});
  };

  
  return ilance_users;
};


