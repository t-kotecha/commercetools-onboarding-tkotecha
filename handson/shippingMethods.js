const {
    apiRoot,
    projectKey
} = require("./client.js");


module.exports.getShippingMethodById = (ID) =>
    apiRoot.withProjectKey({
        projectKey: projectKey
    }).shippingMethods()
    .withId({
        ID: ID
    }).get().execute()