var myName = 'Ronel';
var numberOfWheels = 4;
var isStudent = false;
// --------------------------------
var menu = [
    { name: 'Alfonso', price: 300 },
    { name: 'Empe', price: 180 },
    { name: 'GSM', price: 150 },
    { name: 'RH', price: 600 },
];
var cashInRegister = 0;
var nextOrderId = 1;
var orderQueue = [];
function addNewAlcohol(alcoholObj) {
    menu.push(alcoholObj);
}
function placeOrder(alcoholName) {
    var selectedAlcohol = menu.find(function (alcoholObj) { return alcoholObj.name === alcoholName; });
    if (!selectedAlcohol) {
        console.error("".concat(alcoholName, " does not exist in the menu"));
        return;
    }
    cashInRegister += selectedAlcohol.price;
    var newOrder = {
        id: nextOrderId++,
        alcohol: selectedAlcohol,
        status: 'ordered',
    };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    var order = orderQueue.find(function (order) { return order.id === orderId; });
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
