import { createRequire } from "module";

const require = createRequire(import.meta.url); // eslint-disable-line

const { curryN } = require("ramda");

/**
 * @name hasPermission
 * @method
 * @memberof Accounts
 * @param {Object} context App context
 * @param {String[]} permissions - Array of permission strings. The account must have at least one of them either globally or for the roleGroup.
 * @param {String} [roleGroup] - The shop ID for which the permissions are needed, or a more specific roles group. If not set,
 *   only global roles will be checked.
 * @returns {Boolean} True if the account with ID accountId has at least one of the requested permissions in the roleGroup group
 */
export default async function hasPermission(context, permissions, roleGroup) {
  console.log("main plugin -----------------------");

  let userHasPermission;

  for (const hasPermissionFunc of context.getFunctionsOfType("hasPermission")) {
    // eslint-disable-next-line no-await-in-loop
    userHasPermission = await hasPermissionFunc(context, permissions, roleGroup);
    if (userHasPermission === false) break;
  }

  console.log(" ----- userHasPermission", userHasPermission);


  // If we have no registered hasPermission functions,
  // assume user is unauthorized
  if (!userHasPermission) return false;

  return userHasPermission;
}

const hasPermissionCurried = curryN(2, hasPermission);

/**
 * @summary Get a `hasPermission` function bound to the current user context
 * @param {Object} context App context
 * @return {Function} hasPermission function for `context.user`
 */
export function getHasPermissionFunctionForUser(context) {
  return hasPermissionCurried(context);
}
