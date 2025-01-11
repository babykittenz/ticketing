import request from "supertest";
import { app } from "../../app";

it("returns a 201 on successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com", password: "password" })
    .expect(201); // assert that the response status code is 201
});

it("returns a 400 on invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({ email: "test.com", password: "password" })
    .expect(400); // assert that the response status code is 201
});

it("returns a 400 on invalid password", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com", password: "pas" })
    .expect(400); // assert that the response status code is 201
});

it("returns a 400 on missing email and password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com" })
    .expect(400); // assert that the response status code is 201
  await request(app)
    .post("/api/users/signup")
    .send({ password: "password" })
    .expect(400); // assert that the response status code is 201
  await request(app).post("/api/users/signup").send({}).expect(400); // assert that the response status code is 201
});

it("disallows duplicate emails", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com", password: "password" })
    .expect(201);

  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com", password: "password" })
    .expect(400);
});

it("presents a cookie after successful signup", async () => {
  const cookie = await global.signin();
  expect(cookie).toBeDefined();
});
