import express from 'express';

export const lessonsRoutes = express.Router();

lessonsRoutes.get('/', (req, res) => {
  try {
    res.status(200).json({ data: [] });
  } catch (e) {
    res.status(400).json({ message: 'incorrect payload' });
  }
});

lessonsRoutes.post('/', (req, res) => {
  try {
    res.status(201).json({ hash: '' });
  } catch (e) {
    res.status(400).json({ message: 'incorrect payload' });
  }
});

lessonsRoutes.get('/:lessonHash', (req, res) => {
  try {
    res.status(200).json({ data: {} });
  } catch (e) {
    res.status(400).json({ message: 'incorrect payload' });
  }
});

lessonsRoutes.put('/:lessonHash', (req, res) => {
  try {
    res.status(200).json({ hash: '' });
  } catch (e) {
    res.status(400).json({ message: 'incorrect payload' });
  }
});

lessonsRoutes.delete('/:lessonHash', (req, res) => {
  try {
    res.status(204);
  } catch (e) {
    res.status(400).json({ message: 'incorrect payload' });
  }
});
