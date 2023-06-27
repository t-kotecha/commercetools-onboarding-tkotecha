const { apiRoot, projectKey } = require("./handson/client.js");
const { log } = require("./logger.js");
const { getProject } = require("./handson/project.js");
const { getShippingMethodById } = require("./handson/shippingMethods.js");
const { getTaxCategoryByKey } = require("./handson/taxCategory.js");

getProject().then(log).catch(log);

getShippingMethodById('a799a85e-e8d4-4807-b75f-9bb2794139f2').then(log).catch(log)

getTaxCategoryByKey('default-tax').then(log).catch(log)

// TODO 1: Complete the functions in
// ./handson/client.js

// TODO : GET project details
// So this code displays the project configuration
// https://docs.commercetools.com/http-api-projects-project.html#get-project

// TODO : GET ShippingMethod by ID

// TODO : GET Tax Category by key
