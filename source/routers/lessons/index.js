import express from 'express';
import { getObByHash } from '../getObByHash';
import uuid4 from 'uuid4';

export const lessonsRoutes = express.Router();

lessonsRoutes.get('/', (req, res) => {
  try {
    res.status(200).json({ data: [] });
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

lessonsRoutes.post('/', (req, res) => {
  try {
    res.status(201).json({ hash: '' });
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

lessonsRoutes.get('/:lessonHash', (req, res) => {
  try {
    res.status(200).json({ data: {} });
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

lessonsRoutes.put('/:lessonHash', (req, res) => {
  try {
    res.status(200).json({ hash: '' });
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

lessonsRoutes.delete('/:lessonHash', (req, res) => {
  try {
    res.status(204);
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});
