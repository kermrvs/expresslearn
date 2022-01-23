import jwt from 'jsonwebtoken';

export const loginHandler = (req, res) => {
  const body = req.get('authorization');
  const [type, credentials] = body.split(' ');
  const [email, password] = Buffer.from(credentials, 'base64')
    .toString()
    .split(':');
  const obj = {
    email,
  };
  req.session.user = obj;
  res.sendStatus(204);
};
