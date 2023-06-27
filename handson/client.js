const {
  createClient,
  createHttpClient,
  createAuthForClientCredentialsFlow,
  createAuthForPasswordFlow
} = require('@commercetools/sdk-client-v2')
const {
  createApiBuilderFromCtpClient
} = require('@commercetools/platform-sdk')

const {
  createApiBuilderFromCtpClient: createApiBuilderFromCtpClientOnlyForImports,
} = require("@commercetools/importapi-sdk");
require("dotenv").config();

const fetch = require("node-fetch");

const projectKey = process.env.CTP_PROJECT_KEY;

//use .env for credentials process.env.adminClientId 

const getClient = () => {
  const authMiddleware = createAuthForClientCredentialsFlow({
    host: process.env.CTP_AUTH_URL,
    projectKey,
    credentials: {
      clientId: process.env.CTP_CLIENT_ID,
      clientSecret: process.env.CTP_CLIENT_SECRET,
    },
    scopes: [process.env.CTP_SCOPES],
    fetch,
  })
  const httpMiddleware = createHttpClient({
    host: process.env.CTP_API_URL,
    fetch,
  })
  const client = createClient({
    middlewares: [authMiddleware, httpMiddleware],
  })
  return client
};

const getImportClient = () => {
  const authMiddleware = createAuthForClientCredentialsFlow({
    host: process.env.CTP_AUTH_URL,
    projectKey,
    credentials: {
      clientId: process.env.CTP_CLIENT_ID,
      clientSecret: process.env.CTP_CLIENT_SECRET,
    },
    scopes: [process.env.CTP_SCOPES],
    fetch,
  })
  const httpMiddleware = createHttpClient({
    host: process.env.API_URL,
    fetch,
  })
  const client = createClient({
    middlewares: [authMiddleware, httpMiddleware],
  })
  return client;
};

const getStoreClient = () => {
  const authMiddleware = createAuthForClientCredentialsFlow({
      host: process.env.CTP_AUTH_URL,
      projectKey,
      credentials: {
          clientId: process.env.storeClientId,
          clientSecret: process.env.storeSecret,
      },
      scopes: [process.env.storeScopes],
      fetch,
  })
  const httpMiddleware = createHttpClient({
      host: process.env.CTP_API_URL,
      fetch,
  })
  const client = createClient({
      middlewares: [authMiddleware, httpMiddleware],
  })

  return client
};

const getMLClient = () => {};

const getMyAPIClient = () => {
  const authMiddleware = createAuthForPasswordFlow({
    host: process.env.CTP_AUTH_URL,
    projectKey,
    credentials: {
      clientId: process.env.storeClientId,
      clientSecret: process.env.storeSecret,
      user: {
        username: 'test2@test.com',
        password: 'password'
      }
    },
    scopes: [process.env.storeScopes],
    fetch,
  })
  const httpMiddleware = createHttpClient({
    host: process.env.CTP_API_URL,
    fetch,
  })
  const client = createClient({
    middlewares: [authMiddleware, httpMiddleware],
  })
  return client
};

module.exports.apiRoot = createApiBuilderFromCtpClient(getClient());

module.exports.importApiRoot = createApiBuilderFromCtpClientOnlyForImports(
  getImportClient()
);

module.exports.storeApiRoot = createApiBuilderFromCtpClient(getStoreClient());

module.exports.myApiRoot = createApiBuilderFromCtpClient(getMyAPIClient());
module.exports.projectKey = projectKey;