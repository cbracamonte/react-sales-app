import { Roles } from "../../../shared/enums/roles.enum";

export interface IUser {
	id: number;
	name: string;
	email: string;
	rol: Roles;
}
