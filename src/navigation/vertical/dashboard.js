export default [
  {
    title: 'Dashboard',
    icon: { icon: 'tabler-smart-home' },

    children: [
      {
        title: 'Analytics',
        to: 'dashboards-analytics',
      },
      {
        title: 'eCommerce',
        to: 'dashboards-ecommerce',
      },
      {
        title: 'CRM',
        to: 'dashboards-crm',
      },
    ],

    badgeContent: '2',
    badgeClass: 'bg-light-primary text-primary',
  },
]
