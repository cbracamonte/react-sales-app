/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createSlice } from "@reduxjs/toolkit";

import { IUser } from "../../models/User.model";

export const EmptyUserState: IUser = {
	id: 0,
	name: "",
	email: "",
};

export const userSlice = createSlice({
	name: "user",
	initialState: EmptyUserState,
	reducers: {
		createUser: (state, action) => action.payload,
		updateUser: (state, action) => ({ ...state, ...action.payload }),
		resetUser: () => EmptyUserState,
	},
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
