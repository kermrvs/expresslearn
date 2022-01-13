import express from 'express';

export const userRoutes = express.Router();

userRoutes.get('/', (req, res) => {
  try {
    res.status(200).json({ data: [] });
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

userRoutes.post('/', (req, res) => {
  try {
    res.status(201).json({ hash: '' });
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

userRoutes.get('/:userHash', (req, res) => {
  try {
    res.status(200).json({ data: {} });
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

userRoutes.put('/:userHash', (req, res) => {
  try {
    res.status(200).json({ hash: '' });
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

userRoutes.delete('/:userHash', (req, res) => {
  try {
    res.status(204);
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});
