/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createSlice } from "@reduxjs/toolkit";

import { cacheUtil } from "../../../../utils/cacheUtil";
import { IUser } from "../../models/User.model";

export const EmptyUserState: IUser = {
	id: 0,
	name: "",
	email: "",
};

export const UserKey = "user";

const getUserLocalStorage = () => {
	return cacheUtil.get(UserKey) ? cacheUtil.get(UserKey) : EmptyUserState;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const persistLocalStorageUserState = (user: IUser) => {
	// Aqui solo debemos guardar datos no sensibles del usuario
	cacheUtil.set(UserKey, { ...user });
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const clearLocalStorageUser = () => {
	cacheUtil.remove(UserKey);
};

export const userSlice = createSlice({
	name: UserKey,
	initialState: getUserLocalStorage(),
	reducers: {
		createUser: (state, action) => {
			const user: IUser = action.payload as IUser;
			persistLocalStorageUserState(user);

			return user;
		},
		updateUser: (state, action) => {
			const user: IUser = action.payload as IUser;
			persistLocalStorageUserState(user);

			return { ...state, ...user };
		},
		resetUser: () => {
			clearLocalStorageUser();

			return EmptyUserState;
		},
	},
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
