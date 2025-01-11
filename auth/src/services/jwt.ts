import jwt from "jsonwebtoken";

import { Request } from "express";
import { UserDoc } from "../models/user";

const generateJwt = (user: UserDoc, req: Request) => {
  const userJwt = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    // use the kubernetes secret jwt-secret
    process.env.JWT_KEY!
  );

  // store it on session object
  req.session = {
    jwt: userJwt,
  };
};

export { generateJwt };
