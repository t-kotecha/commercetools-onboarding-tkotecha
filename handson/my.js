const { apiRoot, myApiRoot, projectKey } = require("./client.js");

//TODO me endpoint


module.exports.getMe = () => {
    return myApiRoot
        .withProjectKey({ projectKey })
        .me().get().execute()
    // return apiRoot.withProjectKey({projectKey}).me().login().post({
    //     body:{
    //         email: 'test@test.com',
    //         password: 'password'
    //     }
    // }).execute()
}

module.exports.getMyOrders = () => {}