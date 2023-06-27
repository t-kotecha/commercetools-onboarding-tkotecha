const {
  createCustomer,
  getCustomerById,
  getCustomerByKey,
  createCustomerToken,
  confirmCustomerEmail,
  assignCustomerToCustomerGroup,
} = require("./handson/customer");
const { log } = require("./logger.js");
const customerDraftData = {
  firstName: "test2",
  lastName: "test2",
  email: "test2@test.com",
  password: "password",
  key: "test1234",
  countryCode: "DE",
};

//createCustomer(customerDraftData).then(log).catch(log);

getCustomerByKey('test123').then(log).catch(log);

//getCustomerById("9cd77a18-b643-444d-8290-1d1db6d0eb20").then(log).catch(log);

// getCustomerByKey('test123')
//   .then(createCustomerToken)
//   .then(confirmCustomerEmail)
//   .then(log)
//   .catch(log);

//assignCustomerToCustomerGroup('test123','indoor-customers').then(log).catch(log);

