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

export const defaultPartnerRoles = [
  'account/login',
  'account/verify',
  'account/profile',
  'account/enroll',
  'cart/completed',
  'index',
  'tag',
  'dashboard',
  'Companies',
  'companies/add',
  'companies/edit',
  'companies/list',
  'Suppliers',
  'suppliers/add',
  'suppliers/edit',
  'suppliers/list',
  'bp_accounts',
  'accounts/add',
  'accounts/edit',
  'Shops',
  'shops/add',
  'shops/edit',
  'reset-password',
];

export const defaultSupplierRoles = [
  'account/login',
  'account/verify',
  'account/profile',
  'account/enroll',
  'cart/completed',
  'index',
  'tag',
  'dashboard',
  'Companies',
  'companies/add',
  'companies/edit',
  'companies/list',
  'Suppliers',
  'suppliers/add',
  'suppliers/edit',
  'suppliers/list',
  'bp_accounts',
  'accounts/add',
  'accounts/edit',
  'Shops',
  'shops/edit',
  'createProduct',
  'product',
  'product/admin',
  'reset-password',
  'amaz_products/list',
  'shipping',
  'amaz_fulfillment_types/add',
  'amaz_fulfillment_types/edit',
  'amaz_fulfillment_types/list',
  'amaz_fulfillment_methods/list',
  'amaz_fulfillment_methods/add',
  'amaz_fulfillment_methods/edit',
  'amaz_orders/list',
  'amaz_orders/edit',
  'amaz_coupons/list',
  'amaz_coupons/edit',
  'amaz_digital_orders/list',
  'amaz_digital_orders/edit'
];

export const defaultCompanyRoles = [
  'account/login',
  'account/verify',
  'account/profile',
  'account/enroll',
  'cart/completed',
  'index',
  'tag',
  'dashboard',
  'bp_accounts',
  'accounts/add',
  'accounts/edit',
  'reset-password',
  'employees/list',
  'employees/add',
  'employees/terminated',
  'employees/remove',
];

export const defaultEmployeeRoles = [
  'account/login',
  'account/verify',
  'account/profile',
  'cart/completed',
  'index',
  'tag',
  'reset-password',
];