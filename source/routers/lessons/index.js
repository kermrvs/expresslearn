import express from 'express';
import { lessonsItems } from './data';
import { getObByHash } from '../getObByHash';
import uuid4 from 'uuid4';

export const lessonsRoutes = express.Router();

let lessons = lessonsItems;

lessonsRoutes.get('/', (req, res) => {
  try {
    res.status(200).json(lessons);
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

lessonsRoutes.post('/', (req, res) => {
  try {
    const lesson = req.body;
    const date = new Date();
    lesson.created = date;
    lesson.modified = date;
    lesson.hash = uuid4();
    lessons.push(lesson);
    res.status(200).json({ message: 'Lesson have been created!!!' });
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

lessonsRoutes.get('/:lessonHash', (req, res) => {
  try {
    const { lessonHash } = req.params;
    const lesson = getObByHash(lessonHash, lessons);
    if (lesson != null) {
      res.status(200).json(lesson);
    } else {
      res.status(400).json({ message: 'incorrect payload' });
    }
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

lessonsRoutes.put('/:lessonHash', (req, res) => {
  try {
    const { lessonHash } = req.params;
    const {
      title,
      description,
      order,
      availability,
      content: { videos, keynotes },
    } = req.body;
    let lesson = getObByHash(lessonHash, lessons);
    if (lessons != null) {
      const date = new Date();
      lessons.forEach(value => {
        if (value.hash === lesson.hash) {
          value.title = title;
          value.description = description;
          value.order = order;
          value.availability = availability;
          value.content = {
            videos,
            keynotes,
          };
          value.modified = date;
          lesson = value;
        }
      });
      res.status(200).json(lesson);
    } else {
      res.status(400).json({ message: 'incorrect payload' });
    }
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

lessonsRoutes.delete('/:lessonHash', (req, res) => {
  try {
    const { lessonHash } = req.params;
    const newLesson = lessons.filter(value => {
      return value.hash !== lessonHash;
    });

    if (newLesson.length === lessons.length) {
      res.status(400).json({ message: 'incorrect payload' });
    } else {
      lessons = newLesson;
      res.status(200).json(lessons);
    }
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});
