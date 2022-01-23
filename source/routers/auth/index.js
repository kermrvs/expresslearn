import express from 'express';
import { authentication } from '../../util';
import jwt from 'jsonwebtoken';
import { loginHandler } from './loginHandler';
import passport from 'passport';

export const authRoutes = express.Router();

authRoutes.post('/login', (req, res) => {
  loginHandler(req, res);
});

authRoutes.post('/github', passport.authenticate('github'), (req, res) => {
  res.sendStatus(200);
});

authRoutes.post('/logout', authentication, (req, res) => {
  res.sendStatus(204);
});
