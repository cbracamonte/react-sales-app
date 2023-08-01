import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route } from "react-router-dom";

import {
	LoginGuard,
	PrivateRoutes,
	PublicRoutes,
	RoleGuard,
	RoutesWithNotFound,
	Spinner,
	store,
} from "./shared";
import Logout from "./shared/components/Logout/Logout";
import { Roles } from "./shared/enums/roles.enum";

const Login = lazy(() => import("./modules/Login/pages/Login"));
const Dashboard = lazy(() => import("./modules/Dashboard/pages/Dashboard"));

function App() {
	return (
		<>
			<Suspense fallback={<Spinner></Spinner>}>
				<Provider store={store}>
					<BrowserRouter>
						<Logout />
						<RoutesWithNotFound>
							<Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
							<Route path={PublicRoutes.LOGIN} element={<Login />} />
							<Route element={<LoginGuard isPrivateRoute={true} />}>
								<Route path={`${PrivateRoutes.DASHBOARD}/*`} element={<Dashboard />} />
							</Route>
							<Route element={<RoleGuard rol={Roles.ADMIN} />}>
								<Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
							</Route>
						</RoutesWithNotFound>
					</BrowserRouter>
				</Provider>
			</Suspense>
		</>
	);
}

export default App;
