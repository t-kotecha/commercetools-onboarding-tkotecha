const {
    apiRoot,
    projectKey
} = require("./client.js");

module.exports.createExtension = (extensionDraftData) =>
  apiRoot
    .withProjectKey({ projectKey })
    .extensions()
    .post({
      body: extensionDraftData
    })
    .execute();