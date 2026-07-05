import { Routes } from '@angular/router';
import { ROUTE_PATHS } from './core/constants/route.constants';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';
import { AuthLayout } from './layout/auth-layout/auth-layout';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
	{
		path: '',
		component: MainLayout,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: ROUTE_PATHS.home,
			},
			{
				path: ROUTE_PATHS.home,
				canActivate: [authGuard],
				loadChildren: () => import('./features/home/home.routes').then((routesModule) => routesModule.HOME_ROUTES),
			},
			{
				path: ROUTE_PATHS.doubts,
				canActivate: [authGuard],
				loadChildren: () => import('./features/doubts/doubts.routes').then((routesModule) => routesModule.DOUBTS_ROUTES),
			},
			{
				path: ROUTE_PATHS.solve,
				canActivate: [authGuard],
				loadChildren: () => import('./features/solve/solve.routes').then((routesModule) => routesModule.SOLVE_ROUTES),
			},
			{
				path: ROUTE_PATHS.profile,
				canActivate: [authGuard],
				loadChildren: () => import('./features/profile/profile.routes').then((routesModule) => routesModule.PROFILE_ROUTES),
			},
			{
				path: 'admin',
				canActivate: [roleGuard],
				data: {
					roles: ['ADMIN'],
				},
				loadChildren: () => import('./features/admin/admin.routes').then((routesModule) => routesModule.ADMIN_ROUTES),
			},
		],
	},
	{
		path: ROUTE_PATHS.auth,
		component: AuthLayout,
		loadChildren: () => import('./features/authentication/authentication.routes').then((routesModule) => routesModule.AUTHENTICATION_ROUTES),
	},
	{
		path: ROUTE_PATHS.notFound,
		loadChildren: () => import('./features/not-found/not-found.routes').then((routesModule) => routesModule.NOT_FOUND_ROUTES),
	},
];
