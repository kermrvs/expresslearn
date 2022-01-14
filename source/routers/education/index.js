import express from 'express';

export const educationRoutes = express.Router();

educationRoutes.post('/classes/:classHash/enroll', (req, res) => {
  try {
    res.sendStatus(204);
  } catch (e) {
    res.status(400).json({ message: 'incorrect payload' });
  }
});

educationRoutes.post('/classes/:classHash/expel', (req, res) => {
  try {
    res.sendStatus(204);
  } catch (e) {
    res.status(400).json({ message: 'incorrect payload' });
  }
});

educationRoutes.post('/lessons/:lessonHash/videos', (req, res) => {
  try {
    res.sendStatus(204);
  } catch (e) {
    res.status(400).json({ message: 'incorrect payload' });
  }
});

educationRoutes.post('/lessons/:lessonHash/keynotes', (req, res) => {
  try {
    res.sendStatus(204);
  } catch (e) {
    res.status(400).json({ message: 'incorrect payload' });
  }
});

educationRoutes.get('/lessons/:lessonHash/videos/:videoHash', (req, res) => {
  try {
    res.status(200);
  } catch (e) {
    res.status(400).json({ message: 'incorrect payload' });
  }
});

educationRoutes.delete('/lessons/:lessonHash/videos/:videoHash', (req, res) => {
  try {
    res.status(204);
  } catch (e) {
    res.status(400).json({ message: 'incorrect payload' });
  }
});

educationRoutes.get('/lessons/:lessonHash/keynote/:keynoteHash', (req, res) => {
  try {
    res.status(200);
  } catch (e) {
    res.status(400).json({ message: 'incorrect payload' });
  }
});

educationRoutes.delete(
  '/lessons/:lessonHash/keynote/:keynoteHash',
  (req, res) => {
    try {
      res.status(204);
    } catch (e) {
      res.status(400).json({ message: 'incorrect payload' });
    }
  },
);
