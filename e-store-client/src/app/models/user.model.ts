import { Role } from "./role.model";

export class User {
    id!: string;
    firstName!: string;
    lastName!: string;
    username!: string;
    email!: string;
    roles!: [string];
    createdDate!: string;
    userRole!: string;
}