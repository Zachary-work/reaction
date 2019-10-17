import { createRequire } from "module";

const require = createRequire(import.meta.url); // eslint-disable-line

const { curryN } = require("ramda");

/**
 * @name shopsUserHasPermissionFor
 * @method
 * @memberof Accounts
 * @param {Object} context App context
 * @param {String} permission - Permission to check for.
 * @returns {Array} Shop IDs user has provided permissions for
 */
export default async function shopsUserHasPermissionFor(context, permission) {
  const { user } = context.user;
  let shopIds;

  for (const shopsUserHasPermissionForFunc of context.getFunctionsOfType("shopsUserHasPermissionFor")) {
    // eslint-disable-next-line no-await-in-loop
    shopIds = await shopsUserHasPermissionForFunc(user, permission);
  }

  return shopIds;
}

const shopsUserHasPermissionForCurried = curryN(2, shopsUserHasPermissionFor);

/**
 * @summary Get a `shopsUserHasPermissionFor` function bound to the current user context
 * @param {Object} context App context
 * @return {Function} shopsUserHasPermissionFor function for `context.user`
 */
export function getShopsUserHasPermissionForFunctionForUser(context) {
  return shopsUserHasPermissionForCurried(context);
}
