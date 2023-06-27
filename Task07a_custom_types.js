const { apiRoot, projectKey } = require("./handson/client.js");
const {log} = require('./logger');
const {createCustomType} = require("./handson/customTypes.js")


const typeDraft = {
    key:'ff-allowed-to-place-orders',
    name:{
        "de":'ff allowed to place orders',
        "en":'ff allowed to place orders'
    },
    description:{
        "de":'allow a customer to place orders',
        "en":'allow a customer to place orders'
    },
    resourceTypeIds:['customer'],
    fieldDefinitions:[{
        type:{
            name:'Boolean'
        },
        name:'allowed-to-place-orders',
        label:{
            "de":'Allowed to place orders',
            "en":'Allowed to place orders'
        },
        required:false,
    }]
}

createCustomType(typeDraft).then(log).catch(log)

// TODO : CREATE the custom type
