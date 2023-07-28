module.exports = (sequelize, DataTypes) => {
  const schema = {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  };

  const ReaderModel = sequelize.define('Reader', schema);
  return ReaderModel;
};
