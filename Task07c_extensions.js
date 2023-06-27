const { apiRoot, projectKey } = require("./handson/client.js");
const {log} = require('./logger');
const { createExtension } = require("./handson/extensions.js");



const extensionDraft = {
    key:'cartChecker',
    destination:{
        type:'HTTP',
        url:'https://dhttqo2bvvn6oes6tecz6lhd6u0yzpxd.lambda-url.us-east-1.on.aws/'
    },
    triggers:[{
        resourceTypeId:'cart',
        actions:['Create']
    }]
}

createExtension(extensionDraft).then(log).catch(log)
// TODO: CREATE the extension
