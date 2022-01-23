import express from 'express';
import { authentication } from '../../util';

export const educationRoutes = express.Router();

educationRoutes.post(
  '/classes/:classHash/enroll',
  authentication,
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
  authentication,
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
  authentication,
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
  authentication,
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
  authentication,
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
  authentication,
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
  authentication,
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
  authentication,
  (req, res) => {
    try {
      res.status(204);
    } catch (e) {
      res.status(400).json({ message: 'incorrect payload' });
    }
  },
);
