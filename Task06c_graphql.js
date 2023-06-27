const { apiRoot, projectKey } = require("./handson/client.js");
const { log } = require("./logger");
const { getCustomerWithOrders, getAllProducts } = require("./handson/graphql.js");


const query = `
query {
    orders {
      results {
        customerGroup{
          key
        }
        lineItems {
          nameAllLocales {
            value
          }
        }
        totalPrice {
          type
          centAmount
        }
      }
    }
  }
  `;

const allProductsQuery = `
query{
  products{
    results {
      id
      masterData{
        current{
          nameAllLocales{
            value
          }
          masterVariant{
            prices{
              value{
                centAmount
              }
            }
          }
        }
      }
    }
  }
}
`;

  //getCustomerWithOrders(query).then(log).catch(log)
  getAllProducts(allProductsQuery).then(log).catch(log)
  // TODO: POST GraphQL query