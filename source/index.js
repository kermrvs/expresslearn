import { app } from './server';
import passport from 'passport';

import {
  userRoutes,
  classRoutes,
  lessonsRoutes,
  educationRoutes,
  authRoutes,
  loginRoute,
} from './routers';
import express from 'express';
import session from 'express-session';
import { myDebugLogger } from './util';
import path from 'path';

let JwtStrategy = require('passport-jwt').Strategy;
let ExtractJwt = require('passport-jwt').ExtractJwt;
let GitHubStrategy = require('passport-github2').Strategy;

const sessionOptions = {
  key: 'user',
  secret: 'some shit',
  resave: false, // disable session resave
  rolling: true, // reset max age on every use
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 15 * 60 * 1000, // 15m
  },
};

const port = 3000;

app.use(express.json());
app.use(session(sessionOptions));

app.use(express.static(path.join(path.resolve(), 'source')));

app.use(myDebugLogger);
passport.use(
  new JwtStrategy(
    { secretOrKey: 'secret', jwtFromRequest: ExtractJwt.fromHeader('x-token') },
    (jwt_payload, done) => {
      console.log(jwt_payload);
      if (jwt_payload) {
        return done(null, jwt_payload);
      } else {
        return done(null, false);
      }
    },
  ),
);

passport.use(
  new GitHubStrategy(
    {
      clientID: 'aeb618fda2ed11c96af1',
      clientSecret: 'a1ea9fd3de3d5f4e7fb3a278a4b3f93feb229b50',
      callbackURL: 'http://localhost:3000/api/users',
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      return done(null, profile);
    },
  ),
);

app.use(passport.initialize());

app.use('/api/auth', authRoutes);
app.use('/api', loginRoute);
app.use('/users', userRoutes);
app.use('/classes', classRoutes);
app.use('/lessons', lessonsRoutes);
app.use('/education', educationRoutes);

app.listen(port, () => {
  console.log(`Server API is up on port ${port}`);
});
