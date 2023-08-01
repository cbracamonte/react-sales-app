import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { Roles } from "../enums/roles.enum";
import { AppStore } from "../redux/store";
import { PrivateRoutes } from "../routes/routes";

interface Props {
	rol: Roles;
}

function RolGuard({ rol }: Props) {
	const loginState = useSelector((store: AppStore) => store.user);

	return loginState.rol === rol ? <Outlet /> : <Navigate replace to={PrivateRoutes.DASHBOARD} />;
}

export default RolGuard;
