const publicRoutes = {
  "POST /contact": "ContactController.createContact",
  "PATCH /contact": "ContactController.updateContact",
  "GET /contacts": "ContactController.getAllContacts",
  "DELETE /contact": "ContactController.deleteContact",
};

module.exports = publicRoutes;
