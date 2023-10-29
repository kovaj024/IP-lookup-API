module.exports = (sequelize, DataTypes) => {
  return sequelize.define('ip_infos', {
    ipAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
};
