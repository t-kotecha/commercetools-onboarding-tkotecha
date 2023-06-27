const {
  apiRoot,
  projectKey
} = require("./client.js");
const {
  getCustomerByKey
} = require("./customer.js");

module.exports.createCart = (cartDraftData) => {
  return apiRoot.withProjectKey({
    projectKey
  }).carts().post({
    body: createCartDraft(cartDraftData)
  }).execute();
}

module.exports.createAnonymousCart = () =>
  apiRoot.withProjectKey({
    projectKey
  })
  .carts()
  .post({
    body: {
      currency: "EUR",
      country: "DE",
    }
  })
  .execute()

module.exports.customerSignIn = (customerDetails) => {}

module.exports.getCartById = (ID) => {
  return apiRoot.withProjectKey({
    projectKey
  }).carts().withId({
    ID
  }).get().execute()
}

module.exports.addLineItemsToCart = (cartId, arrayOfSKUs) => {

  return this.getCartById(cartId).then((cart) => {
    const updateActions = [];
    arrayOfSKUs.forEach(sku => {
      updateActions.push({
        action: 'addLineItem',
        sku
      });
    })

    return apiRoot.withProjectKey({
      projectKey
    }).carts().withId({
      ID: cartId
    }).post({
      body: {
        actions: updateActions,
        version: cart.body.version
      }
    }).execute();
  });
}

module.exports.addDiscountCodeToCart = (cartId, discountCode) => {
  return this.getCartById(cartId).then((cart) => {
    const updateActions = [{
      action: 'addDiscountCode',
      code: discountCode
    }];

    return apiRoot.withProjectKey({
      projectKey
    }).carts().withId({
      ID: cartId
    }).post({
      body: {
        actions: updateActions,
        version: cart.body.version
      }
    }).execute();
  });
}

module.exports.createOrderFromCart = (cartId) => {
  return createOrderFromCartDraft(cartId).then((orderFromCartDraft) => {
    return apiRoot.withProjectKey({projectKey}).orders().post({
      body: orderFromCartDraft
    }).execute();
  })
}

const createCartDraft = (cartDraftData) => {
  const {
    currency,
    customerId,
    countryCode
  } = cartDraftData;
  return {
    currency,
    customerId,
    shippingAddress: {
      country: countryCode,
    },
  };
};

const createOrderFromCartDraft = (cartId) => {
  return this.getCartById(cartId).then((cart) => {
    return {
      id: cart.body.id,
      version: cart.body.version,
    };
  });
};

module.exports.getOrderById = (ID) => {
  return apiRoot.withProjectKey({projectKey}).orders().withId({ID}).get().execute();
}

module.exports.updateOrderCustomState = (orderId, customStateKey) => {}

module.exports.createPayment = (paymentDraft) => {
  return apiRoot.withProjectKey({projectKey}).payments().post({
    body: paymentDraft
  }).execute();
}

module.exports.setOrderState = (orderId, stateName) => {
  return this.getOrderById(orderId).then((order) => {
    const updateActions = [{
      action: 'changeOrderState',
      orderState: stateName
    }];

    return apiRoot.withProjectKey({
      projectKey
    }).orders().withId({
      ID: orderId
    }).post({
      body: {
        actions: updateActions,
        version: order.body.version
      }
    }).execute();
  });
}

module.exports.addPaymentToOrder = (orderId, paymentId) => {
  return this.getOrderById(orderId).then((order) => {
    const updateActions = [{
      action: 'addPayment',
      payment: {
        id: paymentId
      }
    }];

    return apiRoot.withProjectKey({
      projectKey
    }).orders().withId({
      ID: orderId
    }).post({
      body: {
        actions: updateActions,
        version: order.body.version
      }
    }).execute();
  });
}