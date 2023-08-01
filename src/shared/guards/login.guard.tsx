import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { AppStore } from "../redux/store";
import { PrivateRoutes, PublicRoutes } from "../routes/routes";

interface Props {
	isPrivateRoute: boolean;
}

const PrivateValidation = <Outlet />;
const PublicValidation = <Navigate replace to={PrivateRoutes.DASHBOARD} />;

export const LoginGuard = ({ isPrivateRoute }: Props) => {
	const loginState = useSelector((store: AppStore) => store.user);

	return loginState.name ? (
		isPrivateRoute ? (
			PrivateValidation
		) : (
			PublicValidation
		)
	) : (
		<Navigate replace to={PublicRoutes.LOGIN} />
	);
};

export default LoginGuard;
