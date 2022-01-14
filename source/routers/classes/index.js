import express from 'express';

export const classRoutes = express.Router();

classRoutes.get('/', (req, res) => {
  try {
    res.status(200).json({ data: [] });
  } catch (e) {
    res.status(400).json({ message: 'incorrect payload' });
  }
});

classRoutes.post('/', (req, res) => {
  try {
    res.status(201).json({ hash: '' });
  } catch (e) {
    res.status(400).json({ message: 'incorrect payload' });
  }
});

classRoutes.get('/:classHash', (req, res) => {
  try {
    res.status(200).json({ data: {} });
  } catch (e) {
    res.status(400).json({ message: 'incorrect payload' });
  }
});

classRoutes.put('/:classHash', (req, res) => {
  try {
    res.status(200).json({ hash: '' });
  } catch (e) {
    res.status(400).json({ message: 'incorrect payload' });
  }
});

classRoutes.delete('/:classHash', (req, res) => {
  try {
    res.status(204);
  } catch (e) {
    res.status(400).json({ message: 'incorrect payload' });
  }
});
