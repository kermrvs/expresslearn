import express from 'express';
import jwt from 'jsonwebtoken';
import { authentication } from '../../util';
import passport from 'passport';

export const loginRoute = express.Router();

loginRoute.post(
  '/login',
  [
    passport.authenticate('jwt', {
      session: false,
    }),
  ],
  async (req, res) => {
    res.sendStatus(204);
  },
);
