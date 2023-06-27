const {createStoreByKey, associateCustomerWithAStore, getStoreByKey, getCustomersInStore, createInStoreCart } = require("./handson/store");
const { getCustomerByKey } = require("./handson/customer");
const { log } = require("./logger");

// createStoreByKey('berlin-store').then(log).catch(log);

// getStoreByKey('berlin-store').then(log).catch(log);

const customerKey = 'test123', storeKey = 'berlin-store';

getCustomerByKey(customerKey).then(log).catch(log);

// associateCustomerWithAStore(customerKey, storeKey).then(log).catch(log);

// getCustomersInStore('berlin-store').then(customers => {
//     log(customers.body.count);
//     customers.body.results.forEach(customer =>
//         log(customer.id)
//     )}).catch(log);

// getCustomerByKey("test123").then((customer) => {
//    createInStoreCart("berlin-store",customer).then(log).catch(log);
// }).catch(log);
