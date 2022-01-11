import uuid4 from 'uuid4';

export const data = [];
const date = new Date();
const listItems = ['standard', 'select', 'premium'];
const lesson1 = {
  title: 'Backend',
  description: 'Backend Online Course',
  order: 5,
  availability: [[listItems[0]]],
  content: {
    videos: [
      {
        title: 'Node.js architecture',
        order: 1,
        uri: 'https://lectrum.io/videos/lesson-1',
        hash: uuid4(),
      },
    ],
    keynotes: [
      {
        title: 'Node.js architecture',
        order: 1,
        uri: 'https://lectrum.io/keynotes/lesson-1',
        hash: uuid4(),
      },
    ],
  },
  created: date,
  modified: date,
};

data.push(lesson1);

data.forEach(value => {
  value.hash = uuid4();
});
export { data as lessonsItems };
