import { Navigate, Route } from "react-router-dom";

import { PrivateRoutes, RoutesWithNotFound } from "../../../shared";
import Home from "../../Home/pages/Home";
import Product from "../../Product/pages/Product";

function Dashboard() {
	return (
		<RoutesWithNotFound>
			<Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
			<Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
			<Route path={PrivateRoutes.HOME} element={<Home />} />
			<Route path={`${PrivateRoutes.HOME}/${PrivateRoutes.PRODUCT}`} element={<Product />} />
		</RoutesWithNotFound>
	);
}

export default Dashboard;
