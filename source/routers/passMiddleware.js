export const passMiddleware = (req, res, next) => {
  const authPass = req.get('Authorization');
  if (authPass === process.env.PASSWORD) {
    next();
  } else {
    res.sendStatus(401);
  }
};
