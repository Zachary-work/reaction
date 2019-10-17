import i18n from "./i18n/index.js";
import hasPermission from "./util/hasPermission.js";
import shopsUserHasPermissionFor from "./util/shopsUserHasPermissionFor.js";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionNodeApp} app The ReactionNodeApp instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
    label: "Simple Authorization",
    name: "reaction-simple-authorization",
    i18n,
    functionsByType: {
      hasPermission: [hasPermission],
      shopsUserHasPermissionFor: [shopsUserHasPermissionFor]
    }
  });
}
