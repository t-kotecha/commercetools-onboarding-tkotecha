const { getAllProducts, simulateSearch, simulatePagination } = require("./handson/search");
const { log } = require("./logger");

//getAllProducts().then(log).catch(log)

simulatePagination(500, 0).then(log).catch(log)
//simulateSearch().then(log).catch(log);
