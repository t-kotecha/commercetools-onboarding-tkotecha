const { 
    createImportContainer,
    importProducts,
    checkImportSummary,
    checkImportOperations, 
    checkImportOperationById
    } = require("./handson/importService");
const { log } = require("./logger.js");

const containerKey = "ff-ImportContainer";

// Create an import container
//createImportContainer(containerKey).then(log).catch(log);

// import products
//importProducts(containerKey).then(log).catch(log);

// check import summary for your container
// checkImportSummary(containerKey).then(log).catch(log);

// check import operations for your container
checkImportOperations(containerKey).then(operations =>
   operations.body.results.forEach(operation =>
       log(operation.id + " : " +operation.state)
   )
)

// Check the status of import operations by their Ids
// checkImportOperationById("53ebab44-cb76-444b-924c-80956aa63aa2").then(log).catch(log);
// checkImportOperationById("15d27fcc-2604-4ad9-a976-773f8f5f0eee").then(log).catch(log);




// https://github.com/commercetools/commercetools-project-sync#run
// docker run \
// -e SOURCE_PROJECT_KEY=xxx \
// -e SOURCE_CLIENT_ID=xxx \
// -e SOURCE_CLIENT_SECRET=xxx \
// -e TARGET_PROJECT_KEY=xxx \
// -e TARGET_CLIENT_ID=xxx \
// -e TARGET_CLIENT_SECRET=xxx \
// commercetools/commercetools-project-sync:5.1.2 -s all
