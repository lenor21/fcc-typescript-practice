let ages: number[] = [100, 101];

//--------------------------

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address; // this is optional because of added ?
};

let person1: Person = {
  name: 'Ron',
  age: 24,
  isStudent: false,
};

let person2: Person = {
  name: 'Ronel',
  age: 24,
  isStudent: true,
};

let people: Array<Person> = [person1, person2]; //  Array<Person> can be used as an alternative to Person[]
