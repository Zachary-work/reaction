import { Groups } from "/lib/collections";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import Reaction from "/imports/plugins/core/core/server/Reaction";

Meteor.publish("Groups", function (query = {}) {
  check(query, Object);
  
  const readPermissions = ["reaction-orders", "owner", "admin", "reaction-accounts"];
  if (Roles.userIsInRole(Reaction.getUserId(), readPermissions, Reaction.getShopId()) && !query.shopId) {
    return Groups.find();
  }
  
  const shopId = query.shopId || Reaction.getShopId();

  if (!shopId) {
    return this.ready();
  }
  const select = query || {};
  select.shopId = shopId;
  return Groups.find(select);
});
