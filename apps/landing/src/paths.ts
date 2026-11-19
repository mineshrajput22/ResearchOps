/**
 * Client routes. Keep these in one place so links never drift from the router.
 */
export const paths = {
	landing: '/',
	workspaces: '/workspaces',
	/** Kept so links to the old landing URL keep working. */
	legacyLanding: '/landingPage',
} as const;

/** Served by the auth app, not a React route. */
export const loginUrl = '/login';
