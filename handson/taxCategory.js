const {
    apiRoot,
    projectKey
} = require("./client.js");


module.exports.getTaxCategoryByKey  = (key) =>
    apiRoot.withProjectKey({
        projectKey: projectKey
    }).taxCategories()
    .withKey({
        key: key
    }).get().execute()