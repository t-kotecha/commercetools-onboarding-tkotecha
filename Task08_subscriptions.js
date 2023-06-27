const { apiRoot, projectKey } = require("./handson/client.js");
const {log} = require('./logger');
const { createSubscription } = require("./handson/subscriptions.js");

// key - String - Optional - User-specific unique identifier for the subscription
// destination - Destination - The Message Queue into which the notifications are to be sent
// messages - Array of MessageSubscription - Optional - The messages to be subscribed to.
// changes

const subscriptionDraft = {
   key:'subscriptionSample',
   destination:{
       type:'SQS',
       queueUrl:"https://sqs.us-east-1.amazonaws.com/455898449051/commerceToolsOnboardingTask8Queue",
       region:'us-east-1',
       authenticationMode: 'IAM'
   },
   messages:[{
    resourceTypeId:'order',
    type:'OrderCreated'
   }],

}

// TODO : CREATE the subscription
createSubscription(subscriptionDraft).then(log).catch(log)
