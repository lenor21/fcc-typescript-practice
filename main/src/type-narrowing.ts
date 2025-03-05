type Alcohol = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  alcohol: Alcohol;
  status: 'ordered' | 'completed';
};

const menu: Alcohol[] = [
  { id: 1, name: 'Alfonso', price: 300 },
  { id: 2, name: 'Empe', price: 180 },
  { id: 3, name: 'GSM', price: 150 },
  { id: 4, name: 'RH', price: 600 },
];

let cashInRegister = 0;
let nextOrderId = 1;
const orderHistory: Order[] = [];

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
  const newOrder: Order = {
    id: nextOrderId++,
    alcohol: selectedAlcohol,
    status: 'ordered',
  };
  orderHistory.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number) {
  const order = orderHistory.find((order) => order.id === orderId);

  if (!order) {
    console.error(`${orderId} was not found in the orderQueue`);
    return;
  }

  order.status = 'completed';
  return order;
}

// create a utility function that has identifies either string or number
function getAlcoholDetail(alcohol: number | string) {
  const alcoholDetail = menu.find((item) => item.id === alcohol);
  return alcoholDetail;
}

addNewAlcohol({ id: 5, name: 'Gin', price: 80 });
addNewAlcohol({ id: 6, name: 'JD', price: 3000 });
addNewAlcohol({ id: 7, name: 'Banayad', price: 500 });

placeOrder('Gin');
placeOrder('RH');

completeOrder(1);

getAlcoholDetail(1);

console.log('Menu:', menu);
console.log('Cash in register', cashInRegister);
console.log('Order history', orderHistory);
console.log('Alcohol details', getAlcoholDetail);
