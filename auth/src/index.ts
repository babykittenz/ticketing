import mongoose from "mongoose";
import { app } from "./app";

// defining an async function to connect to MongoDB so that we can use async/await because you cannot use it outside a function with earlier versions of Node.js
const start = async () => {
  // check if the JWT_KEY environment variable is defined at the start so we dont find out later when we try to sign a token
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!!!!");
  });
};

start();
