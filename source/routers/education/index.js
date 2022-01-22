import express from 'express';
import { passMiddleware } from '../../util';

export const educationRoutes = express.Router();

educationRoutes.post(
  '/classes/:classHash/enroll',
  passMiddleware,
  (req, res) => {
    try {
      res.sendStatus(204);
    } catch (e) {
      res.status(400).json({ message: 'incorrect payload' });
    }
  },
);

educationRoutes.post(
  '/classes/:classHash/expel',
  passMiddleware,
  (req, res) => {
    try {
      res.sendStatus(204);
    } catch (e) {
      res.status(400).json({ message: 'incorrect payload' });
    }
  },
);

educationRoutes.post(
  '/lessons/:lessonHash/videos',
  passMiddleware,
  (req, res) => {
    try {
      res.sendStatus(204);
    } catch (e) {
      res.status(400).json({ message: 'incorrect payload' });
    }
  },
);

educationRoutes.post(
  '/lessons/:lessonHash/keynotes',
  passMiddleware,
  (req, res) => {
    try {
      res.sendStatus(204);
    } catch (e) {
      res.status(400).json({ message: 'incorrect payload' });
    }
  },
);

educationRoutes.get(
  '/lessons/:lessonHash/videos/:videoHash',
  passMiddleware,
  (req, res) => {
    try {
      res.status(200);
    } catch (e) {
      res.status(400).json({ message: 'incorrect payload' });
    }
  },
);

educationRoutes.delete(
  '/lessons/:lessonHash/videos/:videoHash',
  passMiddleware,
  (req, res) => {
    try {
      res.status(204);
    } catch (e) {
      res.status(400).json({ message: 'incorrect payload' });
    }
  },
);

educationRoutes.get(
  '/lessons/:lessonHash/keynote/:keynoteHash',
  passMiddleware,
  (req, res) => {
    try {
      res.status(200);
    } catch (e) {
      res.status(400).json({ message: 'incorrect payload' });
    }
  },
);

educationRoutes.delete(
  '/lessons/:lessonHash/keynote/:keynoteHash',
  passMiddleware,
  (req, res) => {
    try {
      res.status(204);
    } catch (e) {
      res.status(400).json({ message: 'incorrect payload' });
    }
  },
);
