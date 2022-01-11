import express from 'express';
import { usersData } from './data';
import { getObByHash } from '../getObByHash';
import uuid4 from 'uuid4';

export const userRoutes = express.Router();

let users = usersData;

userRoutes.get('/', (req, res) => {
  try {
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

userRoutes.post('/', (req, res) => {
  try {
    const user = req.body;
    const obj = users.filter(value => {
      return value.name === user.name;
    });
    if (obj.length > 0) {
      res.status(400).json({ message: 'incorrect payload' });
    } else {
      const date = new Date();
      user.created = date;
      user.updated = date;
      user.hash = uuid4();
      users.push(user);
      res.status(200).json({ message: 'User have been created!!!' });
    }
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

userRoutes.get('/:userHash', (req, res) => {
  try {
    const { userHash } = req.params;
    const user = getObByHash(userHash, users);
    if (user != null) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ message: 'incorrect payload' });
    }
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

userRoutes.put('/:userHash', (req, res) => {
  try {
    const { userHash } = req.params;
    const { name, email, phone, password, sex, roles } = req.body;
    let user = getObByHash(userHash, users);
    if (user != null) {
      const date = new Date();
      users.forEach(value => {
        if (value.hash === user.hash) {
          value.name = name;
          value.email = email;
          value.phone = phone;
          value.password = password;
          value.sex = sex;
          value.roles = roles;
          value.updated = date;
          user = value;
        }
      });
      res.status(200).json(user);
    } else {
      res.status(400).json({ message: 'incorrect payload' });
    }
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});

userRoutes.delete('/:userHash', (req, res) => {
  try {
    const { userHash } = req.params;
    const newUsers = users.filter(value => {
      return value.hash !== userHash;
    });

    if (newUsers.length === users.length) {
      res.status(400).json({ message: 'incorrect payload' });
    } else {
      users = newUsers;
      res.status(200).json(users);
    }
  } catch (e) {
    res.status(500).json({ message: 'some server error' });
  }
});
