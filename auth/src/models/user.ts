import mongoose from "mongoose";
import { Password } from "../services/password";

// an interface that describes the properties
// that are required to create a new User
interface UserAttrs {
  email: string;
  password: string;
}

// an interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// an interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

// creating a pre save hook to hash the password before saving it to the database
userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

// we build user to make sure that we can use TypeScript to enforce the type of the attributes that we pass in since mongoose does not do this by default
// we also define build as a method on the User model so that we can call it directly on the User model
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

// we define the User model with mongoose so we can call findOne, find, etc. on it
const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User, UserDoc };
