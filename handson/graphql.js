const {
    apiRoot,
    projectKey
} = require("./client.js");

module.exports.getCustomerWithOrders = (query) =>
  apiRoot
    .withProjectKey({ projectKey })
    .graphql()
    .post({
      body: {
        query,
        variables: {}
      }
    })
    .execute();

module.exports.getAllProducts = (query) =>
    apiRoot.withProjectKey({projectKey})
    .graphql()
    .post({
        body: {
            query,
            variables: {}
        }
    })
    .execute()
