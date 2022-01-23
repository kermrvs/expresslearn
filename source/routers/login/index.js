import express from 'express';
import jwt from 'jsonwebtoken';
import { authentication } from '../../util';
import passport from 'passport';
import { getToken } from './getToken';

export const loginRoute = express.Router();

loginRoute.post('/login', (req, res) => {
  getToken(req, res);
});
