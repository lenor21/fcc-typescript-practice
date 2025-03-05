type UserRole = 'guest' | 'member' | 'admin' | 'contributor';

type User = {
  id: number;
  username: string;
  role: UserRole;
};

// this is the partial
type updatedUser = Partial<User>; // generic type

// this is the utility
// type updatedUser = {
//   id?: number;
//   username?: string;
//   role?: UserRole;
// };

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

function updateUser(id: number, updates: updatedUser): User {
  const foundUser = users.find((user) => user.id === id);

  if (!foundUser) {
    throw new Error(`${id} user id not found`);
  }

  Object.assign(foundUser, updates);

  return foundUser;
}

console.log('Update user', updateUser(2, { username: 'ronel_dejesus' }));
console.log(users);
