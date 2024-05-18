const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization');
  console.log("token 1",token);
  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    console.log("process.env.JWT_SECRET", process.env.JWT_SECRET);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded", decoded);
    console.log("decoded_user_id", decoded.userId);
    //req.user = decoded;
    req.user = { userId: decoded.userId };
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid token.' });
  }

  // try {
  //   console.log("process.env.JWT_SECRET", process.env.JWT_SECRET);
  //   const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
  //   console.log("decoded", decoded);
  //   console.log("decoded_user_id", decoded.userId);
  //   req.user = { userId: decoded.userId };
  //   next();
  // } catch (err) {
  //   res.status(400).json({ error: 'Invalid token.' });
  // }
};

module.exports = auth;