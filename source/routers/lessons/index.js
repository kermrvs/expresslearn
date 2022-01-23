import express from 'express';
import { authentication } from '../../util';

export const lessonsRoutes = express.Router();

lessonsRoutes.get('/', (req, res) => {
  try {
    res.status(200).json({ data: [] });
  } catch (e) {
    res.status(400).json({ message: 'incorrect payload' });
  }
});

lessonsRoutes.post('/', authentication, (req, res) => {
  try {
    res.status(201).json({ hash: '' });
  } catch (e) {
    res.status(400).json({ message: 'incorrect payload' });
  }
});

lessonsRoutes.get('/:lessonHash', authentication, (req, res) => {
  try {
    res.status(200).json({ data: {} });
  } catch (e) {
    res.status(400).json({ message: 'incorrect payload' });
  }
});

lessonsRoutes.put('/:lessonHash', authentication, (req, res) => {
  try {
    res.status(200).json({ hash: '' });
  } catch (e) {
    res.status(400).json({ message: 'incorrect payload' });
  }
});

lessonsRoutes.delete('/:lessonHash', authentication, (req, res) => {
  try {
    res.status(204);
  } catch (e) {
    res.status(400).json({ message: 'incorrect payload' });
  }
});
