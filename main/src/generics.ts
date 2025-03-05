const gameScore = [12, 34, 18, 11, 21, 65, 88];
const favoriteThings = [
  'raindrops on roses',
  'cool pillow',
  'clean bed',
  'motorcycle that run fast',
];
const voters = [
  { name: 'Ron', age: 24 },
  { name: 'Ronel', age: 25 },
  { name: 'Ester', age: 3 },
];

// it doesnt matter what will you name the type
// example: <PlaceholderType>, PlaceholderType[]
function getLastItem<Type>(array: Type[]): Type | undefined {
  return array[array.length - 1];
}

console.log('get last item', getLastItem(gameScore)); // returns number
console.log('get last item', getLastItem(favoriteThings)); // returns string
console.log('get last item', getLastItem(voters)); // returns object
