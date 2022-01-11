import { usersData } from '../users/data';
import { lessonsItems } from '../lessons/data';
import uuid4 from 'uuid4';

export const data = [];

const date = new Date();

const class1 = {
  title: 'Backend',
  description: 'Backend Online Course',
  students: [
    {
      user: usersData[0],
      status: 'select',
      notes: 'отличный студент',
    },
    {
      user: usersData[1],
      status: 'select',
      notes: 'отличный студент',
    },
  ],
  lessons: [
    {
      lesson: lessonsItems[0],
    },
  ],
  order: 2,
  duration: {
    started: '1-11-2022',
    closed: '2-11-2022',
  },
  created: date,
  updated: date,
};
const class2 = {
  title: 'Backend',
  description: 'Backend Online Course',
  order: 3,
  students: [
    {
      user: usersData[0],
      status: 'select',
      notes: 'отличный студент',
    },
    {
      user: usersData[1],
      status: 'select',
      notes: 'отличный студент',
    },
  ],
  lessons: [
    {
      lesson: lessonsItems[0],
    },
  ],
  duration: {
    started: '1-11-2022',
    closed: '2-11-2022',
  },
  created: date,
  updated: date,
};
const class3 = {
  title: 'Backend',
  description: 'Backend Online Course',
  order: 6,
  students: [
    {
      user: usersData[0],
      status: 'select',
      notes: 'отличный студент',
    },
    {
      user: usersData[1],
      status: 'select',
      notes: 'отличный студент',
    },
  ],
  lessons: [
    {
      lesson: lessonsItems[0],
    },
  ],
  duration: {
    started: '1-11-2022',
    closed: '2-11-2022',
  },
  created: date,
  updated: date,
};

data.push(class1, class2, class3);
data.forEach(value => {
  value.hash = uuid4();
});
export { data as classesArray };
