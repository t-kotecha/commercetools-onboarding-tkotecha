const {
    apiRoot,
    projectKey
} = require("./client.js");

module.exports.getAllProducts = () => {}

// filter query recalculates everything
// filter facet recalculates others only
module.exports.simulateSearch = () =>
    apiRoot
    .withProjectKey({
        projectKey
    })
    .productProjections()
    .search()
    .get({
        queryArgs: {
            "filter": 'categories.id:"d7c82c0e-d13d-49a5-b086-05a200be0088"',
            "filter.facets": 'variants.attributes.size:123'
        }
    })
    .execute();

module.exports.simulatePagination = (perPage, offset) =>
    apiRoot
    .withProjectKey({
        projectKey
    })
    .productProjections()
    .get({
        queryArgs: {
            limit: perPage,
            offset: offset
        }
    })
    .execute();