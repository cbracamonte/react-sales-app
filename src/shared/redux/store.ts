import { configureStore } from "@reduxjs/toolkit";

import { IUser } from "../../modules/User/models/User.model";
import userSliceReducer from "../../modules/User/redux/states/user";

export interface AppStore {
	user: IUser;
}

export default configureStore<AppStore>({
	reducer: {
		user: userSliceReducer,
	},
});
