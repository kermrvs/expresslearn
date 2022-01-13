import express from 'express';

export const classRoutes = express.Router();

classRoutes.get('/', (req, res) => {
  try {
    res.status(200).json({ data: [] });
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

classRoutes.post('/', (req, res) => {
  try {
    res.status(201).json({ hash: '' });
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

classRoutes.get('/:classHash', (req, res) => {
  try {
    res.status(200).json({ data: {} });
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

classRoutes.put('/:classHash', (req, res) => {
  try {
    res.status(200).json({ hash: '' });
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

classRoutes.delete('/:classHash', (req, res) => {
  try {
    res.status(204);
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});
