const { importApiRoot, projectKey, apiRoot } = require("./client.js");
const csvtojsonV2 = require("csvtojson");

module.exports.createImportContainer = (containerKey) =>{
  return importApiRoot.withProjectKeyValue({projectKey}).importContainers().post({
    body: {
      key: containerKey
    }
  }).execute()
}

module.exports.checkImportSummary = (importContainerKey) => {
  return importApiRoot.withProjectKeyValue({projectKey}).importContainers().withImportContainerKeyValue({importContainerKey}).importSummaries().get().execute();
}

module.exports.checkImportOperations = (importContainerKey) => {
  return importApiRoot.withProjectKeyValue({projectKey}).importContainers().withImportContainerKeyValue({importContainerKey}).importOperations().get().execute();
}

module.exports.checkImportOperationById = (id) => {
  return importApiRoot.withProjectKeyValue({projectKey}).importOperations().withIdValue({id}).get().execute();
}

module.exports.importProducts = async (importContainerKey) => {
  return importApiRoot.withProjectKeyValue({projectKey}).productDrafts().importContainers().withImportContainerKeyValue({importContainerKey}).post({
    body: await createImportProductsDraft()
  }).execute();
}

const createImportProductsDraft = async () => {
  let arr = await getProductDraftsArray();
  console.log(arr);
  return {
    type: "product-draft",
    resources: arr,
  };
};

const getProductDraftsArray = () => {
  // get data from csv
  // create product drafts array and send it back
  let productDraftsArray = [];
  let participantNamePrefix = "ff";
  return csvtojsonV2()
    .fromFile("./products.csv")
    .then((products) => {
      products.forEach((product) => {
        productDraftsArray.push({
          key: participantNamePrefix + "-" + product.productName,
          name: {
            "de": product.productName,
          },
          productType: {
            typeId: "product-type",
            key: product.productType,
          },
          slug: {
            "de": participantNamePrefix + "-" + product.productName,
          },
          description: {
            "de": product.description,
          },
          masterVariant: {
            sku: participantNamePrefix + "-" +product.inventoryId,
            key: participantNamePrefix + "-" +product.productName,
            prices: [
              {
                value: {
                  type: "centPrecision",
                  currencyCode: product.currencyCode,
                  centAmount: parseInt(product.basePrice),
                },
              },
            ],
            images: [
              {
                url: product.imageUrl,
                dimensions: { w: 177, h: 237 },
              },
            ],
          },
        });
      });
      return productDraftsArray;
    });
};
