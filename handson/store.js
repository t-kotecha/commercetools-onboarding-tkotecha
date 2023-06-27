const { apiRoot, storeApiRoot, projectKey } = require("./client.js");
const { getCustomerByKey } = require("./customer");

//TODO store and productProjection endpoint

module.exports.createStoreByKey = (key) =>
  apiRoot.withProjectKey({projectKey})
    .stores()
    .post({
      body: {
        key: key
      }
    })
    .execute()

module.exports.getStoreByKey = (key) =>
  apiRoot.withProjectKey({projectKey})
    .stores()
    .withKey({key})
    .get()
    .execute()


module.exports.associateCustomerWithAStore = (customerKey, storeKey) => {
  return getCustomerByKey(customerKey).then((customer) => {
    return apiRoot.withProjectKey({projectKey}).customers().withKey({key: customerKey}).post({
      body: {
        actions: [{
          action: 'addStore',
          store: {
            key: storeKey
          }
        }],
        version: customer.body.version
      }
    }).execute();
  })
}

module.exports.getCustomersInStore = (storeKey) => {
  return storeApiRoot.withProjectKey({projectKey}).inStoreKeyWithStoreKeyValue({storeKey}).customers().get().execute();
}

module.exports.addProductSelectionToStore = async (storeKey, productSelectionKey) => {}

module.exports.getProductsInStore = (storeKey) => {}

module.exports.createInStoreCart = (storeKey, customer) => {}