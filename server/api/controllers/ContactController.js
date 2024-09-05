const Contact = require("../models/Contact");

const UserController = () => {
  const createContact = async (req, res) => {
    const { body } = req;
    try {
      const contact = await Contact.create({
        firstName: body.firstName,
        lastName: body.lastName,
        phone: body.phone,
        email: body.email,
        note: body.note,
      });

      return res.status(200).json({ contact });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ msg: "Internal server error - Unable to create contact." });
    }
  };

  const getAllContacts = async (req, res) => {
    try {
      const contactsList = await Contact.findAll();

      return res.status(200).json({
        contactsList,
      });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ msg: "Internal server error- Unable to get all contacts." });
    }
  };

  const updateContact = async (req, res) => {
    const { body } = req;
    try {
      const contact = await Contact.update({
        firstName: body.firstName,
        lastName: body.lastName,
        phone: body.phone,
        email: body.email,
        note: body.note,
      });

      return res.status(200).json({ contact });
    } catch (err) {
      return res
        .status(500)
        .json({ msg: "Internal server error - Unable to delete contact." });
    }
  };

  const deleteContact = async (req, res) => {
    const { body } = req;
    try {
      await Contact.destroy({
        where: {
          id: body.id,
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: "Internal server error" });
    }
  };

  return {
    createContact,
    getAllContacts,
    updateContact,
    deleteContact,
  };
};

module.exports = UserController;
