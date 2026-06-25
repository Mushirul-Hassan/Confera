import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_default_secret";

export const createToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "3d",
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
