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

let cashInRegister = 0;
let nextOrderId = 1;
let nextAlcoholId = 1;

const menu: Alcohol[] = [
  { id: nextAlcoholId++, name: 'Alfonso', price: 300 },
  { id: nextAlcoholId++, name: 'Empe', price: 180 },
  { id: nextAlcoholId++, name: 'GSM', price: 150 },
  { id: nextAlcoholId++, name: 'RH', price: 600 },
];

const orderHistory: Order[] = [];

// function addToArray<Type>(array: Type[], item: Type): Type[] {
//   array.push(item);
//   return array;
// }

// addToArray<Alcohol>(menu, { id: nextAlcoholId++, name: 'Gin', price: 80 });
// addToArray<Order>(orderHistory, {
//   id: nextOrderId++,
//   alcohol: menu[2],
//   status: 'completed',
// });

function addNewAlcohol(alcoholObj: Omit<Alcohol, 'id'>): Alcohol {
  const newAlcohol = {
    id: nextAlcoholId++,
    ...alcoholObj,
  };

  menu.push(newAlcohol);
  return newAlcohol;
}

function placeOrder(alcoholName: string): Order | undefined {
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

function completeOrder(orderId: number): Order | undefined {
  const order = orderHistory.find((order) => order.id === orderId);

  if (!order) {
    console.error(`${orderId} was not found in the orderQueue`);
    return;
  }

  order.status = 'completed';
  return order;
}

function getAlcoholDetail(identifier: number | string): Alcohol | undefined {
  if (typeof identifier === 'string') {
    return menu.find(
      (alcohol) => alcohol.name.toLowerCase() === identifier.toLowerCase()
    );
  } else {
    return menu.find((alcohol) => alcohol.id === identifier);
  }
}

addNewAlcohol({ name: 'Gin', price: 80 });
addNewAlcohol({ name: 'JD', price: 3000 });
addNewAlcohol({ name: 'Banayad', price: 500 });

placeOrder('Gin');
placeOrder('RH');

completeOrder(1);

getAlcoholDetail(1);

console.log('Menu:', menu);
console.log('Cash in register', cashInRegister);
console.log('Order history', orderHistory);
console.log('Alcohol details', getAlcoholDetail(1));
console.log('Alcohol details', getAlcoholDetail('RH'));
