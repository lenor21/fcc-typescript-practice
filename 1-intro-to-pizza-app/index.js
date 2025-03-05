// this file contains bugs

const menu = [
  { name: 'Alfonso', price: 300 },
  { name: 'Empe', price: 180 },
  { name: 'GSM', price: 150 },
  { name: 'RH', price: 600 },
];

const cashInRegister = 0;
const nextOrderId = 1;
const orderQueue = [];

function addNewAlcohol(alcoholObj) {
  menu.push(alcoholObj);
}

function placeOrder(alcoholName) {
  const selectedAlcohol = menu.find(
    (alcoholObj) => alcoholObj.name === alcoholName
  );

  cashInRegister += selectedAlcohol.price;
  const newOrder = {
    id: nextOrderId++,
    alcohol: selectedAlcohol,
    status: 'ordered',
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId) {
  const order = orderQueue.find((order) => order.id === orderId);
  order.status = 'completed';
  return order;
}

addNewAlcohol({ name: 'Gin', price: 80 });
addNewAlcohol({ name: 'JD', price: 3000 });
addNewAlcohol({ name: 'Banayad', price: 500 });

placeOrder('Gin');
placeOrder('RH');

completeOrder('1');

console.log('Menu:', menu);
console.log('Cash in register', cashInRegister);
console.log('Order queue', orderQueue);
