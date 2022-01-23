import jwt from 'jsonwebtoken';

export const getToken = (req, res) => {
  const body = req.get('authorization');
  const [type, credentials] = body.split(' ');
  const [email, password] = Buffer.from(credentials, 'base64')
    .toString()
    .split(':');
  const user = {
    email,
    password,
  };
  const token = jwt.sign(user, 'secret');
  res.setHeader('x-token', token);
  res.sendStatus(204);
};
