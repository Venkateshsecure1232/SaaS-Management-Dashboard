export const seedPlans = [
  { id: 'PL-001', name: 'Starter', price: 19, interval: 'month', users: 1, storage: '10 GB', features: 'Core analytics, Email support', color: '#7c8cff', active: true },
  { id: 'PL-002', name: 'Growth', price: 59, interval: 'month', users: 5, storage: '100 GB', features: 'Advanced analytics, Priority support', color: '#8b7cff', active: true },
  { id: 'PL-003', name: 'Business', price: 149, interval: 'month', users: 20, storage: '1 TB', features: 'Team insights, API access, SSO', color: '#31b89a', active: true },
  { id: 'PL-004', name: 'Enterprise', price: 399, interval: 'month', users: 100, storage: 'Unlimited', features: 'Custom onboarding, Dedicated support', color: '#f5a65b', active: true }
];
export const seedCustomers = [
  { id: 'CUS-1001', name: 'Olivia Rhye', email: 'olivia@acme.io', company: 'Acme Inc.', plan: 'Business', status: 'Active', joined: '2026-09-18', avatar: 'OR', usage: 78, mrr: 149 },
  { id: 'CUS-1002', name: 'Phoenix Baker', email: 'phoenix@orbit.io', company: 'Orbit Labs', plan: 'Growth', status: 'Active', joined: '2026-09-16', avatar: 'PB', usage: 54, mrr: 59 },
  { id: 'CUS-1003', name: 'Lana Steiner', email: 'lana@stack.co', company: 'Stack Co.', plan: 'Starter', status: 'Trial', joined: '2026-09-14', avatar: 'LS', usage: 22, mrr: 0 },
  { id: 'CUS-1004', name: 'Demi Wilkinson', email: 'demi@layers.com', company: 'Layers', plan: 'Business', status: 'Active', joined: '2026-09-11', avatar: 'DW', usage: 91, mrr: 149 },
  { id: 'CUS-1005', name: 'Candice Wu', email: 'candice@circooles.com', company: 'Circooles', plan: 'Growth', status: 'Past due', joined: '2026-09-08', avatar: 'CW', usage: 68, mrr: 59 },
  { id: 'CUS-1006', name: 'Natali Craig', email: 'natali@catalog.app', company: 'Catalog', plan: 'Enterprise', status: 'Active', joined: '2026-09-04', avatar: 'NC', usage: 43, mrr: 399 },
  { id: 'CUS-1007', name: 'Drew Cano', email: 'drew@quotient.co', company: 'Quotient', plan: 'Starter', status: 'Cancelled', joined: '2026-08-28', avatar: 'DC', usage: 11, mrr: 0 },
  { id: 'CUS-1008', name: 'Orlando Diggs', email: 'orlando@command.com', company: 'Command', plan: 'Growth', status: 'Active', joined: '2026-08-23', avatar: 'OD', usage: 82, mrr: 59 },
  { id: 'CUS-1009', name: 'Andi Lane', email: 'andi@converge.io', company: 'Converge', plan: 'Business', status: 'Trial', joined: '2026-08-19', avatar: 'AL', usage: 34, mrr: 0 },
  { id: 'CUS-1010', name: 'Kate Morrison', email: 'kate@synergy.com', company: 'Synergy', plan: 'Enterprise', status: 'Active', joined: '2026-08-12', avatar: 'KM', usage: 63, mrr: 399 },
  { id: 'CUS-1011', name: 'Elliot Stone', email: 'elliot@northstar.io', company: 'Northstar', plan: 'Growth', status: 'Past due', joined: '2026-08-09', avatar: 'ES', usage: 49, mrr: 59 },
  { id: 'CUS-1012', name: 'Riley Cooper', email: 'riley@bright.com', company: 'Bright', plan: 'Starter', status: 'Active', joined: '2026-08-01', avatar: 'RC', usage: 19, mrr: 19 }
];
export const revenueData = [
  { month: 'May', revenue: 18400, expenses: 7200 }, { month: 'Jun', revenue: 22100, expenses: 8100 },
  { month: 'Jul', revenue: 20700, expenses: 7600 }, { month: 'Aug', revenue: 26900, expenses: 9300 },
  { month: 'Sep', revenue: 31400, expenses: 10200 }, { month: 'Oct', revenue: 35200, expenses: 11600 }
];
export const usageData = [
  { day: 'Mon', api: 34, storage: 22 }, { day: 'Tue', api: 48, storage: 31 }, { day: 'Wed', api: 40, storage: 27 },
  { day: 'Thu', api: 66, storage: 38 }, { day: 'Fri', api: 57, storage: 42 }, { day: 'Sat', api: 73, storage: 46 }, { day: 'Sun', api: 62, storage: 51 }
];
