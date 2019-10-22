import { createRequire } from "module";
import gql from "graphql-tag";
import fetch from "node-fetch";
import config from "../../../core/config.js";

// esmodules doesn't allow name imports, so we need
// to use `require` for the meantime until these
// packages update to default exports
const require = createRequire(import.meta.url);
const { ApolloClient } = require("apollo-client");
const { InMemoryCache } = require("apollo-cache-inmemory");
const { HttpLink } = require("apollo-link-http");

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: config.AUTHORIZATION_URL,
  fetch
});

const client = new ApolloClient({
  cache,
  link
});

/**
 * @name hasAuthorization
 * @summary helper function to check authorization with authz service
 * @param {Object} variables - data to be passed to in the GQL query
 * @returns {Boolean} - true/false
 */
export default async function hasAuthorization(variables) {
  const query = gql`
    query isAuthorized(
      $subject: String
      $resource: String
      $action: String
      $context: JSONObject
    ) {
      isAuthorized(
        flavor: glob
        input: {
          subject: $subject
          action: $action
          context: $context
          resource: $resource
        }
      ) {
        allowed
      }
    }
  `;

  const res = await client.query({
    query,
    variables,
    fetchPolicy: "no-cache"
  });

  return res.data.isAuthorized.allowed;
}
