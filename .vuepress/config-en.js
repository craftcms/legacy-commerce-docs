module.exports = {
    selectText: 'Language',
    label: 'English',
    // text for the edit-on-github link
    editLinkText: 'Edit this page on GitHub',
    algolia: {
        apiKey: '335e88a34d1ab07e089b6a99b27c8e96',
        indexName: 'craftcms_commerce',
        algoliaOptions: {
            facetFilters: ['version:v3', 'tags:doc', 'tags:en'],
            hitsPerPage: 10
        }
    },
    sidebar: {
        '/': [
            {
                title: 'Introduction',
                collapsable: false,
                children: [
                    'editions',
                ]
            },
            {
                title: 'Installing Craft Commerce',
                collapsable: false,
                children: [
                    'requirements',
                    'installation',
                    'upgrading',
                ]
            },
            {
                title: 'Configuration',
                collapsable: false,
                children: [
                    'configuration',
                    'project-config'
                ]
            },
            {
                title: 'Core Concepts',
                collapsable: false,
                children: [
                    'cart',
                    'orders',
                    'products',
                    'product-types',
                    'donations',
                    'customers',
                    'sales',
                    'discounts',
                    'tax',
                    'shipping',
                    'custom-order-statuses',
                    'order-status-emails',
                    'payment-currencies',
                    'subscriptions',
                ]
            },
            {
                title: 'Payment Gateways',
                collapsable: false,
                children: [
                    'payment-gateways',
                    'gateway-config',
                ]
            },
            {
                title: 'Getting Elements',
                collapsable: false,
                children: [
                    'dev/element-queries/order-queries',
                    'dev/element-queries/product-queries',
                    'dev/element-queries/variant-queries',
                    'dev/element-queries/subscription-queries',
                    'craft-commerce-carts-cart',
                ]
            },
            {
                title: 'Developers',
                collapsable: false,
                children: [
                    'events',
                    'extensibility',
                    'purchasables',
                    'adjusters',
                    'shipping-methods',
                ]
            },
            {
                title: 'Template Guides',
                collapsable: false,
                children: [
                    'example-templates',
                    'commonly-used-variables',
                    'adding-to-and-updating-the-cart',
                    'estimate-cart-addresses',
                    'update-cart-addresses',
                    'update-cart-customer',
                    'coupon-codes',
                    'customer-address-management',
                    'twig-filters',
                    'loading-a-cart',
                    'making-payments',
                    'saving-payment-sources',
                    'subscription-templates',
                ]
            },
            {
                title: 'Fields',
                collapsable: false,
                children: [
                    'products-fields',
                ]
            },
        ]
    }
};
