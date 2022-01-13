import express from 'express';
import { getObByHash } from '../getObByHash';
import uuid4 from 'uuid4';

export const classRoutes = express.Router();

let classes = [];

classRoutes.get('/', (req, res) => {
  try {
    res.status(200).json(classes);
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

classRoutes.post('/', (req, res) => {
  try {
    const createdClass = req.body;
    const obj = classes.filter(value => {
      return value.title === createdClass.title;
    });
    if (obj.length > 0) {
      res.status(400).json({ message: 'incorrect payload' });
    } else {
      const date = new Date();
      createdClass.created = date;
      createdClass.updated = date;
      createdClass.hash = uuid4();
      classes.push(createdClass);
      res.status(201).json({ hash: createdClass.hash });
    }
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

classRoutes.get('/:classHash', (req, res) => {
  try {
    const { classHash } = req.params;
    const classObj = getObByHash(classHash, classes);
    if (classObj != null) {
      res.status(200).json(classObj);
    } else {
      res.status(400).json({ message: 'incorrect payload' });
    }
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

classRoutes.put('/:classHash', (req, res) => {
  try {
    const { classHash } = req.params;
    const { title, description, order, duration } = req.body;
    let classObj = getObByHash(classHash, classes);
    if (classObj != null) {
      const date = new Date();
      classes.forEach(value => {
        if (value.hash === classObj.hash) {
          value.title = title;
          value.description = description;
          value.order = order;
          value.duration = duration;
          value.updated = date;
          classObj = value;
        }
      });
      res.status(200).json(classObj.hash);
    } else {
      res.status(200).json({ message: 'incorrect payload' });
    }
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

classRoutes.delete('/:classHash', (req, res) => {
  try {
    const { classHash } = req.params;
    const newClass = classes.filter(value => {
      return value.hash !== classHash;
    });
    if (classes.length === newClass.length) {
      res.status(400).json({ message: 'incorrect payload' });
    } else {
      classes = newClass;
      res.status(204);
    }
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});
