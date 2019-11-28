export const defaultCustomerRoles = [
  "account/profile",
  "account/login",
  "cart/completed",
  "guest",
  "index",
  "product",
  "tag"
];

export const defaultVisitorRoles = [
  "anonymous",
  "account/login",
  'package',
  "cart/completed",
  "guest",
  "index",
  "product",
  "tag"
];

export const defaultShopManagerRoles = [
  ...defaultCustomerRoles,
  "createProduct",
  "dashboard",
  "media/create",
  "media/update",
  "media/delete",
  "product/admin",
  "shopSettings"
];

export const defaultOwnerRoles = [
  ...defaultShopManagerRoles,
  "owner"
];
