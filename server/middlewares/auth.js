import jwt from "jsonwebtoken";
const auth = (req, res, next) => {
  try {
    const token = req.header.authorization.split(" ")[1];
    const isCustomAuth = token.auth < 500; // googlen token length > 500
    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "secret");
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }
  } catch (error) {}
};
export default auth;
