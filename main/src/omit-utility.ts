type UserRole = 'guest' | 'member' | 'admin' | 'contributor';

type User = {
  id: number;
  username: string;
  role: UserRole;
};

let nextUserId = 1;

const users: User[] = [
  {
    id: nextUserId++,
    username: 'Ronel',
    role: 'guest',
  },
  {
    id: nextUserId++,
    username: 'Ron',
    role: 'member',
  },
  {
    id: nextUserId++,
    username: 'Ronel De jesus',
    role: 'admin',
  },
  {
    id: nextUserId++,
    username: 'Ron De jesus',
    role: 'contributor',
  },
];

// omit utility type
// it will not include id and user
function addNewUser(newUser: Omit<User, 'id' | 'user'>): User {
  const user: User = { id: nextUserId++, ...newUser };
  users.push(user);
  return user;
}

console.log('Add new user', addNewUser({ username: 'ester', role: 'guest' }));

console.log(users);
