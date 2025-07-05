// Hard-coded routes, this application doesn't require routing.
const ROUTES = {
  HOME: '/dashboard',
  PATIENTS: '/',
  APPOINTMENTS: '/appointments',
  REPORTS: '/reports',
  SETTINGS: '/settings',
} as const;

export default ROUTES;