import jwt from 'jsonwebtoken';

export const authentication = (req, res, next) => {
  const authHeader = req.get('authorization');

  const [type, credentials] = authHeader.split(' ');
  const [email, password] = Buffer.from(credentials, 'base64')
    .toString()
    .split(':');
  const user = {
    email,
    password,
  };
  const token = jwt.sign(user, 'secret');
  res.setHeader('x-token', token);
  next();
};
