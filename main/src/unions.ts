type User = {
  username: string;
  role: 'guest' | 'member' | 'admin';
};

type UserRole = 'guest' | 'member' | 'admin'; // this is a unions

let userRole: UserRole = 'admin';

console.log(userRole);
