import express from 'express';
import { passMiddleware } from '../../util';
import jwt from 'jsonwebtoken';

export const authRoutes = express.Router();

authRoutes.post('/login', (req, res) => {
  const body = req.get('authorization');
  const [type, credentials] = body.split(' ');
  const [email, password] = Buffer.from(credentials, 'base64')
    .toString()
    .split(':');
  const obj = {
    email,
  };
  req.session.user = obj;
  const user = {
    email,
    password,
  };
  const token = jwt.sign(user, 'secret');
  res.setHeader('x-token', token);
  res.sendStatus(204);
});

authRoutes.post('/logout', passMiddleware, (req, res) => {
  res.sendStatus(204);
});
