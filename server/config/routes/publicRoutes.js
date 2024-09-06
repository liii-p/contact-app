const publicRoutes = {
  "POST /contact": "ContactController.createContact",
  "PATCH /contact/:id": "ContactController.updateContact",
  "GET /contacts": "ContactController.getAllContacts",
  "DELETE /contact/:id": "ContactController.deleteContact",
};

module.exports = publicRoutes;
