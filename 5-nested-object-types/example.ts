type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address; // this is optional because of added ?
};

let person: Person = {
  name: 'Ron',
  age: 24,
  isStudent: false,
};

let person2: Person = {
  name: 'Ronel',
  age: 24,
  isStudent: true,
  address: {
    street: '045 Control',
    city: 'Macabebe',
    country: 'Philippines',
  },
};

function displayInfo(person) {
  console.log(`${person.name} lives at ${person.address?.street}`);
}

displayInfo(person);
