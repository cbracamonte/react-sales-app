/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable no-console */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { PrivateRoutes, PublicRoutes } from "../../../shared";
import { Roles } from "../../../shared/enums/roles.enum";
import { cacheUtil } from "../../../utils/cacheUtil";
import { createUser, resetUser, UserKey } from "../../User/redux/states/user";
import { getUser } from "../services/login.service";

function Login() {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
	const dispatchLogin = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		cacheUtil.remove(UserKey);
		dispatchLogin(resetUser());
		navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
	}, []);

	async function login() {
		try {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const result = await getUser();
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call
			dispatchLogin(createUser({ ...result, rol: Roles.ADMIN }));
			navigate(`/${PrivateRoutes.DASHBOARD}`, { replace: true });
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div>
			<h1>LOGIN</h1>
			<button onClick={login}>Login</button>
		</div>
	);
}

export default Login;
