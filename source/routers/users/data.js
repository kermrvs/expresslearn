import uuid4 from 'uuid4';

export const data = [];

const roles = ['newbie', 'student', 'teacher'];

const date = new Date();

const user1 = {
  name: 'John Doe',
  email: 'jdoe@gmail.com',
  phone: '+380666666666',
  password: 'abcd1234',
  sex: 'm',
  roles: [roles[0]],
  created: date,
  updated: date,
};
const user2 = {
  name: 'John Doe2',
  email: 'jdoe2@gmail.com',
  phone: '+380666566666',
  password: 'abcd1234',
  sex: 'm',
  roles: [roles[1]],
  created: date,
  updated: date,
};
const user3 = {
  name: 'John Doe3',
  email: 'jdoe3@gmail.com',
  phone: '+380686666666',
  password: 'abcd1234',
  sex: 'm',
  roles: [roles[2]],
  created: date,
  updated: date,
};

data.push(user1, user2, user3);
data.forEach(value => {
  value.hash = uuid4();
});

export { data as usersData };
