import Random from "@reactioncommerce/random";
import rawCollections from "/imports/collections/rawCollections";

/**
 * @name createNewGroup
 * @summary Creates a default new group for a shop
 * @param {String} name Name of Group
 * @param {String} slut Slut of Group
 * @param {String[]} permissions Array of permissions
 * @returns {String} Group _id
 */
export default async function createNewGroup(name, slug, permissions = []) {
  const { Groups, Shops } = rawCollections;
  const { _id: shopId } = await Shops.findOne({ shopType: 'primary' });

  // Create the tree
  const newId = Random.id();
  await Groups.insertOne({
    _id: newId,
    name,
    slug,
    permissions,
    shopId,
  });

  return newId;
}
