import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, '12345', {
    expiresIn: "30d",
  });
};

export default generateToken;
