const Sequelize = require("sequelize");
const sequelize = require("../../config/database");

const tableName = "contacts";

const Contact = sequelize.define(
  "contacts",
  {
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    phone: {
      type: Sequelize.STRING,
    },
    note: {
      type: Sequelize.STRING,
    },
    verified: {
      type: Sequelize.BOOLEAN,
    },
  },
  { tableName }
);

// eslint-disable-next-line
Contact.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Contact;
