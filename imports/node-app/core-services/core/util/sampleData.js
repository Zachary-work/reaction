export default {
  shops: [{
    _id: "J8Bhq3uTtdgwZx3rz",
    shopType: "primary",
    active: true,
    currencies: {
      HKD: {
        enabled: true,
        format: "%s%v",
        symbol: "HK$"
      }
    },
    currency: "HKD",
    defaultNavigationTreeId: "XyS5wksrr9gTQLN9i",
    emails: [
      { address: "admin@localhost", verified: true, provides: "default" }
    ],
    language: "en",
    languages: [
      {
        label: "中文(简体)",
        i18n: "zh",
        enabled: true
      }, {
        label: "English",
        i18n: "en",
        enabled: true
      }
    ],
    locales: {
      continents: {
        AF: "Africa",
        AN: "Antarctica",
        AS: "Asia",
        EU: "Europe",
        NA: "North America",
        OC: "Oceania",
        SA: "South America"
      },
      countries: {
        HK: {
          name: "Hong Kong",
          native: "香港",
          phone: "852",
          continent: "AS",
          capital: "City of Victoria",
          currency: "HKD",
          languages: "zh,en"
        }
      }
    },
    name: "AMAZ",
    timezone: "Asia/Hong_Kong",
    baseUOL: "in",
    unitsOfLength: [{
      uol: "in",
      label: "Inches",
      default: true
    }, {
      uol: "cm",
      label: "Centimeters"
    }, {
      uol: "ft",
      label: "Feet"
    }],
    baseUOM: "oz",
    unitsOfMeasure: [{
      uom: "oz",
      label: "Ounces",
      default: true
    }, {
      uom: "lb",
      label: "Pounds"
    }, {
      uom: "g",
      label: "Grams"
    }, {
      uom: "kg",
      label: "Kilograms"
    }],
    addressBook: [{
      company: "Reaction Commerce",
      fullName: "Ongo Works",
      address1: "2110 Main Street",
      address2: "Suite 207",
      city: "Santa Monica",
      region: "CA",
      postal: "90405",
      country: "US",
      phone: "8885551212",
      isCommercial: true,
      isShippingDefault: true,
      isBillingDefault: true
    }],
    defaultParcelSize: {
      weight: 128,
      length: 11.25,
      width: 8.75,
      height: 6
    },
    defaultSellerRoles: [
      "owner",
      "admin",
      "seller",
      "guest",
      "manage-users",
      "orders",
      "account/profile",
      "product",
      "createProduct",
      "product/admin",
      "tag",
      "index",
      "cart/completed"
    ],
    status: "active",
    domains: ["localhost"],
    defaultPaymentMethod: "none",
    paymentMethods: [],
    availablePaymentMethods: []
  }]
};
