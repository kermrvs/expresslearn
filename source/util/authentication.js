export const authentication = (req, res, next) => {
  if (!req.session.user.email) {
    return res.sendStatus(401);
  }
  const authPass = req.get('Authorization');
  const [type, credentials] = authPass.split(' ');
  const [email, password] = Buffer.from(credentials, 'base64')
    .toString()
    .split(':');
  if (password === process.env.PASSWORD) {
    next();
  } else {
    res.sendStatus(401);
  }
};
