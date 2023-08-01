import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { resetUser, UserKey } from "../../../modules/User/redux/states/user";
import { cacheUtil } from "../../../utils/cacheUtil";
import { PublicRoutes } from "../../routes/routes";

function Logout() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const logOut = () => {
		cacheUtil.remove(UserKey);
		dispatch(resetUser());
		navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
	};

	return <button onClick={logOut}>Log Out</button>;
}

export default Logout;
