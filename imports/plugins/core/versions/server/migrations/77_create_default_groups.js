import { Migrations } from "meteor/percolate:migrations";
import rawCollections from "/imports/collections/rawCollections";
import createNewGroup from "/imports/plugins/core/versions/server/util/createNewGroup";

Migrations.add({
  version: 77,
  async up() {
    await createNewGroup('Parnter', 'partner', [
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
    await createNewGroup('Supplier', 'supplier', [
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
    await createNewGroup('Company', 'company', [
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
    ]);
    await createNewGroup('Employee', 'employee', [
      'account/login',
      'account/verify',
      'account/profile',
      'cart/completed',
      'index',
      'tag',
      'reset-password',
    ]);
  },
  async down() {
    const { Groups } = rawCollections;
    await Groups.deleteMany({
      slug: 'supplier'
    });
    await Groups.deleteMany({
      slug: 'employee'
    });
    await Groups.deleteMany({
      slug: 'partner'
    });
    await Groups.deleteMany({
      slug: 'company'
    });
  }
});
