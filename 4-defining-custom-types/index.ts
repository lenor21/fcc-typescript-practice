type Alcohol = {
  name: string;
  price: number;
};

const menu = [
  { name: 'Alfonso', price: 300 },
  { name: 'Empe', price: 180 },
  { name: 'GSM', price: 150 },
  { name: 'RH', price: 600 },
];

let cashInRegister = 0;
let nextOrderId = 1;
const orderQueue = [];

function addNewAlcohol(alcoholObj: Alcohol) {
  menu.push(alcoholObj);
}

function placeOrder(alcoholName: string) {
  const selectedAlcohol = menu.find(
    (alcoholObj) => alcoholObj.name === alcoholName
  );

  if (!selectedAlcohol) {
    console.error(`${alcoholName} does not exist in the menu`);
    return;
  }

  cashInRegister += selectedAlcohol.price;
  const newOrder = {
    id: nextOrderId++,
    alcohol: selectedAlcohol,
    status: 'ordered',
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number) {
  const order = orderQueue.find((order) => order.id === orderId);
  order.status = 'completed';
  return order;
}

addNewAlcohol({ name: 'Gin', price: 80 });
addNewAlcohol({ name: 'JD', price: 3000 });
addNewAlcohol({ name: 'Banayad', price: 500 });

placeOrder('Gin');
placeOrder('RH');

completeOrder(1);

console.log('Menu:', menu);
console.log('Cash in register', cashInRegister);
console.log('Order queue', orderQueue);
