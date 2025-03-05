type UserRole = 'guest' | 'member' | 'admin';

type User = {
  username: string;
  role: UserRole;
};

const users: User[] = [
  {
    username: 'Ronel',
    role: 'guest',
  },
  {
    username: 'Ron',
    role: 'member',
  },
  {
    username: 'Ronel De jesus',
    role: 'admin',
  },
];

// this function always return explicit User type
function fetchUserDetails(username: string): User {
  const user = users.find((user) => user.username === username);

  if (!user) {
    throw new Error(`User with username ${username} not found`);
  }

  return user;
}

console.log('Fetch user', fetchUserDetails('Ronel'));
