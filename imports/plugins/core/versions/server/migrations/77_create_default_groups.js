import { Migrations } from "meteor/percolate:migrations";
import rawCollections from "/imports/collections/rawCollections";
import createNewGroup from "/imports/plugins/core/versions/server/util/createNewGroup";

Migrations.add({
  version: 77,
  up() {
    createNewGroup('Parnter', 'partner', [
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
    ]);
    createNewGroup('Supplier', 'supplier', [
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
    ]);
    createNewGroup('Company', 'company', [
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
    ]);
    createNewGroup('Employee', 'employee', [
      'account/login',
      'account/verify',
      'account/profile',
      'cart/completed',
      'index',
      'tag',
      'reset-password',
    ]);
  },
  down() {
    const { Groups } = rawCollections;
    Groups.deleteMany({
      slug: 'supplier'
    });
    Groups.deleteMany({
      slug: 'employee'
    });
    Groups.deleteMany({
      slug: 'partner'
    });
    Groups.deleteMany({
      slug: 'company'
    });
  }
});
