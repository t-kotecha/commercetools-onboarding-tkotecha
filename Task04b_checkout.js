const checkout = require("./handson/order");
const { log } = require("./logger.js");

const customerKey = "9cd77a18-b643-444d-8290-1d1db6d0eb20";
const cartId = "8c0b481b-d87b-4363-9649-ca86fb2d0baa";
const orderId = "14c881dd-707a-47cd-9c46-53cecd12e225";

const cartDraftData = {
  currency: "EUR",
  customerId: "efb84856-6bee-4266-b79c-91887a26bd7f",
  countryCode: "DE",
};

const paymentDraft = {
  key:"payment" + Math.random().toString(36).substr(2, 5),
  amountPlanned:{
    currencyCode: 'EUR',
    centAmount: 5000
  }
}

//checkout.addPaymentToOrder(orderId, "cb01280e-9bd0-4bdd-b98a-e05bca4ba9ca").then(log).catch(log)
// create a cart and update the catId variable
//checkout.createCart(cartDraftData).then(log).catch(log);

// checkout.addLineItemsToCart(cartId,['ff-SKU101','ff-SKU102']).then(log).catch(log);

//checkout.addDiscountCodeToCart(cartId, "SUMMER").then(log).catch(log);
// checkout.getCartById("8c0b481b-d87b-4363-9649-ca86fb2d0baa").then(log).catch(log);

// create order from cart and update the orderId
// checkout.createOrderFromCart(cartId).then(log).catch(log);

//checkout.getOrderById("41e79c45-9513-4371-a9db-e08b85bcc83e").then(log).catch(log);

// set order state to confirmed and custom workflow state to order packed
// checkout.setOrderState(orderId, 'Confirmed').then(log).catch(log);
// checkout.updateOrderCustomState(orderId,"ff-order-packed").then(log).catch(log);

const checkoutProcess = async () => {
  let emptyCart = await checkout.createCart(cartDraftData);

  let filledCart = await checkout.addLineItemsToCart(
    emptyCart.body.id,['ff-SKU101','ff-SKU102']
  );
  filledCart = await checkout.addDiscountCodeToCart(
    emptyCart.body.id, 'SUMMER'
  );

  let order = await checkout.createOrderFromCart(filledCart.body.id);
  const payment = await checkout.createPayment(paymentDraft);
  order = await checkout.addPaymentToOrder(order.body.id, payment.body.id);
  order = await checkout.setOrderState(order.body.id, 'Confirmed');
  //order = await checkout.updateOrderCustomState(order.body.id,'ff-order-packed');
  if (order) {
    return {
      status: 201,
      message: "order created: " + order.body.id,
    };
  }
};

checkoutProcess().then(log).catch(log);
