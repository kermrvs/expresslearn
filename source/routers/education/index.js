import express from 'express';
import { getObByHash } from '../getObByHash';
import { classesArray } from '../classes/data';
import { usersData } from '../users/data';
import { lessonsItems } from '../lessons/data';
import uuid4 from 'uuid4';

let classes = classesArray;
let users = usersData;

export const educationRoutes = express.Router();

educationRoutes.post('/classes/:classHash/enroll', (req, res) => {
  try {
    const { classHash } = req.params;
    const { user, status, notes } = req.body;
    const findClass = getObByHash(classHash, classes);
    if (findClass === null) {
      res.status(400).json({ message: 'class not found' });
    } else {
      const findUser = getObByHash(user, usersData);
      if (findUser === null) {
        res.status(400).json({ message: 'user not found' });
      } else {
        classes.forEach(value => {
          if (value.hash === findClass.hash) {
            value.students.push({ user: findUser, status, notes });
          }
        });
        res.sendStatus(200);
      }
    }
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

educationRoutes.post('/classes/:classHash/expel', (req, res) => {
  try {
    const { classHash } = req.params;
    const { user } = req.body;
    const findClass = getObByHash(classHash, classes);
    if (findClass === null) {
      res.status(400).json({ message: 'class not found' });
    } else {
      const findUser = getObByHash(user, users);
      if (findUser === null) {
        res.status(400).json({ message: 'user not found' });
      } else {
        const currentStudents = findClass.students.filter(value => {
          const { user } = value;
          return user.hash !== findUser.hash;
        });
        classesArray.forEach(value => {
          if (value.hash === findClass.hash) {
            value.students = currentStudents;
          }
        });
        res.sendStatus(200);
      }
    }
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

educationRoutes.post('/lessons/:lessonHash/videos', (req, res) => {
  try {
    const { lessonHash } = req.params;
    const reqBody = req.body;
    const findLesson = getObByHash(lessonHash, lessonsItems);
    if (findLesson === null) {
      res.status(400).json({ message: 'lesson not fount' });
    } else {
      lessonsItems.forEach(value => {
        if (value.hash === lessonHash) {
          reqBody.hash = uuid4();
          value.content.videos.push(reqBody);
        }
      });
      res.sendStatus(200);
    }
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

educationRoutes.post('/lessons/:lessonHash/keynotes', (req, res) => {
  try {
    const { lessonHash } = req.params;
    const reqBody = req.body;
    const findLesson = getObByHash(lessonHash, lessonsItems);
    if (findLesson === null) {
      res.status(400).json({ message: 'lesson not fount' });
    } else {
      lessonsItems.forEach(value => {
        if (value.hash === lessonHash) {
          reqBody.hash = uuid4();
          value.content.keynotes.push(reqBody);
        }
      });
      res.sendStatus(200);
    }
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

educationRoutes.get('/lessons/:lessonHash/videos/:videoHash', (req, res) => {
  try {
    const { lessonHash, videoHash } = req.params;
    const findLesson = getObByHash(lessonHash, lessonsItems);
    if (findLesson === null) {
      res.status(400).json({ message: 'lesson not fount' });
    } else {
      const { content } = findLesson;
      const findVideo = getObByHash(videoHash, content.videos);
      if (findVideo === null) {
        res.status(400).json({ message: 'video not fount' });
      } else {
        res.status(200).json(findVideo.uri);
      }
    }
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

educationRoutes.delete('/lessons/:lessonHash/videos/:videoHash', (req, res) => {
  try {
    const { lessonHash, videoHash } = req.params;
    const findLesson = getObByHash(lessonHash, lessonsItems);
    if (findLesson === null) {
      res.status(400).json({ message: 'lesson not fount' });
    } else {
      const { content } = findLesson;
      const findVideo = getObByHash(videoHash, content.videos);
      if (findVideo === null) {
        res.status(400).json({ message: 'video not fount' });
      } else {
        content.videos = content.videos.filter(value => {
          return value.hash !== findVideo.hash;
        });
        res.status(200).json(content.videos);
      }
    }
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

educationRoutes.get('/lessons/:lessonHash/keynote/:keynoteHash', (req, res) => {
  try {
    const { lessonHash, keynoteHash } = req.params;
    const findLesson = getObByHash(lessonHash, lessonsItems);
    if (findLesson === null) {
      res.status(400).json({ message: 'lesson not fount' });
    } else {
      const { content } = findLesson;
      const findVideo = getObByHash(keynoteHash, content.keynotes);
      if (findVideo === null) {
        res.status(400).json({ message: 'video not fount' });
      } else {
        res.status(200).json(findVideo.uri);
      }
    }
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

educationRoutes.delete(
  '/lessons/:lessonHash/keynote/:keynoteHash',
  (req, res) => {
    try {
      const { lessonHash, keynoteHash } = req.params;
      const findLesson = getObByHash(lessonHash, lessonsItems);
      if (findLesson === null) {
        res.status(400).json({ message: 'lesson not fount' });
      } else {
        const { content } = findLesson;
        const findVideo = getObByHash(keynoteHash, content.keynotes);
        if (findVideo === null) {
          res.status(400).json({ message: 'video not fount' });
        } else {
          content.keynotes = content.keynotes.filter(value => {
            return value.hash !== findVideo.hash;
          });
          res.status(200).json(content.keynotes);
        }
      }
    } catch (e) {
      res.status(500).json({ message: 'some server error' });
    }
  },
);
