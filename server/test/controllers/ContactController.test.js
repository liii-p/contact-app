const request = require("supertest");
const { beforeAction, afterAction } = require("../setup/_setup");
const User = require("../../api/models/User");

let api;

beforeAll(async () => {
  api = await beforeAction();
});

afterAll(() => {
  afterAction();
});

test("Contact | create", async () => {
  const res = await request(api)
    .post("/contact")
    .set("Accept", /json/)
    .send({
      firstName: "John",
      lastName: "Doe",
      phone: "0412345678",
      email: "example@email.com",
      note: "This is a note.",
    })
    .expect(200);

  expect(res.body.contact).toBeTruthy();

  const contact = await User.findByPk(res.body.contact.id);

  expect(contact.id).toBe(res.body.user.id);
  expect(contact.email).toBe(res.body.user.email);

  await contact.destroy();
});

test("Contact | get all", async () => {
  const user = await User.create({
    firstName: "Jane",
    lastName: "Doe",
    phone: "0412345678",
    email: "example@gmail.com",
    note: "This is a note.",
  });

  const res = await request(api)
    .get("/contacts")
    .set("Accept", /json/)
    .expect(200);

  expect(res.body.contact).toBeTruthy();

  await user.destroy();
});
